// ClearDose - Reminders
// Every 30 seconds, ClearDose checks if it's time for a medicine
// or an appointment, and shows a pop-up (with a sound and a voice).
// If notifications are allowed, it also sends one to the phone or computer.
// Note: a website can only check while it's open (it can be in the background).

// Which reminders were already shown each day, so we don't repeat them
// Looks like: { "2026-10-25": ["morning-start", "appt-3-hour"] }
let remindersShown = {};

// When "Remind me in 10 minutes" was pressed
let snoozeUntil = 0;
let snoozeTime = "";

function loadRemindersShown() {
  const saved = localStorage.getItem("cleardoseReminders");
  if (saved) {
    remindersShown = JSON.parse(saved);
  }
}

function saveRemindersShown() {
  localStorage.setItem("cleardoseReminders", JSON.stringify(remindersShown));
}

function alreadyShown(name) {
  const today = todayText();
  return remindersShown[today] && remindersShown[today].includes(name);
}

function markShown(name) {
  const today = todayText();
  if (!remindersShown[today]) {
    remindersShown[today] = [];
  }
  remindersShown[today].push(name);
  saveRemindersShown();
}

// Starts checking (called once when the app opens)
function startReminders() {
  loadRemindersShown();

  // a small helper file that lets the phone show notifications
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").catch(function () {
      // it's okay if this doesn't work (for example when opened as a file)
    });
  }

  checkReminders();
  setInterval(checkReminders, 30000);   // 30000 milliseconds = 30 seconds
}

// The medicines for one time of day that are still not taken today
function dosesWaiting(time) {
  const today = todayText();
  const due = medicinesDueOn(today);
  let waiting = [];
  for (let i = 0; i < due.length; i++) {
    if (due[i].times.includes(time) && !wasTaken(today, due[i].id, time)) {
      waiting.push(due[i]);
    }
  }
  return waiting;
}

function checkReminders() {
  if (!settings.reminders) {
    return;
  }
  // don't stack pop-ups on top of each other
  if (!document.getElementById("reminderPopup").classList.contains("hidden")) {
    return;
  }

  const now = new Date();
  const hour = now.getHours();

  // 1. "Remind me in 10 minutes"
  if (snoozeUntil > 0 && Date.now() >= snoozeUntil) {
    snoozeUntil = 0;
    const waiting = dosesWaiting(snoozeTime);
    if (waiting.length > 0) {
      showMedicineReminder(snoozeTime, waiting, false);
      return;
    }
  }

  // 2. Medicines: once when the time starts, and once more if it was missed
  for (let i = 0; i < timesOfDay.length; i++) {
    const time = timesOfDay[i];
    const slot = timeSlots[time];

    if (hour >= slot.start && hour < slot.end && !alreadyShown(time + "-start")) {
      const waiting = dosesWaiting(time);
      if (waiting.length > 0) {
        markShown(time + "-start");
        showMedicineReminder(time, waiting, false);
        return;
      }
    }

    if (hour >= slot.end && hour < slot.end + 2 && !alreadyShown(time + "-late")) {
      const waiting = dosesWaiting(time);
      if (waiting.length > 0) {
        markShown(time + "-late");
        showMedicineReminder(time, waiting, true);
        return;
      }
    }
  }

  // 3. Appointments: the evening before, and 1 hour before
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  for (let i = 0; i < appointments.length; i++) {
    const appt = appointments[i];
    const parts = appt.time.split(":");
    const apptMoment = textToDate(appt.date);
    apptMoment.setHours(Number(parts[0]), Number(parts[1]));
    const minutesAway = (apptMoment.getTime() - now.getTime()) / 60000;

    if (minutesAway > 0 && minutesAway <= 60 && !alreadyShown("appt-" + appt.id + "-hour")) {
      markShown("appt-" + appt.id + "-hour");
      showAppointmentReminder(appt, t("appt_soon"));
      return;
    }

    if (appt.date === dateToText(tomorrow) && hour >= 18 && !alreadyShown("appt-" + appt.id + "-day")) {
      markShown("appt-" + appt.id + "-day");
      showAppointmentReminder(appt, t("appt_tomorrow"));
      return;
    }
  }
}

// ---------- The pop-up ----------

function openPopup(icon, title, bodyHtml, buttonsHtml) {
  document.getElementById("popupIcon").textContent = icon;
  document.getElementById("popupTitle").textContent = title;
  document.getElementById("popupBody").innerHTML = bodyHtml;
  document.getElementById("popupButtons").innerHTML = buttonsHtml;
  document.getElementById("reminderPopup").classList.remove("hidden");
}

function closePopup() {
  document.getElementById("reminderPopup").classList.add("hidden");
}

function showMedicineReminder(time, waiting, isLate) {
  let title = t("reminder_title", { slot: slotName(time) });
  if (isLate) {
    title = t("reminder_late", { slot: slotName(time) });
  }

  let body = '<p class="faded">' + slotRangeHtml(time) + '</p>';
  let spokenNames = "";
  for (let i = 0; i < waiting.length; i++) {
    const med = waiting[i];
    body = body + '<div class="popupMedicine">';
    body = body + '<span class="bold"><bdi>' + cleanText(med.name) + '</bdi></span>';
    body = body + '<span class="faded">' + t("take_amount", { amount: countText(med.count, getUnit(med)) }) + '</span>';
    body = body + '</div>';
    spokenNames = spokenNames + med.name + ", ";
  }

  let buttons = '<button class="bigButton" onclick="takeAllNow(\'' + time + '\')">' + t("took_them_all") + '</button>';
  buttons = buttons + '<button class="smallButton" onclick="snooze(\'' + time + '\')">' + t("snooze") + '</button>';
  buttons = buttons + '<button class="smallButton" onclick="closePopup()">' + t("close") + '</button>';

  openPopup("alarm", title, body, buttons);
  playChime();
  speak(title + ". " + spokenNames);
  sendNotification(title, spokenNames);
}

function showAppointmentReminder(appt, title) {
  const body = appointmentText(appt);
  const buttons = '<button class="bigButton" onclick="closePopup()">' + t("ok") + '</button>';
  openPopup("event", title, body, buttons);
  playChime();
  speak(title + ". " + appt.title + ", " + niceTime(appt.time));
  sendNotification(title, appt.title + " - " + niceTime(appt.time));
}

// "I took them all" in the pop-up
function takeAllNow(time) {
  const waiting = dosesWaiting(time);
  for (let i = 0; i < waiting.length; i++) {
    toggleDose(waiting[i].id, time);
  }
  closePopup();
  if (currentPage === "home") {
    showHome();
  }
}

// "Remind me in 10 minutes"
function snooze(time) {
  snoozeUntil = Date.now() + 10 * 60 * 1000;   // 10 minutes from now
  snoozeTime = time;
  closePopup();
  showToast(t("snoozed"));
}

// The "Test a reminder" button in Settings
function testReminder() {
  const due = medicinesDueOn(todayText());
  if (due.length === 0) {
    showToast(t("test_needs_medicine"));
    return;
  }
  // use the first time of day that has a medicine
  for (let i = 0; i < timesOfDay.length; i++) {
    let list = [];
    for (let j = 0; j < due.length; j++) {
      if (due[j].times.includes(timesOfDay[i])) {
        list.push(due[j]);
      }
    }
    if (list.length > 0) {
      showMedicineReminder(timesOfDay[i], list, false);
      return;
    }
  }
}

// A short, gentle "ding-ding" sound
function playChime() {
  try {
    const sound = new (window.AudioContext || window.webkitAudioContext)();
    const notes = [880, 660];   // two notes
    for (let i = 0; i < notes.length; i++) {
      const tone = sound.createOscillator();
      const volume = sound.createGain();
      tone.frequency.value = notes[i];
      volume.gain.value = 0.15;
      tone.connect(volume);
      volume.connect(sound.destination);
      tone.start(sound.currentTime + i * 0.25);
      tone.stop(sound.currentTime + i * 0.25 + 0.2);
    }
  } catch (error) {
    // some browsers block sound until the person taps the page; that's okay
  }
}

// ---------- Phone / computer notifications ----------

function notificationsSupported() {
  return "Notification" in window;
}

function askNotificationPermission() {
  if (!notificationsSupported()) {
    showNotificationStatus();
    return;
  }
  Notification.requestPermission().then(function () {
    showNotificationStatus();
  });
}

function showNotificationStatus() {
  const status = document.getElementById("notificationStatus");
  if (!notificationsSupported()) {
    status.textContent = t("notif_unsupported");
  } else if (Notification.permission === "granted") {
    status.textContent = t("notif_on");
  } else if (Notification.permission === "denied") {
    status.textContent = t("notif_blocked");
  } else {
    status.textContent = t("notif_off");
  }
}

function sendNotification(title, body) {
  if (!notificationsSupported() || Notification.permission !== "granted") {
    return;
  }
  // phones need the helper file (sw.js) to show notifications
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.getRegistration().then(function (helper) {
      if (helper) {
        helper.showNotification(title, { body: body, icon: "icon-192.png" });
      } else {
        plainNotification(title, body);
      }
    });
  } else {
    plainNotification(title, body);
  }
}

// The simple kind of notification (works on computers)
function plainNotification(title, body) {
  try {
    new Notification(title, { body: body, icon: "icon-192.png" });
  } catch (error) {
    // this browser only allows notifications through the helper file
  }
}
