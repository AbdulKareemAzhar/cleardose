// ClearDose - the main app file
// (It runs last, after medicines.js, calendar.js and healthy.js)

// =====================================================
// PART 1: LOOK AND FEEL SETTINGS
// =====================================================

// Starting settings (Merriweather and large text, like we picked)
let settings = {
  theme: "light",
  font: "serif",
  size: "large",
  contrast: false,
  name: ""
};

const themeSelect = document.getElementById("themeSelect");
const fontSelect = document.getElementById("fontSelect");
const sizeSelect = document.getElementById("sizeSelect");
const contrastBox = document.getElementById("contrastBox");
const nameInput = document.getElementById("nameInput");

function loadSettings() {
  const saved = localStorage.getItem("cleardoseLook");
  if (saved) {
    settings = JSON.parse(saved);
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

  themeSelect.value = settings.theme;
  fontSelect.value = settings.font;
  sizeSelect.value = settings.size;
  contrastBox.checked = settings.contrast;
  nameInput.value = settings.name || "";
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
  showHome();
});


// =====================================================
// PART 2: MEDICINES
// =====================================================

// The person's own medicines. They are saved in the browser.
// Each one looks like:
// { id: 1, name: "Metformin", dose: "500 mg", times: ["morning", "evening"] }
let medicines = [];

// Every new medicine gets the next number as its id
let nextId = 1;

function loadMedicines() {
  const saved = localStorage.getItem("cleardoseMedicines");
  if (saved) {
    medicines = JSON.parse(saved);
  }
  // find the biggest id so new ones don't repeat it
  for (let i = 0; i < medicines.length; i++) {
    if (medicines[i].id >= nextId) {
      nextId = medicines[i].id + 1;
    }
  }
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

function saveMedicines() {
  localStorage.setItem("cleardoseMedicines", JSON.stringify(medicines));
}

// Gets " - what it's for", or a blank if we don't know the medicine
function getUse(med) {
  const info = findMedicineInfo(med.name);
  if (info) {
    return " - " + info.use;
  }
  return "";
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

// Name and hours for each time of day.
// start and end are hours on a 24-hour clock (17 = 5 PM).
const timeSlots = {
  morning: { name: "Morning", start: 6,  end: 10, range: "6 – 10 AM" },
  noon:    { name: "Midday",  start: 11, end: 14, range: "11 AM – 2 PM" },
  evening: { name: "Evening", start: 17, end: 20, range: "5 – 8 PM" },
  bedtime: { name: "Bedtime", start: 21, end: 23, range: "9 – 11 PM" }
};

// The history remembers which doses were taken on each day.
// It looks like this:  { "2026-10-23": ["1-morning", "2-morning"] }
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
// PART 4: TAKING A DOSE
// =====================================================

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

// Counts how many doses there are in one day
function countAllDoses() {
  let total = 0;
  for (let i = 0; i < medicines.length; i++) {
    total = total + medicines[i].times.length;
  }
  return total;
}

// Counts how many doses were taken on a day
function countTaken(day) {
  let taken = 0;
  for (let i = 0; i < medicines.length; i++) {
    const med = medicines[i];
    for (let j = 0; j < med.times.length; j++) {
      if (wasTaken(day, med.id, med.times[j])) {
        taken = taken + 1;
      }
    }
  }
  return taken;
}

// True if every dose was taken that day
function allTaken(day) {
  const total = countAllDoses();
  return total > 0 && countTaken(day) === total;
}


// =====================================================
// PART 5: STREAK
// =====================================================

// Counts days in a row where every medicine was taken
function getStreak() {
  let streak = 0;
  const day = new Date();

  // Today only counts once everything is done
  if (allTaken(dateToText(day))) {
    streak = 1;
  }

  // Then go back one day at a time
  day.setDate(day.getDate() - 1);
  while (allTaken(dateToText(day))) {
    streak = streak + 1;
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
  let greeting = "Good evening";
  if (hour < 12) {
    greeting = "Good morning";
  } else if (hour < 17) {
    greeting = "Good afternoon";
  }
  if (settings.name) {
    greeting = greeting + ", " + settings.name;
  }
  document.getElementById("greeting").textContent = greeting;

  // Today's date, written out in words
  const dateOptions = { weekday: "long", month: "long", day: "numeric" };
  document.getElementById("todayDate").textContent = new Date().toLocaleDateString("en-US", dateOptions);

  showProgressRing();
  showStreak();
  showWeekChart();
  showChecklist();

  // Next appointment (from calendar.js)
  const nextAppt = getNextAppointment();
  if (nextAppt) {
    document.getElementById("nextAppointment").innerHTML =
      '<p class="bold">' + cleanText(nextAppt.title) + '</p>' +
      '<p class="faded">' + niceDate(nextAppt.date) + ' at ' + niceTime(nextAppt.time) + '</p>';
  } else {
    document.getElementById("nextAppointment").innerHTML = '<p class="faded">No upcoming appointments.</p>';
  }

  // Healthy habits summary (from healthy.js)
  document.getElementById("healthySummary").textContent = countHabits(today) + " of " + habitsPerDay + " habits done today";
}

// ---------- The progress ring ----------
function showProgressRing() {
  const today = todayText();
  const total = countAllDoses();
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
  document.getElementById("ringTotal").textContent = "of " + total;

  // The words next to the ring
  if (total === 0) {
    document.getElementById("progressText").textContent = "No medicines yet";
    document.getElementById("nextDoseText").textContent = "Add your medicines to get started.";
  } else if (taken === total) {
    document.getElementById("progressText").textContent = "All done for today!";
    document.getElementById("nextDoseText").textContent = "Great job. See you tomorrow.";
  } else {
    document.getElementById("progressText").textContent = taken + " of " + total + " doses taken";
    document.getElementById("nextDoseText").textContent = "Next: " + getNextSlotText();
  }
}

// Finds the first time of day that still has a dose to take
function getNextSlotText() {
  const today = todayText();
  for (let i = 0; i < timesOfDay.length; i++) {
    const time = timesOfDay[i];
    for (let j = 0; j < medicines.length; j++) {
      if (medicines[j].times.includes(time) && !wasTaken(today, medicines[j].id, time)) {
        return timeSlots[time].name + ", " + timeSlots[time].range;
      }
    }
  }
  return "";
}

// ---------- The streak and its 7 dots ----------
function showStreak() {
  const streak = getStreak();
  if (streak === 1) {
    document.getElementById("streakText").textContent = "1-day streak";
    document.getElementById("streakMessage").textContent = "Great start. Keep it going tomorrow!";
  } else if (streak > 1) {
    document.getElementById("streakText").textContent = streak + "-day streak";
    document.getElementById("streakMessage").textContent = "Keep it going. You're doing great!";
  } else {
    document.getElementById("streakText").textContent = "Start your streak today";
    document.getElementById("streakMessage").textContent = "Take all your medicines today to begin.";
  }

  // one dot for each of the last 7 days
  const letters = ["S", "M", "T", "W", "T", "F", "S"];
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
    html = html + letters[day.getDay()];
    html = html + '</div>';
  }
  document.getElementById("streakDots").innerHTML = html;
}

// ---------- The bar chart for the last 7 days ----------
function showWeekChart() {
  const letters = ["S", "M", "T", "W", "T", "F", "S"];
  const total = countAllDoses();
  const start = getStartDate();
  let html = "";

  for (let i = 6; i >= 0; i--) {
    const day = new Date();
    day.setDate(day.getDate() - i);
    const dayText = dateToText(day);

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
    html = html + '<span class="' + labelClass + '">' + letters[day.getDay()] + '</span>';
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
    emptyHtml = emptyHtml + '<p class="bold">Add your first medicine</p>';
    emptyHtml = emptyHtml + '<button class="bigButton" onclick="showPage(\'medicines\')">Go to Medicines</button>';
    emptyHtml = emptyHtml + '</div>';
    document.getElementById("medicineList").innerHTML = emptyHtml;
    return;
  }

  let html = "";
  const sortedMeds = sortByName(medicines);

  for (let i = 0; i < timesOfDay.length; i++) {
    const time = timesOfDay[i];
    const slot = timeSlots[time];

    // find the medicines for this time
    let medsForThisTime = [];
    for (let j = 0; j < sortedMeds.length; j++) {
      if (sortedMeds[j].times.includes(time)) {
        medsForThisTime.push(sortedMeds[j]);
      }
    }

    // skip this time if there is nothing to take
    if (medsForThisTime.length === 0) {
      continue;
    }

    // is something from this time still not taken after the time is over?
    let late = false;
    for (let k = 0; k < medsForThisTime.length; k++) {
      if (hour >= slot.end && !wasTaken(today, medsForThisTime[k].id, time)) {
        late = true;
      }
    }

    // the heading, like "Morning  6 – 10 AM"
    html = html + '<div class="slotHeader slot-' + time + '">';
    html = html + '<span class="slotBar"></span>';
    html = html + '<span class="slotName">' + slot.name + '</span>';
    html = html + '<span class="slotTime">' + slot.range + '</span>';
    if (late) {
      html = html + '<span class="lateTag">LATE</span>';
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
      html = html + '<p class="medName">' + cleanText(med.name) + '</p>';
      html = html + '<button class="speakButton" onclick="speakDose(' + med.id + ')" aria-label="Read aloud">';
      html = html + '<span class="material-symbols-outlined">volume_up</span></button>';
      html = html + '</div>';
      html = html + '<p class="faded">' + cleanText(med.dose) + getUse(med) + '</p>';

      if (done) {
        html = html + '<div class="takenRow">';
        html = html + '<span><span class="material-symbols-outlined">check_circle</span> Taken</span>';
        html = html + '<button class="undoButton" onclick="toggleDose(' + med.id + ', \'' + time + '\')">Undo</button>';
        html = html + '</div>';
      } else {
        html = html + '<button class="bigButton" onclick="toggleDose(' + med.id + ', \'' + time + '\')">';
        html = html + '<span class="material-symbols-outlined">check</span> I took it</button>';
      }

      html = html + '</div>';
    }
  }

  document.getElementById("medicineList").innerHTML = html;
  lastTapped = "";
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

function showMedicinesPage() {
  let html = "";

  if (medicines.length === 0) {
    html = '<p class="faded">You have not added any medicines yet.</p>';
  }

  const sortedMeds = sortByName(medicines);
  for (let i = 0; i < sortedMeds.length; i++) {
    const med = sortedMeds[i];
    const info = findMedicineInfo(med.name);

    let cardClass = "medicine";
    if (med.id === justAddedId) {
      cardClass = cardClass + " justAdded";
    }

    html = html + '<div class="' + cardClass + '" id="med-' + med.id + '">';

    if (med.id === justAddedId) {
      html = html + '<p class="addedBanner"><span class="material-symbols-outlined">check_circle</span>Added! Here is what to know.</p>';
    }

    html = html + '<div class="cardTop">';
    html = html + '<p class="medName">' + cleanText(med.name) + '</p>';
    html = html + '<button class="speakButton" onclick="speakMedicine(' + med.id + ')" aria-label="Read aloud">';
    html = html + '<span class="material-symbols-outlined">volume_up</span></button>';
    html = html + '</div>';
    html = html + '<p class="faded">' + cleanText(med.dose) + getUse(med) + '</p>';

    // the times, shown as colored chips like "Morning 6 – 10 AM"
    for (let j = 0; j < med.times.length; j++) {
      const time = med.times[j];
      html = html + '<span class="chip slot-' + time + '">' + timeSlots[time].name + ' · ' + timeSlots[time].range + '</span>';
    }

    // the info sections (only shown when opened)
    if (openInfoId === med.id) {
      if (info) {
        html = html + infoSection("help", "What it is used for", info.helps);
        html = html + infoSection("schedule", "How to take it", info.how + ' <span class="faded">(Follow your label if it says something different.)</span>');
        html = html + infoSection("sick", "Common side effects", info.sideEffects);
        html = html + infoSection("warning", "Precautions", info.precautions);
        html = html + '<p class="faded smallText">This is a simple summary. Always follow your label and your doctor.</p>';
      } else {
        html = html + '<p class="faded">ClearDose does not have information about this medicine yet. Ask your pharmacist what it is for and how to take it.</p>';
      }
    }

    if (openInfoId === med.id) {
      html = html + '<button class="smallButton" onclick="toggleInfo(' + med.id + ')"><span class="material-symbols-outlined">expand_less</span>Hide info</button>';
    } else {
      html = html + '<button class="smallButton" onclick="toggleInfo(' + med.id + ')"><span class="material-symbols-outlined">info</span>More info</button>';
    }
    html = html + '<button class="smallButton" onclick="speakMedicine(' + med.id + ')"><span class="material-symbols-outlined">volume_up</span>Listen</button>';
    html = html + '<button class="smallButton removeButton" onclick="removeMedicine(' + med.id + ')"><span class="material-symbols-outlined">delete</span>Remove</button>';
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
  showMedicinesPage();
}

// Removes a medicine (after asking first)
function removeMedicine(medId) {
  const sure = confirm("Remove this medicine?");
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

// Put every medicine from the library into the typing suggestions
function fillSuggestions() {
  let html = "";
  for (let i = 0; i < medicineLibrary.length; i++) {
    html = html + '<option value="' + medicineLibrary[i].name + '">';
  }
  document.getElementById("medicineSuggestions").innerHTML = html;
}

// Checks or un-checks the time boxes
function setTimeBoxes(times) {
  const boxes = document.querySelectorAll(".timeBox");
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].checked = times.includes(boxes[i].value);
  }
}

// Checks if we know the typed medicine, and fills in the usual dose and times
function checkKnownMedicine() {
  formMessage.textContent = "";
  const info = findMedicineInfo(medicineName.value);

  if (info) {
    knownMessage.textContent = "ClearDose knows this medicine (" + info.name + "). We filled in the usual dose and times. Change them to match your label.";
    doseInput.value = info.dose;
    setTimeBoxes(info.times);
  } else {
    knownMessage.textContent = "";
  }
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
  const boxes = document.querySelectorAll(".timeBox");
  for (let i = 0; i < boxes.length; i++) {
    if (boxes[i].checked) {
      times.push(boxes[i].value);
    }
  }

  // 3. Make sure the form is filled in
  if (name === "") {
    formMessage.textContent = "Please type a medicine name.";
    return;
  }
  if (times.length === 0) {
    formMessage.textContent = "Please pick at least one time.";
    return;
  }

  // 4. Add it to the list and save
  const newId = nextId;
  medicines.push({
    id: newId,
    name: name,
    dose: doseInput.value.trim(),
    times: times
  });
  nextId = nextId + 1;
  saveMedicines();
  setStartDateIfMissing();

  // 5. Clear the form
  medicineName.value = "";
  doseInput.value = "";
  knownMessage.textContent = "";
  formMessage.textContent = "";
  setTimeBoxes([]);
  document.getElementById("scanStatus").textContent = "";
  document.getElementById("scanPreview").classList.add("hidden");
  document.getElementById("scanTextBox").classList.add("hidden");

  // 6. Show the new medicine with its information open
  openInfoId = newId;
  justAddedId = newId;
  showMedicinesPage();
  document.getElementById("med-" + newId).scrollIntoView({ behavior: "smooth", block: "start" });
});


// =====================================================
// PART 9: SAMPLE PATIENT (for practice and the demo)
// =====================================================

function loadSampleData() {
  const sure = confirm("Replace your medicines with the sample patient?");
  if (!sure) {
    return;
  }

  // 1. Sample medicines
  const sampleNames = ["Aspirin", "Atorvastatin", "Lisinopril", "Metformin"];
  medicines = [];
  nextId = 1;
  for (let i = 0; i < sampleNames.length; i++) {
    const info = findMedicineInfo(sampleNames[i]);
    medicines.push({
      id: nextId,
      name: info.name,
      dose: info.dose,
      times: info.times
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
    for (let i = 0; i < medicines.length; i++) {
      for (let j = 0; j < medicines[i].times.length; j++) {
        history[dayText].push(medicines[i].id + "-" + medicines[i].times[j]);
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
    { id: 1, title: "Dr. Patel - heart check-up", date: dateToText(soon), time: "10:30" },
    { id: 2, title: "Pharmacy - pick up refills", date: dateToText(later), time: "14:00" }
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
// PART 10: BOTTOM MENU (switching pages)
// =====================================================

const pageNames = ["home", "medicines", "calendar", "healthy", "settings"];

function showPage(pageName) {
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
  } else if (pageName === "calendar") {
    showCalendar();
  } else if (pageName === "healthy") {
    showHealthy();
  }

  window.scrollTo(0, 0);
}


// =====================================================
// START UP
// =====================================================
loadSettings();
applySettings();
loadHistory();
loadMedicines();
loadAppointments();
loadHabits();
fillSuggestions();
showPage("home");