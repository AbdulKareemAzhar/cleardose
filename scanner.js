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
    scanStatus.textContent = "The scanner needs the internet. Please type the medicine instead.";
    return;
  }

  scanStatus.textContent = "Getting the scanner ready...";

  try {
    const result = await Tesseract.recognize(photo, "eng", {
      logger: function (progress) {
        if (progress.status === "recognizing text") {
          scanStatus.textContent = "Reading the label... " + Math.round(progress.progress * 100) + "%";
        }
      }
    });
    useLabelText(result.data.text);
  } catch (error) {
    scanStatus.textContent = "Sorry, that photo couldn't be read. Try again in good light, or type the medicine in.";
  }
}

// Looks through the label's words for a medicine we know
function findMedicineInText(text) {
  // scanners often mix up the number 0 and the letter o (like "Metf0rmin")
  text = text.replace(/0/g, "o");

  // 1. brand names, like "Lipitor"
  for (const brand in brandNames) {
    if (text.includes(brand)) {
      return findMedicineInfo(brandNames[brand]);
    }
  }

  // 2. the full medicine name, like "metformin"
  for (let i = 0; i < medicineLibrary.length; i++) {
    if (text.includes(medicineLibrary[i].name.toLowerCase())) {
      return medicineLibrary[i];
    }
  }

  // 3. the first 5 letters, in case the scanner got a later letter wrong
  for (let i = 0; i < medicineLibrary.length; i++) {
    const start = medicineLibrary[i].name.toLowerCase().substring(0, 5);
    if (text.includes(start)) {
      return medicineLibrary[i];
    }
  }

  return null;
}

// Looks for a dose like "500 mg" or "0.4 mg"
function findDoseInText(text) {
  const match = text.match(/(\d+(\.\d+)?)\s*(mg|mcg|ml)\b/);
  if (match) {
    return match[1] + " " + match[3];
  }
  return "";
}

// Looks for how often to take it, like "twice daily"
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
  if (text.includes("in the evening")) {
    return ["evening"];
  }
  if (text.includes("in the morning")) {
    return ["morning"];
  }
  return null;   // not sure, so we keep the usual times
}

// Fills in the form with what we found on the label
function useLabelText(text) {
  const lowerText = text.toLowerCase();

  // show the words the scanner read (helpful if something looks wrong)
  document.getElementById("scanText").textContent = text;
  document.getElementById("scanTextBox").classList.remove("hidden");

  const info = findMedicineInText(lowerText);
  const dose = findDoseInText(lowerText);
  const times = findTimesInText(lowerText);

  if (info) {
    medicineName.value = info.name;
    checkKnownMedicine();   // fills in the usual dose and times (in app.js)
  }
  if (dose !== "") {
    doseInput.value = dose;
  }
  if (times) {
    setTimeBoxes(times);
  }

  if (info) {
    scanStatus.textContent = "Found " + info.name + (dose ? " " + dose : "") + ". Please check it matches your label, then tap Save.";
  } else if (dose !== "") {
    scanStatus.textContent = "We found the dose but not the medicine name. Please type the name.";
  } else {
    scanStatus.textContent = "We couldn't find a medicine we know. Please type it in.";
  }
}