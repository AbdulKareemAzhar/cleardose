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

// Picks the most natural-sounding voice for a language (like "en")
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

// Reads any text out loud
function speak(text) {
  if (!("speechSynthesis" in window)) {
    return;   // this browser can't talk
  }
  speechSynthesis.cancel();   // stop anything already talking

  const speech = new SpeechSynthesisUtterance(text);
  speech.lang = "en-US";
  speech.rate = 0.9;          // a little slower, easier to follow

  const voice = pickBestVoice("en");
  if (voice) {
    speech.voice = voice;
  }
  speechSynthesis.speak(speech);
}

// Reads a short summary (used on the Home page)
function speakDose(medId) {
  const med = findMyMedicine(medId);
  if (!med) { return; }
  const info = findMedicineInfo(med.name);

  let text = med.name + ". " + med.dose + ". ";
  if (info) {
    text = text + info.use + ". " + info.how;
  }
  speak(text);
}

// Reads everything about a medicine (used on the Medicines page)
function speakMedicine(medId) {
  const med = findMyMedicine(medId);
  if (!med) { return; }
  const info = findMedicineInfo(med.name);

  let text = med.name + ". " + med.dose + ". ";
  if (info) {
    text = text + "What it is used for. " + info.helps + " ";
    text = text + "How to take it. " + info.how + " ";
    text = text + "Common side effects. " + info.sideEffects + " ";
    text = text + "Precautions. " + info.precautions;
  }
  speak(text);
}