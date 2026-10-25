// ClearDose - Label scanner
// Uses Tesseract.js, a free AI text reader (it uses a neural network).
// It runs inside the browser, so the photo never leaves the phone.

const scanInput = document.getElementById("scanInput");
const scanPreview = document.getElementById("scanPreview");
const scanStatus = document.getElementById("scanStatus");

// The "Scan a label" button opens the camera or photo library
function startScan() {
  scanInput.click();
}

// When a photo is picked, show it and read it
scanInput.addEventListener("change", function () {
  const photo = scanInput.files[0];
  if (!photo) {
    return;
  }

  scanPreview.src = URL.createObjectURL(photo);
  scanPreview.classList.remove("hidden");
  document.getElementById("scanTextBox").classList.add("hidden");

  readLabel(photo);
  scanInput.value = "";   // so the same photo can be picked again
});

// Reads the words in the photo.
// "async" and "await" mean: wait for the reader to finish before going on.
async function readLabel(photo) {
  if (typeof Tesseract === "undefined") {
    scanStatus.textContent = t("scan_needs_internet");
    return;
  }

  scanStatus.textContent = t("scan_getting_ready");

  try {
    const result = await Tesseract.recognize(photo, "eng", {
      logger: function (progress) {
        if (progress.status === "recognizing text") {
          scanStatus.textContent = t("scan_reading", { percent: Math.round(progress.progress * 100) });
        }
      }
    });
    useLabelText(result.data.text);
  } catch (error) {
    scanStatus.textContent = t("scan_failed");
  }
}

// Looks for a dose like "500 mg", "0.4 mg", "1,000 IU", "10 units" or "10 mEq"
function findDoseInText(text) {
  const match = text.match(/(\d[\d,]*(\.\d+)?)\s*(mcg|mg|meq|ml|iu|units|unit|g)\b/);
  if (!match) {
    return "";
  }
  // write the unit the usual way
  const unitNames = { mcg: "mcg", mg: "mg", meq: "mEq", ml: "mL", iu: "IU", units: "units", unit: "units", g: "g" };
  return match[1] + " " + unitNames[match[3]];
}

// Looks for how often to take it, like "twice daily" or "once a week"
function findOftenInText(text) {
  if (text.includes("once a week") || text.includes("once weekly") || text.includes("every week") || text.includes("weekly")) {
    return "weekly";
  }
  if (text.includes("as needed") || text.includes("when needed") || text.includes(" prn")) {
    return "asneeded";
  }
  return null;
}

// Looks for the times of day, like "twice daily"
function findTimesInText(text) {
  if (text.includes("four times") || text.includes("4 times") || text.includes("every 6 hours")) {
    return ["morning", "noon", "evening", "bedtime"];
  }
  if (text.includes("three times") || text.includes("3 times") || text.includes("every 8 hours")) {
    return ["morning", "noon", "evening"];
  }
  if (text.includes("twice") || text.includes("two times") || text.includes("2 times") || text.includes("every 12 hours")) {
    return ["morning", "evening"];
  }
  if (text.includes("bedtime") || text.includes("at night") || text.includes("before bed")) {
    return ["bedtime"];
  }
  if (text.includes("in the evening") || text.includes("with dinner")) {
    return ["evening"];
  }
  if (text.includes("in the morning") || text.includes("with breakfast")) {
    return ["morning"];
  }
  return null;   // not sure, so we keep the usual times
}

// Looks for how many to take, like "take 2 tablets" or "take one capsule"
function findCountInText(text) {
  const numberWords = { one: 1, two: 2, three: 3, four: 4 };
  const match = text.match(/take (\d|one|two|three|four) (tablet|capsule|pill|puff|spray|drop|softgel|gummies|gummy)/);
  if (!match) {
    return 0;
  }
  if (numberWords[match[1]]) {
    return numberWords[match[1]];
  }
  return Number(match[1]);
}

// Fills in the form with what we found on the label
function useLabelText(text) {
  const lowerText = text.toLowerCase();

  // show the words the scanner read (helpful if something looks wrong)
  document.getElementById("scanText").textContent = text;
  document.getElementById("scanTextBox").classList.remove("hidden");

  const info = findMedicineInText(lowerText);
  const dose = findDoseInText(lowerText);
  const often = findOftenInText(lowerText);
  const times = findTimesInText(lowerText);
  const count = findCountInText(lowerText);

  if (info) {
    medicineName.value = info.name;
    checkKnownMedicine();   // fills in the usual dose, times and unit (in app.js)
  }
  if (dose !== "") {
    doseInput.value = dose;
  }
  if (often) {
    oftenSelect.value = often;
    showOftenChoices();
  }
  if (times) {
    setTimeBoxes(times);
  }
  if (count > 0) {
    formCount = count;
    showFormCount();
  }

  if (info) {
    scanStatus.textContent = t("scan_found", { name: info.name + (dose ? " " + dose : "") });
  } else if (dose !== "") {
    scanStatus.textContent = t("scan_dose_only");
  } else {
    scanStatus.textContent = t("scan_nothing");
  }
}
