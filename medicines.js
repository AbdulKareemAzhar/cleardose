// ClearDose - Medicine library (35 medicines, A to Z)
// Plain-language info about common medicines for older adults.
// Written from official patient information (MedlinePlus / DailyMed).
// It is a simple summary, not the full label. Always follow the
// person's own label and doctor.

const medicineLibrary = [
  {
    name: "Acetaminophen",
    dose: "500 mg",
    times: ["noon"],
    use: "Relieves pain and fever",
    how: "Take only as directed. Do not take more than the label says in one day.",
    watch: "Many cold and flu medicines also contain acetaminophen. Too much can harm the liver, so check labels and limit alcohol."
  },
  {
    name: "Allopurinol",
    dose: "100 mg",
    times: ["morning"],
    use: "Prevents gout attacks by lowering uric acid",
    how: "Take after a meal. Drink plenty of water during the day.",
    watch: "Stop and call your doctor right away if you get a skin rash."
  },
  {
    name: "Amlodipine",
    dose: "5 mg",
    times: ["morning"],
    use: "Lowers blood pressure",
    how: "Take once a day, with or without food.",
    watch: "Swollen ankles or dizziness can happen. Tell your doctor if it bothers you."
  },
  {
    name: "Apixaban",
    dose: "5 mg",
    times: ["morning", "evening"],
    use: "Blood thinner: helps prevent strokes and dangerous clots",
    how: "Take twice a day, about 12 hours apart, with or without food.",
    watch: "Do not stop it without talking to your doctor. Get help for heavy bleeding or a bad fall. Tell your dentist you take it."
  },
  {
    name: "Aspirin",
    dose: "81 mg",
    times: ["morning"],
    use: "Protects the heart and helps prevent clots",
    how: "Take with food. Only take the dose your doctor gave you.",
    watch: "Call your doctor if you see black stools or bleed easily."
  },
  {
    name: "Atenolol",
    dose: "25 mg",
    times: ["morning"],
    use: "Lowers blood pressure and protects the heart",
    how: "Take once a day at the same time.",
    watch: "Do not stop it suddenly. Tell your doctor if you feel very dizzy or tired."
  },
  {
    name: "Atorvastatin",
    dose: "20 mg",
    times: ["evening"],
    use: "Lowers cholesterol to protect your heart",
    how: "Take once a day. Avoid large amounts of grapefruit juice.",
    watch: "Tell your doctor about muscle pain or weakness you can't explain."
  },
  {
    name: "Carvedilol",
    dose: "6.25 mg",
    times: ["morning", "evening"],
    use: "Helps heart failure and lowers blood pressure",
    how: "Take twice a day with food.",
    watch: "Do not stop it suddenly. Stand up slowly if you feel dizzy."
  },
  {
    name: "Clopidogrel",
    dose: "75 mg",
    times: ["morning"],
    use: "Helps prevent clots after a heart attack, stroke, or stent",
    how: "Take once a day, with or without food.",
    watch: "Do not stop it without asking your heart doctor. Tell your doctor about unusual bleeding or bruising."
  },
  {
    name: "Donepezil",
    dose: "5 mg",
    times: ["bedtime"],
    use: "Helps memory and thinking in Alzheimer's disease",
    how: "Take once a day at bedtime. It can help symptoms but is not a cure.",
    watch: "Tell your doctor about upset stomach, fainting, or a very slow heartbeat."
  },
  {
    name: "Escitalopram",
    dose: "10 mg",
    times: ["morning"],
    use: "Treats depression and anxiety",
    how: "Take once a day. It can take a few weeks to start helping.",
    watch: "Do not stop suddenly. Tell your doctor about new mood changes, confusion, or easy bleeding."
  },
  {
    name: "Famotidine",
    dose: "20 mg",
    times: ["bedtime"],
    use: "Reduces stomach acid and heartburn",
    how: "Take as directed, with or without food.",
    watch: "Tell your doctor if you feel confused, or if you have kidney problems."
  },
  {
    name: "Finasteride",
    dose: "5 mg",
    times: ["morning"],
    use: "Shrinks an enlarged prostate to help urine flow",
    how: "Take once a day, with or without food. It can take months to help.",
    watch: "Women who are or may be pregnant should not handle broken or crushed tablets."
  },
  {
    name: "Furosemide",
    dose: "20 mg",
    times: ["morning"],
    use: "Water pill: removes extra fluid",
    how: "Take in the morning. You will need the bathroom more often.",
    watch: "Tell your doctor about dizziness, muscle cramps, or very little urine."
  },
  {
    name: "Gabapentin",
    dose: "300 mg",
    times: ["bedtime"],
    use: "Helps nerve pain",
    how: "Take exactly as prescribed. Do not stop suddenly.",
    watch: "It can make you sleepy or unsteady. Be careful walking, and tell your doctor about falls."
  },
  {
    name: "Glipizide",
    dose: "5 mg",
    times: ["morning"],
    use: "Lowers blood sugar (diabetes)",
    how: "Take about 30 minutes before breakfast. Do not skip meals.",
    watch: "It can cause low blood sugar: shaking, sweating, or confusion. Keep a sugary snack nearby."
  },
  {
    name: "Hydrochlorothiazide",
    dose: "25 mg",
    times: ["morning"],
    use: "Water pill: lowers blood pressure",
    how: "Take in the morning so you don't wake up at night to use the bathroom.",
    watch: "Drink enough water unless your doctor says otherwise. Tell your doctor about muscle cramps."
  },
  {
    name: "Ibuprofen",
    dose: "200 mg",
    times: ["noon"],
    use: "Relieves pain and swelling",
    how: "Take with food or milk. Use the smallest dose for the shortest time.",
    watch: "Can upset the stomach and affect the kidneys. Ask your doctor before using it often."
  },
  {
    name: "Levothyroxine",
    dose: "50 mcg",
    times: ["morning"],
    use: "Replaces thyroid hormone",
    how: "Take on an empty stomach with water, 30 to 60 minutes before breakfast.",
    watch: "Keep calcium or iron pills 4 hours apart from it. Tell your doctor about a racing heart."
  },
  {
    name: "Lisinopril",
    dose: "10 mg",
    times: ["morning"],
    use: "Lowers blood pressure",
    how: "Take once a day at the same time. It works even when you feel fine.",
    watch: "Swelling of the face, lips, or tongue is an emergency: call 911. Tell your doctor about a dry cough that won't go away."
  },
  {
    name: "Losartan",
    dose: "50 mg",
    times: ["morning"],
    use: "Lowers blood pressure",
    how: "Take once a day, with or without food.",
    watch: "Stand up slowly if you feel dizzy. Tell your doctor if you feel faint."
  },
  {
    name: "Metformin",
    dose: "500 mg",
    times: ["morning", "evening"],
    use: "Controls blood sugar (diabetes)",
    how: "Take with meals to protect your stomach.",
    watch: "Tell your doctor about bad vomiting, diarrhea, or feeling very weak."
  },
  {
    name: "Metoprolol",
    dose: "25 mg",
    times: ["morning", "evening"],
    use: "Slows the heart and lowers blood pressure",
    how: "Take with or right after a meal.",
    watch: "Do not stop it suddenly. Tell your doctor if you feel very tired or dizzy."
  },
  {
    name: "Montelukast",
    dose: "10 mg",
    times: ["evening"],
    use: "Helps prevent asthma and allergy symptoms",
    how: "Take once a day in the evening. It does not stop a sudden asthma attack.",
    watch: "Tell your doctor right away about mood changes, bad dreams, or thoughts of self-harm."
  },
  {
    name: "Omeprazole",
    dose: "20 mg",
    times: ["morning"],
    use: "Reduces stomach acid and heartburn",
    how: "Take 30 minutes before breakfast with water.",
    watch: "Ask your doctor if you need it for more than a few weeks."
  },
  {
    name: "Pantoprazole",
    dose: "40 mg",
    times: ["morning"],
    use: "Reduces stomach acid and heartburn",
    how: "Take 30 minutes before breakfast. Swallow the tablet whole.",
    watch: "Ask your doctor if you need it for a long time."
  },
  {
    name: "Pravastatin",
    dose: "40 mg",
    times: ["evening"],
    use: "Lowers cholesterol to protect your heart",
    how: "Take once a day, with or without food.",
    watch: "Tell your doctor about muscle pain or weakness you can't explain."
  },
  {
    name: "Prednisone",
    dose: "10 mg",
    times: ["morning"],
    use: "Calms swelling and inflammation",
    how: "Take in the morning with food.",
    watch: "Do not stop suddenly if you have taken it for a while. It can raise blood sugar and affect mood and sleep."
  },
  {
    name: "Rosuvastatin",
    dose: "10 mg",
    times: ["evening"],
    use: "Lowers cholesterol to protect your heart",
    how: "Take once a day, at any time, with or without food.",
    watch: "Tell your doctor about muscle pain or weakness you can't explain."
  },
  {
    name: "Sertraline",
    dose: "50 mg",
    times: ["morning"],
    use: "Treats depression and anxiety",
    how: "Take once a day. It can take a few weeks to start helping.",
    watch: "Do not stop suddenly. Tell your doctor about new mood changes or easy bleeding."
  },
  {
    name: "Simvastatin",
    dose: "20 mg",
    times: ["evening"],
    use: "Lowers cholesterol to protect your heart",
    how: "Take in the evening. Avoid grapefruit juice.",
    watch: "Tell your doctor about muscle pain or weakness you can't explain."
  },
  {
    name: "Spironolactone",
    dose: "25 mg",
    times: ["morning"],
    use: "Helps heart failure, lowers blood pressure, and removes extra fluid",
    how: "Take at the same time each day, the same way each time (always with food, or always without).",
    watch: "Avoid potassium pills and salt substitutes unless your doctor says yes. Tell your doctor about muscle weakness or an uneven heartbeat."
  },
  {
    name: "Tamsulosin",
    dose: "0.4 mg",
    times: ["evening"],
    use: "Helps urine flow with an enlarged prostate",
    how: "Take 30 minutes after the same meal each day. Swallow the capsule whole.",
    watch: "Stand up slowly: it can make you dizzy. Tell your eye doctor you take it before any cataract surgery."
  },
  {
    name: "Valsartan",
    dose: "80 mg",
    times: ["morning"],
    use: "Lowers blood pressure and helps heart failure",
    how: "Take at the same time each day, with or without food.",
    watch: "Stand up slowly if you feel dizzy. Do not use potassium pills unless your doctor says yes."
  },
  {
    name: "Warfarin",
    dose: "as directed",
    times: ["evening"],
    use: "Blood thinner: helps prevent dangerous clots",
    how: "Take at the same time every day. Go to every blood test.",
    watch: "Get help for heavy bleeding or a bad fall. Ask before starting any new medicine."
  }
];

// Finds a medicine in the library by its name (capital letters don't matter).
// Returns null if we don't know it.
function findMedicineInfo(name) {
  const searchName = name.trim().toLowerCase();
  for (let i = 0; i < medicineLibrary.length; i++) {
    if (medicineLibrary[i].name.toLowerCase() === searchName) {
      return medicineLibrary[i];
    }
  }
  return null;
}