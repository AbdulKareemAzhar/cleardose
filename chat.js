// ClearDose - Ask page (medicine helper)
// This helper is "safe by design": it only answers from ClearDose's own
// medicine information, so it never makes things up.
// Anything about a person's health goes to their doctor or pharmacist,
// and emergencies go to 911.

// The conversation so far: { who: "me" or "bot", text: "..." }
let chatMessages = [];

// Key words to look for in a question, in all 5 languages
const questionWords = {
  emergency: ["chest pain", "can't breathe", "cannot breathe", "cant breathe", "trouble breathing", "overdose", "took too many", "took too much", "passed out", "fainted", "stroke", "seizure",
              "dolor de pecho", "no puedo respirar", "sobredosis", "desmay",
              "سینے میں درد", "سانس نہیں", "زیادہ گولیاں",
              "ألم في الصدر", "لا أستطيع التنفس", "جرعة زائدة", "أغمي",
              "胸痛", "喘不过气", "呼吸困难", "吃多了", "过量", "昏倒"],
  crisis: ["suicid", "kill myself", "end my life", "hurt myself", "suicidio", "matarme", "خودکشی", "انتحار", "自杀", "轻生"],
  sideEffects: ["side effect", "side-effect", "efecto", "مضر اثر", "سائیڈ", "آثار جانبية", "أعراض جانبية", "副作用"],
  howToTake: ["how do i take", "how to take", "how should i take", "when do i take", "when should i take", "how do i use", "how to use",
              "cómo", "como tomo", "cuándo", "cuando tomo", "کیسے", "کب", "كيف", "متى", "怎么", "如何", "什么时候"],
  whatFor: ["what is", "what's", "what does", "used for", "for what", "why do i take", "why am i",
            "para qué", "para que", "sirve", "کس لیے", "کیا ہے", "کیوں", "ما هو", "ما فائدة", "لماذا", "用途", "治什么", "干什么", "做什么", "是什么"],
  precautions: ["warning", "careful", "precaution", "avoid", "danger", "precaución", "cuidado", "evitar", "احتیاط", "خطرہ", "احتياط", "تحذير", "注意", "小心", "禁忌"],
  missed: ["miss", "forgot", "forget", "skipped", "olvid", "بھول", "چھوٹ", "نسيت", "فات", "忘", "漏"],
  food: ["food", "eat", "meal", "empty stomach", "comida", "comer", "estómago vacío", "کھانا", "کھانے", "خالی پیٹ", "طعام", "أكل", "معدة فارغة", "饭", "吃饭", "空腹", "食物"],
  together: ["together", "mix", "interact", "combine", "same time", "juntas", "juntos", "mezclar", "ایک ساتھ", "ملا", "معًا", "مع بعض", "تداخل", "一起", "同时", "相互作用"],
  stop: ["stop", "quit", "dejar", "suspender", "بند", "چھوڑ", "أتوقف", "إيقاف", "停"],
  alcohol: ["alcohol", "beer", "wine", "drink", "شراب", "كحول", "酒"],
  health: ["pain", "hurt", "fever", "sick", "symptom", "diagnos", "pregnan", "dizzy", "rash", "should i", "is it normal", "my blood", "my sugar", "change my dose", "more pills", "double",
           "dolor", "fiebre", "enferm", "síntoma", "embaraz", "mareo", "debo",
           "درد", "بخار", "بیمار", "علامت", "حمل", "چکر",
           "ألم", "حمى", "مريض", "أعراض", "حامل", "دوخة", "هل يجب",
           "疼", "痛", "发烧", "生病", "症状", "怀孕", "头晕", "应该"]
};

// True if the question has any of the words in this list
function hasAnyWord(question, list) {
  for (let i = 0; i < list.length; i++) {
    if (question.includes(list[i])) {
      return true;
    }
  }
  return false;
}

// Works out the answer to a question
function answerQuestion(questionText) {
  const question = questionText.toLowerCase();
  const info = findMedicineInText(question);

  // 1. Emergencies always come first
  if (hasAnyWord(question, questionWords.crisis)) {
    return t("chat_crisis");
  }
  if (hasAnyWord(question, questionWords.emergency)) {
    return t("chat_emergency");
  }

  // 2. Questions about a medicine we know
  if (info) {
    const name = info.name;
    if (hasAnyWord(question, questionWords.together)) {
      return t("chat_together") + "\n\n" + t("chat_precautions_for", { name: name }) + " " + medicineText(info, "precautions");
    }
    if (hasAnyWord(question, questionWords.sideEffects)) {
      return t("chat_side_for", { name: name }) + " " + medicineText(info, "sideEffects") + "\n\n" + t("chat_side_doctor");
    }
    if (hasAnyWord(question, questionWords.precautions) || hasAnyWord(question, questionWords.alcohol)) {
      return t("chat_precautions_for", { name: name }) + " " + medicineText(info, "precautions") + "\n\n" + t("chat_ask_pharmacist");
    }
    if (hasAnyWord(question, questionWords.missed)) {
      return t("chat_missed") + "\n\n" + t("chat_how_for", { name: name }) + " " + medicineText(info, "how");
    }
    if (hasAnyWord(question, questionWords.stop)) {
      return t("chat_stop");
    }
    if (hasAnyWord(question, questionWords.howToTake) || hasAnyWord(question, questionWords.food)) {
      return t("chat_how_for", { name: name }) + " " + medicineText(info, "how") + "\n\n" + t("chat_follow_label");
    }
    if (hasAnyWord(question, questionWords.health)) {
      return t("chat_health");
    }
    // just the name: give a short summary
    return t("chat_about", { name: name }) + " " + medicineText(info, "helps") + "\n\n" +
           t("chat_how_for", { name: name }) + " " + medicineText(info, "how");
  }

  // 3. Questions about your health (not a medicine) go to the doctor
  if (hasAnyWord(question, questionWords.health)) {
    return t("chat_health");
  }

  // 4. General medicine questions
  if (hasAnyWord(question, questionWords.missed)) {
    return t("chat_missed");
  }
  if (hasAnyWord(question, questionWords.together)) {
    return t("chat_together");
  }
  if (hasAnyWord(question, questionWords.stop)) {
    return t("chat_stop");
  }
  if (hasAnyWord(question, questionWords.food)) {
    return t("chat_food");
  }

  // 5. Anything else
  return t("chat_dont_know");
}

// Shows the conversation
function showChat() {
  if (chatMessages.length === 0) {
    chatMessages.push({ who: "bot", text: t("chat_welcome") });
  }

  let html = "";
  for (let i = 0; i < chatMessages.length; i++) {
    const message = chatMessages[i];
    // turn line breaks into new lines on the page
    const text = cleanText(message.text).replace(/\n/g, "<br>");
    if (message.who === "me") {
      html = html + '<div class="bubble myBubble">' + text + '</div>';
    } else {
      html = html + '<div class="bubble botBubble">' + text;
      html = html + '<button class="bubbleSpeak" onclick="speakChat(' + i + ')" aria-label="' + t("listen") + '">';
      html = html + '<span class="material-symbols-outlined">volume_up</span></button>';
      html = html + '</div>';
    }
  }
  const chatBox = document.getElementById("chatBox");
  chatBox.innerHTML = html;
  chatBox.scrollTop = chatBox.scrollHeight;   // scroll to the newest message

  showQuickQuestions();
}

// Buttons with ready-made questions, using the person's own medicines
function showQuickQuestions() {
  let questions = [];
  const myMeds = sortByName(medicines);
  for (let i = 0; i < myMeds.length && i < 3; i++) {
    questions.push(t("quick_what_for", { name: myMeds[i].name }));
    questions.push(t("quick_side", { name: myMeds[i].name }));
  }
  questions.push(t("quick_missed"));
  questions.push(t("quick_together"));

  let html = "";
  for (let i = 0; i < questions.length; i++) {
    html = html + '<button class="quickButton" onclick="askQuick(' + i + ')">' + cleanText(questions[i]) + '</button>';
  }
  document.getElementById("quickQuestions").innerHTML = html;
  quickList = questions;
}

// The ready-made questions on screen right now
let quickList = [];

function askQuick(number) {
  askQuestion(quickList[number]);
}

// The send button (or pressing Enter)
function sendChat() {
  const input = document.getElementById("chatInput");
  const question = input.value.trim();
  if (question === "") {
    return;
  }
  input.value = "";
  askQuestion(question);
}

function askQuestion(question) {
  chatMessages.push({ who: "me", text: question });
  chatMessages.push({ who: "bot", text: answerQuestion(question) });
  showChat();
}

function speakChat(number) {
  speak(chatMessages[number].text);
}

document.getElementById("chatInput").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    sendChat();
  }
});
