// ClearDose - Healthy habits
// (icon is the name of a Google icon, like "water_drop")
// 20 habits in total. The app shows 5 each day and changes them daily,
// so every habit comes up once every 4 days.
//
// The first 8 come from the Million Veteran Program study (2023),
// which linked these habits to a much longer life.
// The other 12 are general healthy-aging habits.
// (General tips, not medical advice.)
//
// Each title and "why" is written in all 5 languages:
// en = English, es = Spanish, ur = Urdu, ar = Arabic, zh = Chinese

const habits = [
  // ---- The 8 habits from the Million Veteran Program study ----
  { key: "active", icon: "directions_walk",
    title: { en: "Be active for 20 to 30 minutes", es: "Manténgase activo de 20 a 30 minutos", ur: "20 سے 30 منٹ تک چلیں پھریں", ar: "كن نشيطًا لمدة 20 إلى 30 دقيقة", zh: "活动 20 到 30 分钟" },
    why: { en: "Walking, dancing, or gardening all count. Experts suggest about 150 minutes a week.", es: "Caminar, bailar o la jardinería cuentan. Los expertos sugieren unos 150 minutos a la semana.", ur: "چہل قدمی، رقص یا باغبانی سب شمار ہوتے ہیں۔ ماہرین ہفتے میں تقریباً 150 منٹ کا مشورہ دیتے ہیں۔", ar: "المشي أو الرقص أو العناية بالحديقة كلها تُحسب. ينصح الخبراء بحوالي 150 دقيقة في الأسبوع.", zh: "散步、跳舞或园艺都算。专家建议每周约 150 分钟。" } },
  { key: "smoke", icon: "smoke_free",
    title: { en: "Stay smoke-free today", es: "No fume hoy", ur: "آج تمباکو نوشی نہ کریں", ar: "ابتعد عن التدخين اليوم", zh: "今天不吸烟" },
    why: { en: "Quitting helps at any age. Free help: call 1-800-QUIT-NOW.", es: "Dejar de fumar ayuda a cualquier edad. Ayuda gratis: llame al 1-855-DÉJELO-YA.", ur: "چھوڑنا ہر عمر میں فائدہ دیتا ہے۔ مفت مدد: 1-800-QUIT-NOW پر کال کریں۔", ar: "الإقلاع يفيد في أي عمر. مساعدة مجانية: اتصل بالرقم 1-800-QUIT-NOW.", zh: "任何年龄戒烟都有好处。免费帮助：拨打 1-800-838-8917（中文）。" } },
  { key: "opioids", icon: "medication",
    title: { en: "Use pain medicine only as prescribed", es: "Use los analgésicos solo como se los recetaron", ur: "درد کی دوا صرف ڈاکٹر کی ہدایت کے مطابق لیں", ar: "استخدم مسكنات الألم كما وُصفت لك فقط", zh: "只按处方使用止痛药" },
    why: { en: "Never take extra or someone else's pills. Ask your doctor about safer pain options.", es: "Nunca tome de más ni pastillas de otra persona. Pregunte a su médico por opciones más seguras.", ur: "کبھی زیادہ یا کسی اور کی گولیاں نہ لیں۔ ڈاکٹر سے درد کے محفوظ طریقوں کے بارے میں پوچھیں۔", ar: "لا تأخذ أبدًا جرعة زائدة أو حبوب شخص آخر. اسأل طبيبك عن خيارات أكثر أمانًا للألم.", zh: "切勿多吃或服用别人的药。向医生询问更安全的止痛方法。" } },
  { key: "alcohol", icon: "no_drinks",
    title: { en: "Skip alcohol, or keep it to one small drink", es: "Evite el alcohol, o tome solo una bebida pequeña", ur: "شراب سے پرہیز کریں", ar: "تجنّب الكحول، أو اكتفِ بمشروب صغير واحد", zh: "不喝酒，或最多喝一小杯" },
    why: { en: "Drinking a lot at once is linked to falls and a shorter life.", es: "Beber mucho de una vez se asocia con caídas y una vida más corta.", ur: "ایک ساتھ زیادہ پینا گرنے اور کم عمر سے جڑا ہے۔", ar: "شرب الكثير دفعة واحدة مرتبط بالسقوط وقِصر العمر.", zh: "一次喝太多与跌倒和寿命缩短有关。" } },
  { key: "diet", icon: "restaurant",
    title: { en: "Eat vegetables, fruit, or whole grains with two meals", es: "Coma verduras, fruta o granos integrales en dos comidas", ur: "دو کھانوں میں سبزیاں، پھل یا ثابت اناج کھائیں", ar: "تناول الخضار أو الفاكهة أو الحبوب الكاملة مع وجبتين", zh: "两餐吃蔬菜、水果或全谷物" },
    why: { en: "A healthy diet is linked to a healthier heart and a longer life.", es: "Una dieta sana se asocia con un corazón más sano y una vida más larga.", ur: "صحت مند غذا صحت مند دل اور لمبی عمر سے جڑی ہے۔", ar: "النظام الغذائي الصحي مرتبط بقلب أصح وعمر أطول.", zh: "健康饮食与更健康的心脏和更长寿命有关。" } },
  { key: "stress", icon: "self_improvement",
    title: { en: "Take 5 quiet minutes to breathe or pray", es: "Tome 5 minutos de calma para respirar o rezar", ur: "5 منٹ سکون سے سانس لیں یا دعا کریں", ar: "خذ 5 دقائق هادئة للتنفس أو الصلاة", zh: "安静 5 分钟，深呼吸或祈祷" },
    why: { en: "Managing stress is good for your heart and your mood.", es: "Controlar el estrés es bueno para el corazón y el ánimo.", ur: "ذہنی دباؤ کم کرنا دل اور موڈ دونوں کے لیے اچھا ہے۔", ar: "التحكم في التوتر مفيد لقلبك ومزاجك.", zh: "管理压力对心脏和情绪都有好处。" } },
  { key: "sleep", icon: "bedtime",
    title: { en: "Go to bed at your regular time", es: "Acuéstese a su hora de siempre", ur: "اپنے معمول کے وقت پر سوئیں", ar: "اذهب إلى النوم في وقتك المعتاد", zh: "按平时的时间睡觉" },
    why: { en: "Most older adults need about 7 to 8 hours of sleep.", es: "La mayoría de los adultos mayores necesita de 7 a 8 horas de sueño.", ur: "زیادہ تر بزرگوں کو تقریباً 7 سے 8 گھنٹے نیند کی ضرورت ہوتی ہے۔", ar: "يحتاج معظم كبار السن إلى حوالي 7 إلى 8 ساعات من النوم.", zh: "大多数老年人需要约 7 到 8 小时睡眠。" } },
  { key: "social", icon: "call",
    title: { en: "Talk with family, a friend, or a neighbor", es: "Hable con su familia, un amigo o un vecino", ur: "گھر والوں، دوست یا پڑوسی سے بات کریں", ar: "تحدّث مع العائلة أو صديق أو جار", zh: "和家人、朋友或邻居聊聊天" },
    why: { en: "Good relationships are linked to better health and a longer life.", es: "Las buenas relaciones se asocian con mejor salud y una vida más larga.", ur: "اچھے تعلقات بہتر صحت اور لمبی عمر سے جڑے ہیں۔", ar: "العلاقات الجيدة مرتبطة بصحة أفضل وعمر أطول.", zh: "良好的人际关系与更好的健康和更长寿命有关。" } },

  // ---- 12 general healthy-aging habits ----
  { key: "strength", icon: "fitness_center",
    title: { en: "Do strength or balance exercises", es: "Haga ejercicios de fuerza o equilibrio", ur: "طاقت یا توازن کی ورزش کریں", ar: "مارس تمارين القوة أو التوازن", zh: "做力量或平衡练习" },
    why: { en: "They keep your muscles strong and help prevent falls.", es: "Mantienen los músculos fuertes y ayudan a prevenir caídas.", ur: "یہ پٹھوں کو مضبوط رکھتی ہیں اور گرنے سے بچاتی ہیں۔", ar: "تحافظ على قوة عضلاتك وتساعد على منع السقوط.", zh: "保持肌肉力量，帮助预防跌倒。" } },
  { key: "weight", icon: "monitor_weight",
    title: { en: "Eat normal portions and notice your weight", es: "Coma porciones normales y fíjese en su peso", ur: "مناسب مقدار میں کھائیں اور اپنے وزن کا خیال رکھیں", ar: "تناول حصصًا معتدلة وانتبه لوزنك", zh: "适量进食，留意体重" },
    why: { en: "Keeping a healthy weight helps your heart, joints, and blood sugar.", es: "Un peso sano ayuda al corazón, las articulaciones y el azúcar en la sangre.", ur: "صحت مند وزن دل، جوڑوں اور خون کی شکر کے لیے مفید ہے۔", ar: "الحفاظ على وزن صحي يفيد قلبك ومفاصلك وسكر الدم.", zh: "保持健康体重有益于心脏、关节和血糖。" } },
  { key: "water", icon: "water_drop",
    title: { en: "Drink water during the day", es: "Beba agua durante el día", ur: "دن بھر پانی پئیں", ar: "اشرب الماء خلال اليوم", zh: "白天多喝水" },
    why: { en: "Older adults get dehydrated more easily. Ask your doctor if you have a fluid limit.", es: "Los adultos mayores se deshidratan más fácilmente. Pregunte a su médico si tiene un límite de líquidos.", ur: "بزرگوں میں پانی کی کمی جلدی ہوتی ہے۔ اگر پانی کی حد مقرر ہو تو ڈاکٹر سے پوچھیں۔", ar: "يصاب كبار السن بالجفاف بسهولة أكبر. اسأل طبيبك إن كان لديك حد للسوائل.", zh: "老年人更容易脱水。如有饮水限制，请咨询医生。" } },
  { key: "checkup", icon: "stethoscope",
    title: { en: "Check when your next checkup or screening is due", es: "Revise cuándo le toca su próximo chequeo o examen", ur: "دیکھیں کہ اگلا معائنہ یا ٹیسٹ کب ہے", ar: "تحقق من موعد فحصك القادم", zh: "查看下次体检或筛查的时间" },
    why: { en: "Regular checks catch blood pressure, cholesterol, sugar, and cancer early. Add it to your Calendar.", es: "Los chequeos detectan a tiempo la presión, el colesterol, el azúcar y el cáncer. Agréguelo a su calendario.", ur: "باقاعدہ معائنے بلڈ پریشر، کولیسٹرول، شوگر اور کینسر کو جلد پکڑ لیتے ہیں۔ اسے کیلنڈر میں شامل کریں۔", ar: "الفحوصات المنتظمة تكشف ضغط الدم والكوليسترول والسكر والسرطان مبكرًا. أضفه إلى التقويم.", zh: "定期检查可及早发现血压、胆固醇、血糖和癌症问题。把它加入日历。" } },
  { key: "vaccine", icon: "vaccines",
    title: { en: "Ask if you are due for a vaccine", es: "Pregunte si le toca alguna vacuna", ur: "پوچھیں کہ کیا آپ کو کوئی ویکسین لگنی ہے", ar: "اسأل إن كان موعد أحد اللقاحات قد حان", zh: "问问是否该打疫苗了" },
    why: { en: "Flu, pneumonia, shingles, and COVID vaccines protect older adults.", es: "Las vacunas contra la gripe, la neumonía, el herpes zóster y el COVID protegen a los adultos mayores.", ur: "فلو، نمونیا، شنگلز اور کووڈ کی ویکسین بزرگوں کی حفاظت کرتی ہیں۔", ar: "لقاحات الإنفلونزا والالتهاب الرئوي والهربس النطاقي وكوفيد تحمي كبار السن.", zh: "流感、肺炎、带状疱疹和新冠疫苗能保护老年人。" } },
  { key: "meds", icon: "task_alt",
    title: { en: "Take all your medicines", es: "Tome todas sus medicinas", ur: "اپنی تمام دوائیں لیں", ar: "تناول جميع أدويتك", zh: "按时服完所有药物" },
    why: { en: "This one checks itself when you finish your medicines on the Home page.", es: "Este se marca solo cuando termina sus medicinas en la página de Inicio.", ur: "جب آپ ہوم صفحے پر اپنی دوائیں مکمل کر لیں تو یہ خود نشان لگ جاتا ہے۔", ar: "يتم تحديد هذا تلقائيًا عند إنهاء أدويتك في الصفحة الرئيسية.", zh: "在首页服完所有药后，这一项会自动勾选。" } },
  { key: "mind", icon: "extension",
    title: { en: "Read, do a puzzle, or learn something new", es: "Lea, haga un rompecabezas o aprenda algo nuevo", ur: "کچھ پڑھیں، پہیلی حل کریں یا کچھ نیا سیکھیں", ar: "اقرأ أو حلّ لغزًا أو تعلّم شيئًا جديدًا", zh: "读书、做拼图或学点新东西" },
    why: { en: "Keeping your mind busy helps keep it sharp.", es: "Mantener la mente ocupada ayuda a mantenerla ágil.", ur: "ذہن کو مصروف رکھنا اسے تیز رکھتا ہے۔", ar: "إبقاء عقلك مشغولًا يساعد على إبقائه حادًا.", zh: "让大脑保持活跃有助于保持思维敏捷。" } },
  { key: "purpose", icon: "volunteer_activism",
    title: { en: "Do something you care about", es: "Haga algo que le importe", ur: "کوئی ایسا کام کریں جو آپ کو عزیز ہو", ar: "افعل شيئًا يهمّك", zh: "做一件你在乎的事" },
    why: { en: "A hobby, volunteering, or helping someone gives a sense of purpose.", es: "Un pasatiempo, el voluntariado o ayudar a alguien dan un sentido de propósito.", ur: "کوئی مشغلہ، رضاکارانہ کام یا کسی کی مدد زندگی کو مقصد دیتی ہے۔", ar: "الهواية أو التطوع أو مساعدة أحدهم يمنحك إحساسًا بالهدف.", zh: "爱好、志愿服务或帮助他人能带来使命感。" } },
  { key: "senses", icon: "visibility",
    title: { en: "Clean your glasses or check your hearing aid", es: "Limpie sus lentes o revise su audífono", ur: "اپنی عینک صاف کریں یا سننے کا آلہ چیک کریں", ar: "نظّف نظارتك أو افحص سماعة أذنك", zh: "擦擦眼镜或检查助听器" },
    why: { en: "Good hearing and vision keep you safe and connected. Get them checked every year.", es: "Oír y ver bien le mantiene seguro y conectado. Revíselos cada año.", ur: "اچھی سماعت اور نظر آپ کو محفوظ اور جڑا رکھتی ہیں۔ ہر سال معائنہ کروائیں۔", ar: "السمع والبصر الجيدان يبقيانك آمنًا ومتواصلًا. افحصهما كل عام.", zh: "良好的听力和视力让你安全并与人保持联系。每年检查一次。" } },
  { key: "teeth", icon: "sentiment_satisfied",
    title: { en: "Brush twice and floss today", es: "Cepíllese dos veces y use hilo dental hoy", ur: "آج دو بار دانت صاف کریں اور فلاس کریں", ar: "نظّف أسنانك مرتين واستخدم الخيط اليوم", zh: "今天刷牙两次并用牙线" },
    why: { en: "Healthy teeth and gums matter for your whole body. See a dentist regularly.", es: "Dientes y encías sanos importan para todo el cuerpo. Visite al dentista con regularidad.", ur: "صحت مند دانت اور مسوڑھے پورے جسم کے لیے اہم ہیں۔ باقاعدگی سے ڈینٹسٹ کو دکھائیں۔", ar: "صحة الأسنان واللثة مهمة لجسمك كله. زر طبيب الأسنان بانتظام.", zh: "牙齿和牙龈健康关系到全身健康。定期看牙医。" } },
  { key: "move", icon: "accessibility_new",
    title: { en: "Stand up and move every hour", es: "Levántese y muévase cada hora", ur: "ہر گھنٹے اٹھ کر تھوڑا چلیں", ar: "قف وتحرك كل ساعة", zh: "每小时站起来活动一下" },
    why: { en: "Sitting for a long time is hard on your body. Short walks help.", es: "Estar sentado mucho tiempo es malo para el cuerpo. Las caminatas cortas ayudan.", ur: "دیر تک بیٹھے رہنا جسم کے لیے نقصان دہ ہے۔ تھوڑی چہل قدمی مدد کرتی ہے۔", ar: "الجلوس لفترة طويلة مرهق لجسمك. المشي القصير يساعد.", zh: "久坐对身体不好。短暂散步会有帮助。" } },
  { key: "safety", icon: "house",
    title: { en: "Check one room for trip hazards", es: "Revise una habitación para evitar tropiezos", ur: "ایک کمرے میں ٹھوکر لگنے والی چیزیں دیکھیں", ar: "افحص غرفة واحدة بحثًا عن أشياء قد تسبب التعثر", zh: "检查一个房间有无绊倒隐患" },
    why: { en: "Good lighting, no loose rugs, and grab bars prevent falls. Wear sunscreen or a hat outside.", es: "Buena luz, sin alfombras sueltas y con barras de apoyo se previenen caídas. Use protector solar o sombrero afuera.", ur: "اچھی روشنی، ڈھیلے قالین نہ ہوں اور سہارے کی سلاخیں گرنے سے بچاتی ہیں۔ باہر سن اسکرین یا ٹوپی استعمال کریں۔", ar: "الإضاءة الجيدة وعدم وجود سجاد غير مثبت ومقابض الإمساك تمنع السقوط. استخدم واقي الشمس أو قبعة في الخارج.", zh: "充足照明、不放松动地毯、安装扶手可防跌倒。外出涂防晒霜或戴帽子。" } }
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

// Gets the text in the chosen language (or English if missing)
function habitText(textInAllLanguages) {
  return textInAllLanguages[settings.language] || textInAllLanguages.en;
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
  document.getElementById("habitProgressText").textContent = t("habits_done", { done: done, total: habitsPerDay });
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
    html = html + '<span><span class="bold">' + habitText(habit.title) + '</span>';
    html = html + '<span class="habitWhy">' + habitText(habit.why) + '</span></span>';
    html = html + '</label>';
  }
  document.getElementById("habitList").innerHTML = html;
}
