// ClearDose - the main app file
// (It runs last, after all the other files have loaded)
// t("...") gets a word or sentence in the chosen language (see languages.js)

// =====================================================
// PART 1: SETTINGS
// =====================================================

// Starting settings (Merriweather and large text, like we picked)
let settings = {
  theme: "light",
  font: "serif",
  size: "large",
  contrast: false,
  name: "",
  language: "en",
  reminders: true
};

const themeSelect = document.getElementById("themeSelect");
const fontSelect = document.getElementById("fontSelect");
const sizeSelect = document.getElementById("sizeSelect");
const contrastBox = document.getElementById("contrastBox");
const nameInput = document.getElementById("nameInput");
const remindersBox = document.getElementById("remindersBox");

function loadSettings() {
  const saved = localStorage.getItem("cleardoseLook");
  if (saved) {
    // copy each saved setting over the starting ones
    // (so new settings we add later still get a starting value)
    const savedSettings = JSON.parse(saved);
    for (const key in savedSettings) {
      settings[key] = savedSettings[key];
    }
  }
}

function saveSettings() {
  localStorage.setItem("cleardoseLook", JSON.stringify(settings));
}

function applySettings() {
  const page = document.documentElement;
  page.setAttribute("data-theme", settings.theme);
  page.setAttribute("data-font", settings.font);
  page.setAttribute("data-size", settings.size);
  page.setAttribute("data-contrast", settings.contrast ? "high" : "normal");

  // language: Urdu and Arabic are read right-to-left
  page.setAttribute("lang", settings.language);
  page.setAttribute("dir", isRightToLeft() ? "rtl" : "ltr");
  translatePage();
  showLanguageButtons();
  fillTimeRanges();
  fillWeekdays();

  themeSelect.value = settings.theme;
  fontSelect.value = settings.font;
  sizeSelect.value = settings.size;
  contrastBox.checked = settings.contrast;
  nameInput.value = settings.name || "";
  remindersBox.checked = settings.reminders;
}

themeSelect.addEventListener("change", function () {
  settings.theme = themeSelect.value;
  saveSettings();
  applySettings();
});

fontSelect.addEventListener("change", function () {
  settings.font = fontSelect.value;
  saveSettings();
  applySettings();
});

sizeSelect.addEventListener("change", function () {
  settings.size = sizeSelect.value;
  saveSettings();
  applySettings();
});

contrastBox.addEventListener("change", function () {
  settings.contrast = contrastBox.checked;
  saveSettings();
  applySettings();
});

nameInput.addEventListener("input", function () {
  settings.name = nameInput.value;
  saveSettings();
});

remindersBox.addEventListener("change", function () {
  settings.reminders = remindersBox.checked;
  saveSettings();
});

// The language buttons on the Settings page
function showLanguageButtons() {
  let html = "";
  for (let i = 0; i < languages.length; i++) {
    const lang = languages[i];
    let buttonClass = "languageButton";
    if (lang.code === settings.language) {
      buttonClass = buttonClass + " active";
    }
    html = html + '<button class="' + buttonClass + '" onclick="setLanguage(\'' + lang.code + '\')">';
    html = html + '<span class="bold">' + lang.name + '</span>';
    html = html + '<span class="faded">' + lang.english + '</span>';
    html = html + '</button>';
  }
  document.getElementById("languageButtons").innerHTML = html;
}

function setLanguage(code) {
  settings.language = code;
  saveSettings();
  applySettings();
  showFormCount();
  showPage(currentPage);
}


// =====================================================
// PART 2: MEDICINES
// =====================================================

// The person's own medicines. They are saved in the browser.
// Each one looks like:
// { id: 1, name: "Metformin", dose: "500 mg", times: ["morning", "evening"],
//   count: 1, often: "daily", weekday: 0 }
//   count   = how many pills (or puffs, drops...) each time
//   often   = "daily", "weekly", or "asneeded"
//   weekday = for weekly medicines: 0 = Sunday, 1 = Monday ... 6 = Saturday
let medicines = [];

// Every new medicine gets the next number as its id
let nextId = 1;

function loadMedicines() {
  const saved = localStorage.getItem("cleardoseMedicines");
  if (saved) {
    medicines = JSON.parse(saved);
  }
  for (let i = 0; i < medicines.length; i++) {
    // medicines saved before we added these get the normal values
    if (!medicines[i].count) { medicines[i].count = 1; }
    if (!medicines[i].often) { medicines[i].often = "daily"; }

    // find the biggest id so new ones don't repeat it
    if (medicines[i].id >= nextId) {
      nextId = medicines[i].id + 1;
    }
  }
}

function saveMedicines() {
  localStorage.setItem("cleardoseMedicines", JSON.stringify(medicines));
}

// Finds one of the person's medicines by its id number
function findMyMedicine(medId) {
  for (let i = 0; i < medicines.length; i++) {
    if (medicines[i].id === medId) {
      return medicines[i];
    }
  }
  return null;
}

// Gets " - what it's for", or a blank if we don't know the medicine
function getUse(med) {
  const info = findMedicineInfo(med.name);
  if (info) {
    return " - " + medicineText(info, "use");
  }
  return "";
}

// What one dose is called: "pill", "puff", "drop"...
function getUnit(med) {
  const info = findMedicineInfo(med.name);
  if (info) {
    return info.unit;
  }
  return "pill";
}

// Turns a number and a unit into words, like "2 pills" or "1 puff"
function countText(count, unit) {
  return countTextIn(settings.language, count, unit);
}

// Makes typed text safe to show on the page
// (stops symbols like < > from breaking the page)
function cleanText(text) {
  return text.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

// Returns a copy of the medicine list in A to Z order
function sortByName(list) {
  const copy = list.slice();
  copy.sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });
  return copy;
}

// The four times of day, in order
const timesOfDay = ["morning", "noon", "evening", "bedtime"];

// The hours for each time of day (24-hour clock, so 17 = 5 PM)
const timeSlots = {
  morning: { start: 6,  end: 10 },
  noon:    { start: 11, end: 14 },
  evening: { start: 17, end: 20 },
  bedtime: { start: 21, end: 23 }
};

// The name of a time of day in the chosen language, like "Morning"
function slotName(time) {
  return t("slot_" + time);
}

// The hours of a time of day, like "6 AM – 10 AM"
function slotRange(time) {
  return formatHour(timeSlots[time].start) + " – " + formatHour(timeSlots[time].end);
}

// The same, wrapped in <bdi> so it shows the right way around
// inside right-to-left languages like Urdu and Arabic
function slotRangeHtml(time) {
  return "<bdi>" + slotRange(time) + "</bdi>";
}

// A medicine's dose and what it's for, like "500 mg - Controls blood sugar"
function doseAndUse(med) {
  return "<bdi>" + cleanText(med.dose) + "</bdi>" + getUse(med);
}

// Puts the hours next to each time-of-day checkbox in the form
function fillTimeRanges() {
  const spots = document.querySelectorAll(".rangeText");
  for (let i = 0; i < spots.length; i++) {
    spots[i].textContent = slotRange(spots[i].getAttribute("data-slot"));
  }
}

// The history remembers which doses were taken on each day.
// It looks like this:  { "2026-10-23": ["1-morning", "2-morning", "5-asneeded"] }
let history = {};

function loadHistory() {
  const saved = localStorage.getItem("cleardoseHistory");
  if (saved) {
    history = JSON.parse(saved);
  }
}

function saveHistory() {
  localStorage.setItem("cleardoseHistory", JSON.stringify(history));
}


// =====================================================
// PART 3: DATE HELPERS
// =====================================================

// Turns a date into text like "2026-10-23"
function dateToText(date) {
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  if (month < 10) { month = "0" + month; }
  if (day < 10) { day = "0" + day; }
  return year + "-" + month + "-" + day;
}

function todayText() {
  return dateToText(new Date());
}


// =====================================================
// PART 4: WHICH MEDICINES ARE DUE, AND TAKING A DOSE
// =====================================================

// Is this medicine supposed to be taken on this day?
function isScheduledOn(med, dayText) {
  if (med.often === "asneeded") {
    return false;                                    // only when needed: never "due"
  }
  if (med.often === "weekly") {
    return textToDate(dayText).getDay() === med.weekday;   // only on its day
  }
  return true;                                       // every day
}

// All the medicines that are due on a day
function medicinesDueOn(dayText) {
  let list = [];
  for (let i = 0; i < medicines.length; i++) {
    if (isScheduledOn(medicines[i], dayText)) {
      list.push(medicines[i]);
    }
  }
  return list;
}

// Checks if one dose was taken on a day
function wasTaken(day, medId, time) {
  if (!history[day]) {
    return false;
  }
  return history[day].includes(medId + "-" + time);
}

// Remembers the dose that was just tapped (so only that card does the "pop")
let lastTapped = "";

// Marks a dose as taken (or un-taken if they press Undo)
function toggleDose(medId, time) {
  lastTapped = medId + "-" + time;
  const day = todayText();
  const doseName = medId + "-" + time;

  if (!history[day]) {
    history[day] = [];
  }

  if (history[day].includes(doseName)) {
    // remove it (undo)
    history[day] = history[day].filter(function (item) {
      return item !== doseName;
    });
  } else {
    // add it
    history[day].push(doseName);
  }

  saveHistory();
  showHome();
}

// Counts how many doses are due on a day
function countAllDoses(day) {
  const due = medicinesDueOn(day);
  let total = 0;
  for (let i = 0; i < due.length; i++) {
    total = total + due[i].times.length;
  }
  return total;
}

// Counts how many of that day's doses were taken
function countTaken(day) {
  const due = medicinesDueOn(day);
  let taken = 0;
  for (let i = 0; i < due.length; i++) {
    for (let j = 0; j < due[i].times.length; j++) {
      if (wasTaken(day, due[i].id, due[i].times[j])) {
        taken = taken + 1;
      }
    }
  }
  return taken;
}

// True if every dose was taken that day
function allTaken(day) {
  const total = countAllDoses(day);
  return total > 0 && countTaken(day) === total;
}

// ---------- "Only when needed" medicines ----------

// How many times an "as needed" medicine was taken on a day
function countAsNeeded(day, medId) {
  if (!history[day]) {
    return 0;
  }
  let count = 0;
  for (let i = 0; i < history[day].length; i++) {
    if (history[day][i] === medId + "-asneeded") {
      count = count + 1;
    }
  }
  return count;
}

function logAsNeeded(medId) {
  const day = todayText();
  if (!history[day]) {
    history[day] = [];
  }
  history[day].push(medId + "-asneeded");
  saveHistory();
  showHome();
}

function undoAsNeeded(medId) {
  const day = todayText();
  if (!history[day]) {
    return;
  }
  const spot = history[day].lastIndexOf(medId + "-asneeded");
  if (spot !== -1) {
    history[day].splice(spot, 1);   // remove that one entry
  }
  saveHistory();
  showHome();
}


// =====================================================
// PART 5: STREAK
// =====================================================

// Counts days in a row where every medicine was taken
function getStreak() {
  const start = getStartDate();
  if (!start) {
    return 0;
  }

  let streak = 0;

  // Today only counts once everything is done
  if (allTaken(todayText())) {
    streak = 1;
  }

  // Then go back one day at a time, until the day they started
  const day = new Date();
  day.setDate(day.getDate() - 1);
  while (dateToText(day) >= start) {
    const dayText = dateToText(day);
    if (countAllDoses(dayText) === 0) {
      // nothing was due that day, so it doesn't count or break the streak
    } else if (allTaken(dayText)) {
      streak = streak + 1;
    } else {
      break;
    }
    day.setDate(day.getDate() - 1);
  }

  return streak;
}


// =====================================================
// PART 6: SHOWING THE HOME PAGE
// =====================================================

function showHome() {
  const today = todayText();

  // Greeting depends on the time of day
  const hour = new Date().getHours();
  let greeting = t("good_evening");
  if (hour < 12) {
    greeting = t("good_morning");
  } else if (hour < 17) {
    greeting = t("good_afternoon");
  }
  if (settings.name) {
    greeting = greeting + ", " + settings.name;
  }
  document.getElementById("greeting").textContent = greeting;

  // Today's date, written out in words
  const dateOptions = { weekday: "long", month: "long", day: "numeric" };
  document.getElementById("todayDate").textContent = new Date().toLocaleDateString(currentLocale(), dateOptions);

  showProgressRing();
  showStreak();
  showWeekChart();
  showChecklist();

  // Next appointment (from calendar.js)
  const nextAppt = getNextAppointment();
  if (nextAppt) {
    document.getElementById("nextAppointment").innerHTML = appointmentText(nextAppt);
  } else {
    document.getElementById("nextAppointment").innerHTML = '<p class="faded">' + t("no_appointments") + '</p>';
  }

  // Healthy habits summary (from healthy.js)
  document.getElementById("healthySummary").textContent = t("habits_done", { done: countHabits(today), total: habitsPerDay });
}

// ---------- The progress ring ----------
function showProgressRing() {
  const today = todayText();
  const total = countAllDoses(today);
  const taken = countTaken(today);

  let percent = 0;
  if (total > 0) {
    percent = taken / total;
  }

  // The ring is 327 long. Showing less "gap" fills more of the ring.
  const ring = document.getElementById("ringFill");
  ring.style.strokeDashoffset = 327 - (327 * percent);
  if (total > 0 && taken === total) {
    ring.classList.add("complete");
  } else {
    ring.classList.remove("complete");
  }

  document.getElementById("ringNumber").textContent = taken;
  document.getElementById("ringTotal").textContent = t("of_total", { total: total });

  // The words next to the ring
  if (medicines.length === 0) {
    document.getElementById("progressText").textContent = t("no_medicines_yet");
    document.getElementById("nextDoseText").textContent = t("add_to_start");
  } else if (total === 0) {
    document.getElementById("progressText").textContent = t("nothing_due");
    document.getElementById("nextDoseText").textContent = "";
  } else if (taken === total) {
    document.getElementById("progressText").textContent = t("all_done");
    document.getElementById("nextDoseText").textContent = t("see_you_tomorrow");
  } else {
    document.getElementById("progressText").textContent = t("doses_taken", { taken: taken, total: total });
    document.getElementById("nextDoseText").innerHTML = t("next_dose", { slot: getNextSlotText() });
  }
}

// Finds the first time of day that still has a dose to take
function getNextSlotText() {
  const today = todayText();
  const due = medicinesDueOn(today);
  for (let i = 0; i < timesOfDay.length; i++) {
    const time = timesOfDay[i];
    for (let j = 0; j < due.length; j++) {
      if (due[j].times.includes(time) && !wasTaken(today, due[j].id, time)) {
        return slotName(time) + ", " + slotRangeHtml(time);
      }
    }
  }
  return "";
}

// ---------- The streak and its 7 dots ----------
function showStreak() {
  const streak = getStreak();
  if (streak === 1) {
    document.getElementById("streakText").textContent = t("streak_one");
    document.getElementById("streakMessage").textContent = t("streak_one_message");
  } else if (streak > 1) {
    document.getElementById("streakText").textContent = t("streak_many", { days: streak });
    document.getElementById("streakMessage").textContent = t("streak_many_message");
  } else {
    document.getElementById("streakText").textContent = t("streak_start");
    document.getElementById("streakMessage").textContent = t("streak_start_message");
  }

  // one dot for each of the last 7 days
  let html = "";
  for (let i = 6; i >= 0; i--) {
    const day = new Date();
    day.setDate(day.getDate() - i);
    const dayText = dateToText(day);

    let dotClass = "dot";
    let inside = "";
    if (allTaken(dayText)) {
      dotClass = dotClass + " filled";
      inside = '<span class="material-symbols-outlined">check</span>';
    }
    if (i === 0) {
      dotClass = dotClass + " today";
    }

    html = html + '<div class="streakDay">';
    html = html + '<div class="' + dotClass + '">' + inside + '</div>';
    html = html + shortDayName(day);
    html = html + '</div>';
  }
  document.getElementById("streakDots").innerHTML = html;
}

// A short name for a day, like "M" for Monday (in the chosen language).
// Urdu and Arabic don't have one-letter day names, so we use the short name.
function shortDayName(date) {
  if (isRightToLeft()) {
    return date.toLocaleDateString(currentLocale(), { weekday: "short" });
  }
  return date.toLocaleDateString(currentLocale(), { weekday: "narrow" });
}

// ---------- The bar chart for the last 7 days ----------
function showWeekChart() {
  const start = getStartDate();
  let html = "";

  for (let i = 6; i >= 0; i--) {
    const day = new Date();
    day.setDate(day.getDate() - i);
    const dayText = dateToText(day);
    const total = countAllDoses(dayText);

    // how much of that day's medicine was taken (0 to 100)
    let percent = 0;
    let barClass = "bar";
    if (total === 0 || !start || dayText < start) {
      barClass = barClass + " empty";
    } else {
      percent = Math.round((countTaken(dayText) / total) * 100);
      if (percent < 100) {
        barClass = barClass + " partial";
      }
    }

    let labelClass = "barLabel";
    if (i === 0) {
      labelClass = labelClass + " isToday";
    }

    html = html + '<div class="barColumn">';
    html = html + '<span class="barValue">' + (barClass.includes("empty") ? "" : percent + "%") + '</span>';
    html = html + '<div class="' + barClass + '" style="height: ' + percent + '%"></div>';
    html = html + '<span class="' + labelClass + '">' + shortDayName(day) + '</span>';
    html = html + '</div>';
  }
  document.getElementById("weekChart").innerHTML = html;
}

// ---------- Today's medicine checklist ----------
function showChecklist() {
  const today = todayText();
  const hour = new Date().getHours();

  // If there are no medicines yet, show a friendly message
  if (medicines.length === 0) {
    let emptyHtml = '<div class="card emptyCard">';
    emptyHtml = emptyHtml + '<span class="material-symbols-outlined emptyIcon">medication</span>';
    emptyHtml = emptyHtml + '<p class="bold">' + t("add_first") + '</p>';
    emptyHtml = emptyHtml + '<button class="bigButton" onclick="showPage(\'medicines\')">' + t("go_to_medicines") + '</button>';
    emptyHtml = emptyHtml + '</div>';
    document.getElementById("medicineList").innerHTML = emptyHtml;
    return;
  }

  let html = "";
  const dueToday = sortByName(medicinesDueOn(today));

  for (let i = 0; i < timesOfDay.length; i++) {
    const time = timesOfDay[i];

    // find the medicines for this time
    let medsForThisTime = [];
    for (let j = 0; j < dueToday.length; j++) {
      if (dueToday[j].times.includes(time)) {
        medsForThisTime.push(dueToday[j]);
      }
    }

    // skip this time if there is nothing to take
    if (medsForThisTime.length === 0) {
      continue;
    }

    // is something from this time still not taken after the time is over?
    let late = false;
    for (let k = 0; k < medsForThisTime.length; k++) {
      if (hour >= timeSlots[time].end && !wasTaken(today, medsForThisTime[k].id, time)) {
        late = true;
      }
    }

    // the heading, like "Morning  6 AM – 10 AM"
    html = html + '<div class="slotHeader slot-' + time + '">';
    html = html + '<span class="slotBar"></span>';
    html = html + '<span class="slotName">' + slotName(time) + '</span>';
    html = html + '<span class="slotTime">' + slotRangeHtml(time) + '</span>';
    if (late) {
      html = html + '<span class="lateTag">' + t("late") + '</span>';
    }
    html = html + '</div>';

    // one card for each medicine
    for (let k = 0; k < medsForThisTime.length; k++) {
      const med = medsForThisTime[k];
      const done = wasTaken(today, med.id, time);

      let cardClass = "medicine slot-" + time;
      if (done) {
        cardClass = cardClass + " taken";
      }
      if (lastTapped === med.id + "-" + time) {
        cardClass = cardClass + " justTaken";
      }

      html = html + '<div class="' + cardClass + '">';
      html = html + '<div class="cardTop">';
      html = html + '<p class="medName"><bdi>' + cleanText(med.name) + '</bdi></p>';
      html = html + '<button class="speakButton" onclick="speakDose(' + med.id + ')" aria-label="' + t("listen") + '">';
      html = html + '<span class="material-symbols-outlined">volume_up</span></button>';
      html = html + '</div>';
      html = html + '<p class="faded">' + doseAndUse(med) + '</p>';

      // "Take 2 pills" (and a tag if it's a weekly medicine)
      html = html + '<p class="takeLine">' + t("take_amount", { amount: countText(med.count, getUnit(med)) });
      if (med.often === "weekly") {
        html = html + ' <span class="smallTag">' + t("weekly_tag") + '</span>';
      }
      html = html + '</p>';

      if (done) {
        html = html + '<div class="takenRow">';
        html = html + '<span><span class="material-symbols-outlined">check_circle</span> ' + t("taken") + '</span>';
        html = html + '<button class="undoButton" onclick="toggleDose(' + med.id + ', \'' + time + '\')">' + t("undo") + '</button>';
        html = html + '</div>';
      } else {
        html = html + '<button class="bigButton" onclick="toggleDose(' + med.id + ', \'' + time + '\')">';
        html = html + '<span class="material-symbols-outlined">check</span> ' + t("i_took_it") + '</button>';
      }

      html = html + '</div>';
    }
  }

  // "Only when needed" medicines go in their own section
  html = html + showAsNeededCards();

  // Weekly medicines that aren't due today
  if (dueToday.length === 0 && html === "") {
    html = '<div class="card"><p class="faded">' + t("nothing_due") + '</p></div>';
  }

  document.getElementById("medicineList").innerHTML = html;
  lastTapped = "";
}

// Cards for "only when needed" medicines
function showAsNeededCards() {
  const today = todayText();
  let html = "";
  const sortedMeds = sortByName(medicines);

  for (let i = 0; i < sortedMeds.length; i++) {
    const med = sortedMeds[i];
    if (med.often !== "asneeded") {
      continue;
    }
    if (html === "") {
      html = html + '<div class="slotHeader slot-asneeded"><span class="slotBar"></span>';
      html = html + '<span class="slotName">' + t("when_needed") + '</span></div>';
    }

    const timesTaken = countAsNeeded(today, med.id);

    html = html + '<div class="medicine slot-asneeded">';
    html = html + '<div class="cardTop">';
    html = html + '<p class="medName"><bdi>' + cleanText(med.name) + '</bdi></p>';
    html = html + '<button class="speakButton" onclick="speakDose(' + med.id + ')" aria-label="' + t("listen") + '">';
    html = html + '<span class="material-symbols-outlined">volume_up</span></button>';
    html = html + '</div>';
    html = html + '<p class="faded">' + doseAndUse(med) + '</p>';
    html = html + '<p class="takeLine">' + t("take_amount", { amount: countText(med.count, getUnit(med)) }) + '</p>';

    if (timesTaken > 0) {
      html = html + '<div class="takenRow">';
      html = html + '<span><span class="material-symbols-outlined">check_circle</span> ' + t("taken_times", { times: timesTaken }) + '</span>';
      html = html + '<button class="undoButton" onclick="undoAsNeeded(' + med.id + ')">' + t("undo") + '</button>';
      html = html + '</div>';
    }
    html = html + '<button class="smallButton" onclick="logAsNeeded(' + med.id + ')">';
    html = html + '<span class="material-symbols-outlined">add</span>' + t("i_took_one") + '</button>';
    html = html + '</div>';
  }
  return html;
}


// =====================================================
// PART 7: THE MEDICINES PAGE
// =====================================================

// Which medicine has its info open (0 means none)
let openInfoId = 0;

// The medicine that was just added (gets a "Just added" message)
let justAddedId = 0;

// Makes one info section, like "Common side effects"
function infoSection(icon, title, text) {
  let html = '<div class="infoBox">';
  html = html + '<p class="infoTitle"><span class="material-symbols-outlined">' + icon + '</span>' + title + '</p>';
  html = html + '<p>' + text + '</p>';
  html = html + '</div>';
  return html;
}

// Words for how often, like "Every day" or "Every Monday"
function oftenText(med) {
  if (med.often === "weekly") {
    return t("every_weekday", { day: weekdayName(med.weekday) });
  }
  if (med.often === "asneeded") {
    return t("often_asneeded");
  }
  return t("often_daily");
}

function showMedicinesPage() {
  let html = "";

  if (medicines.length === 0) {
    html = '<p class="faded">' + t("no_medicines_added") + '</p>';
  }

  const sortedMeds = sortByName(medicines);
  for (let i = 0; i < sortedMeds.length; i++) {
    const med = sortedMeds[i];
    const info = findMedicineInfo(med.name);
    const unit = getUnit(med);

    let cardClass = "medicine";
    if (med.id === justAddedId) {
      cardClass = cardClass + " justAdded";
    }

    html = html + '<div class="' + cardClass + '" id="med-' + med.id + '">';

    if (med.id === justAddedId) {
      html = html + '<p class="addedBanner"><span class="material-symbols-outlined">check_circle</span>' + t("added_banner") + '</p>';
    }

    html = html + '<div class="cardTop">';
    html = html + '<p class="medName"><bdi>' + cleanText(med.name) + '</bdi></p>';
    html = html + '<button class="speakButton" onclick="speakMedicine(' + med.id + ')" aria-label="' + t("listen") + '">';
    html = html + '<span class="material-symbols-outlined">volume_up</span></button>';
    html = html + '</div>';
    html = html + '<p class="faded">' + doseAndUse(med) + '</p>';

    // how many each time, with - and + buttons
    html = html + '<div class="counter smallCounter">';
    html = html + '<button class="counterButton" onclick="changeMedicineCount(' + med.id + ', -1)" aria-label="Less"><span class="material-symbols-outlined">remove</span></button>';
    html = html + '<span class="counterNumber">' + med.count + '</span>';
    html = html + '<button class="counterButton" onclick="changeMedicineCount(' + med.id + ', 1)" aria-label="More"><span class="material-symbols-outlined">add</span></button>';
    html = html + '<span class="counterUnit">' + (med.count === 1 ? t("unit_" + unit + "_one") : t("unit_" + unit + "_many")) + ' ' + t("each_time") + '</span>';
    html = html + '</div>';

    // how often, and the times as colored chips
    html = html + '<span class="chip slot-asneeded">' + oftenText(med) + '</span>';
    for (let j = 0; j < med.times.length; j++) {
      const time = med.times[j];
      html = html + '<span class="chip slot-' + time + '">' + slotName(time) + ' · ' + slotRangeHtml(time) + '</span>';
    }

    // the info sections (only shown when opened)
    if (openInfoId === med.id) {
      if (info) {
        if (!hasTranslation(info)) {
          html = html + '<p class="faded smallText">' + t("english_only") + '</p>';
        }
        if (info.supplement) {
          html = html + '<p class="notice smallText"><span class="material-symbols-outlined">info</span><span>' + t("supplement_note") + '</span></p>';
        }
        html = html + infoSection("help", t("info_helps"), medicineText(info, "helps"));
        html = html + infoSection("schedule", t("info_how"), medicineText(info, "how") + ' <span class="faded">' + t("follow_label") + '</span>');
        html = html + infoSection("sick", t("info_side"), medicineText(info, "sideEffects"));
        html = html + infoSection("warning", t("info_precautions"), medicineText(info, "precautions"));
        html = html + '<p class="faded smallText">' + t("summary_note") + '</p>';
      } else {
        html = html + '<p class="faded">' + t("no_info") + '</p>';
      }
    }

    if (openInfoId === med.id) {
      html = html + '<button class="smallButton" onclick="toggleInfo(' + med.id + ')"><span class="material-symbols-outlined">expand_less</span>' + t("hide_info") + '</button>';
    } else {
      html = html + '<button class="smallButton" onclick="toggleInfo(' + med.id + ')"><span class="material-symbols-outlined">info</span>' + t("more_info") + '</button>';
    }
    html = html + '<button class="smallButton" onclick="speakMedicine(' + med.id + ')"><span class="material-symbols-outlined">volume_up</span>' + t("listen") + '</button>';
    html = html + '<button class="smallButton removeButton" onclick="removeMedicine(' + med.id + ')"><span class="material-symbols-outlined">delete</span>' + t("remove") + '</button>';
    html = html + '</div>';
  }

  document.getElementById("myMedicines").innerHTML = html;
}

// Opens or closes the info for one medicine
function toggleInfo(medId) {
  if (openInfoId === medId) {
    openInfoId = 0;
  } else {
    openInfoId = medId;
  }
  justAddedId = 0;
  showMedicinesPage();
}

// The - and + buttons on a medicine card
function changeMedicineCount(medId, change) {
  const med = findMyMedicine(medId);
  if (!med) {
    return;
  }
  med.count = med.count + change;
  if (med.count < 1) { med.count = 1; }     // never less than 1
  if (med.count > 20) { med.count = 20; }   // and not silly-big
  saveMedicines();
  showMedicinesPage();
}

// Removes a medicine (after asking first)
function removeMedicine(medId) {
  const sure = confirm(t("confirm_remove"));
  if (!sure) {
    return;
  }
  medicines = medicines.filter(function (med) {
    return med.id !== medId;
  });
  saveMedicines();
  showMedicinesPage();
}


// =====================================================
// PART 8: THE "ADD A MEDICINE" FORM
// =====================================================

const medicineName = document.getElementById("medicineName");
const doseInput = document.getElementById("doseInput");
const knownMessage = document.getElementById("knownMessage");
const formMessage = document.getElementById("formMessage");
const oftenSelect = document.getElementById("oftenSelect");
const weekdaySelect = document.getElementById("weekdaySelect");

// The number on the form's counter, and what one dose is called
let formCount = 1;
let formUnit = "pill";

// Put every medicine from the library into the typing suggestions
function fillSuggestions() {
  let html = "";
  for (let i = 0; i < medicineLibrary.length; i++) {
    html = html + '<option value="' + medicineLibrary[i].name + '">';
  }
  document.getElementById("medicineSuggestions").innerHTML = html;
}

// The name of a day of the week (0 = Sunday) in the chosen language
function weekdayName(number) {
  // January 4, 2026 was a Sunday, so add "number" days to it
  const day = new Date(2026, 0, 4 + number);
  return day.toLocaleDateString(currentLocale(), { weekday: "long" });
}

// Fills the "Which day?" menu with Sunday to Saturday
function fillWeekdays() {
  const chosen = weekdaySelect.value;
  let html = "";
  for (let i = 0; i < 7; i++) {
    html = html + '<option value="' + i + '">' + weekdayName(i) + '</option>';
  }
  weekdaySelect.innerHTML = html;
  weekdaySelect.value = chosen || new Date().getDay();
}

// Checks or un-checks the time boxes
function setTimeBoxes(times) {
  const boxes = document.querySelectorAll(".timeBox");
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].checked = times.includes(boxes[i].value);
  }
}

// The form's - and + buttons
function changeFormCount(change) {
  formCount = formCount + change;
  if (formCount < 1) { formCount = 1; }
  if (formCount > 20) { formCount = 20; }
  showFormCount();
}

function showFormCount() {
  document.getElementById("countNumber").textContent = formCount;
  if (formCount === 1) {
    document.getElementById("countUnit").textContent = t("unit_" + formUnit + "_one");
  } else {
    document.getElementById("countUnit").textContent = t("unit_" + formUnit + "_many");
  }
}

// Shows or hides "Which day?" and the times, depending on "How often?"
function showOftenChoices() {
  if (oftenSelect.value === "weekly") {
    document.getElementById("weekdayBox").classList.remove("hidden");
  } else {
    document.getElementById("weekdayBox").classList.add("hidden");
  }

  if (oftenSelect.value === "asneeded") {
    document.getElementById("timesBox").classList.add("hidden");
  } else {
    document.getElementById("timesBox").classList.remove("hidden");
  }
}

oftenSelect.addEventListener("change", showOftenChoices);

// Checks if we know the typed medicine, and fills in the usual choices
function checkKnownMedicine() {
  formMessage.textContent = "";
  const info = findMedicineInfo(medicineName.value);

  if (info) {
    knownMessage.textContent = t("known_medicine", { name: info.name });
    doseInput.value = info.dose;
    setTimeBoxes(info.times);
    oftenSelect.value = info.often;
    formUnit = info.unit;
    formCount = info.count || 1;   // most medicines are 1 each time
  } else {
    knownMessage.textContent = "";
    formUnit = "pill";
  }
  showOftenChoices();
  showFormCount();
}

// Every time they type a letter, check again
medicineName.addEventListener("input", checkKnownMedicine);

// Save button
document.getElementById("saveMedicineButton").addEventListener("click", function () {
  // 1. Work out the name (use the library spelling if we know it)
  let name = medicineName.value.trim();
  const info = findMedicineInfo(name);
  if (info) {
    name = info.name;
  }

  // 2. Work out which times are checked
  let times = [];
  if (oftenSelect.value !== "asneeded") {
    const boxes = document.querySelectorAll(".timeBox");
    for (let i = 0; i < boxes.length; i++) {
      if (boxes[i].checked) {
        times.push(boxes[i].value);
      }
    }
  }

  // 3. Make sure the form is filled in
  if (name === "") {
    formMessage.textContent = t("need_name");
    return;
  }
  if (oftenSelect.value !== "asneeded" && times.length === 0) {
    formMessage.textContent = t("need_time");
    return;
  }

  // 4. Add it to the list and save
  const newMedicine = {
    id: nextId,
    name: name,
    dose: doseInput.value.trim(),
    times: times,
    count: formCount,
    often: oftenSelect.value
  };
  if (oftenSelect.value === "weekly") {
    newMedicine.weekday = Number(weekdaySelect.value);
  }
  medicines.push(newMedicine);
  nextId = nextId + 1;
  saveMedicines();
  setStartDateIfMissing();

  // 5. Clear the form
  medicineName.value = "";
  doseInput.value = "";
  knownMessage.textContent = "";
  formMessage.textContent = "";
  setTimeBoxes([]);
  oftenSelect.value = "daily";
  formCount = 1;
  formUnit = "pill";
  showFormCount();
  showOftenChoices();
  document.getElementById("scanStatus").textContent = "";
  document.getElementById("scanPreview").classList.add("hidden");
  document.getElementById("scanTextBox").classList.add("hidden");

  // 6. Show the new medicine with its information open
  openInfoId = newMedicine.id;
  justAddedId = newMedicine.id;
  showMedicinesPage();
  document.getElementById("med-" + newMedicine.id).scrollIntoView({ behavior: "smooth", block: "start" });
});


// =====================================================
// PART 9: SAMPLE PATIENT (for practice and the demo)
// =====================================================

function loadSampleData() {
  const sure = confirm(t("confirm_sample"));
  if (!sure) {
    return;
  }

  // 1. Sample medicines: name, how many, how often
  const samples = [
    { name: "Aspirin", count: 1, often: "daily" },
    { name: "Atorvastatin", count: 1, often: "daily" },
    { name: "Fish Oil", count: 2, often: "daily" },
    { name: "Lisinopril", count: 1, often: "daily" },
    { name: "Metformin", count: 1, often: "daily" },
    { name: "Albuterol", count: 2, often: "asneeded" }
  ];
  medicines = [];
  nextId = 1;
  for (let i = 0; i < samples.length; i++) {
    const info = findMedicineInfo(samples[i].name);
    let times = info.times;
    if (samples[i].often === "asneeded") {
      times = [];
    }
    medicines.push({
      id: nextId,
      name: info.name,
      dose: info.dose,
      times: times,
      count: samples[i].count,
      often: samples[i].often
    });
    nextId = nextId + 1;
  }
  saveMedicines();

  // 2. Pretend they used the app for the last 6 days
  //    (so the calendar and streak have something to show)
  const start = new Date();
  start.setDate(start.getDate() - 6);
  localStorage.setItem("cleardoseStart", dateToText(start));

  history = {};
  habitHistory = {};
  for (let d = 1; d <= 6; d++) {
    const day = new Date();
    day.setDate(day.getDate() - d);
    const dayText = dateToText(day);

    history[dayText] = [];
    const due = medicinesDueOn(dayText);
    for (let i = 0; i < due.length; i++) {
      for (let j = 0; j < due[i].times.length; j++) {
        history[dayText].push(due[i].id + "-" + due[i].times[j]);
      }
    }
    if (d === 3) {
      history[dayText].pop();   // one missed dose, 3 days ago
    }

    // mark the first 3 of that day's habits as done
    const dayHabits = getHabitsForDay(dayText);
    habitHistory[dayText] = [dayHabits[0].key, dayHabits[1].key, dayHabits[2].key];
  }
  saveHistory();
  saveHabits();

  // 3. Two sample appointments
  const soon = new Date();
  soon.setDate(soon.getDate() + 2);
  const later = new Date();
  later.setDate(later.getDate() + 9);
  appointments = [
    { id: 1, title: "Dr. Patel - heart check-up", date: dateToText(soon), time: "10:30", place: "2000 Mowry Ave, Fremont, CA" },
    { id: 2, title: "Pharmacy - pick up refills", date: dateToText(later), time: "14:00", place: "CVS Pharmacy, 39200 Fremont Blvd, Fremont, CA" }
  ];
  nextAppointmentId = 3;
  saveAppointments();

  // 4. Name
  settings.name = "Mrs. Khan";
  saveSettings();
  applySettings();

  showPage("home");
}


// =====================================================
// PART 10: SWITCHING PAGES
// =====================================================

const pageNames = ["home", "medicines", "ask", "calendar", "healthy", "settings"];
let currentPage = "home";

function showPage(pageName) {
  currentPage = pageName;

  // hide every page and un-highlight every menu button
  for (let i = 0; i < pageNames.length; i++) {
    document.getElementById(pageNames[i] + "Page").classList.add("hidden");
    document.getElementById(pageNames[i] + "Nav").classList.remove("active");
  }

  // show the page we want and highlight its button
  document.getElementById(pageName + "Page").classList.remove("hidden");
  document.getElementById(pageName + "Nav").classList.add("active");

  // fill in the page
  if (pageName === "home") {
    showHome();
  } else if (pageName === "medicines") {
    showMedicinesPage();
  } else if (pageName === "ask") {
    showChat();
  } else if (pageName === "calendar") {
    showCalendar();
  } else if (pageName === "healthy") {
    showHealthy();
  } else if (pageName === "settings") {
    showNotificationStatus();
  }

  window.scrollTo(0, 0);
}


// =====================================================
// START UP
// =====================================================
loadSettings();
loadHistory();
loadMedicines();
loadAppointments();
loadHabits();
applySettings();
fillSuggestions();
showFormCount();
showOftenChoices();
showPage("home");
startReminders();
