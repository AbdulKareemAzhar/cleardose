// ClearDose - Languages
// Every word on the screen is written here in 5 languages:
// en = English, es = Spanish, ur = Urdu, ar = Arabic, zh = Chinese (Simplified)
// t("key") gives the word in the language the person picked.
// Words like {name} get filled in by the app.
// NOTE: translations should be checked by fluent speakers before real use.

const languages = [
  { code: "en", name: "English", english: "English",  locale: "en-US",            voice: "en-US", rightToLeft: false },
  { code: "es", name: "Español", english: "Spanish",  locale: "es-US",            voice: "es-MX", rightToLeft: false },
  { code: "ur", name: "اردو",    english: "Urdu",     locale: "ur-PK",            voice: "ur-PK", rightToLeft: true },
  { code: "ar", name: "العربية", english: "Arabic",   locale: "ar-u-nu-latn",     voice: "ar-SA", rightToLeft: true },
  { code: "zh", name: "中文",     english: "Chinese",  locale: "zh-CN",            voice: "zh-CN", rightToLeft: false }
];

const words = {
  // ---------- header and menu ----------
  tagline:        { en: "Understand your medicine", es: "Entienda su medicina", ur: "اپنی دوا کو سمجھیں", ar: "افهم دواءك", zh: "了解您的药物" },
  nav_home:       { en: "Home", es: "Inicio", ur: "ہوم", ar: "الرئيسية", zh: "首页" },
  nav_medicines:  { en: "Medicines", es: "Medicinas", ur: "دوائیں", ar: "الأدوية", zh: "药物" },
  nav_ask:        { en: "Ask", es: "Preguntar", ur: "پوچھیں", ar: "اسأل", zh: "提问" },
  nav_calendar:   { en: "Calendar", es: "Calendario", ur: "کیلنڈر", ar: "التقويم", zh: "日历" },
  nav_health:     { en: "Health", es: "Salud", ur: "صحت", ar: "الصحة", zh: "健康" },
  settings:       { en: "Settings", es: "Ajustes", ur: "ترتیبات", ar: "الإعدادات", zh: "设置" },

  // ---------- home page ----------
  good_morning:   { en: "Good morning", es: "Buenos días", ur: "صبح بخیر", ar: "صباح الخير", zh: "早上好" },
  good_afternoon: { en: "Good afternoon", es: "Buenas tardes", ur: "دوپہر بخیر", ar: "مساء الخير", zh: "下午好" },
  good_evening:   { en: "Good evening", es: "Buenas noches", ur: "شام بخیر", ar: "مساء الخير", zh: "晚上好" },
  of_total:       { en: "of {total}", es: "de {total}", ur: "{total} میں سے", ar: "من {total}", zh: "共 {total}" },
  no_medicines_yet: { en: "No medicines yet", es: "Aún no hay medicinas", ur: "ابھی کوئی دوا نہیں", ar: "لا توجد أدوية بعد", zh: "还没有药物" },
  add_to_start:   { en: "Add your medicines to get started.", es: "Agregue sus medicinas para empezar.", ur: "شروع کرنے کے لیے اپنی دوائیں شامل کریں۔", ar: "أضف أدويتك للبدء.", zh: "添加您的药物即可开始。" },
  nothing_due:    { en: "No medicines due today", es: "Hoy no le toca ninguna medicina", ur: "آج کوئی دوا نہیں لینی", ar: "لا توجد أدوية مستحقة اليوم", zh: "今天没有要服的药" },
  all_done:       { en: "All done for today!", es: "¡Listo por hoy!", ur: "آج کا کام مکمل!", ar: "أنجزت كل شيء اليوم!", zh: "今天全部完成！" },
  see_you_tomorrow: { en: "Great job. See you tomorrow.", es: "Muy bien. Hasta mañana.", ur: "شاباش۔ کل ملتے ہیں۔", ar: "عمل رائع. نراك غدًا.", zh: "做得好，明天见。" },
  doses_taken:    { en: "{taken} of {total} doses taken", es: "{taken} de {total} dosis tomadas", ur: "{total} میں سے {taken} خوراکیں لی گئیں", ar: "تم تناول {taken} من {total} جرعات", zh: "已服用 {taken}/{total} 次" },
  next_dose:      { en: "Next: {slot}", es: "Siguiente: {slot}", ur: "اگلی: {slot}", ar: "التالي: {slot}", zh: "下一次：{slot}" },
  streak_one:     { en: "1-day streak", es: "Racha de 1 día", ur: "1 دن کا سلسلہ", ar: "سلسلة يوم واحد", zh: "连续 1 天" },
  streak_one_message: { en: "Great start. Keep it going tomorrow!", es: "Buen comienzo. ¡Siga mañana!", ur: "اچھی شروعات۔ کل بھی جاری رکھیں!", ar: "بداية رائعة. استمر غدًا!", zh: "开了个好头，明天继续！" },
  streak_many:    { en: "{days}-day streak", es: "Racha de {days} días", ur: "{days} دن کا سلسلہ", ar: "سلسلة {days} أيام", zh: "连续 {days} 天" },
  streak_many_message: { en: "Keep it going. You're doing great!", es: "Siga así. ¡Lo está haciendo muy bien!", ur: "اسی طرح جاری رکھیں۔ آپ بہت اچھا کر رہے ہیں!", ar: "واصل. أنت تقوم بعمل رائع!", zh: "继续保持，您做得很好！" },
  streak_start:   { en: "Start your streak today", es: "Empiece su racha hoy", ur: "آج اپنا سلسلہ شروع کریں", ar: "ابدأ سلسلتك اليوم", zh: "今天开始连续记录" },
  streak_start_message: { en: "Take all your medicines today to begin.", es: "Tome todas sus medicinas hoy para empezar.", ur: "شروع کرنے کے لیے آج اپنی تمام دوائیں لیں۔", ar: "تناول جميع أدويتك اليوم للبدء.", zh: "今天按时服完所有药即可开始。" },
  todays_medicines: { en: "Today's medicines", es: "Medicinas de hoy", ur: "آج کی دوائیں", ar: "أدوية اليوم", zh: "今天的药物" },
  this_week:      { en: "This week", es: "Esta semana", ur: "اس ہفتے", ar: "هذا الأسبوع", zh: "本周" },
  next_appointment: { en: "Next appointment", es: "Próxima cita", ur: "اگلی ملاقات", ar: "الموعد القادم", zh: "下次预约" },
  no_appointments: { en: "No upcoming appointments.", es: "No hay citas próximas.", ur: "کوئی آنے والی ملاقات نہیں۔", ar: "لا توجد مواعيد قادمة.", zh: "暂无预约。" },
  healthy_habits: { en: "Healthy habits", es: "Hábitos saludables", ur: "صحت مند عادات", ar: "عادات صحية", zh: "健康习惯" },
  habits_done:    { en: "{done} of {total} habits done today", es: "{done} de {total} hábitos hechos hoy", ur: "آج {total} میں سے {done} عادات مکمل", ar: "أنجزت {done} من {total} عادات اليوم", zh: "今天完成 {done}/{total} 项习惯" },
  add_first:      { en: "Add your first medicine", es: "Agregue su primera medicina", ur: "اپنی پہلی دوا شامل کریں", ar: "أضف دواءك الأول", zh: "添加您的第一种药物" },
  go_to_medicines: { en: "Go to Medicines", es: "Ir a Medicinas", ur: "دواؤں پر جائیں", ar: "اذهب إلى الأدوية", zh: "前往药物" },
  late:           { en: "LATE", es: "TARDE", ur: "دیر", ar: "متأخر", zh: "已过时" },
  take_amount:    { en: "Take {amount}", es: "Tome {amount}", ur: "{amount} لیں", ar: "تناول {amount}", zh: "服用 {amount}" },
  weekly_tag:     { en: "Weekly", es: "Semanal", ur: "ہفتہ وار", ar: "أسبوعي", zh: "每周" },
  taken:          { en: "Taken", es: "Tomada", ur: "لے لی", ar: "تم التناول", zh: "已服用" },
  undo:           { en: "Undo", es: "Deshacer", ur: "واپس", ar: "تراجع", zh: "撤销" },
  i_took_it:      { en: "I took it", es: "Ya la tomé", ur: "میں نے لے لی", ar: "تناولته", zh: "我已服用" },
  when_needed:    { en: "Only when needed", es: "Solo cuando la necesite", ur: "صرف ضرورت کے وقت", ar: "عند الحاجة فقط", zh: "仅在需要时" },
  taken_times:    { en: "Taken {times} time(s) today", es: "Tomada {times} vez/veces hoy", ur: "آج {times} بار لی", ar: "تم تناوله {times} مرة اليوم", zh: "今天已服用 {times} 次" },
  i_took_one:     { en: "I took one now", es: "Acabo de tomar una", ur: "میں نے ابھی لی", ar: "تناولت جرعة الآن", zh: "我刚服用了一次" },
  listen:         { en: "Listen", es: "Escuchar", ur: "سنیں", ar: "استمع", zh: "朗读" },

  // ---------- times of day ----------
  slot_morning:   { en: "Morning", es: "Mañana", ur: "صبح", ar: "الصباح", zh: "早上" },
  slot_noon:      { en: "Midday", es: "Mediodía", ur: "دوپہر", ar: "الظهر", zh: "中午" },
  slot_evening:   { en: "Evening", es: "Tarde", ur: "شام", ar: "المساء", zh: "傍晚" },
  slot_bedtime:   { en: "Bedtime", es: "Al acostarse", ur: "سونے سے پہلے", ar: "قبل النوم", zh: "睡前" },

  // ---------- units (one / many) ----------
  unit_pill_one:          { en: "pill", es: "pastilla", ur: "گولی", ar: "حبة", zh: "片" },
  unit_pill_many:         { en: "pills", es: "pastillas", ur: "گولیاں", ar: "حبات", zh: "片" },
  unit_puff_one:          { en: "puff", es: "inhalación", ur: "کش", ar: "بخة", zh: "喷" },
  unit_puff_many:         { en: "puffs", es: "inhalaciones", ur: "کش", ar: "بخات", zh: "喷" },
  unit_drop_one:          { en: "drop", es: "gota", ur: "قطرہ", ar: "قطرة", zh: "滴" },
  unit_drop_many:         { en: "drops", es: "gotas", ur: "قطرے", ar: "قطرات", zh: "滴" },
  unit_spray_one:         { en: "spray", es: "atomización", ur: "اسپرے", ar: "رشة", zh: "喷" },
  unit_spray_many:        { en: "sprays", es: "atomizaciones", ur: "اسپرے", ar: "رشات", zh: "喷" },
  unit_injection_one:     { en: "injection", es: "inyección", ur: "انجکشن", ar: "حقنة", zh: "针" },
  unit_injection_many:    { en: "injections", es: "inyecciones", ur: "انجکشن", ar: "حقن", zh: "针" },
  unit_application_one:   { en: "application", es: "aplicación", ur: "بار لگائیں", ar: "دهنة", zh: "次涂抹" },
  unit_application_many:  { en: "applications", es: "aplicaciones", ur: "بار لگائیں", ar: "دهنات", zh: "次涂抹" },
  unit_capful_one:        { en: "capful", es: "tapa", ur: "ڈھکن", ar: "غطاء", zh: "瓶盖" },
  unit_capful_many:       { en: "capfuls", es: "tapas", ur: "ڈھکن", ar: "أغطية", zh: "瓶盖" },
  each_time:      { en: "each time", es: "cada vez", ur: "ہر بار", ar: "في كل مرة", zh: "每次" },

  // ---------- medicines page ----------
  my_medicines:   { en: "My medicines", es: "Mis medicinas", ur: "میری دوائیں", ar: "أدويتي", zh: "我的药物" },
  no_medicines_added: { en: "You have not added any medicines yet.", es: "Aún no ha agregado medicinas.", ur: "آپ نے ابھی تک کوئی دوا شامل نہیں کی۔", ar: "لم تُضف أي أدوية بعد.", zh: "您还没有添加任何药物。" },
  added_banner:   { en: "Added! Here is what to know.", es: "¡Agregada! Esto es lo que debe saber.", ur: "شامل ہو گئی! یہ جاننا ضروری ہے:", ar: "تمت الإضافة! إليك ما يجب معرفته.", zh: "已添加！以下是需要了解的信息。" },
  often_daily:    { en: "Every day", es: "Todos los días", ur: "روزانہ", ar: "كل يوم", zh: "每天" },
  often_weekly:   { en: "Once a week", es: "Una vez por semana", ur: "ہفتے میں ایک بار", ar: "مرة في الأسبوع", zh: "每周一次" },
  often_asneeded: { en: "Only when needed", es: "Solo cuando la necesite", ur: "صرف ضرورت کے وقت", ar: "عند الحاجة فقط", zh: "仅在需要时" },
  every_weekday:  { en: "Every {day}", es: "Cada {day}", ur: "ہر {day}", ar: "كل {day}", zh: "每{day}" },
  info_helps:     { en: "What it is used for", es: "Para qué sirve", ur: "یہ کس لیے ہے", ar: "ما فائدته", zh: "用途" },
  info_how:       { en: "How to take it", es: "Cómo tomarla", ur: "کیسے لیں", ar: "كيفية تناوله", zh: "服用方法" },
  info_side:      { en: "Common side effects", es: "Efectos secundarios comunes", ur: "عام مضر اثرات", ar: "الآثار الجانبية الشائعة", zh: "常见副作用" },
  info_precautions: { en: "Precautions", es: "Precauciones", ur: "احتیاط", ar: "الاحتياطات", zh: "注意事项" },
  follow_label:   { en: "(Follow your label if it says something different.)", es: "(Siga su etiqueta si dice algo diferente.)", ur: "(اگر لیبل پر کچھ اور لکھا ہو تو لیبل پر عمل کریں۔)", ar: "(اتبع الملصق إن كان يقول شيئًا مختلفًا.)", zh: "（如标签上写法不同，请以标签为准。）" },
  summary_note:   { en: "This is a simple summary. Always follow your label and your doctor.", es: "Este es un resumen sencillo. Siga siempre su etiqueta y a su médico.", ur: "یہ ایک آسان خلاصہ ہے۔ ہمیشہ اپنے لیبل اور ڈاکٹر کی ہدایت پر عمل کریں۔", ar: "هذا ملخص بسيط. اتبع دائمًا الملصق وتعليمات طبيبك.", zh: "这只是简单摘要。请始终遵照药品标签和医生的指示。" },
  english_only:   { en: "", es: "Los detalles de esta medicina solo están en inglés por ahora.", ur: "اس دوا کی تفصیلات ابھی صرف انگریزی میں ہیں۔", ar: "تفاصيل هذا الدواء متوفرة بالإنجليزية فقط حاليًا.", zh: "此药物的详细信息目前只有英文版。" },
  supplement_note: { en: "This is a supplement. Supplements are not checked by the FDA like medicines are. Tell your doctor you take it.", es: "Este es un suplemento. La FDA no revisa los suplementos como las medicinas. Dígale a su médico que lo toma.", ur: "یہ ایک سپلیمنٹ ہے۔ ایف ڈی اے سپلیمنٹس کو دواؤں کی طرح نہیں جانچتا۔ اپنے ڈاکٹر کو بتائیں کہ آپ اسے لیتے ہیں۔", ar: "هذا مكمّل غذائي. لا تفحص إدارة الغذاء والدواء المكملات كما تفحص الأدوية. أخبر طبيبك أنك تتناوله.", zh: "这是保健品。FDA 不像审核药物那样审核保健品。请告诉医生您在服用。" },
  no_info:        { en: "ClearDose does not have information about this medicine yet. Ask your pharmacist what it is for and how to take it.", es: "ClearDose aún no tiene información sobre esta medicina. Pregunte a su farmacéutico para qué sirve y cómo tomarla.", ur: "ClearDose کے پاس ابھی اس دوا کی معلومات نہیں۔ اپنے فارماسسٹ سے پوچھیں کہ یہ کس لیے ہے اور کیسے لیں۔", ar: "لا تتوفر لدى ClearDose معلومات عن هذا الدواء بعد. اسأل الصيدلي عن فائدته وكيفية تناوله.", zh: "ClearDose 暂时没有这种药物的信息。请向药剂师询问用途和服用方法。" },
  more_info:      { en: "More info", es: "Más información", ur: "مزید معلومات", ar: "مزيد من المعلومات", zh: "更多信息" },
  hide_info:      { en: "Hide info", es: "Ocultar información", ur: "معلومات چھپائیں", ar: "إخفاء المعلومات", zh: "隐藏信息" },
  remove:         { en: "Remove", es: "Quitar", ur: "ہٹائیں", ar: "إزالة", zh: "删除" },
  confirm_remove: { en: "Remove this medicine?", es: "¿Quitar esta medicina?", ur: "یہ دوا ہٹا دیں؟", ar: "هل تريد إزالة هذا الدواء؟", zh: "删除这种药物吗？" },

  // ---------- add a medicine ----------
  add_medicine:   { en: "Add a medicine", es: "Agregar una medicina", ur: "دوا شامل کریں", ar: "إضافة دواء", zh: "添加药物" },
  scan_label:     { en: "Scan a label", es: "Escanear una etiqueta", ur: "لیبل اسکین کریں", ar: "مسح الملصق", zh: "扫描标签" },
  scan_tip:       { en: "Take a clear photo of the label in good light. The photo stays on your phone.", es: "Tome una foto clara de la etiqueta con buena luz. La foto se queda en su teléfono.", ur: "اچھی روشنی میں لیبل کی صاف تصویر لیں۔ تصویر آپ کے فون پر ہی رہتی ہے۔", ar: "التقط صورة واضحة للملصق في إضاءة جيدة. تبقى الصورة على هاتفك.", zh: "在光线充足处拍一张清晰的标签照片。照片只保存在您的手机上。" },
  scan_see_words: { en: "See the words it read", es: "Ver las palabras que leyó", ur: "پڑھے گئے الفاظ دیکھیں", ar: "عرض الكلمات المقروءة", zh: "查看识别出的文字" },
  or_type:        { en: "or type it in", es: "o escríbala", ur: "یا خود لکھیں", ar: "أو اكتبه", zh: "或手动输入" },
  medicine_name:  { en: "Medicine name", es: "Nombre de la medicina", ur: "دوا کا نام", ar: "اسم الدواء", zh: "药物名称" },
  medicine_name_hint: { en: "Start typing, like Metf...", es: "Empiece a escribir, como Metf...", ur: "لکھنا شروع کریں، جیسے Metf...", ar: "ابدأ الكتابة، مثل Metf...", zh: "开始输入，例如 Metf..." },
  dose_label:     { en: "Dose (for example 500 mg)", es: "Dosis (por ejemplo 500 mg)", ur: "خوراک (مثلاً 500 mg)", ar: "الجرعة (مثل 500 mg)", zh: "剂量（例如 500 mg）" },
  how_many:       { en: "How many each time?", es: "¿Cuántas cada vez?", ur: "ہر بار کتنی؟", ar: "كم في كل مرة؟", zh: "每次多少？" },
  how_often:      { en: "How often?", es: "¿Con qué frecuencia?", ur: "کتنی بار؟", ar: "كم مرة؟", zh: "多久一次？" },
  which_day:      { en: "Which day?", es: "¿Qué día?", ur: "کون سا دن؟", ar: "أي يوم؟", zh: "哪一天？" },
  when_take:      { en: "When do you take it?", es: "¿Cuándo la toma?", ur: "آپ اسے کب لیتے ہیں؟", ar: "متى تتناوله؟", zh: "您什么时候服用？" },
  save_medicine:  { en: "Save medicine", es: "Guardar medicina", ur: "دوا محفوظ کریں", ar: "حفظ الدواء", zh: "保存药物" },
  known_medicine: { en: "ClearDose knows this medicine ({name}). We filled in the usual choices. Change them to match your label.", es: "ClearDose conoce esta medicina ({name}). Llenamos las opciones habituales. Cámbielas según su etiqueta.", ur: "ClearDose اس دوا ({name}) کو جانتا ہے۔ ہم نے عام انتخاب بھر دیے ہیں۔ اپنے لیبل کے مطابق تبدیل کریں۔", ar: "يعرف ClearDose هذا الدواء ({name}). ملأنا الخيارات المعتادة. غيّرها لتطابق الملصق.", zh: "ClearDose 认识这种药物（{name}），已填入常用选项。请按标签修改。" },
  need_name:      { en: "Please type a medicine name.", es: "Escriba el nombre de una medicina.", ur: "براہ کرم دوا کا نام لکھیں۔", ar: "يرجى كتابة اسم الدواء.", zh: "请输入药物名称。" },
  need_time:      { en: "Please pick at least one time.", es: "Elija al menos un horario.", ur: "براہ کرم کم از کم ایک وقت چنیں۔", ar: "يرجى اختيار وقت واحد على الأقل.", zh: "请至少选择一个时间。" },
  scan_needs_internet: { en: "The scanner needs the internet. Please type the medicine instead.", es: "El escáner necesita internet. Escriba la medicina.", ur: "اسکینر کو انٹرنیٹ چاہیے۔ براہ کرم دوا کا نام لکھیں۔", ar: "الماسح يحتاج إلى الإنترنت. يرجى كتابة الدواء بدلًا من ذلك.", zh: "扫描需要联网。请改为手动输入。" },
  scan_getting_ready: { en: "Getting the scanner ready...", es: "Preparando el escáner...", ur: "اسکینر تیار ہو رہا ہے...", ar: "جارٍ تجهيز الماسح...", zh: "正在准备扫描..." },
  scan_reading:   { en: "Reading the label... {percent}%", es: "Leyendo la etiqueta... {percent}%", ur: "لیبل پڑھا جا رہا ہے... {percent}%", ar: "جارٍ قراءة الملصق... {percent}%", zh: "正在读取标签... {percent}%" },
  scan_failed:    { en: "Sorry, that photo couldn't be read. Try again in good light, or type the medicine in.", es: "No se pudo leer esa foto. Intente con buena luz o escriba la medicina.", ur: "معذرت، یہ تصویر نہیں پڑھی جا سکی۔ اچھی روشنی میں دوبارہ کوشش کریں یا دوا کا نام لکھیں۔", ar: "عذرًا، تعذرت قراءة الصورة. حاول مجددًا في إضاءة جيدة أو اكتب الدواء.", zh: "抱歉，无法读取该照片。请在光线好的地方重试，或手动输入。" },
  scan_found:     { en: "Found {name}. Please check it matches your label, then tap Save.", es: "Se encontró {name}. Revise que coincida con su etiqueta y toque Guardar.", ur: "{name} مل گئی۔ دیکھیں کہ یہ لیبل سے ملتی ہے، پھر محفوظ کریں دبائیں۔", ar: "تم العثور على {name}. تأكد من مطابقته للملصق ثم اضغط حفظ.", zh: "找到 {name}。请核对是否与标签一致，然后点击保存。" },
  scan_dose_only: { en: "We found the dose but not the medicine name. Please type the name.", es: "Encontramos la dosis pero no el nombre. Escriba el nombre.", ur: "خوراک مل گئی لیکن دوا کا نام نہیں۔ براہ کرم نام لکھیں۔", ar: "وجدنا الجرعة لكن ليس اسم الدواء. يرجى كتابة الاسم.", zh: "找到了剂量，但没找到药名。请输入药名。" },
  scan_nothing:   { en: "We couldn't find a medicine we know. Please type it in.", es: "No encontramos una medicina conocida. Escríbala.", ur: "کوئی جانی پہچانی دوا نہیں ملی۔ براہ کرم نام لکھیں۔", ar: "لم نجد دواءً نعرفه. يرجى كتابته.", zh: "没有找到已知的药物。请手动输入。" },

  // ---------- ask page ----------
  ask_title:      { en: "Ask about your medicines", es: "Pregunte sobre sus medicinas", ur: "اپنی دواؤں کے بارے میں پوچھیں", ar: "اسأل عن أدويتك", zh: "询问您的药物" },
  ask_notice:     { en: "I answer simple questions about medicines in ClearDose. For anything about your health, please ask your doctor or pharmacist. In an emergency, call 911.", es: "Respondo preguntas sencillas sobre las medicinas de ClearDose. Para cualquier tema de su salud, pregunte a su médico o farmacéutico. En una emergencia, llame al 911.", ur: "میں ClearDose کی دواؤں کے بارے میں آسان سوالوں کے جواب دیتا ہوں۔ اپنی صحت سے متعلق کسی بھی بات کے لیے اپنے ڈاکٹر یا فارماسسٹ سے پوچھیں۔ ہنگامی صورت میں 911 پر کال کریں۔", ar: "أجيب عن أسئلة بسيطة حول الأدوية في ClearDose. لأي أمر يخص صحتك، اسأل طبيبك أو الصيدلي. في حالة الطوارئ، اتصل بالرقم 911.", zh: "我只回答关于 ClearDose 中药物的简单问题。有关您健康的任何问题，请咨询医生或药剂师。紧急情况请拨打 911。" },
  ask_placeholder: { en: "Type a question...", es: "Escriba una pregunta...", ur: "سوال لکھیں...", ar: "اكتب سؤالًا...", zh: "输入问题..." },
  quick_what_for: { en: "What is {name} for?", es: "¿Para qué sirve {name}?", ur: "{name} کس لیے ہے؟", ar: "ما فائدة {name}؟", zh: "{name} 是治什么的？" },
  quick_side:     { en: "Side effects of {name}", es: "Efectos secundarios de {name}", ur: "{name} کے مضر اثرات", ar: "الآثار الجانبية لـ {name}", zh: "{name} 的副作用" },
  quick_missed:   { en: "What if I miss a dose?", es: "¿Y si olvido una dosis?", ur: "اگر خوراک بھول جاؤں تو؟", ar: "ماذا لو نسيت جرعة؟", zh: "漏服一次怎么办？" },
  quick_together: { en: "Can I take my medicines together?", es: "¿Puedo tomar mis medicinas juntas?", ur: "کیا میں اپنی دوائیں ایک ساتھ لے سکتا ہوں؟", ar: "هل يمكنني تناول أدويتي معًا؟", zh: "我的药可以一起吃吗？" },
  chat_welcome:   { en: "Hello! I can tell you what your medicines are for, how to take them, and their common side effects. What would you like to know?", es: "¡Hola! Puedo decirle para qué sirven sus medicinas, cómo tomarlas y sus efectos secundarios comunes. ¿Qué le gustaría saber?", ur: "السلام علیکم! میں آپ کو بتا سکتا ہوں کہ آپ کی دوائیں کس لیے ہیں، کیسے لینی ہیں اور ان کے عام مضر اثرات کیا ہیں۔ آپ کیا جاننا چاہیں گے؟", ar: "مرحبًا! يمكنني أن أخبرك بفائدة أدويتك وكيفية تناولها وآثارها الجانبية الشائعة. ماذا تريد أن تعرف؟", zh: "您好！我可以告诉您药物的用途、服用方法和常见副作用。您想了解什么？" },
  chat_emergency: { en: "This could be an emergency. Please call 911 right now, or have someone take you to the emergency room. If someone took too much medicine, you can also call Poison Control at 1-800-222-1222.", es: "Esto podría ser una emergencia. Llame al 911 ahora mismo o pida que lo lleven a la sala de emergencias. Si alguien tomó demasiada medicina, también puede llamar a Control de Envenenamiento al 1-800-222-1222.", ur: "یہ ہنگامی صورتحال ہو سکتی ہے۔ ابھی 911 پر کال کریں یا کسی سے کہیں کہ آپ کو ایمرجنسی لے جائے۔ اگر کسی نے زیادہ دوا لے لی ہو تو پوائزن کنٹرول 1-800-222-1222 پر بھی کال کر سکتے ہیں۔", ar: "قد تكون هذه حالة طارئة. اتصل بالرقم 911 الآن أو اطلب من أحد أن يأخذك إلى الطوارئ. إذا تناول أحد دواءً أكثر من اللازم، يمكنك أيضًا الاتصال بمركز السموم على 1-800-222-1222.", zh: "这可能是紧急情况。请立即拨打 911，或请人送您去急诊室。如果有人吃药过量，也可拨打中毒控制中心 1-800-222-1222。" },
  chat_crisis:    { en: "I'm really glad you reached out. Please call or text 988 to talk with someone right now (the Suicide & Crisis Lifeline, free, 24 hours a day). If you are in danger, call 911.", es: "Me alegra mucho que haya escrito. Llame o envíe un mensaje al 988 para hablar con alguien ahora mismo (Línea de Prevención del Suicidio y Crisis, gratis, las 24 horas; tiene ayuda en español). Si está en peligro, llame al 911.", ur: "مجھے خوشی ہے کہ آپ نے بات کی۔ براہ کرم ابھی کسی سے بات کرنے کے لیے 988 پر کال یا میسج کریں (خودکشی اور بحران لائف لائن، مفت، 24 گھنٹے)۔ اگر آپ خطرے میں ہیں تو 911 پر کال کریں۔", ar: "أنا سعيد حقًا لأنك تواصلت. يرجى الاتصال أو إرسال رسالة إلى 988 للتحدث مع شخص الآن (خط الانتحار والأزمات، مجاني، على مدار 24 ساعة). إذا كنت في خطر، اتصل بالرقم 911.", zh: "很高兴您说出来。请立即拨打或发短信至 988，和专人聊一聊（自杀与危机生命线，免费，24 小时）。如果您有危险，请拨打 911。" },
  chat_health:    { en: "That's a question about your health, so it's best to ask your doctor or pharmacist. They know your full history and can give you the right answer. If it feels urgent, call your doctor's office today or 911 in an emergency.", es: "Esa es una pregunta sobre su salud, así que es mejor preguntarle a su médico o farmacéutico. Ellos conocen su historial y pueden darle la respuesta correcta. Si es urgente, llame hoy al consultorio de su médico o al 911 en una emergencia.", ur: "یہ آپ کی صحت کا سوال ہے، اس لیے بہتر ہے کہ اپنے ڈاکٹر یا فارماسسٹ سے پوچھیں۔ وہ آپ کی پوری ہسٹری جانتے ہیں اور صحیح جواب دے سکتے ہیں۔ اگر فوری ہو تو آج ہی ڈاکٹر کے دفتر کال کریں، اور ایمرجنسی میں 911۔", ar: "هذا سؤال عن صحتك، لذا من الأفضل أن تسأل طبيبك أو الصيدلي. فهم يعرفون تاريخك الصحي الكامل ويمكنهم إعطاؤك الإجابة الصحيحة. إذا كان الأمر عاجلًا، اتصل بعيادة طبيبك اليوم أو بالرقم 911 في حالة الطوارئ.", zh: "这是关于您健康的问题，最好询问医生或药剂师。他们了解您的完整病史，能给出正确答案。如果情况紧急，请今天就联系医生诊所，紧急情况请拨打 911。" },
  chat_about:     { en: "{name}:", es: "{name}:", ur: "{name}:", ar: "{name}:", zh: "{name}：" },
  chat_how_for:   { en: "How to take {name}:", es: "Cómo tomar {name}:", ur: "{name} کیسے لیں:", ar: "كيفية تناول {name}:", zh: "{name} 的服用方法：" },
  chat_side_for:  { en: "Common side effects of {name}:", es: "Efectos secundarios comunes de {name}:", ur: "{name} کے عام مضر اثرات:", ar: "الآثار الجانبية الشائعة لـ {name}:", zh: "{name} 的常见副作用：" },
  chat_precautions_for: { en: "Precautions for {name}:", es: "Precauciones con {name}:", ur: "{name} کے لیے احتیاط:", ar: "احتياطات {name}:", zh: "{name} 的注意事项：" },
  chat_side_doctor: { en: "If a side effect bothers you or won't go away, tell your doctor. Don't stop the medicine on your own.", es: "Si un efecto secundario le molesta o no se quita, dígaselo a su médico. No deje la medicina por su cuenta.", ur: "اگر کوئی مضر اثر پریشان کرے یا ختم نہ ہو تو ڈاکٹر کو بتائیں۔ خود سے دوا بند نہ کریں۔", ar: "إذا أزعجك أحد الآثار الجانبية أو لم يختفِ، أخبر طبيبك. لا توقف الدواء من تلقاء نفسك.", zh: "如果副作用让您困扰或一直不消失，请告诉医生。不要自行停药。" },
  chat_ask_pharmacist: { en: "Your pharmacist can answer more questions for free.", es: "Su farmacéutico puede responder más preguntas gratis.", ur: "آپ کا فارماسسٹ مفت میں مزید سوالوں کے جواب دے سکتا ہے۔", ar: "يمكن للصيدلي الإجابة عن المزيد من الأسئلة مجانًا.", zh: "药剂师可以免费回答更多问题。" },
  chat_follow_label: { en: "Always follow your own label if it says something different.", es: "Siga siempre su propia etiqueta si dice algo diferente.", ur: "اگر آپ کے لیبل پر کچھ اور لکھا ہو تو ہمیشہ اسی پر عمل کریں۔", ar: "اتبع دائمًا الملصق الخاص بك إن كان يقول شيئًا مختلفًا.", zh: "如果您的标签写法不同，请始终以标签为准。" },
  chat_missed:    { en: "If you miss a dose: check your label first. For many medicines, you take it when you remember, unless it's almost time for the next dose. Never take two doses at once to catch up. If you're not sure, call your pharmacist.", es: "Si olvida una dosis: primero revise su etiqueta. Con muchas medicinas, se toma al recordarla, a menos que ya casi sea hora de la siguiente. Nunca tome dos dosis juntas para compensar. Si no está seguro, llame a su farmacéutico.", ur: "اگر خوراک بھول جائیں: پہلے اپنا لیبل دیکھیں۔ بہت سی دواؤں میں یاد آتے ہی لے لیتے ہیں، سوائے اس کے کہ اگلی خوراک کا وقت قریب ہو۔ کمی پوری کرنے کے لیے کبھی دو خوراکیں ایک ساتھ نہ لیں۔ شک ہو تو فارماسسٹ کو کال کریں۔", ar: "إذا نسيت جرعة: راجع الملصق أولًا. في كثير من الأدوية، تتناولها عندما تتذكر، إلا إذا اقترب موعد الجرعة التالية. لا تتناول جرعتين معًا أبدًا للتعويض. إن لم تكن متأكدًا، اتصل بالصيدلي.", zh: "如果漏服：先看标签。很多药物想起来就补服，除非快到下一次服药时间。切勿一次吃两倍剂量来补。如不确定，请致电药剂师。" },
  chat_together:  { en: "ClearDose can't safely check whether medicines mix well together. Please ask your pharmacist. It's free and quick, and they can check everything you take, including vitamins.", es: "ClearDose no puede revisar con seguridad si las medicinas se pueden combinar. Pregunte a su farmacéutico. Es gratis y rápido, y puede revisar todo lo que toma, incluso vitaminas.", ur: "ClearDose محفوظ طریقے سے یہ نہیں جانچ سکتا کہ دوائیں ایک ساتھ ٹھیک ہیں یا نہیں۔ براہ کرم اپنے فارماسسٹ سے پوچھیں۔ یہ مفت اور جلدی ہوتا ہے، اور وہ وٹامنز سمیت سب کچھ چیک کر سکتے ہیں۔", ar: "لا يستطيع ClearDose التحقق بأمان مما إذا كانت الأدوية تتوافق معًا. يرجى سؤال الصيدلي. الأمر مجاني وسريع، ويمكنه فحص كل ما تتناوله بما في ذلك الفيتامينات.", zh: "ClearDose 无法安全地判断药物能否一起服用。请询问药剂师，免费又快捷，他们能检查您服用的所有药物，包括维生素。" },
  chat_stop:      { en: "Please don't stop a medicine on your own. Some medicines are dangerous to stop suddenly, and many work even when you feel fine. Talk to your doctor first.", es: "Por favor no deje una medicina por su cuenta. Algunas son peligrosas de suspender de golpe, y muchas funcionan aunque se sienta bien. Hable primero con su médico.", ur: "براہ کرم خود سے دوا بند نہ کریں۔ کچھ دوائیں اچانک بند کرنا خطرناک ہے، اور بہت سی دوائیں ٹھیک محسوس کرنے پر بھی کام کرتی ہیں۔ پہلے اپنے ڈاکٹر سے بات کریں۔", ar: "من فضلك لا توقف أي دواء من تلقاء نفسك. بعض الأدوية خطير إيقافها فجأة، وكثير منها يعمل حتى عندما تشعر أنك بخير. تحدث مع طبيبك أولًا.", zh: "请不要自行停药。有些药突然停用很危险，很多药在您感觉良好时也在起作用。请先和医生商量。" },
  chat_food:      { en: "It depends on the medicine. Ask me about one of yours, like \"How do I take Metformin?\", or check the label.", es: "Depende de la medicina. Pregúnteme por una de las suyas, como \"¿Cómo tomo Metformin?\", o revise la etiqueta.", ur: "یہ دوا پر منحصر ہے۔ اپنی کسی دوا کے بارے میں پوچھیں، جیسے \"Metformin کیسے لیں؟\"، یا لیبل دیکھیں۔", ar: "يعتمد ذلك على الدواء. اسألني عن أحد أدويتك، مثل \"كيف أتناول Metformin؟\"، أو راجع الملصق.", zh: "这取决于药物。可以问我您的某种药，例如“Metformin 怎么吃？”，或查看标签。" },
  chat_dont_know: { en: "Sorry, I can only answer simple questions about medicines in ClearDose, like what a medicine is for, how to take it, or its side effects. For anything else, please ask your doctor or pharmacist.", es: "Lo siento, solo puedo responder preguntas sencillas sobre las medicinas de ClearDose, como para qué sirven, cómo tomarlas o sus efectos secundarios. Para lo demás, pregunte a su médico o farmacéutico.", ur: "معذرت، میں صرف ClearDose کی دواؤں کے بارے میں آسان سوالوں کے جواب دے سکتا ہوں، جیسے دوا کس لیے ہے، کیسے لینی ہے یا اس کے مضر اثرات۔ باقی کے لیے اپنے ڈاکٹر یا فارماسسٹ سے پوچھیں۔", ar: "عذرًا، يمكنني فقط الإجابة عن أسئلة بسيطة حول الأدوية في ClearDose، مثل فائدة الدواء أو كيفية تناوله أو آثاره الجانبية. لأي شيء آخر، اسأل طبيبك أو الصيدلي.", zh: "抱歉，我只能回答关于 ClearDose 中药物的简单问题，比如用途、服用方法或副作用。其他问题请咨询医生或药剂师。" },

  // ---------- calendar ----------
  legend_all:     { en: "All taken", es: "Todas tomadas", ur: "سب لیں", ar: "تم تناول الكل", zh: "全部服用" },
  legend_some:    { en: "Some missed", es: "Algunas omitidas", ur: "کچھ رہ گئیں", ar: "فات بعضها", zh: "部分漏服" },
  legend_missed:  { en: "Missed", es: "Omitidas", ur: "رہ گئیں", ar: "فائتة", zh: "漏服" },
  legend_appt:    { en: "Appointment", es: "Cita", ur: "ملاقات", ar: "موعد", zh: "预约" },
  add_appointment: { en: "Add an appointment", es: "Agregar una cita", ur: "ملاقات شامل کریں", ar: "إضافة موعد", zh: "添加预约" },
  appt_tip:       { en: "Tip: tap a day on the calendar to pick it.", es: "Consejo: toque un día en el calendario para elegirlo.", ur: "مشورہ: دن چننے کے لیے کیلنڈر پر اسے دبائیں۔", ar: "نصيحة: اضغط على يوم في التقويم لاختياره.", zh: "提示：点击日历上的日期即可选择。" },
  appt_what:      { en: "What is it?", es: "¿Qué es?", ur: "یہ کیا ہے؟", ar: "ما هو؟", zh: "是什么？" },
  appt_what_hint: { en: "For example: Dr. Patel - heart check", es: "Por ejemplo: Dr. Patel - revisión del corazón", ur: "مثلاً: ڈاکٹر پٹیل - دل کا معائنہ", ar: "مثال: د. باتيل - فحص القلب", zh: "例如：Patel 医生 - 心脏检查" },
  date:           { en: "Date", es: "Fecha", ur: "تاریخ", ar: "التاريخ", zh: "日期" },
  time:           { en: "Time", es: "Hora", ur: "وقت", ar: "الوقت", zh: "时间" },
  appt_place:     { en: "Location or address (optional)", es: "Lugar o dirección (opcional)", ur: "جگہ یا پتہ (اختیاری)", ar: "المكان أو العنوان (اختياري)", zh: "地点或地址（可选）" },
  appt_place_hint: { en: "For example: 123 Main St, Fremont, CA", es: "Por ejemplo: 123 Main St, Fremont, CA", ur: "مثلاً: 123 Main St, Fremont, CA", ar: "مثال: 123 Main St, Fremont, CA", zh: "例如：123 Main St, Fremont, CA" },
  save_appointment: { en: "Save appointment", es: "Guardar cita", ur: "ملاقات محفوظ کریں", ar: "حفظ الموعد", zh: "保存预约" },
  upcoming:       { en: "Upcoming", es: "Próximas", ur: "آنے والی", ar: "القادمة", zh: "即将到来" },
  appt_when:      { en: "{date} at {time}", es: "{date} a las {time}", ur: "{date}، {time}", ar: "{date} الساعة {time}", zh: "{date} {time}" },
  appt_need:      { en: "Please type what the appointment is and pick a date.", es: "Escriba de qué es la cita y elija una fecha.", ur: "براہ کرم ملاقات کا نام لکھیں اور تاریخ چنیں۔", ar: "يرجى كتابة نوع الموعد واختيار التاريخ.", zh: "请输入预约内容并选择日期。" },
  confirm_remove_appt: { en: "Remove this appointment?", es: "¿Quitar esta cita?", ur: "یہ ملاقات ہٹا دیں؟", ar: "هل تريد إزالة هذا الموعد؟", zh: "删除此预约吗？" },

  // ---------- health page ----------
  habits_sub:     { en: "5 new habits every day, linked to a longer, healthier life.", es: "5 hábitos nuevos cada día, asociados con una vida más larga y sana.", ur: "ہر روز 5 نئی عادات، جو لمبی اور صحت مند زندگی سے جڑی ہیں۔", ar: "5 عادات جديدة كل يوم، مرتبطة بحياة أطول وأكثر صحة.", zh: "每天 5 个新习惯，与更长寿、更健康的生活有关。" },
  last_7_days:    { en: "Last 7 days", es: "Últimos 7 días", ur: "پچھلے 7 دن", ar: "آخر 7 أيام", zh: "最近 7 天" },
  habits_note:    { en: "These are general wellness tips, not medical advice. Ask your doctor what is safe for you.", es: "Son consejos generales de bienestar, no consejo médico. Pregunte a su médico qué es seguro para usted.", ur: "یہ عمومی صحت کے مشورے ہیں، طبی مشورہ نہیں۔ اپنے ڈاکٹر سے پوچھیں کہ آپ کے لیے کیا محفوظ ہے۔", ar: "هذه نصائح عامة للعافية وليست نصيحة طبية. اسأل طبيبك عما هو آمن لك.", zh: "这些是一般保健建议，不构成医疗建议。请咨询医生什么对您安全。" },

  // ---------- settings ----------
  language:       { en: "Language", es: "Idioma", ur: "زبان", ar: "اللغة", zh: "语言" },
  reminders:      { en: "Reminders", es: "Recordatorios", ur: "یاد دہانیاں", ar: "التذكيرات", zh: "提醒" },
  reminders_on:   { en: "Remind me when it's time for my medicines and appointments", es: "Recordarme cuando sea hora de mis medicinas y citas", ur: "دواؤں اور ملاقاتوں کے وقت مجھے یاد دلائیں", ar: "ذكّرني بمواعيد أدويتي ومواعيدي", zh: "到服药和预约时间时提醒我" },
  allow_notifications: { en: "Allow notifications", es: "Permitir notificaciones", ur: "اطلاعات کی اجازت دیں", ar: "السماح بالإشعارات", zh: "允许通知" },
  test_reminder:  { en: "Test a reminder", es: "Probar un recordatorio", ur: "یاد دہانی آزمائیں", ar: "تجربة تذكير", zh: "测试提醒" },
  reminder_note:  { en: "Reminders work while ClearDose is open (it can stay open in the background).", es: "Los recordatorios funcionan mientras ClearDose esté abierto (puede quedar abierto en segundo plano).", ur: "یاد دہانیاں تب کام کرتی ہیں جب ClearDose کھلا ہو (یہ پس منظر میں کھلا رہ سکتا ہے)۔", ar: "تعمل التذكيرات أثناء فتح ClearDose (يمكن أن يبقى مفتوحًا في الخلفية).", zh: "提醒在 ClearDose 打开时有效（可在后台保持打开）。" },
  notif_on:       { en: "Notifications are on.", es: "Las notificaciones están activadas.", ur: "اطلاعات آن ہیں۔", ar: "الإشعارات مفعّلة.", zh: "通知已开启。" },
  notif_off:      { en: "Notifications are off. Tap \"Allow notifications\" to turn them on.", es: "Las notificaciones están desactivadas. Toque \"Permitir notificaciones\".", ur: "اطلاعات بند ہیں۔ آن کرنے کے لیے \"اطلاعات کی اجازت دیں\" دبائیں۔", ar: "الإشعارات متوقفة. اضغط \"السماح بالإشعارات\" لتفعيلها.", zh: "通知已关闭。点击“允许通知”开启。" },
  notif_blocked:  { en: "Notifications are blocked. You can allow them in your browser or phone settings. Pop-up reminders still work.", es: "Las notificaciones están bloqueadas. Puede permitirlas en los ajustes del navegador o teléfono. Los avisos en pantalla siguen funcionando.", ur: "اطلاعات بلاک ہیں۔ آپ براؤزر یا فون کی ترتیبات میں اجازت دے سکتے ہیں۔ پاپ اپ یاد دہانیاں پھر بھی کام کرتی ہیں۔", ar: "الإشعارات محظورة. يمكنك السماح بها من إعدادات المتصفح أو الهاتف. التذكيرات المنبثقة تعمل.", zh: "通知已被阻止。可在浏览器或手机设置中允许。弹窗提醒仍可使用。" },
  notif_unsupported: { en: "This browser can't send notifications. Pop-up reminders still work. On iPhone, add ClearDose to your Home Screen to allow them.", es: "Este navegador no puede enviar notificaciones. Los avisos en pantalla siguen funcionando. En iPhone, agregue ClearDose a la pantalla de inicio para permitirlas.", ur: "یہ براؤزر اطلاعات نہیں بھیج سکتا۔ پاپ اپ یاد دہانیاں کام کرتی ہیں۔ آئی فون پر اجازت کے لیے ClearDose کو ہوم اسکرین پر شامل کریں۔", ar: "لا يستطيع هذا المتصفح إرسال إشعارات. التذكيرات المنبثقة تعمل. على iPhone، أضف ClearDose إلى الشاشة الرئيسية للسماح بها.", zh: "此浏览器无法发送通知，弹窗提醒仍可使用。在 iPhone 上，将 ClearDose 添加到主屏幕后即可允许通知。" },
  look_and_feel:  { en: "Look and feel", es: "Apariencia", ur: "شکل و صورت", ar: "المظهر", zh: "外观" },
  color_theme:    { en: "Color theme", es: "Tema de color", ur: "رنگ", ar: "سمة الألوان", zh: "颜色主题" },
  theme_light:    { en: "Light (navy and white)", es: "Claro (azul marino y blanco)", ur: "روشن (گہرا نیلا اور سفید)", ar: "فاتح (كحلي وأبيض)", zh: "浅色（海军蓝和白色）" },
  theme_dark:     { en: "Dark (black)", es: "Oscuro (negro)", ur: "گہرا (سیاہ)", ar: "داكن (أسود)", zh: "深色（黑色）" },
  font:           { en: "Font", es: "Letra", ur: "فونٹ", ar: "الخط", zh: "字体" },
  font_standard:  { en: "Standard", es: "Estándar", ur: "عام", ar: "عادي", zh: "标准" },
  font_atkinson:  { en: "Easy to read (Atkinson)", es: "Fácil de leer (Atkinson)", ur: "پڑھنے میں آسان (Atkinson)", ar: "سهل القراءة (Atkinson)", zh: "易读（Atkinson）" },
  font_lexend:    { en: "Clear spacing (Lexend)", es: "Espaciado claro (Lexend)", ur: "واضح فاصلہ (Lexend)", ar: "تباعد واضح (Lexend)", zh: "清晰间距（Lexend）" },
  font_serif:     { en: "Classic (Merriweather)", es: "Clásica (Merriweather)", ur: "کلاسک (Merriweather)", ar: "كلاسيكي (Merriweather)", zh: "经典（Merriweather）" },
  text_size:      { en: "Text size", es: "Tamaño del texto", ur: "متن کا سائز", ar: "حجم النص", zh: "文字大小" },
  size_normal:    { en: "Normal", es: "Normal", ur: "عام", ar: "عادي", zh: "正常" },
  size_large:     { en: "Large", es: "Grande", ur: "بڑا", ar: "كبير", zh: "大" },
  size_xlarge:    { en: "Extra large", es: "Muy grande", ur: "بہت بڑا", ar: "كبير جدًا", zh: "特大" },
  high_contrast:  { en: "High contrast mode", es: "Modo de alto contraste", ur: "زیادہ واضح رنگ", ar: "وضع التباين العالي", zh: "高对比度模式" },
  patient:        { en: "Patient", es: "Paciente", ur: "مریض", ar: "المريض", zh: "患者" },
  your_name:      { en: "Your name", es: "Su nombre", ur: "آپ کا نام", ar: "اسمك", zh: "您的姓名" },
  demo:           { en: "Demo", es: "Demostración", ur: "ڈیمو", ar: "عرض تجريبي", zh: "演示" },
  demo_text:      { en: "Fill the app with a sample patient for practice. This replaces your current medicines.", es: "Llene la app con un paciente de ejemplo para practicar. Esto reemplaza sus medicinas actuales.", ur: "مشق کے لیے ایپ میں ایک نمونہ مریض بھریں۔ اس سے آپ کی موجودہ دوائیں بدل جائیں گی۔", ar: "املأ التطبيق بمريض تجريبي للتدريب. سيحل هذا محل أدويتك الحالية.", zh: "用示例患者填充应用以便练习。这会替换您当前的药物。" },
  load_sample:    { en: "Load sample patient", es: "Cargar paciente de ejemplo", ur: "نمونہ مریض لوڈ کریں", ar: "تحميل مريض تجريبي", zh: "加载示例患者" },
  confirm_sample: { en: "Replace your medicines with the sample patient?", es: "¿Reemplazar sus medicinas con el paciente de ejemplo?", ur: "اپنی دوائیں نمونہ مریض سے بدل دیں؟", ar: "هل تريد استبدال أدويتك بالمريض التجريبي؟", zh: "用示例患者替换您的药物吗？" },

  // ---------- reminder pop-up ----------
  reminder_title: { en: "{slot}: time for your medicines", es: "{slot}: hora de sus medicinas", ur: "{slot}: آپ کی دواؤں کا وقت", ar: "{slot}: حان وقت أدويتك", zh: "{slot}：该吃药了" },
  reminder_late:  { en: "Did you take your {slot} medicines?", es: "¿Tomó sus medicinas de la {slot}?", ur: "کیا آپ نے {slot} کی دوائیں لیں؟", ar: "هل تناولت أدوية {slot}؟", zh: "您吃了{slot}的药吗？" },
  took_them_all:  { en: "I took them all", es: "Ya las tomé todas", ur: "میں نے سب لے لیں", ar: "تناولتها كلها", zh: "我都吃了" },
  snooze:         { en: "Remind me in 10 minutes", es: "Recordarme en 10 minutos", ur: "10 منٹ بعد یاد دلائیں", ar: "ذكّرني بعد 10 دقائق", zh: "10 分钟后提醒我" },
  snoozed:        { en: "Okay, I'll remind you in 10 minutes.", es: "Bien, le recordaré en 10 minutos.", ur: "ٹھیک ہے، 10 منٹ بعد یاد دلاؤں گا۔", ar: "حسنًا، سأذكّرك بعد 10 دقائق.", zh: "好的，10 分钟后提醒您。" },
  close:          { en: "Close", es: "Cerrar", ur: "بند کریں", ar: "إغلاق", zh: "关闭" },
  ok:             { en: "OK", es: "Bien", ur: "ٹھیک ہے", ar: "حسنًا", zh: "好的" },
  appt_soon:      { en: "Appointment in less than an hour", es: "Cita en menos de una hora", ur: "ایک گھنٹے سے کم میں ملاقات", ar: "موعد خلال أقل من ساعة", zh: "一小时内有预约" },
  appt_tomorrow:  { en: "Appointment tomorrow", es: "Cita mañana", ur: "کل ملاقات ہے", ar: "موعد غدًا", zh: "明天有预约" },
  test_needs_medicine: { en: "Add a medicine first to test a reminder.", es: "Agregue una medicina primero para probar un recordatorio.", ur: "یاد دہانی آزمانے کے لیے پہلے دوا شامل کریں۔", ar: "أضف دواءً أولًا لتجربة التذكير.", zh: "请先添加药物再测试提醒。" },
  no_voice:       { en: "This device doesn't have a voice for this language. The text still shows on screen.", es: "Este dispositivo no tiene una voz para este idioma. El texto sigue en pantalla.", ur: "اس ڈیوائس میں اس زبان کی آواز نہیں ہے۔ متن اسکرین پر موجود ہے۔", ar: "لا يحتوي هذا الجهاز على صوت لهذه اللغة. النص لا يزال على الشاشة.", zh: "此设备没有该语言的语音，文字仍显示在屏幕上。" },
  no_voice_at_all: { en: "This browser can't read out loud.", es: "Este navegador no puede leer en voz alta.", ur: "یہ براؤزر بلند آواز سے نہیں پڑھ سکتا۔", ar: "لا يستطيع هذا المتصفح القراءة بصوت عالٍ.", zh: "此浏览器无法朗读。" }
};

// ---------- Helper functions ----------

// Finds the details of a language (like its locale) by its code
function languageInfo(code) {
  for (let i = 0; i < languages.length; i++) {
    if (languages[i].code === code) {
      return languages[i];
    }
  }
  return languages[0];
}

// Gets a word or sentence in a certain language, and fills in {blanks}
function tIn(languageCode, key, fillIns) {
  const entry = words[key];
  if (!entry) {
    return key;   // missing word: show the key so we notice
  }
  let text = entry[languageCode];
  if (text === undefined || (text === "" && languageCode !== "en")) {
    text = entry.en;   // not translated yet: use English
  }
  if (fillIns) {
    for (const blank in fillIns) {
      text = text.replace("{" + blank + "}", fillIns[blank]);
    }
  }
  return text;
}

// Gets a word in the language the person picked
function t(key, fillIns) {
  return tIn(settings.language, key, fillIns);
}

// The language's "locale", used for dates and times
function currentLocale() {
  return languageInfo(settings.language).locale;
}

function isRightToLeft() {
  return languageInfo(settings.language).rightToLeft;
}

// Turns an hour like 17 into "5 PM" (or the same idea in other languages)
function formatHour(hour) {
  const date = new Date(2026, 0, 1, hour, 0);
  return date.toLocaleTimeString(currentLocale(), { hour: "numeric" });
}

// Turns a number and a unit into words in a language, like "2 pills"
function countTextIn(languageCode, count, unit) {
  if (count === 1) {
    return count + " " + tIn(languageCode, "unit_" + unit + "_one");
  }
  return count + " " + tIn(languageCode, "unit_" + unit + "_many");
}

// Translates everything on the page that has data-t="..."
function translatePage() {
  const items = document.querySelectorAll("[data-t]");
  for (let i = 0; i < items.length; i++) {
    items[i].textContent = t(items[i].getAttribute("data-t"));
  }
  const boxes = document.querySelectorAll("[data-t-placeholder]");
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].placeholder = t(boxes[i].getAttribute("data-t-placeholder"));
  }
}
