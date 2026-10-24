// ClearDose - Healthy habits
// (icon is the name of a Google icon, like "water_drop")
// 20 habits in total. The app shows 5 each day and changes them daily,
// so every habit comes up once every 4 days.
//
// The first 8 come from the Million Veteran Program study (2023),
// which linked these habits to a much longer life.
// The other 12 are general healthy-aging habits.
// (General tips, not medical advice.)

const habits = [
  // ---- The 8 habits from the Million Veteran Program study ----
  { key: "active",   icon: "directions_walk", title: "Be active for 20 to 30 minutes",
    why: "Walking, dancing, or gardening all count. Experts suggest about 150 minutes a week." },
  { key: "smoke",    icon: "smoke_free", title: "Stay smoke-free today",
    why: "Quitting helps at any age. Free help: call 1-800-QUIT-NOW." },
  { key: "opioids",  icon: "medication", title: "Use pain medicine only as prescribed",
    why: "Never take extra or someone else's pills. Ask your doctor about safer pain options." },
  { key: "alcohol",  icon: "no_drinks", title: "Skip alcohol, or keep it to one small drink",
    why: "Drinking a lot at once is linked to falls and a shorter life." },
  { key: "diet",     icon: "restaurant", title: "Eat vegetables, fruit, or whole grains with two meals",
    why: "A healthy diet is linked to a healthier heart and a longer life." },
  { key: "stress",   icon: "self_improvement", title: "Take 5 quiet minutes to breathe or pray",
    why: "Managing stress is good for your heart and your mood." },
  { key: "sleep",    icon: "bedtime", title: "Go to bed at your regular time",
    why: "Most older adults need about 7 to 8 hours of sleep." },
  { key: "social",   icon: "call", title: "Talk with family, a friend, or a neighbor",
    why: "Good relationships are linked to better health and a longer life." },

  // ---- 12 general healthy-aging habits ----
  { key: "strength", icon: "fitness_center", title: "Do strength or balance exercises",
    why: "They keep your muscles strong and help prevent falls." },
  { key: "weight",   icon: "monitor_weight", title: "Eat normal portions and notice your weight",
    why: "Keeping a healthy weight helps your heart, joints, and blood sugar." },
  { key: "water",    icon: "water_drop", title: "Drink water during the day",
    why: "Older adults get dehydrated more easily. Ask your doctor if you have a fluid limit." },
  { key: "checkup",  icon: "stethoscope", title: "Check when your next checkup or screening is due",
    why: "Regular checks catch blood pressure, cholesterol, sugar, and cancer early. Add it to your Calendar." },
  { key: "vaccine",  icon: "vaccines", title: "Ask if you are due for a vaccine",
    why: "Flu, pneumonia, shingles, and COVID vaccines protect older adults." },
  { key: "meds",     icon: "task_alt", title: "Take all your medicines",
    why: "This one checks itself when you finish your medicines on the Home page." },
  { key: "mind",     icon: "extension", title: "Read, do a puzzle, or learn something new",
    why: "Keeping your mind busy helps keep it sharp." },
  { key: "purpose",  icon: "volunteer_activism", title: "Do something you care about",
    why: "A hobby, volunteering, or helping someone gives a sense of purpose." },
  { key: "senses",   icon: "visibility", title: "Clean your glasses or check your hearing aid",
    why: "Good hearing and vision keep you safe and connected. Get them checked every year." },
  { key: "teeth",    icon: "sentiment_satisfied", title: "Brush twice and floss today",
    why: "Healthy teeth and gums matter for your whole body. See a dentist regularly." },
  { key: "move",     icon: "accessibility_new", title: "Stand up and move every hour",
    why: "Sitting for a long time is hard on your body. Short walks help." },
  { key: "safety",   icon: "house", title: "Check one room for trip hazards",
    why: "Good lighting, no loose rugs, and grab bars prevent falls. Wear sunscreen or a hat outside." }
];

// How many habits to show each day
const habitsPerDay = 5;

// Which habits were done each day. Looks like: { "2026-10-23": ["water", "social"] }
let habitHistory = {};

function loadHabits() {
  const saved = localStorage.getItem("cleardoseHabits");
  if (saved) {
    habitHistory = JSON.parse(saved);
  }
}

function saveHabits() {
  localStorage.setItem("cleardoseHabits", JSON.stringify(habitHistory));
}

// Picks the 5 habits for a day.
// Each day moves 5 places down the list, so the habits change every day.
function getHabitsForDay(dayText) {
  // count how many days have passed since January 1, 1970
  const dayNumber = Math.round(textToDate(dayText).getTime() / (1000 * 60 * 60 * 24));
  const startSpot = (dayNumber * habitsPerDay) % habits.length;

  let todaysHabits = [];
  for (let i = 0; i < habitsPerDay; i++) {
    const spot = (startSpot + i) % habits.length;   // % wraps back to the start of the list
    todaysHabits.push(habits[spot]);
  }
  return todaysHabits;
}

// True if a habit was done on a day
function habitDone(dayText, key) {
  if (key === "meds") {
    return allTaken(dayText);   // checks itself
  }
  if (!habitHistory[dayText]) {
    return false;
  }
  return habitHistory[dayText].includes(key);
}

// How many of that day's habits were done
function countHabits(dayText) {
  const dayHabits = getHabitsForDay(dayText);
  let count = 0;
  for (let i = 0; i < dayHabits.length; i++) {
    if (habitDone(dayText, dayHabits[i].key)) {
      count = count + 1;
    }
  }
  return count;
}

// Check or un-check a habit for today
function toggleHabit(key) {
  const today = todayText();
  if (!habitHistory[today]) {
    habitHistory[today] = [];
  }

  if (habitHistory[today].includes(key)) {
    habitHistory[today] = habitHistory[today].filter(function (item) {
      return item !== key;
    });
  } else {
    habitHistory[today].push(key);
  }

  saveHabits();
  showHealthy();
}

function showHealthy() {
  const today = todayText();
  const todaysHabits = getHabitsForDay(today);
  const done = countHabits(today);

  // progress
  document.getElementById("habitProgressText").textContent = done + " of " + habitsPerDay + " habits done today";
  document.getElementById("habitProgressFill").style.width = Math.round((done / habitsPerDay) * 100) + "%";

  // last 7 days as little circles
  let weekHtml = "";
  for (let i = 6; i >= 0; i--) {
    const day = new Date();
    day.setDate(day.getDate() - i);
    const count = countHabits(dateToText(day));

    let circleClass = "weekCircle";
    if (count >= 4) {
      circleClass = circleClass + " weekGood";
    } else if (count >= 2) {
      circleClass = circleClass + " weekOkay";
    }
    weekHtml = weekHtml + '<div class="' + circleClass + '">' + day.getDate() + '</div>';
  }
  document.getElementById("weekRow").innerHTML = weekHtml;

  // today's checklist
  let html = "";
  for (let i = 0; i < todaysHabits.length; i++) {
    const habit = todaysHabits[i];
    const isDone = habitDone(today, habit.key);

    let rowClass = "habit";
    if (isDone) {
      rowClass = rowClass + " habitDone";
    }

    html = html + '<label class="' + rowClass + '">';
    if (habit.key === "meds") {
      // can't be clicked, it checks itself
      html = html + '<input type="checkbox" disabled' + (isDone ? ' checked' : '') + '>';
    } else {
      html = html + '<input type="checkbox" onchange="toggleHabit(\'' + habit.key + '\')"' + (isDone ? ' checked' : '') + '>';
    }
    html = html + '<span class="material-symbols-outlined iconCircle">' + habit.icon + '</span>';
    html = html + '<span><span class="bold">' + habit.title + '</span>';
    html = html + '<span class="habitWhy">' + habit.why + '</span></span>';
    html = html + '</label>';
  }
  document.getElementById("habitList").innerHTML = html;
}