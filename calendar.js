// ClearDose - Calendar and appointments

// =====================================================
// PART 1: SAVED APPOINTMENTS
// =====================================================

// Each appointment looks like:
// { id: 1, title: "Dr. Patel - heart check", date: "2026-10-25", time: "10:30" }
let appointments = [];
let nextAppointmentId = 1;

function loadAppointments() {
  const saved = localStorage.getItem("cleardoseAppointments");
  if (saved) {
    appointments = JSON.parse(saved);
  }
  for (let i = 0; i < appointments.length; i++) {
    if (appointments[i].id >= nextAppointmentId) {
      nextAppointmentId = appointments[i].id + 1;
    }
  }
}

function saveAppointments() {
  localStorage.setItem("cleardoseAppointments", JSON.stringify(appointments));
}

// Sorts appointments from soonest to latest
function sortAppointments() {
  appointments.sort(function (a, b) {
    const first = a.date + " " + a.time;
    const second = b.date + " " + b.time;
    if (first < second) { return -1; }
    if (first > second) { return 1; }
    return 0;
  });
}


// =====================================================
// PART 2: HELPERS FOR DATES AND TIMES
// =====================================================

// Turns "2026-10-25" back into a real date
function textToDate(text) {
  const parts = text.split("-");
  return new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]));
}

// Turns "14:30" into "2:30 PM"
function niceTime(time) {
  const parts = time.split(":");
  let hour = Number(parts[0]);
  const minutes = parts[1];
  let ending = "AM";
  if (hour >= 12) { ending = "PM"; }
  if (hour > 12) { hour = hour - 12; }
  if (hour === 0) { hour = 12; }
  return hour + ":" + minutes + " " + ending;
}

// Turns "2026-10-25" into "Sun, Oct 25"
function niceDate(text) {
  const options = { weekday: "short", month: "short", day: "numeric" };
  return textToDate(text).toLocaleDateString("en-US", options);
}

// The day the person started using the app (so older days aren't marked red)
function getStartDate() {
  return localStorage.getItem("cleardoseStart");
}

function setStartDateIfMissing() {
  if (!getStartDate()) {
    localStorage.setItem("cleardoseStart", todayText());
  }
}


// =====================================================
// PART 3: THE CALENDAR GRID
// =====================================================

let calendarMonth = new Date().getMonth();     // 0 = January
let calendarYear = new Date().getFullYear();

// Picks a color for a day: green, yellow, red, or none
// (uses the current medicine list for every day, to keep it simple)
function dayColor(dayText) {
  const start = getStartDate();
  const today = todayText();

  if (!start || dayText < start || dayText > today) {
    return "";
  }

  const total = countAllDoses();
  if (total === 0) {
    return "";
  }

  const taken = countTaken(dayText);
  if (taken === total) {
    return "dayGood";
  }
  if (dayText === today) {
    // today isn't over yet, so don't mark it red
    if (taken > 0) { return "dayPartial"; }
    return "";
  }
  if (taken === 0) {
    return "dayMissed";
  }
  return "dayPartial";
}

// True if there is an appointment on that day
function hasAppointment(dayText) {
  for (let i = 0; i < appointments.length; i++) {
    if (appointments[i].date === dayText) {
      return true;
    }
  }
  return false;
}

function showCalendar() {
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
  document.getElementById("monthTitle").textContent = monthNames[calendarMonth] + " " + calendarYear;

  let html = "";

  // the day names on top
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  for (let i = 0; i < dayNames.length; i++) {
    html = html + '<div class="dayName">' + dayNames[i] + '</div>';
  }

  // empty boxes before the 1st of the month
  const firstDay = new Date(calendarYear, calendarMonth, 1).getDay();
  for (let i = 0; i < firstDay; i++) {
    html = html + '<div></div>';
  }

  // one box for each day
  const daysInMonth = new Date(calendarYear, calendarMonth + 1, 0).getDate();
  for (let day = 1; day <= daysInMonth; day++) {
    const dayText = dateToText(new Date(calendarYear, calendarMonth, day));

    let classes = "dayBox " + dayColor(dayText);
    if (dayText === todayText()) {
      classes = classes + " isToday";
    }

    html = html + '<button class="' + classes + '" onclick="pickDay(\'' + dayText + '\')">';
    html = html + day;
    if (hasAppointment(dayText)) {
      html = html + '<span class="apptDot"></span>';   // small dot = appointment
    }
    html = html + '</button>';
  }

  document.getElementById("calendarGrid").innerHTML = html;
  showAppointmentList();
}

function previousMonth() {
  calendarMonth = calendarMonth - 1;
  if (calendarMonth < 0) {
    calendarMonth = 11;
    calendarYear = calendarYear - 1;
  }
  showCalendar();
}

function nextMonth() {
  calendarMonth = calendarMonth + 1;
  if (calendarMonth > 11) {
    calendarMonth = 0;
    calendarYear = calendarYear + 1;
  }
  showCalendar();
}

// Tapping a day puts that date into the appointment form
function pickDay(dayText) {
  document.getElementById("apptDate").value = dayText;
  document.getElementById("apptTitle").focus();
}


// =====================================================
// PART 4: ADDING AND LISTING APPOINTMENTS
// =====================================================

function addAppointment() {
  const title = document.getElementById("apptTitle").value.trim();
  const date = document.getElementById("apptDate").value;
  let time = document.getElementById("apptTime").value;
  const message = document.getElementById("apptMessage");

  if (title === "" || date === "") {
    message.textContent = "Please type what the appointment is and pick a date.";
    return;
  }
  if (time === "") {
    time = "09:00";
  }

  appointments.push({
    id: nextAppointmentId,
    title: title,
    date: date,
    time: time
  });
  nextAppointmentId = nextAppointmentId + 1;
  saveAppointments();

  // clear the form
  document.getElementById("apptTitle").value = "";
  message.textContent = "";

  // jump the calendar to that month
  const picked = textToDate(date);
  calendarMonth = picked.getMonth();
  calendarYear = picked.getFullYear();
  showCalendar();
}

function removeAppointment(id) {
  const sure = confirm("Remove this appointment?");
  if (!sure) {
    return;
  }
  appointments = appointments.filter(function (appt) {
    return appt.id !== id;
  });
  saveAppointments();
  showCalendar();
}

// Shows appointments from today onward
function showAppointmentList() {
  sortAppointments();
  const today = todayText();
  let html = "";

  for (let i = 0; i < appointments.length; i++) {
    const appt = appointments[i];
    if (appt.date < today) {
      continue;   // skip old ones
    }
    html = html + '<div class="card iconCard">';
    html = html + '<span class="material-symbols-outlined iconCircle">event</span>';
    html = html + '<div>';
    html = html + '<p class="bold">' + cleanText(appt.title) + '</p>';
    html = html + '<p class="faded">' + niceDate(appt.date) + ' at ' + niceTime(appt.time) + '</p>';
    html = html + '<button class="smallButton removeButton" onclick="removeAppointment(' + appt.id + ')"><span class="material-symbols-outlined">delete</span>Remove</button>';
    html = html + '</div>';
    html = html + '</div>';
  }

  if (html === "") {
    html = '<p class="faded">No upcoming appointments.</p>';
  }

  document.getElementById("appointmentList").innerHTML = html;
}

// Finds the next appointment that hasn't happened yet (for the Home page)
function getNextAppointment() {
  sortAppointments();
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  if (hours < 10) { hours = "0" + hours; }
  if (minutes < 10) { minutes = "0" + minutes; }
  const nowText = todayText() + " " + hours + ":" + minutes;

  for (let i = 0; i < appointments.length; i++) {
    if (appointments[i].date + " " + appointments[i].time >= nowText) {
      return appointments[i];
    }
  }
  return null;
}