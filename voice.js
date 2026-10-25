// ClearDose - Read aloud
// Uses the voice that is already built into the phone or computer
// (the browser's "speech synthesis"). No internet needed.

let allVoices = [];

// The list of voices loads a moment after the page opens
function loadVoices() {
  allVoices = speechSynthesis.getVoices();
}

if ("speechSynthesis" in window) {
  loadVoices();
  speechSynthesis.onvoiceschanged = loadVoices;
}

// Picks the most natural-sounding voice for a language (like "es")
function pickBestVoice(languageCode) {
  // all voices for this language
  let matching = [];
  for (let i = 0; i < allVoices.length; i++) {
    if (allVoices[i].lang.toLowerCase().startsWith(languageCode)) {
      matching.push(allVoices[i]);
    }
  }

  // these words usually mean a higher quality voice
  const goodWords = ["premium", "enhanced", "natural", "neural", "samantha", "google"];
  for (let w = 0; w < goodWords.length; w++) {
    for (let i = 0; i < matching.length; i++) {
      if (matching[i].name.toLowerCase().includes(goodWords[w])) {
        return matching[i];
      }
    }
  }

  // otherwise just use the first one we found
  if (matching.length > 0) {
    return matching[0];
  }
  return null;
}

// Remembers which languages we already warned about (so we only say it once)
let warnedNoVoice = {};

// Reads any text out loud.
// languageCode is "en", "es", "ur", "ar" or "zh" (the chosen language if left out)
function speak(text, languageCode) {
  if (!("speechSynthesis" in window)) {
    showToast(t("no_voice_at_all"));
    return;
  }
  if (!languageCode) {
    languageCode = settings.language;
  }
  speechSynthesis.cancel();   // stop anything already talking

  const speech = new SpeechSynthesisUtterance(text);
  speech.lang = languageInfo(languageCode).voice;   // like "es-MX"
  speech.rate = 0.9;                                 // a little slower, easier to follow

  const voice = pickBestVoice(languageCode);
  if (voice) {
    speech.voice = voice;
  } else if (allVoices.length > 0 && !warnedNoVoice[languageCode]) {
    // this phone has no voice for this language
    warnedNoVoice[languageCode] = true;
    showToast(t("no_voice"));
  }
  speechSynthesis.speak(speech);
}

// Reads a short summary (used on the Home page)
function speakDose(medId) {
  const med = findMyMedicine(medId);
  if (!med) { return; }
  const info = findMedicineInfo(med.name);

  // if this medicine isn't translated yet, read it all in English
  let language = settings.language;
  if (info && !hasTranslation(info)) {
    language = "en";
  }

  let text = med.name + ". " + med.dose + ". ";
  text = text + tIn(language, "take_amount", { amount: countTextIn(language, med.count, getUnit(med)) }) + ". ";
  if (info) {
    text = text + medicineTextIn(language, info, "use") + ". " + medicineTextIn(language, info, "how");
  }
  speak(text, language);
}

// Reads everything about a medicine (used on the Medicines page)
function speakMedicine(medId) {
  const med = findMyMedicine(medId);
  if (!med) { return; }
  const info = findMedicineInfo(med.name);

  let language = settings.language;
  if (info && !hasTranslation(info)) {
    language = "en";
  }

  let text = med.name + ". " + med.dose + ". ";
  if (info) {
    text = text + tIn(language, "info_helps") + ". " + medicineTextIn(language, info, "helps") + " ";
    text = text + tIn(language, "info_how") + ". " + medicineTextIn(language, info, "how") + " ";
    text = text + tIn(language, "info_side") + ". " + medicineTextIn(language, info, "sideEffects") + " ";
    text = text + tIn(language, "info_precautions") + ". " + medicineTextIn(language, info, "precautions");
  }
  speak(text, language);
}

// A small message that shows at the bottom for a few seconds
function showToast(message) {
  let toast = document.getElementById("toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast";
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(function () {
    toast.classList.remove("show");
  }, 4000);
}
