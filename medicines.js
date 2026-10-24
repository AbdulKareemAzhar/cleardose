// ClearDose - Medicine library (35 medicines, A to Z)
// Plain-language info about common medicines for older adults,
// summarized from official patient information (MedlinePlus / DailyMed).
// It is a simple summary, not the full label. Always follow the
// person's own label and doctor.
//
// Each medicine has:
//   use         - a short line shown under the name
//   helps       - what it is used for and how it helps
//   how         - how to take it (if the label doesn't say otherwise)
//   sideEffects - common side effects
//   precautions - warnings and when to call the doctor

const medicineLibrary = [
  {
    name: "Acetaminophen", dose: "500 mg", times: ["noon"],
    use: "Relieves pain and fever",
    helps: "Eases mild to moderate pain, like headaches, muscle aches, and arthritis, and lowers fever. It does not reduce swelling.",
    how: "Take only as directed, with or without food. Do not take more than the label says in one day.",
    sideEffects: "Usually very few side effects at normal doses. Rarely, a skin rash.",
    precautions: "Many cold and flu medicines also contain acetaminophen, so check labels. Too much can harm the liver. Limit alcohol."
  },
  {
    name: "Allopurinol", dose: "100 mg", times: ["morning"],
    use: "Prevents gout attacks",
    helps: "Lowers uric acid in the blood, which prevents gout attacks and some kidney stones. It does not treat a gout attack that has already started.",
    how: "Take after a meal. Drink plenty of water during the day.",
    sideEffects: "Upset stomach, diarrhea, or drowsiness. Gout flares can still happen in the first few months.",
    precautions: "Stop taking it and call your doctor right away if you get a skin rash."
  },
  {
    name: "Amlodipine", dose: "5 mg", times: ["morning"],
    use: "Lowers blood pressure",
    helps: "Relaxes blood vessels so blood flows more easily. Treats high blood pressure and some types of chest pain (angina).",
    how: "Take once a day, at the same time, with or without food.",
    sideEffects: "Swollen ankles or feet, headache, flushing, tiredness, or dizziness.",
    precautions: "Stand up slowly. Tell your doctor if swelling or dizziness bothers you, or if chest pain gets worse."
  },
  {
    name: "Apixaban", dose: "5 mg", times: ["morning", "evening"],
    use: "Blood thinner",
    helps: "Lowers the chance of a stroke in people with an uneven heartbeat (atrial fibrillation), and treats or prevents blood clots in the legs and lungs.",
    how: "Take twice a day, about 12 hours apart, with or without food.",
    sideEffects: "Bruising or bleeding more easily, like nosebleeds or bleeding gums.",
    precautions: "Do not stop it without talking to your doctor. Get help right away for heavy bleeding, a bad fall, or a head injury. Tell your dentist you take it."
  },
  {
    name: "Aspirin", dose: "81 mg", times: ["morning"],
    use: "Protects the heart",
    helps: "Low-dose aspirin makes blood cells called platelets less sticky. This can lower the risk of heart attack and stroke in people their doctor chose it for.",
    how: "Take with food and a full glass of water. Only take the dose your doctor gave you.",
    sideEffects: "Upset stomach, heartburn, or bruising easily.",
    precautions: "Only take daily aspirin if your doctor said so. Call your doctor about black stools, vomiting blood, or bleeding that won't stop."
  },
  {
    name: "Atenolol", dose: "25 mg", times: ["morning"],
    use: "Lowers blood pressure",
    helps: "A beta blocker. Slows the heart and lowers blood pressure. It can also help chest pain (angina) and protect the heart after a heart attack.",
    how: "Take once a day at the same time, with or without food.",
    sideEffects: "Tiredness, dizziness, cold hands and feet, or a slow heartbeat.",
    precautions: "Do not stop it suddenly. Tell your doctor if you feel very dizzy, faint, or short of breath."
  },
  {
    name: "Atorvastatin", dose: "20 mg", times: ["evening"],
    use: "Lowers cholesterol",
    helps: "A statin. Lowers 'bad' cholesterol (LDL) to reduce the risk of heart attack and stroke.",
    how: "Take once a day, at any time, with or without food. Avoid large amounts of grapefruit juice.",
    sideEffects: "Muscle or joint aches, diarrhea, or upset stomach.",
    precautions: "Call your doctor about muscle pain or weakness you can't explain, or dark-colored urine."
  },
  {
    name: "Carvedilol", dose: "6.25 mg", times: ["morning", "evening"],
    use: "Helps the heart",
    helps: "A beta blocker. Helps the heart pump better in heart failure and lowers blood pressure.",
    how: "Take twice a day with food.",
    sideEffects: "Dizziness, tiredness, slow heartbeat, or weight gain.",
    precautions: "Do not stop it suddenly. Stand up slowly. Tell your doctor about sudden weight gain or new swelling."
  },
  {
    name: "Clopidogrel", dose: "75 mg", times: ["morning"],
    use: "Prevents blood clots",
    helps: "Keeps platelets from sticking together. Helps prevent heart attacks and strokes, especially after a heart stent.",
    how: "Take once a day, with or without food.",
    sideEffects: "Bruising or bleeding more easily.",
    precautions: "Do not stop it without asking your heart doctor. Tell your doctor or dentist you take it before any procedure."
  },
  {
    name: "Donepezil", dose: "5 mg", times: ["bedtime"],
    use: "Helps memory",
    helps: "May help memory, attention, and daily activities in Alzheimer's disease. It can ease symptoms but does not cure the disease.",
    how: "Take once a day at bedtime, with or without food.",
    sideEffects: "Nausea, diarrhea, poor appetite, trouble sleeping, vivid dreams, or muscle cramps.",
    precautions: "Tell your doctor about fainting, a very slow heartbeat, or black stools."
  },
  {
    name: "Escitalopram", dose: "10 mg", times: ["morning"],
    use: "Treats depression and anxiety",
    helps: "Helps balance serotonin, a natural brain chemical, to ease depression and anxiety.",
    how: "Take once a day, with or without food. It can take a few weeks to start helping.",
    sideEffects: "Nausea, trouble sleeping or sleepiness, sweating, or tiredness.",
    precautions: "Do not stop suddenly. Tell your doctor about new mood changes, confusion, or easy bleeding."
  },
  {
    name: "Famotidine", dose: "20 mg", times: ["bedtime"],
    use: "Reduces stomach acid",
    helps: "Lowers the amount of acid your stomach makes. Treats heartburn, acid reflux, and stomach ulcers.",
    how: "Take as directed, with or without food.",
    sideEffects: "Headache, constipation, diarrhea, or dizziness.",
    precautions: "Tell your doctor if you feel confused, or if you have kidney problems."
  },
  {
    name: "Finasteride", dose: "5 mg", times: ["morning"],
    use: "Helps an enlarged prostate",
    helps: "Slowly shrinks an enlarged prostate, which makes urinating easier.",
    how: "Take once a day, with or without food. It can take several months to help.",
    sideEffects: "Lower sex drive, trouble with erections, or less semen.",
    precautions: "Women who are or may be pregnant should not touch broken or crushed tablets. Tell your doctor about breast lumps or pain."
  },
  {
    name: "Furosemide", dose: "20 mg", times: ["morning"],
    use: "Water pill",
    helps: "A strong water pill. Removes extra fluid and swelling caused by heart, liver, or kidney problems, and can lower blood pressure.",
    how: "Take in the morning so you are not up at night to use the bathroom.",
    sideEffects: "Urinating often, dizziness, thirst, or muscle cramps.",
    precautions: "It can lower potassium, so your doctor may check blood tests. Tell your doctor about dizziness, cramps, or very little urine."
  },
  {
    name: "Gabapentin", dose: "300 mg", times: ["bedtime"],
    use: "Helps nerve pain",
    helps: "Calms overactive nerves. Treats nerve pain (for example after shingles) and some types of seizures.",
    how: "Take exactly as prescribed, with or without food. Do not stop suddenly.",
    sideEffects: "Sleepiness, dizziness, unsteady walking, or swelling in the hands or feet.",
    precautions: "It can make falls more likely. Be careful walking, avoid alcohol, and tell your doctor about any falls."
  },
  {
    name: "Glipizide", dose: "5 mg", times: ["morning"],
    use: "Lowers blood sugar",
    helps: "Helps your body release more insulin to lower blood sugar in type 2 diabetes.",
    how: "Take about 30 minutes before breakfast. Do not skip meals.",
    sideEffects: "Low blood sugar, upset stomach, or dizziness.",
    precautions: "Signs of low blood sugar are shaking, sweating, or confusion. Keep a sugary snack nearby and tell your doctor if it happens."
  },
  {
    name: "Hydrochlorothiazide", dose: "25 mg", times: ["morning"],
    use: "Water pill for blood pressure",
    helps: "A water pill. Lowers blood pressure and reduces swelling by helping the body remove extra salt and water.",
    how: "Take in the morning so you are not up at night to use the bathroom.",
    sideEffects: "Urinating more often, dizziness, or skin that burns more easily in the sun.",
    precautions: "Drink enough water unless your doctor says otherwise. Use sunscreen. Tell your doctor about muscle cramps or weakness."
  },
  {
    name: "Ibuprofen", dose: "200 mg", times: ["noon"],
    use: "Relieves pain and swelling",
    helps: "Eases pain, swelling, and fever, such as from arthritis or an injury.",
    how: "Take with food or milk. Use the smallest dose for the shortest time.",
    sideEffects: "Upset stomach, heartburn, or nausea.",
    precautions: "It can cause stomach bleeding, harm the kidneys, and raise blood pressure. Ask your doctor before using it often, especially if you take a blood thinner."
  },
  {
    name: "Levothyroxine", dose: "50 mcg", times: ["morning"],
    use: "Thyroid hormone",
    helps: "Replaces thyroid hormone when your body doesn't make enough (hypothyroidism). This helps your energy, weight, and body temperature.",
    how: "Take on an empty stomach with water, 30 to 60 minutes before breakfast.",
    sideEffects: "Few side effects at the right dose. Too much can cause a fast heartbeat, shakiness, trouble sleeping, or feeling too hot.",
    precautions: "Keep calcium or iron pills at least 4 hours apart from it. Tell your doctor about a racing heart or chest pain."
  },
  {
    name: "Lisinopril", dose: "10 mg", times: ["morning"],
    use: "Lowers blood pressure",
    helps: "Relaxes blood vessels to lower blood pressure. Also helps the heart after a heart attack or in heart failure.",
    how: "Take once a day at the same time, with or without food. It works even when you feel fine.",
    sideEffects: "Dry cough, dizziness, headache, or tiredness.",
    precautions: "Swelling of the face, lips, or tongue is an emergency: call 911. Tell your doctor about a cough that won't go away."
  },
  {
    name: "Losartan", dose: "50 mg", times: ["morning"],
    use: "Lowers blood pressure",
    helps: "Relaxes blood vessels to lower blood pressure. Also helps protect the kidneys in people with diabetes.",
    how: "Take once a day, with or without food.",
    sideEffects: "Dizziness, tiredness, or a stuffy nose.",
    precautions: "Stand up slowly. Swelling of the face, lips, or tongue is an emergency: call 911."
  },
  {
    name: "Metformin", dose: "500 mg", times: ["morning", "evening"],
    use: "Controls blood sugar",
    helps: "Lowers blood sugar in type 2 diabetes by helping your body use insulin better and making less sugar in the liver.",
    how: "Take with meals to protect your stomach.",
    sideEffects: "Upset stomach, diarrhea, gas, or a metallic taste. These often get better after a few weeks.",
    precautions: "Tell your doctor about bad vomiting, diarrhea, or feeling very weak. Tell them you take it before surgery or scans with dye."
  },
  {
    name: "Metoprolol", dose: "25 mg", times: ["morning", "evening"],
    use: "Lowers blood pressure",
    helps: "A beta blocker. Slows the heart and lowers blood pressure. Also helps chest pain and protects the heart after a heart attack.",
    how: "Take with or right after a meal.",
    sideEffects: "Tiredness, dizziness, or a slow heartbeat.",
    precautions: "Do not stop it suddenly. Tell your doctor if you feel very tired, dizzy, or short of breath."
  },
  {
    name: "Montelukast", dose: "10 mg", times: ["evening"],
    use: "Prevents asthma and allergy symptoms",
    helps: "Blocks chemicals that cause swelling in the airways. Helps prevent asthma symptoms and eases allergy symptoms.",
    how: "Take once a day in the evening. It does not stop a sudden asthma attack.",
    sideEffects: "Headache, stomach pain, or cough.",
    precautions: "Tell your doctor right away about mood changes, bad dreams, or thoughts of self-harm."
  },
  {
    name: "Omeprazole", dose: "20 mg", times: ["morning"],
    use: "Reduces stomach acid",
    helps: "Strongly lowers stomach acid. Treats heartburn, acid reflux, and stomach ulcers.",
    how: "Take 30 minutes before breakfast with water.",
    sideEffects: "Headache, stomach pain, nausea, or diarrhea.",
    precautions: "Ask your doctor if you need it for more than a few weeks. Long use can lower vitamin B12 and magnesium."
  },
  {
    name: "Pantoprazole", dose: "40 mg", times: ["morning"],
    use: "Reduces stomach acid",
    helps: "Strongly lowers stomach acid. Treats heartburn, acid reflux, and stomach ulcers.",
    how: "Take 30 minutes before breakfast. Swallow the tablet whole.",
    sideEffects: "Headache, diarrhea, nausea, or stomach pain.",
    precautions: "Ask your doctor if you need it for a long time. Long use can lower vitamin B12 and magnesium."
  },
  {
    name: "Pravastatin", dose: "40 mg", times: ["evening"],
    use: "Lowers cholesterol",
    helps: "A statin. Lowers 'bad' cholesterol (LDL) to reduce the risk of heart attack and stroke.",
    how: "Take once a day, with or without food.",
    sideEffects: "Muscle aches, headache, or upset stomach.",
    precautions: "Call your doctor about muscle pain or weakness you can't explain."
  },
  {
    name: "Prednisone", dose: "10 mg", times: ["morning"],
    use: "Calms inflammation",
    helps: "A steroid. Calms swelling and an overactive immune system in conditions like arthritis, asthma, and allergies.",
    how: "Take in the morning with food.",
    sideEffects: "Bigger appetite, trouble sleeping, mood changes, higher blood sugar, or fluid buildup.",
    precautions: "Do not stop suddenly if you have taken it for more than a few days. Long use can weaken bones and make infections more likely."
  },
  {
    name: "Rosuvastatin", dose: "10 mg", times: ["evening"],
    use: "Lowers cholesterol",
    helps: "A statin. Lowers 'bad' cholesterol (LDL) to reduce the risk of heart attack and stroke.",
    how: "Take once a day, at any time, with or without food.",
    sideEffects: "Muscle aches, headache, stomach pain, or nausea.",
    precautions: "Call your doctor about muscle pain or weakness you can't explain."
  },
  {
    name: "Sertraline", dose: "50 mg", times: ["morning"],
    use: "Treats depression and anxiety",
    helps: "Helps balance serotonin, a natural brain chemical, to ease depression and anxiety.",
    how: "Take once a day, with or without food. It can take a few weeks to start helping.",
    sideEffects: "Nausea, diarrhea, trouble sleeping, or sweating.",
    precautions: "Do not stop suddenly. Tell your doctor about new mood changes, confusion, or easy bleeding."
  },
  {
    name: "Simvastatin", dose: "20 mg", times: ["evening"],
    use: "Lowers cholesterol",
    helps: "A statin. Lowers 'bad' cholesterol (LDL) to reduce the risk of heart attack and stroke.",
    how: "Take in the evening. Avoid grapefruit juice.",
    sideEffects: "Muscle aches, constipation, or upset stomach.",
    precautions: "Call your doctor about muscle pain or weakness you can't explain."
  },
  {
    name: "Spironolactone", dose: "25 mg", times: ["morning"],
    use: "Water pill that keeps potassium",
    helps: "Helps heart failure, lowers blood pressure, and reduces fluid buildup, while keeping potassium in the body.",
    how: "Take at the same time each day, the same way each time (always with food, or always without).",
    sideEffects: "Dizziness, upset stomach, or breast tenderness or swelling.",
    precautions: "Avoid potassium pills and salt substitutes unless your doctor says yes. Tell your doctor about muscle weakness or an uneven heartbeat."
  },
  {
    name: "Tamsulosin", dose: "0.4 mg", times: ["evening"],
    use: "Helps urine flow",
    helps: "Relaxes muscles in the prostate and bladder so urine flows more easily in men with an enlarged prostate.",
    how: "Take 30 minutes after the same meal each day. Swallow the capsule whole.",
    sideEffects: "Dizziness, a runny nose, or less semen.",
    precautions: "Stand up slowly. Tell your eye doctor you take it before any cataract surgery."
  },
  {
    name: "Valsartan", dose: "80 mg", times: ["morning"],
    use: "Lowers blood pressure",
    helps: "Relaxes blood vessels to lower blood pressure and helps in heart failure.",
    how: "Take at the same time each day, with or without food.",
    sideEffects: "Dizziness, tiredness, or headache.",
    precautions: "Stand up slowly. Do not use potassium pills or salt substitutes unless your doctor says yes."
  },
  {
    name: "Warfarin", dose: "as directed", times: ["evening"],
    use: "Blood thinner",
    helps: "Slows blood clotting to prevent dangerous clots and strokes.",
    how: "Take at the same time every day. Go to every blood test, because your dose may change.",
    sideEffects: "Bruising or bleeding more easily.",
    precautions: "Get help for heavy bleeding or a bad fall. Keep the amount of leafy green vegetables you eat steady. Ask before starting any new medicine."
  }
];

// Brand names that may be printed on a label, and the medicine they mean
const brandNames = {
  "tylenol": "Acetaminophen", "zyloprim": "Allopurinol", "norvasc": "Amlodipine",
  "eliquis": "Apixaban", "bayer": "Aspirin", "ecotrin": "Aspirin", "tenormin": "Atenolol",
  "lipitor": "Atorvastatin", "coreg": "Carvedilol", "plavix": "Clopidogrel",
  "aricept": "Donepezil", "lexapro": "Escitalopram", "pepcid": "Famotidine",
  "proscar": "Finasteride", "lasix": "Furosemide", "neurontin": "Gabapentin",
  "glucotrol": "Glipizide", "advil": "Ibuprofen", "motrin": "Ibuprofen",
  "synthroid": "Levothyroxine", "levoxyl": "Levothyroxine", "zestril": "Lisinopril",
  "prinivil": "Lisinopril", "cozaar": "Losartan", "glucophage": "Metformin",
  "lopressor": "Metoprolol", "toprol": "Metoprolol", "singulair": "Montelukast",
  "prilosec": "Omeprazole", "protonix": "Pantoprazole", "pravachol": "Pravastatin",
  "crestor": "Rosuvastatin", "zoloft": "Sertraline", "zocor": "Simvastatin",
  "aldactone": "Spironolactone", "flomax": "Tamsulosin", "diovan": "Valsartan",
  "coumadin": "Warfarin", "jantoven": "Warfarin"
};

// Finds a medicine in the library by its name or brand name
// (capital letters don't matter). Returns null if we don't know it.
function findMedicineInfo(name) {
  let searchName = name.trim().toLowerCase();

  // if it's a brand name, switch to the real medicine name
  if (brandNames[searchName]) {
    searchName = brandNames[searchName].toLowerCase();
  }

  for (let i = 0; i < medicineLibrary.length; i++) {
    if (medicineLibrary[i].name.toLowerCase() === searchName) {
      return medicineLibrary[i];
    }
  }
  return null;
}