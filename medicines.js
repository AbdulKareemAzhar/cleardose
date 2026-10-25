// ClearDose - Medicine library (A to Z)
// Plain-language info about common medicines and supplements,
// summarized from official patient information (MedlinePlus, DailyMed,
// and the NIH Office of Dietary Supplements).
// It is a simple summary, not the full label. Always follow the
// person's own label and doctor.
//
// Each medicine has:
//   name, dose, times  - the usual starting choices for the form
//   often       - "daily", "weekly", or "asneeded" (only when needed)
//   count       - (optional) how many each time, if not 1
//   unit        - what one dose is: "pill", "puff", "drop", "spray",
//                 "injection", "application", or "capful"
//   supplement  - true for vitamins, minerals and supplements
//   use         - a short line shown under the name
//   helps       - what it is used for and how it helps
//   how         - how to take it (if the label doesn't say otherwise)
//   sideEffects - common side effects
//   precautions - warnings and when to call the doctor

const medicineLibrary = [
  {
    name: "Acetaminophen", dose: "500 mg", times: ["noon"],
    often: "daily", unit: "pill", supplement: false,
    use: "Relieves pain and fever",
    helps: "Eases mild to moderate pain, like headaches, muscle aches, and arthritis, and lowers fever. It does not reduce swelling.",
    how: "Take only as directed, with or without food. Do not take more than the label says in one day.",
    sideEffects: "Usually very few side effects at normal doses. Rarely, a skin rash.",
    precautions: "Many cold and flu medicines also contain acetaminophen, so check labels. Too much can harm the liver. Limit alcohol."
  },
  {
    name: "Albuterol", dose: "90 mcg", times: ["morning"],
    often: "asneeded", unit: "puff", count: 2, supplement: false,
    use: "Quick-relief inhaler",
    helps: "Quickly opens the airways during wheezing or an asthma or COPD attack.",
    how: "Use when needed for wheezing, usually 2 puffs. Shake the inhaler first.",
    sideEffects: "Shakiness or a fast heartbeat.",
    precautions: "If you need it more often than usual, your breathing is not well controlled: call your doctor. Call 911 if it does not help."
  },
  {
    name: "Alendronate", dose: "70 mg", times: ["morning"],
    often: "weekly", unit: "pill", supplement: false,
    use: "Strengthens bones",
    helps: "Slows bone loss and lowers the risk of fractures in osteoporosis.",
    how: "Take once a week, first thing in the morning, with a full glass of plain water. Stay upright and wait 30 minutes before eating or taking other medicines.",
    sideEffects: "Heartburn or stomach pain.",
    precautions: "Stop and call your doctor about trouble swallowing or chest pain. Tell your dentist you take it."
  },
  {
    name: "Allopurinol", dose: "100 mg", times: ["morning"],
    often: "daily", unit: "pill", supplement: false,
    use: "Prevents gout attacks",
    helps: "Lowers uric acid in the blood, which prevents gout attacks and some kidney stones. It does not treat a gout attack that has already started.",
    how: "Take after a meal. Drink plenty of water during the day.",
    sideEffects: "Upset stomach, diarrhea, or drowsiness. Gout flares can still happen in the first few months.",
    precautions: "Stop taking it and call your doctor right away if you get a skin rash."
  },
  {
    name: "Alprazolam", dose: "0.25 mg", times: ["morning"],
    often: "asneeded", unit: "pill", supplement: false,
    use: "Treats anxiety and panic",
    helps: "Quickly calms anxiety and panic attacks.",
    how: "Take only as prescribed, often only when needed.",
    sideEffects: "Drowsiness or poor balance.",
    precautions: "It can be habit-forming. Never mix with alcohol or opioid pain medicine. Do not stop suddenly after long use. Falls are more likely in older adults."
  },
  {
    name: "Amlodipine", dose: "5 mg", times: ["morning"],
    often: "daily", unit: "pill", supplement: false,
    use: "Lowers blood pressure",
    helps: "Relaxes blood vessels so blood flows more easily. Treats high blood pressure and some types of chest pain (angina).",
    how: "Take once a day, at the same time, with or without food.",
    sideEffects: "Swollen ankles or feet, headache, flushing, tiredness, or dizziness.",
    precautions: "Stand up slowly. Tell your doctor if swelling or dizziness bothers you, or if chest pain gets worse."
  },
  {
    name: "Amoxicillin", dose: "500 mg", times: ["morning", "noon", "evening"],
    often: "daily", unit: "pill", supplement: false,
    use: "Antibiotic",
    helps: "A penicillin antibiotic that treats infections caused by bacteria. It does not work for colds or flu.",
    how: "Take at evenly spaced times, with or without food. Finish the whole course, even if you feel better.",
    sideEffects: "Diarrhea, nausea, or rash.",
    precautions: "Do not take it if you are allergic to penicillin. Get help for hives, swelling, or trouble breathing."
  },
  {
    name: "Amoxicillin and Clavulanate", dose: "875 mg", times: ["morning", "evening"],
    often: "daily", unit: "pill", supplement: false,
    use: "Antibiotic",
    helps: "A stronger form of amoxicillin that treats sinus, chest, skin, and other bacterial infections.",
    how: "Take at the start of a meal, twice a day. Finish the whole course.",
    sideEffects: "Diarrhea or nausea.",
    precautions: "Do not take it if you are allergic to penicillin. Tell your doctor about liver problems."
  },
  {
    name: "Apixaban", dose: "5 mg", times: ["morning", "evening"],
    often: "daily", unit: "pill", supplement: false,
    use: "Blood thinner",
    helps: "Lowers the chance of a stroke in people with an uneven heartbeat (atrial fibrillation), and treats or prevents blood clots in the legs and lungs.",
    how: "Take twice a day, about 12 hours apart, with or without food.",
    sideEffects: "Bruising or bleeding more easily, like nosebleeds or bleeding gums.",
    precautions: "Do not stop it without talking to your doctor. Get help right away for heavy bleeding, a bad fall, or a head injury. Tell your dentist you take it."
  },
  {
    name: "Aripiprazole", dose: "5 mg", times: ["morning"],
    often: "daily", unit: "pill", supplement: false,
    use: "Treats bipolar disorder and schizophrenia",
    helps: "Helps balance brain chemicals in bipolar disorder and schizophrenia, and sometimes depression.",
    how: "Take once a day, with or without food.",
    sideEffects: "Restlessness, nausea, or trouble sleeping.",
    precautions: "Tell your doctor about a strong urge to keep moving, or new urges like gambling or shopping."
  },
  {
    name: "Aspirin", dose: "81 mg", times: ["morning"],
    often: "daily", unit: "pill", supplement: false,
    use: "Protects the heart",
    helps: "Low-dose aspirin makes blood cells called platelets less sticky. This can lower the risk of heart attack and stroke in people their doctor chose it for.",
    how: "Take with food and a full glass of water. Only take the dose your doctor gave you.",
    sideEffects: "Upset stomach, heartburn, or bruising easily.",
    precautions: "Only take daily aspirin if your doctor said so. Call your doctor about black stools, vomiting blood, or bleeding that won't stop."
  },
  {
    name: "Atenolol", dose: "25 mg", times: ["morning"],
    often: "daily", unit: "pill", supplement: false,
    use: "Lowers blood pressure",
    helps: "A beta blocker. Slows the heart and lowers blood pressure. It can also help chest pain (angina) and protect the heart after a heart attack.",
    how: "Take once a day at the same time, with or without food.",
    sideEffects: "Tiredness, dizziness, cold hands and feet, or a slow heartbeat.",
    precautions: "Do not stop it suddenly. Tell your doctor if you feel very dizzy, faint, or short of breath."
  },
  {
    name: "Atorvastatin", dose: "20 mg", times: ["evening"],
    often: "daily", unit: "pill", supplement: false,
    use: "Lowers cholesterol",
    helps: "A statin. Lowers 'bad' cholesterol (LDL) to reduce the risk of heart attack and stroke.",
    how: "Take once a day, at any time, with or without food. Avoid large amounts of grapefruit juice.",
    sideEffects: "Muscle or joint aches, diarrhea, or upset stomach.",
    precautions: "Call your doctor about muscle pain or weakness you can't explain, or dark-colored urine."
  },
  {
    name: "Azelastine", dose: "137 mcg", times: ["morning", "evening"],
    often: "daily", unit: "spray", supplement: false,
    use: "Nasal allergy spray",
    helps: "An antihistamine nasal spray that eases a stuffy, runny, or itchy nose.",
    how: "Use 1 to 2 sprays in each nostril once or twice a day.",
    sideEffects: "Bitter taste or drowsiness.",
    precautions: "It can make you sleepy. Avoid alcohol."
  },
  {
    name: "Azithromycin", dose: "250 mg", times: ["morning"],
    often: "daily", unit: "pill", supplement: false,
    use: "Antibiotic",
    helps: "An antibiotic that treats some infections caused by bacteria, like certain chest and sinus infections.",
    how: "Take once a day for the number of days prescribed, often 5 days.",
    sideEffects: "Diarrhea or nausea.",
    precautions: "Tell your doctor if you have heart rhythm problems. Finish the whole course."
  },
  {
    name: "Baclofen", dose: "5 mg", times: ["morning", "noon", "evening"],
    often: "daily", unit: "pill", supplement: false,
    use: "Relaxes tight muscles",
    helps: "Relaxes tight, stiff muscles from conditions like multiple sclerosis or spine injuries.",
    how: "Take 3 times a day as prescribed.",
    sideEffects: "Drowsiness or weakness.",
    precautions: "Do not stop suddenly; it can be dangerous. The dose may be lower with kidney problems."
  },
  {
    name: "Benazepril", dose: "10 mg", times: ["morning"],
    often: "daily", unit: "pill", supplement: false,
    use: "Lowers blood pressure",
    helps: "Relaxes blood vessels to lower blood pressure.",
    how: "Take once a day at the same time, with or without food.",
    sideEffects: "Dry cough or dizziness.",
    precautions: "Swelling of the face, lips, or tongue is an emergency: call 911. Your doctor may check potassium and kidneys. Not safe in pregnancy."
  },
  {
    name: "Benzonatate", dose: "100 mg", times: ["morning", "noon", "evening"],
    often: "asneeded", unit: "pill", supplement: false,
    use: "Calms cough",
    helps: "Numbs the cough reflex in the lungs to ease coughing.",
    how: "Take when needed, up to 3 times a day. Swallow the capsule whole; do not chew or suck it.",
    sideEffects: "Drowsiness or dizziness.",
    precautions: "Chewing it can numb the mouth and throat and cause choking. Keep away from children: it can be deadly to them."
  },
  {
    name: "Budesonide and Formoterol", dose: "160/4.5 mcg", times: ["morning", "evening"],
    often: "daily", unit: "puff", count: 2, supplement: false,
    use: "Daily inhaler for asthma and COPD",
    helps: "Combines a steroid that calms airway swelling with a medicine that keeps airways open. Used to control asthma and COPD.",
    how: "Use 2 inhalations twice a day, morning and evening. Rinse your mouth and spit afterward.",
    sideEffects: "Thrush (white patches in the mouth), hoarse voice, or shakiness.",
    precautions: "Use it for sudden symptoms only if your doctor's asthma plan says so."
  },
  {
    name: "Bupropion", dose: "150 mg", times: ["morning"],
    often: "daily", unit: "pill", supplement: false,
    use: "Treats depression",
    helps: "Helps balance brain chemicals to ease depression. Another form helps people quit smoking.",
    how: "Take in the morning. Swallow long-acting tablets whole.",
    sideEffects: "Dry mouth, trouble sleeping, or nausea.",
    precautions: "It can cause seizures in some people. Tell your doctor about seizures, eating disorders, or new mood changes."
  },
  {
    name: "Buspirone", dose: "5 mg", times: ["morning", "evening"],
    often: "daily", unit: "pill", supplement: false,
    use: "Treats anxiety",
    helps: "Eases long-lasting worry and anxiety.",
    how: "Take 2 or 3 times a day, the same way each time (always with food or always without). It takes a few weeks to work.",
    sideEffects: "Dizziness, nausea, or headache.",
    precautions: "It does not work right away for sudden panic. Avoid large amounts of grapefruit juice."
  },
  {
    name: "Calcium Carbonate", dose: "600 mg", times: ["morning", "evening"],
    often: "daily", unit: "pill", supplement: true,
    use: "Calcium supplement",
    helps: "Calcium keeps bones strong. Tums also eases heartburn.",
    how: "Take with meals. Take no more than 500 to 600 mg at one time.",
    sideEffects: "Constipation or bloating.",
    precautions: "Keep it a few hours apart from iron, thyroid medicine, and some antibiotics."
  },
  {
    name: "Carvedilol", dose: "6.25 mg", times: ["morning", "evening"],
    often: "daily", unit: "pill", supplement: false,
    use: "Helps the heart",
    helps: "A beta blocker. Helps the heart pump better in heart failure and lowers blood pressure.",
    how: "Take twice a day with food.",
    sideEffects: "Dizziness, tiredness, slow heartbeat, or weight gain.",
    precautions: "Do not stop it suddenly. Stand up slowly. Tell your doctor about sudden weight gain or new swelling."
  },
  {
    name: "Celecoxib", dose: "200 mg", times: ["morning"],
    often: "daily", unit: "pill", supplement: false,
    use: "Relieves arthritis pain",
    helps: "An NSAID that eases pain and swelling from arthritis.",
    how: "Take once or twice a day, with or without food.",
    sideEffects: "Upset stomach or swelling.",
    precautions: "It can cause stomach bleeding, harm the kidneys, and raise heart risks. Do not take it if you are allergic to sulfa drugs."
  },
  {
    name: "Cephalexin", dose: "500 mg", times: ["morning", "noon", "evening"],
    often: "daily", unit: "pill", supplement: false,
    use: "Antibiotic",
    helps: "An antibiotic for skin, urinary, and other infections caused by bacteria.",
    how: "Take at evenly spaced times through the day. Finish the whole course.",
    sideEffects: "Nausea or diarrhea.",
    precautions: "Tell your doctor if you have had a bad reaction to penicillin or similar antibiotics."
  },
  {
    name: "Cetirizine", dose: "10 mg", times: ["evening"],
    often: "daily", unit: "pill", supplement: false,
    use: "Treats allergies",
    helps: "An antihistamine that eases sneezing, itchy eyes, runny nose, and hives.",
    how: "Take once a day. If it makes you sleepy, take it in the evening.",
    sideEffects: "Sleepiness or dry mouth.",
    precautions: "Do not drive until you know how it affects you. The dose may be lower with kidney problems."
  },
  {
    name: "Chlorthalidone", dose: "25 mg", times: ["morning"],
    often: "daily", unit: "pill", supplement: false,
    use: "Water pill for blood pressure",
    helps: "A water pill. Lowers blood pressure and reduces swelling by helping the body get rid of extra salt and water.",
    how: "Take in the morning so you are not up at night to use the bathroom.",
    sideEffects: "Urinating more often, dizziness, or low potassium.",
    precautions: "Your doctor may check blood tests for potassium and kidneys. Tell your doctor about muscle cramps or weakness."
  },
  {
    name: "Citalopram", dose: "20 mg", times: ["morning"],
    often: "daily", unit: "pill", supplement: false,
    use: "Treats depression",
    helps: "Helps balance serotonin, a natural brain chemical, to ease depression.",
    how: "Take once a day, morning or evening. It can take a few weeks to help.",
    sideEffects: "Nausea, sweating, or sexual side effects.",
    precautions: "Do not stop suddenly. High doses can affect the heart rhythm. Tell your doctor about new mood changes."
  },
  {
    name: "Clindamycin", dose: "300 mg", times: ["morning", "noon", "evening"],
    often: "daily", unit: "pill", supplement: false,
    use: "Antibiotic",
    helps: "An antibiotic for some skin, bone, and dental infections.",
    how: "Take at evenly spaced times with a full glass of water. Finish the whole course.",
    sideEffects: "Diarrhea or nausea.",
    precautions: "Call your doctor right away about severe or watery diarrhea, even weeks after finishing."
  },
  {
    name: "Clobetasol", dose: "0.05%", times: ["morning", "evening"],
    often: "daily", unit: "application", supplement: false,
    use: "Very strong steroid cream",
    helps: "A very strong steroid cream for bad flares of psoriasis or eczema.",
    how: "Apply a thin layer twice a day for a short time, usually no more than 2 weeks.",
    sideEffects: "Burning or thin skin.",
    precautions: "Do not use on the face, groin, or armpits. Do not cover with bandages unless told."
  },
  {
    name: "Clonazepam", dose: "0.5 mg", times: ["morning", "evening"],
    often: "daily", unit: "pill", supplement: false,
    use: "Treats panic and seizures",
    helps: "Calms the brain. Treats panic disorder and some seizures.",
    how: "Take as prescribed, often morning and evening.",
    sideEffects: "Drowsiness or dizziness.",
    precautions: "It can be habit-forming. Never mix with alcohol or opioid pain medicine. Stop only with your doctor's help. Falls are more likely in older adults."
  },
  {
    name: "Clonidine", dose: "0.1 mg", times: ["morning", "bedtime"],
    often: "daily", unit: "pill", supplement: false,
    use: "Lowers blood pressure",
    helps: "Calms the nerve signals that tighten blood vessels, which lowers blood pressure.",
    how: "Take as prescribed, often in the morning and at bedtime.",
    sideEffects: "Dry mouth, sleepiness, or dizziness.",
    precautions: "Do not stop it suddenly: blood pressure can shoot up. Be careful with alcohol and other medicines that make you sleepy."
  },
  {
    name: "Clopidogrel", dose: "75 mg", times: ["morning"],
    often: "daily", unit: "pill", supplement: false,
    use: "Prevents blood clots",
    helps: "Keeps platelets from sticking together. Helps prevent heart attacks and strokes, especially after a heart stent.",
    how: "Take once a day, with or without food.",
    sideEffects: "Bruising or bleeding more easily.",
    precautions: "Do not stop it without asking your heart doctor. Tell your doctor or dentist you take it before any procedure."
  },
  {
    name: "Cyclobenzaprine", dose: "5 mg", times: ["bedtime"],
    often: "daily", unit: "pill", supplement: false,
    use: "Relaxes muscle spasms",
    helps: "Relaxes painful muscle spasms for a short time.",
    how: "Take as prescribed, often at bedtime first, up to 3 times a day.",
    sideEffects: "Drowsiness or dry mouth.",
    precautions: "It can cause confusion and falls in older adults. Avoid alcohol and driving."
  },
  {
    name: "Dapagliflozin", dose: "10 mg", times: ["morning"],
    often: "daily", unit: "pill", supplement: false,
    use: "Lowers blood sugar, protects heart",
    helps: "Helps the kidneys remove extra sugar through urine. Treats type 2 diabetes, heart failure, and kidney disease.",
    how: "Take once a day in the morning, with or without food.",
    sideEffects: "Urinating more often or yeast infections.",
    precautions: "Drink enough fluids. Ask your doctor about stopping it before surgery. Get help for nausea, vomiting, or trouble breathing."
  },
  {
    name: "Diclofenac Gel", dose: "1%", times: ["morning", "noon", "evening", "bedtime"],
    often: "daily", unit: "application", supplement: false,
    use: "Pain-relief gel for joints",
    helps: "An NSAID gel that eases arthritis pain in joints like knees and hands.",
    how: "Use the dosing card to measure. Rub into the joint up to 4 times a day. Wash your hands after, unless treating your hands.",
    sideEffects: "Skin irritation or rash.",
    precautions: "Do not use on broken skin. Do not use with other NSAIDs unless your doctor says so."
  },
  {
    name: "Diltiazem", dose: "120 mg", times: ["morning"],
    often: "daily", unit: "pill", supplement: false,
    use: "Lowers blood pressure and heart rate",
    helps: "Relaxes blood vessels and slows the heart. Treats high blood pressure, chest pain (angina), and a fast, uneven heartbeat.",
    how: "Take at the same time every day. Swallow long-acting capsules whole.",
    sideEffects: "Swollen ankles, constipation, headache, or a slow heartbeat.",
    precautions: "Tell your doctor if you have heart failure or take other medicines that slow the heart. Stand up slowly."
  },
  {
    name: "Docusate", dose: "100 mg", times: ["morning"],
    often: "daily", unit: "pill", supplement: false,
    use: "Stool softener",
    helps: "Softens stool to make bowel movements easier.",
    how: "Take once or twice a day with a glass of water.",
    sideEffects: "Stomach cramps or diarrhea.",
    precautions: "Do not use if you have stomach pain, nausea, or vomiting without asking a doctor."
  },
  {
    name: "Donepezil", dose: "5 mg", times: ["bedtime"],
    often: "daily", unit: "pill", supplement: false,
    use: "Helps memory",
    helps: "May help memory, attention, and daily activities in Alzheimer's disease. It can ease symptoms but does not cure the disease.",
    how: "Take once a day at bedtime, with or without food.",
    sideEffects: "Nausea, diarrhea, poor appetite, trouble sleeping, vivid dreams, or muscle cramps.",
    precautions: "Tell your doctor about fainting, a very slow heartbeat, or black stools."
  },
  {
    name: "Doxycycline", dose: "100 mg", times: ["morning", "evening"],
    often: "daily", unit: "pill", supplement: false,
    use: "Antibiotic",
    helps: "An antibiotic for some infections caused by bacteria, and for acne.",
    how: "Take with a full glass of water and stay upright for 30 minutes. Keep it 2 hours apart from calcium, iron, and antacids.",
    sideEffects: "Nausea or skin that burns easily in the sun.",
    precautions: "Use sunscreen. Finish the whole course. Not safe in pregnancy."
  },
  {
    name: "Dulaglutide", dose: "0.75 mg", times: ["morning"],
    often: "weekly", unit: "injection", supplement: false,
    use: "Lowers blood sugar",
    helps: "Helps your body release insulin when blood sugar is high. Used for type 2 diabetes.",
    how: "Injected once a week, on the same day each week, at any time of day.",
    sideEffects: "Nausea or diarrhea, mostly when starting.",
    precautions: "Get help for bad stomach pain that won't go away. Not for people with a personal or family history of certain thyroid cancers."
  },
  {
    name: "Duloxetine", dose: "30 mg", times: ["morning"],
    often: "daily", unit: "pill", supplement: false,
    use: "Treats depression, anxiety, nerve pain",
    helps: "Helps balance brain chemicals. Treats depression, anxiety, nerve pain from diabetes, and long-term pain.",
    how: "Take once a day. Swallow the capsule whole.",
    sideEffects: "Nausea, sweating, or dry mouth.",
    precautions: "Do not stop suddenly. Limit alcohol and tell your doctor if you have liver problems."
  },
  {
    name: "Empagliflozin", dose: "10 mg", times: ["morning"],
    often: "daily", unit: "pill", supplement: false,
    use: "Lowers blood sugar, protects heart",
    helps: "Helps the kidneys remove extra sugar through urine. Treats type 2 diabetes and also helps the heart and kidneys.",
    how: "Take once a day in the morning, with or without food.",
    sideEffects: "Urinating more often or genital yeast infections.",
    precautions: "Drink enough fluids. Ask your doctor about stopping it before surgery. Get help for nausea, vomiting, or trouble breathing."
  },
  {
    name: "Escitalopram", dose: "10 mg", times: ["morning"],
    often: "daily", unit: "pill", supplement: false,
    use: "Treats depression and anxiety",
    helps: "Helps balance serotonin, a natural brain chemical, to ease depression and anxiety.",
    how: "Take once a day, with or without food. It can take a few weeks to start helping.",
    sideEffects: "Nausea, trouble sleeping or sleepiness, sweating, or tiredness.",
    precautions: "Do not stop suddenly. Tell your doctor about new mood changes, confusion, or easy bleeding."
  },
  {
    name: "Esomeprazole", dose: "20 mg", times: ["morning"],
    often: "daily", unit: "pill", supplement: false,
    use: "Reduces stomach acid",
    helps: "Strongly lowers stomach acid. Treats heartburn, acid reflux, and ulcers.",
    how: "Take before breakfast.",
    sideEffects: "Headache or diarrhea.",
    precautions: "Use the lowest dose for the shortest time. Long use can lower vitamin B12 and magnesium."
  },
  {
    name: "Estradiol", dose: "0.5 mg", times: ["morning"],
    often: "daily", unit: "pill", supplement: false,
    use: "Estrogen hormone",
    helps: "Replaces estrogen to ease menopause symptoms like hot flashes.",
    how: "Take at the same time every day.",
    sideEffects: "Breast tenderness or nausea.",
    precautions: "It can raise the risk of blood clots and stroke. Women with a uterus usually also need progesterone."
  },
  {
    name: "Ezetimibe", dose: "10 mg", times: ["morning"],
    often: "daily", unit: "pill", supplement: false,
    use: "Lowers cholesterol",
    helps: "Lowers 'bad' cholesterol (LDL) by blocking cholesterol from food in the gut. Often used with a statin.",
    how: "Take once a day, at any time, with or without food.",
    sideEffects: "Diarrhea or joint pain.",
    precautions: "Tell your doctor about muscle pain or weakness, especially if you also take a statin."
  },
  {
    name: "Famotidine", dose: "20 mg", times: ["bedtime"],
    often: "daily", unit: "pill", supplement: false,
    use: "Reduces stomach acid",
    helps: "Lowers the amount of acid your stomach makes. Treats heartburn, acid reflux, and stomach ulcers.",
    how: "Take as directed, with or without food.",
    sideEffects: "Headache, constipation, diarrhea, or dizziness.",
    precautions: "Tell your doctor if you feel confused, or if you have kidney problems."
  },
  {
    name: "Fenofibrate", dose: "145 mg", times: ["morning"],
    often: "daily", unit: "pill", supplement: false,
    use: "Lowers triglycerides",
    helps: "Lowers triglycerides (a type of fat in the blood) and can raise 'good' cholesterol.",
    how: "Take once a day. Some brands are taken with food; follow your label.",
    sideEffects: "Upset stomach or muscle aches.",
    precautions: "Your doctor may check kidney and liver tests. Tell your doctor about muscle pain, especially if you also take a statin."
  },
  {
    name: "Ferrous Sulfate", dose: "325 mg", times: ["morning"],
    often: "daily", unit: "pill", supplement: true,
    use: "Iron supplement",
    helps: "Iron helps your blood carry oxygen. It treats iron-deficiency anemia.",
    how: "Take in the morning on an empty stomach if you can; take with food if it upsets your stomach.",
    sideEffects: "Constipation, nausea, or dark stools.",
    precautions: "Keep it at least 4 hours apart from thyroid medicine. Keep away from children: too much iron can be deadly to them."
  },
  {
    name: "Finasteride", dose: "5 mg", times: ["morning"],
    often: "daily", unit: "pill", supplement: false,
    use: "Helps an enlarged prostate",
    helps: "Slowly shrinks an enlarged prostate, which makes urinating easier.",
    how: "Take once a day, with or without food. It can take several months to help.",
    sideEffects: "Lower sex drive, trouble with erections, or less semen.",
    precautions: "Women who are or may be pregnant should not touch broken or crushed tablets. Tell your doctor about breast lumps or pain."
  },
  {
    name: "Fish Oil", dose: "1,000 mg", times: ["morning"],
    often: "daily", unit: "pill", supplement: true,
    use: "Omega-3 supplement",
    helps: "Fish oil has omega-3 fats. Prescription-strength doses lower triglycerides; as a supplement it is often taken for heart health.",
    how: "Take with a meal to avoid fishy burps.",
    sideEffects: "Fishy taste or burps, or upset stomach.",
    precautions: "It may raise the risk of bleeding with blood thinners like warfarin or apixaban. Tell your doctor before surgery."
  },
  {
    name: "Fluconazole", dose: "150 mg", times: ["morning"],
    often: "asneeded", unit: "pill", supplement: false,
    use: "Treats yeast infections",
    helps: "An antifungal that treats yeast and some fungal infections.",
    how: "Take as prescribed; for a vaginal yeast infection it is often a single pill.",
    sideEffects: "Nausea or headache.",
    precautions: "It interacts with many medicines, including blood thinners. Tell your doctor everything you take."
  },
  {
    name: "Fluoxetine", dose: "20 mg", times: ["morning"],
    often: "daily", unit: "pill", supplement: false,
    use: "Treats depression and anxiety",
    helps: "Helps balance serotonin, a natural brain chemical, to ease depression, anxiety, and OCD.",
    how: "Take once a day, usually in the morning. It can take a few weeks to help.",
    sideEffects: "Nausea, trouble sleeping, or sexual side effects.",
    precautions: "Do not stop suddenly. Tell your doctor about new mood changes or thoughts of self-harm."
  },
  {
    name: "Fluticasone and Salmeterol", dose: "250/50 mcg", times: ["morning", "evening"],
    often: "daily", unit: "puff", supplement: false,
    use: "Daily inhaler for asthma and COPD",
    helps: "Combines a steroid that calms airway swelling with a long-acting medicine that keeps airways open. Used every day to control asthma and COPD.",
    how: "Use 1 inhalation twice a day, morning and evening. Rinse your mouth and spit afterward.",
    sideEffects: "Thrush (white patches in the mouth), hoarse voice, or shakiness.",
    precautions: "It is not for sudden attacks; use your quick-relief inhaler for that."
  },
  {
    name: "Fluticasone Nasal", dose: "50 mcg", times: ["morning"],
    often: "daily", unit: "spray", supplement: false,
    use: "Nasal allergy spray",
    helps: "Calms swelling in the nose from allergies, easing a stuffy or runny nose and sneezing.",
    how: "Use 1 to 2 sprays in each nostril once a day. Aim away from the middle of your nose.",
    sideEffects: "Nosebleeds or a sore, dry nose.",
    precautions: "It works best when used every day; it is not for instant relief."
  },
  {
    name: "Folic Acid", dose: "400 mcg", times: ["morning"],
    often: "daily", unit: "pill", supplement: true,
    use: "Folate (vitamin B9)",
    helps: "Folic acid helps make healthy red blood cells and is important before and during pregnancy.",
    how: "Take once a day at the same time.",
    sideEffects: "Occasional nausea.",
    precautions: "High doses can hide low vitamin B12. Tell your doctor if you take seizure medicines."
  },
  {
    name: "Furosemide", dose: "20 mg", times: ["morning"],
    often: "daily", unit: "pill", supplement: false,
    use: "Water pill",
    helps: "A strong water pill. Removes extra fluid and swelling caused by heart, liver, or kidney problems, and can lower blood pressure.",
    how: "Take in the morning so you are not up at night to use the bathroom.",
    sideEffects: "Urinating often, dizziness, thirst, or muscle cramps.",
    precautions: "It can lower potassium, so your doctor may check blood tests. Tell your doctor about dizziness, cramps, or very little urine."
  },
  {
    name: "Gabapentin", dose: "300 mg", times: ["bedtime"],
    often: "daily", unit: "pill", supplement: false,
    use: "Helps nerve pain",
    helps: "Calms overactive nerves. Treats nerve pain (for example after shingles) and some types of seizures.",
    how: "Take exactly as prescribed, with or without food. Do not stop suddenly.",
    sideEffects: "Sleepiness, dizziness, unsteady walking, or swelling in the hands or feet.",
    precautions: "It can make falls more likely. Be careful walking, avoid alcohol, and tell your doctor about any falls."
  },
  {
    name: "Glimepiride", dose: "2 mg", times: ["morning"],
    often: "daily", unit: "pill", supplement: false,
    use: "Lowers blood sugar",
    helps: "Helps your body release more insulin to lower blood sugar in type 2 diabetes.",
    how: "Take with breakfast or your first main meal. Do not skip meals.",
    sideEffects: "Low blood sugar or weight gain.",
    precautions: "Signs of low blood sugar are shaking, sweating, or confusion. Keep a sugary snack nearby."
  },
  {
    name: "Glipizide", dose: "5 mg", times: ["morning"],
    often: "daily", unit: "pill", supplement: false,
    use: "Lowers blood sugar",
    helps: "Helps your body release more insulin to lower blood sugar in type 2 diabetes.",
    how: "Take about 30 minutes before breakfast. Do not skip meals.",
    sideEffects: "Low blood sugar, upset stomach, or dizziness.",
    precautions: "Signs of low blood sugar are shaking, sweating, or confusion. Keep a sugary snack nearby and tell your doctor if it happens."
  },
  {
    name: "Hydralazine", dose: "25 mg", times: ["morning", "noon", "evening"],
    often: "daily", unit: "pill", supplement: false,
    use: "Lowers blood pressure",
    helps: "Relaxes blood vessels to lower blood pressure. Sometimes used with other medicines for heart failure.",
    how: "Take as prescribed, spread through the day, usually 2 to 4 times a day.",
    sideEffects: "Headache, flushing, or a fast heartbeat.",
    precautions: "Tell your doctor about joint pain, fever, or a rash, which can be signs of a rare reaction. Keep checking your blood pressure."
  },
  {
    name: "Hydrochlorothiazide", dose: "25 mg", times: ["morning"],
    often: "daily", unit: "pill", supplement: false,
    use: "Water pill for blood pressure",
    helps: "A water pill. Lowers blood pressure and reduces swelling by helping the body remove extra salt and water.",
    how: "Take in the morning so you are not up at night to use the bathroom.",
    sideEffects: "Urinating more often, dizziness, or skin that burns more easily in the sun.",
    precautions: "Drink enough water unless your doctor says otherwise. Use sunscreen. Tell your doctor about muscle cramps or weakness."
  },
  {
    name: "Hydroxyzine", dose: "25 mg", times: ["bedtime"],
    often: "asneeded", unit: "pill", supplement: false,
    use: "Eases anxiety and itching",
    helps: "An antihistamine that calms anxiety and relieves itching.",
    how: "Take when needed, as prescribed. It often makes you sleepy, so evening may be best.",
    sideEffects: "Drowsiness or dry mouth.",
    precautions: "Do not drive until you know how it affects you. Older adults are more likely to feel confused or fall."
  },
  {
    name: "Ibuprofen", dose: "200 mg", times: ["noon"],
    often: "daily", unit: "pill", supplement: false,
    use: "Relieves pain and swelling",
    helps: "Eases pain, swelling, and fever, such as from arthritis or an injury.",
    how: "Take with food or milk. Use the smallest dose for the shortest time.",
    sideEffects: "Upset stomach, heartburn, or nausea.",
    precautions: "It can cause stomach bleeding, harm the kidneys, and raise blood pressure. Ask your doctor before using it often, especially if you take a blood thinner."
  },
  {
    name: "Insulin Aspart", dose: "4 units", times: ["morning", "noon", "evening"],
    often: "daily", unit: "injection", supplement: false,
    use: "Mealtime insulin",
    helps: "Fast-acting insulin that controls the rise in blood sugar from meals.",
    how: "NovoLog is injected about 5 to 10 minutes before meals. Timing differs by brand; follow your label.",
    sideEffects: "Low blood sugar or redness where you inject.",
    precautions: "Do not inject if you are skipping the meal. Know the signs of low blood sugar: shaking, sweating, confusion."
  },
  {
    name: "Insulin Glargine", dose: "10 units", times: ["bedtime"],
    often: "daily", unit: "injection", supplement: false,
    use: "Long-acting insulin",
    helps: "Long-acting insulin that keeps blood sugar steady through the day and night.",
    how: "Inject once a day at the same time. Your doctor sets your number of units.",
    sideEffects: "Low blood sugar, weight gain, or redness where you inject.",
    precautions: "Check your blood sugar as told. Never share pens. Brands have different strengths, so never switch without your doctor."
  },
  {
    name: "Insulin Lispro", dose: "4 units", times: ["morning", "noon", "evening"],
    often: "daily", unit: "injection", supplement: false,
    use: "Mealtime insulin",
    helps: "Fast-acting insulin that controls the rise in blood sugar from meals.",
    how: "Inject within 15 minutes before a meal or right after eating. Your doctor sets your units.",
    sideEffects: "Low blood sugar or redness where you inject.",
    precautions: "Do not inject if you are skipping the meal. Know the signs of low blood sugar: shaking, sweating, confusion."
  },
  {
    name: "Irbesartan", dose: "150 mg", times: ["morning"],
    often: "daily", unit: "pill", supplement: false,
    use: "Lowers blood pressure",
    helps: "Relaxes blood vessels to lower blood pressure. Also helps protect the kidneys in people with diabetes.",
    how: "Take once a day at the same time, with or without food.",
    sideEffects: "Dizziness. It can also raise potassium.",
    precautions: "Your doctor may check your kidneys and potassium. Stand up slowly. Not safe in pregnancy."
  },
  {
    name: "Ketoconazole Shampoo", dose: "2%", times: ["morning"],
    often: "asneeded", unit: "application", supplement: false,
    use: "Dandruff shampoo",
    helps: "An antifungal shampoo for dandruff and flaky, itchy scalp.",
    how: "Use when showering, usually twice a week for 2 to 4 weeks. Leave it on for a few minutes, then rinse.",
    sideEffects: "Dry or irritated scalp.",
    precautions: "Keep it out of your eyes. For the scalp only."
  },
  {
    name: "Lamotrigine", dose: "25 mg", times: ["morning"],
    often: "daily", unit: "pill", supplement: false,
    use: "Prevents seizures, steadies mood",
    helps: "Calms overactive brain signals. Prevents seizures and helps keep mood steady in bipolar disorder.",
    how: "Take at the same time every day. The dose is raised slowly.",
    sideEffects: "Dizziness, headache, or rash.",
    precautions: "A rash can be serious: call your doctor right away if you get one. Never raise the dose faster than prescribed."
  },
  {
    name: "Latanoprost", dose: "0.005%", times: ["bedtime"],
    often: "daily", unit: "drop", supplement: false,
    use: "Eye drops for glaucoma",
    helps: "Lowers pressure in the eye to protect your vision in glaucoma.",
    how: "Put 1 drop in the affected eye(s) once a day in the evening. Don't touch the dropper to your eye.",
    sideEffects: "Eye redness, or slow darkening of the eye color and eyelashes.",
    precautions: "Take out contact lenses before using and wait 15 minutes to put them back."
  },
  {
    name: "Levocetirizine", dose: "5 mg", times: ["evening"],
    often: "daily", unit: "pill", supplement: false,
    use: "Treats allergies",
    helps: "An antihistamine that eases allergy symptoms and hives.",
    how: "Take once a day in the evening.",
    sideEffects: "Sleepiness or tiredness.",
    precautions: "The dose may be lower with kidney problems. Do not drive until you know how it affects you."
  },
  {
    name: "Levothyroxine", dose: "50 mcg", times: ["morning"],
    often: "daily", unit: "pill", supplement: false,
    use: "Thyroid hormone",
    helps: "Replaces thyroid hormone when your body doesn't make enough (hypothyroidism). This helps your energy, weight, and body temperature.",
    how: "Take on an empty stomach with water, 30 to 60 minutes before breakfast.",
    sideEffects: "Few side effects at the right dose. Too much can cause a fast heartbeat, shakiness, trouble sleeping, or feeling too hot.",
    precautions: "Keep calcium or iron pills at least 4 hours apart from it. Tell your doctor about a racing heart or chest pain."
  },
  {
    name: "Lisdexamfetamine", dose: "30 mg", times: ["morning"],
    often: "daily", unit: "pill", supplement: false,
    use: "Treats ADHD",
    helps: "Helps focus and attention in ADHD. Also treats binge-eating disorder in adults.",
    how: "Take in the morning, with or without food.",
    sideEffects: "Less appetite, trouble sleeping, or dry mouth.",
    precautions: "It can be misused, so keep it safe. Your doctor will check your heart rate and blood pressure."
  },
  {
    name: "Lisinopril", dose: "10 mg", times: ["morning"],
    often: "daily", unit: "pill", supplement: false,
    use: "Lowers blood pressure",
    helps: "Relaxes blood vessels to lower blood pressure. Also helps the heart after a heart attack or in heart failure.",
    how: "Take once a day at the same time, with or without food. It works even when you feel fine.",
    sideEffects: "Dry cough, dizziness, headache, or tiredness.",
    precautions: "Swelling of the face, lips, or tongue is an emergency: call 911. Tell your doctor about a cough that won't go away."
  },
  {
    name: "Loratadine", dose: "10 mg", times: ["morning"],
    often: "daily", unit: "pill", supplement: false,
    use: "Treats allergies",
    helps: "An antihistamine that eases sneezing, itchy eyes, runny nose, and hives, and is less likely to make you sleepy.",
    how: "Take once a day at the same time.",
    sideEffects: "Headache or dry mouth.",
    precautions: "Ask your doctor about the dose if you have liver or kidney disease."
  },
  {
    name: "Losartan", dose: "50 mg", times: ["morning"],
    often: "daily", unit: "pill", supplement: false,
    use: "Lowers blood pressure",
    helps: "Relaxes blood vessels to lower blood pressure. Also helps protect the kidneys in people with diabetes.",
    how: "Take once a day, with or without food.",
    sideEffects: "Dizziness, tiredness, or a stuffy nose.",
    precautions: "Stand up slowly. Swelling of the face, lips, or tongue is an emergency: call 911."
  },
  {
    name: "Magnesium", dose: "400 mg", times: ["evening"],
    often: "daily", unit: "pill", supplement: true,
    use: "Magnesium supplement",
    helps: "Magnesium helps muscles, nerves, and bones. It is used for low magnesium and sometimes for leg cramps or constipation.",
    how: "Take with food.",
    sideEffects: "Diarrhea or stomach cramps.",
    precautions: "Ask your doctor first if you have kidney disease. Keep it a few hours apart from some antibiotics and thyroid medicine."
  },
  {
    name: "Meloxicam", dose: "7.5 mg", times: ["morning"],
    often: "daily", unit: "pill", supplement: false,
    use: "Relieves arthritis pain",
    helps: "An NSAID that eases pain, swelling, and stiffness from arthritis.",
    how: "Take once a day, with food if it upsets your stomach.",
    sideEffects: "Upset stomach or swelling.",
    precautions: "It can cause stomach bleeding, harm the kidneys, and raise heart risks. Do not mix with other NSAIDs like ibuprofen or naproxen."
  },
  {
    name: "Metformin", dose: "500 mg", times: ["morning", "evening"],
    often: "daily", unit: "pill", supplement: false,
    use: "Controls blood sugar",
    helps: "Lowers blood sugar in type 2 diabetes by helping your body use insulin better and making less sugar in the liver.",
    how: "Take with meals to protect your stomach.",
    sideEffects: "Upset stomach, diarrhea, gas, or a metallic taste. These often get better after a few weeks.",
    precautions: "Tell your doctor about bad vomiting, diarrhea, or feeling very weak. Tell them you take it before surgery or scans with dye."
  },
  {
    name: "Methocarbamol", dose: "500 mg", times: ["morning", "noon", "evening"],
    often: "daily", unit: "pill", supplement: false,
    use: "Relaxes muscle spasms",
    helps: "Relaxes painful muscle spasms.",
    how: "Take as prescribed, spread through the day.",
    sideEffects: "Drowsiness or dizziness.",
    precautions: "Avoid alcohol and driving until you know how it affects you."
  },
  {
    name: "Methylphenidate", dose: "18 mg", times: ["morning"],
    often: "daily", unit: "pill", supplement: false,
    use: "Treats ADHD",
    helps: "Helps focus and attention in ADHD.",
    how: "Take in the morning. Swallow long-acting tablets whole.",
    sideEffects: "Less appetite, trouble sleeping, or a faster heartbeat.",
    precautions: "It can be misused, so keep it safe. Your doctor will check your heart rate and blood pressure."
  },
  {
    name: "Metoprolol", dose: "25 mg", times: ["morning", "evening"],
    often: "daily", unit: "pill", supplement: false,
    use: "Lowers blood pressure",
    helps: "A beta blocker. Slows the heart and lowers blood pressure. Also helps chest pain and protects the heart after a heart attack.",
    how: "Take with or right after a meal.",
    sideEffects: "Tiredness, dizziness, or a slow heartbeat.",
    precautions: "Do not stop it suddenly. Tell your doctor if you feel very tired, dizzy, or short of breath."
  },
  {
    name: "Metronidazole", dose: "500 mg", times: ["morning", "evening"],
    often: "daily", unit: "pill", supplement: false,
    use: "Antibiotic",
    helps: "Treats certain infections caused by bacteria and parasites.",
    how: "Take twice a day, with food if it upsets your stomach. Finish the whole course.",
    sideEffects: "A metallic taste or nausea.",
    precautions: "Do not drink alcohol while taking it and for 3 days after. It interacts with warfarin."
  },
  {
    name: "Montelukast", dose: "10 mg", times: ["evening"],
    often: "daily", unit: "pill", supplement: false,
    use: "Prevents asthma and allergy symptoms",
    helps: "Blocks chemicals that cause swelling in the airways. Helps prevent asthma symptoms and eases allergy symptoms.",
    how: "Take once a day in the evening. It does not stop a sudden asthma attack.",
    sideEffects: "Headache, stomach pain, or cough.",
    precautions: "Tell your doctor right away about mood changes, bad dreams, or thoughts of self-harm."
  },
  {
    name: "Multivitamin", dose: "1 tablet", times: ["morning"],
    often: "daily", unit: "pill", supplement: true,
    use: "Daily multivitamin",
    helps: "Fills small gaps in the vitamins and minerals you get from food.",
    how: "Take 1 a day with a meal.",
    sideEffects: "Nausea or upset stomach.",
    precautions: "Do not double up on vitamin A or iron from other supplements. Tell your doctor if you take warfarin (vitamin K)."
  },
  {
    name: "Mupirocin", dose: "2%", times: ["morning", "noon", "evening"],
    often: "daily", unit: "application", supplement: false,
    use: "Antibiotic ointment",
    helps: "An antibiotic ointment for small skin infections, like impetigo.",
    how: "Apply a thin layer to the area 3 times a day.",
    sideEffects: "Burning or itching where applied.",
    precautions: "For the skin only. Call your doctor if it is not better in 3 to 5 days."
  },
  {
    name: "Naproxen", dose: "220 mg", times: ["morning"],
    often: "asneeded", unit: "pill", supplement: false,
    use: "Relieves pain and swelling",
    helps: "An NSAID that eases pain, swelling, and fever.",
    how: "Take with food, every 8 to 12 hours when needed. Do not take more than the label says.",
    sideEffects: "Heartburn or nausea.",
    precautions: "Do not mix with other NSAIDs. It can cause stomach bleeding and harm the kidneys and heart."
  },
  {
    name: "Nifedipine", dose: "30 mg", times: ["morning"],
    often: "daily", unit: "pill", supplement: false,
    use: "Lowers blood pressure",
    helps: "Relaxes blood vessels so blood flows more easily. Treats high blood pressure and chest pain (angina).",
    how: "Take at the same time every day. Swallow long-acting tablets whole; do not crush or chew.",
    sideEffects: "Headache, flushing, or swollen ankles.",
    precautions: "Stand up slowly if you feel dizzy. Avoid grapefruit juice."
  },
  {
    name: "Nitrofurantoin", dose: "100 mg", times: ["morning", "evening"],
    often: "daily", unit: "pill", supplement: false,
    use: "Antibiotic for bladder infections",
    helps: "Treats simple bladder infections (UTIs).",
    how: "Take twice a day with breakfast and dinner. Finish the whole course.",
    sideEffects: "Nausea or headache. Urine may turn dark yellow or brown.",
    precautions: "It does not treat kidney infections. Tell your doctor if you have kidney problems."
  },
  {
    name: "Norethindrone", dose: "0.35 mg", times: ["morning"],
    often: "daily", unit: "pill", supplement: false,
    use: "Progestin-only birth control",
    helps: "A progestin-only birth control pill that prevents pregnancy.",
    how: "Take at the same time every day. Taking it more than 3 hours late can lower protection.",
    sideEffects: "Irregular bleeding or headache.",
    precautions: "If you miss a dose by more than 3 hours, use backup birth control for 2 days."
  },
  {
    name: "Norethindrone and Ethinyl Estradiol", dose: "1 mg/20 mcg", times: ["morning"],
    often: "daily", unit: "pill", supplement: false,
    use: "Birth control pill",
    helps: "A combined birth control pill that prevents pregnancy.",
    how: "Take 1 pill at the same time every day.",
    sideEffects: "Nausea, spotting, or breast tenderness.",
    precautions: "It can raise the risk of blood clots, especially in smokers over 35."
  },
  {
    name: "Olmesartan", dose: "20 mg", times: ["morning"],
    often: "daily", unit: "pill", supplement: false,
    use: "Lowers blood pressure",
    helps: "Relaxes blood vessels to lower blood pressure.",
    how: "Take once a day at the same time, with or without food.",
    sideEffects: "Dizziness. It can also raise potassium.",
    precautions: "Your doctor may check your kidneys and potassium. Tell your doctor about long-lasting diarrhea. Not safe in pregnancy."
  },
  {
    name: "Omeprazole", dose: "20 mg", times: ["morning"],
    often: "daily", unit: "pill", supplement: false,
    use: "Reduces stomach acid",
    helps: "Strongly lowers stomach acid. Treats heartburn, acid reflux, and stomach ulcers.",
    how: "Take 30 minutes before breakfast with water.",
    sideEffects: "Headache, stomach pain, nausea, or diarrhea.",
    precautions: "Ask your doctor if you need it for more than a few weeks. Long use can lower vitamin B12 and magnesium."
  },
  {
    name: "Ondansetron", dose: "4 mg", times: ["morning"],
    often: "asneeded", unit: "pill", supplement: false,
    use: "Stops nausea and vomiting",
    helps: "Prevents and eases nausea and vomiting.",
    how: "Take when needed as prescribed. Dissolving tablets melt on the tongue.",
    sideEffects: "Headache or constipation.",
    precautions: "Tell your doctor if you have heart rhythm problems."
  },
  {
    name: "Oxybutynin", dose: "5 mg", times: ["morning"],
    often: "daily", unit: "pill", supplement: false,
    use: "Calms an overactive bladder",
    helps: "Calms bladder muscles to reduce sudden urges to urinate and leaks.",
    how: "Take once a day at the same time. Swallow long-acting tablets whole.",
    sideEffects: "Dry mouth or constipation.",
    precautions: "It can cause confusion in older adults. Tell your doctor about memory problems."
  },
  {
    name: "Pantoprazole", dose: "40 mg", times: ["morning"],
    often: "daily", unit: "pill", supplement: false,
    use: "Reduces stomach acid",
    helps: "Strongly lowers stomach acid. Treats heartburn, acid reflux, and stomach ulcers.",
    how: "Take 30 minutes before breakfast. Swallow the tablet whole.",
    sideEffects: "Headache, diarrhea, nausea, or stomach pain.",
    precautions: "Ask your doctor if you need it for a long time. Long use can lower vitamin B12 and magnesium."
  },
  {
    name: "Pioglitazone", dose: "15 mg", times: ["morning"],
    often: "daily", unit: "pill", supplement: false,
    use: "Lowers blood sugar",
    helps: "Helps your body use insulin better to lower blood sugar in type 2 diabetes.",
    how: "Take once a day, with or without food.",
    sideEffects: "Weight gain or swelling in the legs.",
    precautions: "It can make heart failure worse. Tell your doctor about sudden weight gain, swelling, or shortness of breath."
  },
  {
    name: "Polyethylene Glycol", dose: "17 g", times: ["morning"],
    often: "daily", unit: "capful", supplement: false,
    use: "Treats constipation",
    helps: "A gentle laxative that draws water into the bowel to soften stool.",
    how: "Stir one capful (17 g) into 4 to 8 ounces of a drink once a day.",
    sideEffects: "Bloating or loose stools.",
    precautions: "Call your doctor about constipation lasting more than a week, bad stomach pain, or blood in your stool."
  },
  {
    name: "Potassium Chloride", dose: "10 mEq", times: ["morning"],
    often: "daily", unit: "pill", supplement: false,
    use: "Potassium supplement",
    helps: "Raises or keeps up your potassium level, often needed with water pills.",
    how: "Take with food and a full glass of water. Swallow tablets whole.",
    sideEffects: "Nausea or stomach upset.",
    precautions: "Too much potassium is dangerous. Your doctor will check your blood. Avoid salt substitutes unless your doctor says yes."
  },
  {
    name: "Pravastatin", dose: "40 mg", times: ["evening"],
    often: "daily", unit: "pill", supplement: false,
    use: "Lowers cholesterol",
    helps: "A statin. Lowers 'bad' cholesterol (LDL) to reduce the risk of heart attack and stroke.",
    how: "Take once a day, with or without food.",
    sideEffects: "Muscle aches, headache, or upset stomach.",
    precautions: "Call your doctor about muscle pain or weakness you can't explain."
  },
  {
    name: "Prednisone", dose: "10 mg", times: ["morning"],
    often: "daily", unit: "pill", supplement: false,
    use: "Calms inflammation",
    helps: "A steroid. Calms swelling and an overactive immune system in conditions like arthritis, asthma, and allergies.",
    how: "Take in the morning with food.",
    sideEffects: "Bigger appetite, trouble sleeping, mood changes, higher blood sugar, or fluid buildup.",
    precautions: "Do not stop suddenly if you have taken it for more than a few days. Long use can weaken bones and make infections more likely."
  },
  {
    name: "Pregabalin", dose: "75 mg", times: ["morning", "evening"],
    often: "daily", unit: "pill", supplement: false,
    use: "Helps nerve pain",
    helps: "Calms overactive nerves. Treats nerve pain, fibromyalgia, and some seizures.",
    how: "Take twice a day, with or without food.",
    sideEffects: "Dizziness, sleepiness, or swelling in the hands or feet.",
    precautions: "It can make falls more likely. Avoid alcohol. The dose may be lower if you have kidney problems."
  },
  {
    name: "Progesterone", dose: "100 mg", times: ["bedtime"],
    often: "daily", unit: "pill", supplement: false,
    use: "Progesterone hormone",
    helps: "Used with estrogen in hormone therapy, and for some menstrual problems.",
    how: "Take at bedtime as prescribed.",
    sideEffects: "Sleepiness, dizziness, or breast tenderness.",
    precautions: "Some capsules contain peanut oil. Tell your doctor about any peanut allergy or history of blood clots."
  },
  {
    name: "Propranolol", dose: "60 mg", times: ["morning"],
    often: "daily", unit: "pill", supplement: false,
    use: "Lowers blood pressure",
    helps: "A beta blocker. Lowers blood pressure and slows the heart. It is also used to calm shaky hands (tremor) and prevent migraines.",
    how: "Take at the same time every day, the same way each day (always with food or always without).",
    sideEffects: "Tiredness, dizziness, or a slow heartbeat.",
    precautions: "Do not stop it suddenly. It can make asthma worse, so tell your doctor if you have breathing problems."
  },
  {
    name: "Quetiapine", dose: "50 mg", times: ["bedtime"],
    often: "daily", unit: "pill", supplement: false,
    use: "Treats bipolar disorder and schizophrenia",
    helps: "Helps balance brain chemicals in bipolar disorder and schizophrenia, and sometimes depression.",
    how: "Take as prescribed, often in the evening.",
    sideEffects: "Sleepiness, weight gain, or dizziness.",
    precautions: "Get up slowly. Your doctor may check your weight, blood sugar, and cholesterol. It should not be used just to help sleep."
  },
  {
    name: "Rivaroxaban", dose: "20 mg", times: ["evening"],
    often: "daily", unit: "pill", supplement: false,
    use: "Blood thinner",
    helps: "Lowers the chance of a stroke in people with an uneven heartbeat, and treats or prevents blood clots.",
    how: "Take as prescribed. The 20 mg dose is taken with the evening meal.",
    sideEffects: "Bruising or bleeding more easily.",
    precautions: "Never stop it suddenly without talking to your doctor. Get help right away for heavy bleeding, a bad fall, or a head injury."
  },
  {
    name: "Rosuvastatin", dose: "10 mg", times: ["evening"],
    often: "daily", unit: "pill", supplement: false,
    use: "Lowers cholesterol",
    helps: "A statin. Lowers 'bad' cholesterol (LDL) to reduce the risk of heart attack and stroke.",
    how: "Take once a day, at any time, with or without food.",
    sideEffects: "Muscle aches, headache, stomach pain, or nausea.",
    precautions: "Call your doctor about muscle pain or weakness you can't explain."
  },
  {
    name: "Semaglutide", dose: "0.25 mg", times: ["morning"],
    often: "weekly", unit: "injection", supplement: false,
    use: "Lowers blood sugar and weight",
    helps: "Helps your body release insulin when blood sugar is high and makes you feel full sooner. Used for type 2 diabetes and, in some brands, weight loss.",
    how: "Injected once a week, on the same day each week, at any time of day.",
    sideEffects: "Nausea, vomiting, diarrhea, or constipation, mostly when starting.",
    precautions: "Get help for bad stomach pain that won't go away. Not for people with a personal or family history of certain thyroid cancers."
  },
  {
    name: "Sertraline", dose: "50 mg", times: ["morning"],
    often: "daily", unit: "pill", supplement: false,
    use: "Treats depression and anxiety",
    helps: "Helps balance serotonin, a natural brain chemical, to ease depression and anxiety.",
    how: "Take once a day, with or without food. It can take a few weeks to start helping.",
    sideEffects: "Nausea, diarrhea, trouble sleeping, or sweating.",
    precautions: "Do not stop suddenly. Tell your doctor about new mood changes, confusion, or easy bleeding."
  },
  {
    name: "Sildenafil", dose: "50 mg", times: ["evening"],
    often: "asneeded", unit: "pill", supplement: false,
    use: "Treats erectile dysfunction",
    helps: "Helps with erectile dysfunction.",
    how: "Take 30 to 60 minutes before sexual activity, no more than once a day.",
    sideEffects: "Headache, flushing, or stuffy nose.",
    precautions: "Never take it with nitrate heart medicines (like nitroglycerin). Tell your doctor if you have heart disease."
  },
  {
    name: "Simvastatin", dose: "20 mg", times: ["evening"],
    often: "daily", unit: "pill", supplement: false,
    use: "Lowers cholesterol",
    helps: "A statin. Lowers 'bad' cholesterol (LDL) to reduce the risk of heart attack and stroke.",
    how: "Take in the evening. Avoid grapefruit juice.",
    sideEffects: "Muscle aches, constipation, or upset stomach.",
    precautions: "Call your doctor about muscle pain or weakness you can't explain."
  },
  {
    name: "Sitagliptin", dose: "100 mg", times: ["morning"],
    often: "daily", unit: "pill", supplement: false,
    use: "Lowers blood sugar",
    helps: "Helps your body make more insulin after meals to lower blood sugar in type 2 diabetes.",
    how: "Take once a day, with or without food.",
    sideEffects: "Headache or a stuffy nose.",
    precautions: "The dose may be lower if you have kidney problems. Get help for bad stomach pain that won't go away."
  },
  {
    name: "Spironolactone", dose: "25 mg", times: ["morning"],
    often: "daily", unit: "pill", supplement: false,
    use: "Water pill that keeps potassium",
    helps: "Helps heart failure, lowers blood pressure, and reduces fluid buildup, while keeping potassium in the body.",
    how: "Take at the same time each day, the same way each time (always with food, or always without).",
    sideEffects: "Dizziness, upset stomach, or breast tenderness or swelling.",
    precautions: "Avoid potassium pills and salt substitutes unless your doctor says yes. Tell your doctor about muscle weakness or an uneven heartbeat."
  },
  {
    name: "Sulfamethoxazole and Trimethoprim", dose: "800/160 mg", times: ["morning", "evening"],
    often: "daily", unit: "pill", supplement: false,
    use: "Antibiotic",
    helps: "An antibiotic for urinary tract and some other infections caused by bacteria.",
    how: "Take twice a day with a full glass of water. Finish the whole course.",
    sideEffects: "Nausea or rash.",
    precautions: "Do not take it if you are allergic to sulfa drugs. Stop and call your doctor about any rash. It can raise potassium."
  },
  {
    name: "Sumatriptan", dose: "50 mg", times: ["morning"],
    often: "asneeded", unit: "pill", supplement: false,
    use: "Stops migraines",
    helps: "Stops a migraine attack once it starts.",
    how: "Take at the start of a migraine. You may repeat after 2 hours if needed; do not go over the daily limit.",
    sideEffects: "Tingling, flushing, or chest pressure.",
    precautions: "Do not use if you have heart disease or past strokes. Call 911 for chest pain that doesn't go away."
  },
  {
    name: "Tadalafil", dose: "5 mg", times: ["morning"],
    often: "daily", unit: "pill", supplement: false,
    use: "Treats erectile dysfunction and prostate",
    helps: "Helps with erectile dysfunction and eases urinary symptoms of an enlarged prostate.",
    how: "Take once a day at the same time, or before sexual activity, as prescribed.",
    sideEffects: "Headache, flushing, or indigestion.",
    precautions: "Never take it with nitrate heart medicines (like nitroglycerin): blood pressure can drop dangerously."
  },
  {
    name: "Tamsulosin", dose: "0.4 mg", times: ["evening"],
    often: "daily", unit: "pill", supplement: false,
    use: "Helps urine flow",
    helps: "Relaxes muscles in the prostate and bladder so urine flows more easily in men with an enlarged prostate.",
    how: "Take 30 minutes after the same meal each day. Swallow the capsule whole.",
    sideEffects: "Dizziness, a runny nose, or less semen.",
    precautions: "Stand up slowly. Tell your eye doctor you take it before any cataract surgery."
  },
  {
    name: "Thiamine", dose: "100 mg", times: ["morning"],
    often: "daily", unit: "pill", supplement: true,
    use: "Vitamin B1 supplement",
    helps: "Vitamin B1 helps your body turn food into energy and keeps nerves healthy.",
    how: "Take with breakfast or at any time of day.",
    sideEffects: "Usually none; sometimes nausea.",
    precautions: "High-dose treatment should follow a doctor's check."
  },
  {
    name: "Timolol", dose: "0.5%", times: ["morning", "evening"],
    often: "daily", unit: "drop", supplement: false,
    use: "Eye drops for glaucoma",
    helps: "Lowers pressure in the eye to protect your vision in glaucoma.",
    how: "Put 1 drop in the affected eye(s) twice a day.",
    sideEffects: "Stinging or a slower heartbeat.",
    precautions: "It can make asthma or COPD worse. Tell your doctor if you have breathing or heart problems."
  },
  {
    name: "Tiotropium", dose: "18 mcg", times: ["morning"],
    often: "daily", unit: "puff", supplement: false,
    use: "Daily inhaler for COPD",
    helps: "Keeps the airways open for 24 hours in COPD.",
    how: "Inhale the contents of 1 capsule once a day with the inhaler device. Do not swallow the capsule.",
    sideEffects: "Dry mouth or constipation.",
    precautions: "It is not a rescue inhaler. Keep the powder out of your eyes."
  },
  {
    name: "Tirzepatide", dose: "2.5 mg", times: ["morning"],
    often: "weekly", unit: "injection", supplement: false,
    use: "Lowers blood sugar and weight",
    helps: "Helps control blood sugar and makes you feel full sooner. Used for type 2 diabetes and, in some brands, weight loss.",
    how: "Injected once a week, on the same day each week, at any time of day.",
    sideEffects: "Nausea, diarrhea, or constipation, mostly when starting.",
    precautions: "Get help for bad stomach pain that won't go away. Not for people with a personal or family history of certain thyroid cancers."
  },
  {
    name: "Tizanidine", dose: "2 mg", times: ["morning"],
    often: "asneeded", unit: "pill", supplement: false,
    use: "Relaxes tight muscles",
    helps: "Relaxes tight, stiff muscles (spasticity).",
    how: "Take when needed, 6 to 8 hours apart, up to 3 times a day.",
    sideEffects: "Sleepiness, low blood pressure, or dry mouth.",
    precautions: "Never take it with ciprofloxacin or fluvoxamine. Stand up slowly."
  },
  {
    name: "Topiramate", dose: "25 mg", times: ["evening"],
    often: "daily", unit: "pill", supplement: false,
    use: "Prevents migraines and seizures",
    helps: "Calms overactive brain signals. Prevents migraines and some seizures.",
    how: "Take as prescribed. It usually starts once in the evening, then twice a day. Drink plenty of water.",
    sideEffects: "Tingling in the hands or feet, slow thinking, or less appetite.",
    precautions: "It can cause kidney stones. It can harm an unborn baby, so talk to your doctor about pregnancy."
  },
  {
    name: "Trazodone", dose: "50 mg", times: ["bedtime"],
    often: "daily", unit: "pill", supplement: false,
    use: "Helps sleep and depression",
    helps: "Treats depression. At low doses it is often used to help with sleep.",
    how: "Take at bedtime, as prescribed.",
    sideEffects: "Sleepiness, dizziness, or dry mouth.",
    precautions: "It can cause falls and low blood pressure, so get up slowly at night. Get help right away for an erection that lasts more than 4 hours."
  },
  {
    name: "Tretinoin", dose: "0.025%", times: ["bedtime"],
    often: "daily", unit: "application", supplement: false,
    use: "Acne cream",
    helps: "A vitamin A cream that treats acne and smooths skin.",
    how: "Apply a pea-sized amount at bedtime to clean, dry skin.",
    sideEffects: "Dryness, peeling, or redness.",
    precautions: "Use sunscreen every day. Do not use if pregnant."
  },
  {
    name: "Triamcinolone Cream", dose: "0.1%", times: ["morning", "evening"],
    often: "daily", unit: "application", supplement: false,
    use: "Steroid cream for skin",
    helps: "A steroid cream that calms itchy, red, swollen skin from eczema and rashes.",
    how: "Apply a thin layer once or twice a day.",
    sideEffects: "Burning or thin skin with long use.",
    precautions: "Avoid the face and groin unless your doctor says so. Do not use for a long time without checking with your doctor."
  },
  {
    name: "Valacyclovir", dose: "500 mg", times: ["morning"],
    often: "daily", unit: "pill", supplement: false,
    use: "Treats herpes and shingles",
    helps: "An antiviral that treats outbreaks of cold sores, genital herpes, and shingles, and can prevent outbreaks.",
    how: "Take as prescribed. The schedule depends on what it is treating.",
    sideEffects: "Headache or nausea.",
    precautions: "Drink plenty of fluids. The dose may be lower if you have kidney problems."
  },
  {
    name: "Valsartan", dose: "80 mg", times: ["morning"],
    often: "daily", unit: "pill", supplement: false,
    use: "Lowers blood pressure",
    helps: "Relaxes blood vessels to lower blood pressure and helps in heart failure.",
    how: "Take at the same time each day, with or without food.",
    sideEffects: "Dizziness, tiredness, or headache.",
    precautions: "Stand up slowly. Do not use potassium pills or salt substitutes unless your doctor says yes."
  },
  {
    name: "Venlafaxine", dose: "75 mg", times: ["morning"],
    often: "daily", unit: "pill", supplement: false,
    use: "Treats depression and anxiety",
    helps: "Helps balance brain chemicals to ease depression and anxiety.",
    how: "Take once a day with food. Swallow long-acting capsules whole.",
    sideEffects: "Nausea, sweating, or higher blood pressure.",
    precautions: "Do not stop suddenly. Your doctor may check your blood pressure."
  },
  {
    name: "Vitamin B12", dose: "1,000 mcg", times: ["morning"],
    often: "daily", unit: "pill", supplement: true,
    use: "Vitamin B12 supplement",
    helps: "Vitamin B12 helps make red blood cells and keeps nerves healthy. Many older adults absorb less of it.",
    how: "Take once a day at the same time.",
    sideEffects: "Usually mild, like nausea or diarrhea.",
    precautions: "Numbness, tingling, or memory problems need a doctor's check; some people need B12 shots."
  },
  {
    name: "Vitamin D2", dose: "50,000 IU", times: ["morning"],
    often: "weekly", unit: "pill", supplement: false,
    use: "High-dose vitamin D",
    helps: "A high-dose prescription vitamin D that treats low vitamin D levels.",
    how: "Take once a week on the same day, for as long as prescribed.",
    sideEffects: "Nausea if you take too much.",
    precautions: "This is a short treatment, not a daily vitamin. Too much can raise calcium in the blood."
  },
  {
    name: "Vitamin D3", dose: "1,000 IU", times: ["morning"],
    often: "daily", unit: "pill", supplement: true,
    use: "Vitamin D supplement",
    helps: "Vitamin D helps your body absorb calcium for strong bones and muscles.",
    how: "Take with a meal.",
    sideEffects: "Usually none at normal doses.",
    precautions: "Too much can raise calcium in the blood. Do not take more than 4,000 IU a day unless your doctor says so."
  },
  {
    name: "Warfarin", dose: "as directed", times: ["evening"],
    often: "daily", unit: "pill", supplement: false,
    use: "Blood thinner",
    helps: "Slows blood clotting to prevent dangerous clots and strokes.",
    how: "Take at the same time every day. Go to every blood test, because your dose may change.",
    sideEffects: "Bruising or bleeding more easily.",
    precautions: "Get help for heavy bleeding or a bad fall. Keep the amount of leafy green vegetables you eat steady. Ask before starting any new medicine."
  },
  {
    name: "Zinc", dose: "25 mg", times: ["morning"],
    often: "daily", unit: "pill", supplement: true,
    use: "Zinc supplement",
    helps: "Zinc helps the immune system and wound healing.",
    how: "Take with food if it upsets your stomach.",
    sideEffects: "Nausea, upset stomach, or a metallic taste.",
    precautions: "Taking more than 40 mg a day for a long time can lower copper. Keep it a few hours apart from some antibiotics."
  },
  {
    name: "Zolpidem", dose: "5 mg", times: ["bedtime"],
    often: "daily", unit: "pill", supplement: false,
    use: "Helps sleep",
    helps: "Helps you fall asleep. Meant for short-term use.",
    how: "Take right before bed, only when you can sleep a full 7 to 8 hours.",
    sideEffects: "Next-day drowsiness or dizziness.",
    precautions: "It can cause sleepwalking or other actions you don't remember. Never mix with alcohol. Older adults have a higher risk of falls."
  }
];

// Brand names and other names that may be printed on a label,
// and the medicine they mean (all in small letters)
const brandNames = {
  "abilify": "Aripiprazole",
  "actos": "Pioglitazone",
  "adalat": "Nifedipine",
  "admelog": "Insulin Lispro",
  "advair": "Fluticasone and Salmeterol",
  "advil": "Ibuprofen",
  "aldactone": "Spironolactone",
  "aleve": "Naproxen",
  "amaryl": "Glimepiride",
  "ambien": "Zolpidem",
  "amoxil": "Amoxicillin",
  "apresoline": "Hydralazine",
  "aricept": "Donepezil",
  "astelin": "Azelastine",
  "astepro": "Azelastine",
  "atarax": "Hydroxyzine",
  "augmentin": "Amoxicillin and Clavulanate",
  "avapro": "Irbesartan",
  "bactrim": "Sulfamethoxazole and Trimethoprim",
  "bactroban": "Mupirocin",
  "basaglar": "Insulin Glargine",
  "bayer": "Aspirin",
  "benicar": "Olmesartan",
  "breyna": "Budesonide and Formoterol",
  "buspar": "Buspirone",
  "calcium": "Calcium Carbonate",
  "caltrate": "Calcium Carbonate",
  "camila": "Norethindrone",
  "cardizem": "Diltiazem",
  "catapres": "Clonidine",
  "celebrex": "Celecoxib",
  "celexa": "Citalopram",
  "centrum": "Multivitamin",
  "cholecalciferol": "Vitamin D3",
  "cialis": "Tadalafil",
  "claritin": "Loratadine",
  "cleocin": "Clindamycin",
  "colace": "Docusate",
  "cold-eeze": "Zinc",
  "concerta": "Methylphenidate",
  "coreg": "Carvedilol",
  "coumadin": "Warfarin",
  "cozaar": "Losartan",
  "crestor": "Rosuvastatin",
  "cyanocobalamin": "Vitamin B12",
  "cymbalta": "Duloxetine",
  "desyrel": "Trazodone",
  "diflucan": "Fluconazole",
  "diovan": "Valsartan",
  "ditropan": "Oxybutynin",
  "doryx": "Doxycycline",
  "drisdol": "Vitamin D2",
  "ecotrin": "Aspirin",
  "effexor": "Venlafaxine",
  "eliquis": "Apixaban",
  "ergocalciferol": "Vitamin D2",
  "estrace": "Estradiol",
  "farxiga": "Dapagliflozin",
  "fenoglide": "Fenofibrate",
  "feosol": "Ferrous Sulfate",
  "fiasp": "Insulin Aspart",
  "flagyl": "Metronidazole",
  "flexeril": "Cyclobenzaprine",
  "flomax": "Tamsulosin",
  "flonase": "Fluticasone Nasal",
  "folate": "Folic Acid",
  "folvite": "Folic Acid",
  "fosamax": "Alendronate",
  "glucophage": "Metformin",
  "glucotrol": "Glipizide",
  "humalog": "Insulin Lispro",
  "imitrex": "Sumatriptan",
  "inderal": "Propranolol",
  "innopran": "Propranolol",
  "iron": "Ferrous Sulfate",
  "jantoven": "Warfarin",
  "januvia": "Sitagliptin",
  "jardiance": "Empagliflozin",
  "junel": "Norethindrone and Ethinyl Estradiol",
  "keflex": "Cephalexin",
  "kenalog": "Triamcinolone Cream",
  "klonopin": "Clonazepam",
  "klor-con": "Potassium Chloride",
  "lamictal": "Lamotrigine",
  "lantus": "Insulin Glargine",
  "lasix": "Furosemide",
  "levoxyl": "Levothyroxine",
  "lexapro": "Escitalopram",
  "lioresal": "Baclofen",
  "lipitor": "Atorvastatin",
  "loestrin": "Norethindrone and Ethinyl Estradiol",
  "lopressor": "Metoprolol",
  "lotensin": "Benazepril",
  "lyrica": "Pregabalin",
  "macrobid": "Nitrofurantoin",
  "mag-ox": "Magnesium",
  "magnesium citrate": "Magnesium",
  "magnesium glycinate": "Magnesium",
  "magnesium oxide": "Magnesium",
  "micro-k": "Potassium Chloride",
  "micronor": "Norethindrone",
  "miralax": "Polyethylene Glycol",
  "mobic": "Meloxicam",
  "motrin": "Ibuprofen",
  "mounjaro": "Tirzepatide",
  "naprosyn": "Naproxen",
  "nature made b1": "Thiamine",
  "nature made b12": "Vitamin B12",
  "nature made d3": "Vitamin D3",
  "nature made fish oil": "Fish Oil",
  "neurontin": "Gabapentin",
  "nexium": "Esomeprazole",
  "nizoral": "Ketoconazole Shampoo",
  "nordic naturals": "Fish Oil",
  "norvasc": "Amlodipine",
  "novolog": "Insulin Aspart",
  "omega 3": "Fish Oil",
  "omega-3": "Fish Oil",
  "one a day": "Multivitamin",
  "os-cal": "Calcium Carbonate",
  "ozempic": "Semaglutide",
  "pepcid": "Famotidine",
  "plavix": "Clopidogrel",
  "pravachol": "Pravastatin",
  "prilosec": "Omeprazole",
  "prinivil": "Lisinopril",
  "proair": "Albuterol",
  "procardia": "Nifedipine",
  "prometrium": "Progesterone",
  "proscar": "Finasteride",
  "protonix": "Pantoprazole",
  "proventil": "Albuterol",
  "prozac": "Fluoxetine",
  "retin-a": "Tretinoin",
  "robaxin": "Methocarbamol",
  "septra": "Sulfamethoxazole and Trimethoprim",
  "seroquel": "Quetiapine",
  "singulair": "Montelukast",
  "slow-mag": "Magnesium",
  "spiriva": "Tiotropium",
  "symbicort": "Budesonide and Formoterol",
  "synthroid": "Levothyroxine",
  "temovate": "Clobetasol",
  "tenormin": "Atenolol",
  "tessalon": "Benzonatate",
  "thalitone": "Chlorthalidone",
  "tiazac": "Diltiazem",
  "timoptic": "Timolol",
  "topamax": "Topiramate",
  "toprol": "Metoprolol",
  "toujeo": "Insulin Glargine",
  "tricor": "Fenofibrate",
  "trulicity": "Dulaglutide",
  "tums": "Calcium Carbonate",
  "tylenol": "Acetaminophen",
  "valtrex": "Valacyclovir",
  "ventolin": "Albuterol",
  "viagra": "Sildenafil",
  "vibramycin": "Doxycycline",
  "vistaril": "Hydroxyzine",
  "vitamin b1": "Thiamine",
  "voltaren": "Diclofenac Gel",
  "vyvanse": "Lisdexamfetamine",
  "wegovy": "Semaglutide",
  "wellbutrin": "Bupropion",
  "wholemega": "Fish Oil",
  "wixela": "Fluticasone and Salmeterol",
  "xalatan": "Latanoprost",
  "xanax": "Alprazolam",
  "xarelto": "Rivaroxaban",
  "xyzal": "Levocetirizine",
  "z-pak": "Azithromycin",
  "zanaflex": "Tizanidine",
  "zepbound": "Tirzepatide",
  "zestril": "Lisinopril",
  "zetia": "Ezetimibe",
  "zicam": "Zinc",
  "zinc gluconate": "Zinc",
  "zithromax": "Azithromycin",
  "zocor": "Simvastatin",
  "zofran": "Ondansetron",
  "zoloft": "Sertraline",
  "zyloprim": "Allopurinol",
  "zyrtec": "Cetirizine",
  "ethinyl estradiol": "Norethindrone and Ethinyl Estradiol",
  "salmeterol": "Fluticasone and Salmeterol",
  "formoterol": "Budesonide and Formoterol",
  "clavulanate": "Amoxicillin and Clavulanate",
  "sulfamethoxazole": "Sulfamethoxazole and Trimethoprim",
  "trimethoprim": "Sulfamethoxazole and Trimethoprim",
  "polyethylene glycol": "Polyethylene Glycol",
  "docusate sodium": "Docusate",
  "triamcinolone": "Triamcinolone Cream",
  "ketoconazole": "Ketoconazole Shampoo",
  "diclofenac": "Diclofenac Gel",
  "insulin glargine": "Insulin Glargine",
  "fish oil": "Fish Oil",
  "omega 3 fish oil": "Fish Oil"
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

// Looks through some text (like a scanned label or a question)
// for a medicine we know. Returns its info, or null.
// Used by the scanner and the Ask page.
function findMedicineInText(text) {
  // 1. clean up the text: small letters, and only letters/numbers with spaces between
  //    (scanners often mix up the number 0 and the letter o, like "Metf0rmin")
  let cleanWords = " " + text.toLowerCase().replace(/0/g, "o").replace(/[^a-z0-9]+/g, " ") + " ";

  // 2. find every medicine or brand name in the text,
  //    and keep the one that appears FIRST (the product name is usually at the top)
  let bestName = null;
  let bestSpot = cleanWords.length;
  let bestLength = 0;

  function checkWord(word, medicineNameFound) {
    const cleanWord = " " + word.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim() + " ";
    const spot = cleanWords.indexOf(cleanWord);
    if (spot === -1) {
      return;
    }
    // earlier wins; if two start at the same spot, the longer name wins
    if (spot < bestSpot || (spot === bestSpot && cleanWord.length > bestLength)) {
      bestName = medicineNameFound;
      bestSpot = spot;
      bestLength = cleanWord.length;
    }
  }

  for (const brand in brandNames) {
    checkWord(brand, brandNames[brand]);
  }
  for (let i = 0; i < medicineLibrary.length; i++) {
    checkWord(medicineLibrary[i].name, medicineLibrary[i].name);
  }

  // 3. nothing found? try just the first 5 letters of each name,
  //    in case the scanner got a later letter wrong
  if (!bestName) {
    for (let i = 0; i < medicineLibrary.length; i++) {
      const start = " " + medicineLibrary[i].name.toLowerCase().substring(0, 5);
      const spot = cleanWords.indexOf(start);
      if (spot !== -1 && spot < bestSpot) {
        bestName = medicineLibrary[i].name;
        bestSpot = spot;
      }
    }
  }

  if (bestName) {
    return findMedicineInfo(bestName);
  }
  return null;
}
