// ClearDose - Medicine information in other languages
// medicineTranslations has the full information for the most common medicines.
// useTranslations has the short "what it's for" line for every other medicine.
// Medicines without a full translation are shown in English, with a note.
// NOTE: medical translations should be checked by fluent speakers.

const medicineTranslations = {
  "Acetaminophen": {
    es: {
      use: "Alivia el dolor y la fiebre",
      helps: "Alivia el dolor leve o moderado, como dolor de cabeza, dolores musculares y artritis, y baja la fiebre. No reduce la hinchazón.",
      how: "Tómela solo como se indica, con o sin comida. No tome más de lo que dice la etiqueta en un día.",
      sideEffects: "Por lo general muy pocos efectos a dosis normales. Rara vez, sarpullido.",
      precautions: "Muchas medicinas para el resfriado y la gripe también tienen acetaminofén, así que revise las etiquetas. Demasiado puede dañar el hígado. Limite el alcohol."
    },
    ur: {
      use: "درد اور بخار میں آرام دیتی ہے",
      helps: "ہلکے سے درمیانے درد، جیسے سر درد، پٹھوں کا درد اور جوڑوں کا درد، میں آرام دیتی ہے اور بخار کم کرتی ہے۔ یہ سوجن کم نہیں کرتی۔",
      how: "صرف ہدایت کے مطابق لیں، کھانے کے ساتھ یا بغیر۔ ایک دن میں لیبل سے زیادہ نہ لیں۔",
      sideEffects: "عام خوراک میں عموماً بہت کم مضر اثرات۔ کبھی کبھار جلد پر دانے۔",
      precautions: "نزلہ اور فلو کی بہت سی دواؤں میں بھی ایسیٹامینوفن ہوتی ہے، اس لیے لیبل چیک کریں۔ زیادہ مقدار جگر کو نقصان پہنچا سکتی ہے۔ شراب سے پرہیز کریں۔"
    },
    ar: {
      use: "يخفف الألم والحمى",
      helps: "يخفف الألم الخفيف إلى المتوسط مثل الصداع وآلام العضلات والتهاب المفاصل، ويخفض الحمى. لا يقلل التورم.",
      how: "تناوله حسب التعليمات فقط، مع الطعام أو بدونه. لا تتجاوز الكمية المذكورة على الملصق في اليوم.",
      sideEffects: "عادةً آثار جانبية قليلة جدًا بالجرعات العادية. نادرًا طفح جلدي.",
      precautions: "كثير من أدوية البرد والإنفلونزا تحتوي أيضًا على الأسيتامينوفين، لذا راجع الملصقات. الكمية الزائدة قد تضر الكبد. قلّل الكحول."
    },
    zh: {
      use: "缓解疼痛和发烧",
      helps: "缓解轻到中度疼痛，如头痛、肌肉痛和关节炎，并能退烧。它不能消肿。",
      how: "仅按说明服用，饭前饭后均可。一天内不要超过标签上的用量。",
      sideEffects: "正常剂量下副作用通常很少。偶尔出现皮疹。",
      precautions: "许多感冒药也含有对乙酰氨基酚，请查看标签。过量会损伤肝脏。少喝酒。"
    }
  },
  "Allopurinol": {
    es: {
      use: "Previene ataques de gota",
      helps: "Baja el ácido úrico en la sangre, lo que previene ataques de gota y algunos cálculos renales. No trata un ataque de gota que ya empezó.",
      how: "Tómela después de comer. Beba bastante agua durante el día.",
      sideEffects: "Malestar de estómago, diarrea o somnolencia. Puede haber ataques de gota en los primeros meses.",
      precautions: "Deje de tomarla y llame a su médico de inmediato si le sale un sarpullido."
    },
    ur: {
      use: "گاؤٹ کے حملوں سے بچاتی ہے",
      helps: "خون میں یورک ایسڈ کم کرتی ہے، جس سے گاؤٹ کے حملے اور کچھ گردے کی پتھریاں نہیں بنتیں۔ پہلے سے شروع ہوئے حملے کا علاج نہیں کرتی۔",
      how: "کھانے کے بعد لیں۔ دن بھر خوب پانی پئیں۔",
      sideEffects: "پیٹ کی خرابی، دست یا غنودگی۔ پہلے چند مہینوں میں گاؤٹ کا درد ہو سکتا ہے۔",
      precautions: "اگر جلد پر دانے نکلیں تو دوا بند کریں اور فوراً ڈاکٹر کو فون کریں۔"
    },
    ar: {
      use: "يمنع نوبات النقرس",
      helps: "يخفض حمض اليوريك في الدم، فيمنع نوبات النقرس وبعض حصوات الكلى. لا يعالج نوبة نقرس بدأت بالفعل.",
      how: "تناوله بعد الأكل. اشرب الكثير من الماء خلال اليوم.",
      sideEffects: "اضطراب المعدة أو إسهال أو نعاس. قد تحدث نوبات نقرس في الأشهر الأولى.",
      precautions: "توقف عن تناوله واتصل بطبيبك فورًا إذا ظهر طفح جلدي."
    },
    zh: {
      use: "预防痛风发作",
      helps: "降低血液中的尿酸，预防痛风发作和某些肾结石。它不能治疗已经开始的痛风发作。",
      how: "饭后服用。白天多喝水。",
      sideEffects: "胃部不适、腹泻或嗜睡。最初几个月仍可能出现痛风发作。",
      precautions: "如果出现皮疹，请停药并立即联系医生。"
    }
  },
  "Amlodipine": {
    es: {
      use: "Baja la presión arterial",
      helps: "Relaja los vasos sanguíneos para que la sangre fluya mejor. Trata la presión alta y algunos tipos de dolor de pecho (angina).",
      how: "Tómela una vez al día, a la misma hora, con o sin comida.",
      sideEffects: "Tobillos o pies hinchados, dolor de cabeza, enrojecimiento, cansancio o mareo.",
      precautions: "Levántese despacio. Avise a su médico si la hinchazón o el mareo le molestan, o si el dolor de pecho empeora."
    },
    ur: {
      use: "بلڈ پریشر کم کرتی ہے",
      helps: "خون کی نالیوں کو ڈھیلا کرتی ہے تاکہ خون آسانی سے بہے۔ ہائی بلڈ پریشر اور کچھ قسم کے سینے کے درد (انجائنا) کا علاج کرتی ہے۔",
      how: "دن میں ایک بار، ایک ہی وقت پر لیں، کھانے کے ساتھ یا بغیر۔",
      sideEffects: "ٹخنوں یا پیروں میں سوجن، سر درد، چہرہ سرخ ہونا، تھکاوٹ یا چکر۔",
      precautions: "آہستہ اٹھیں۔ اگر سوجن یا چکر پریشان کریں، یا سینے کا درد بڑھے تو ڈاکٹر کو بتائیں۔"
    },
    ar: {
      use: "يخفض ضغط الدم",
      helps: "يرخي الأوعية الدموية فيتدفق الدم بسهولة أكبر. يعالج ارتفاع ضغط الدم وبعض أنواع ألم الصدر (الذبحة).",
      how: "تناوله مرة يوميًا في الوقت نفسه، مع الطعام أو بدونه.",
      sideEffects: "تورم الكاحلين أو القدمين، صداع، احمرار الوجه، تعب أو دوخة.",
      precautions: "انهض ببطء. أخبر طبيبك إذا أزعجك التورم أو الدوخة، أو إذا ساء ألم الصدر."
    },
    zh: {
      use: "降低血压",
      helps: "放松血管，使血液流动更顺畅。治疗高血压和某些胸痛（心绞痛）。",
      how: "每天一次，同一时间服用，饭前饭后均可。",
      sideEffects: "脚踝或脚肿、头痛、脸红、疲倦或头晕。",
      precautions: "起身要慢。如果肿胀或头晕让您困扰，或胸痛加重，请告诉医生。"
    }
  },
  "Apixaban": {
    es: {
      use: "Anticoagulante",
      helps: "Reduce el riesgo de derrame cerebral en personas con latidos irregulares (fibrilación auricular), y trata o previene coágulos en piernas y pulmones.",
      how: "Tómela dos veces al día, con unas 12 horas de diferencia, con o sin comida.",
      sideEffects: "Moretones o sangrado con más facilidad, como sangrado de nariz o encías.",
      precautions: "No la deje sin hablar con su médico. Busque ayuda de inmediato si hay sangrado fuerte, una caída fuerte o un golpe en la cabeza. Dígale a su dentista que la toma."
    },
    ur: {
      use: "خون پتلا کرنے والی دوا",
      helps: "دل کی بے ترتیب دھڑکن (ایٹریل فبریلیشن) والے لوگوں میں فالج کا خطرہ کم کرتی ہے، اور ٹانگوں اور پھیپھڑوں میں خون کے لوتھڑوں کا علاج یا روک تھام کرتی ہے۔",
      how: "دن میں دو بار، تقریباً 12 گھنٹے کے فرق سے لیں، کھانے کے ساتھ یا بغیر۔",
      sideEffects: "آسانی سے نیل پڑنا یا خون آنا، جیسے ناک یا مسوڑھوں سے۔",
      precautions: "ڈاکٹر سے بات کیے بغیر بند نہ کریں۔ زیادہ خون بہنے، سخت گرنے یا سر پر چوٹ لگنے پر فوراً مدد لیں۔ اپنے ڈینٹسٹ کو بتائیں کہ آپ یہ لیتے ہیں۔"
    },
    ar: {
      use: "مميّع للدم",
      helps: "يقلل خطر السكتة الدماغية لدى من لديهم نبض غير منتظم (الرجفان الأذيني)، ويعالج أو يمنع الجلطات في الساقين والرئتين.",
      how: "تناوله مرتين يوميًا بفارق 12 ساعة تقريبًا، مع الطعام أو بدونه.",
      sideEffects: "كدمات أو نزيف بسهولة أكبر، مثل نزيف الأنف أو اللثة.",
      precautions: "لا توقفه دون التحدث مع طبيبك. اطلب المساعدة فورًا عند نزيف شديد أو سقوط قوي أو إصابة في الرأس. أخبر طبيب أسنانك أنك تتناوله."
    },
    zh: {
      use: "抗凝药（血液稀释剂）",
      helps: "降低房颤（心跳不规律）患者中风的风险，并治疗或预防腿部和肺部的血栓。",
      how: "每天两次，间隔约 12 小时，饭前饭后均可。",
      sideEffects: "更容易瘀青或出血，如流鼻血或牙龈出血。",
      precautions: "未经医生同意不要停药。如大出血、严重跌倒或头部受伤，请立即求助。告诉牙医您在服用此药。"
    }
  },
  "Aspirin": {
    es: {
      use: "Protege el corazón",
      helps: "La aspirina en dosis baja hace que las plaquetas sean menos pegajosas. Esto puede reducir el riesgo de infarto y derrame cerebral en las personas a quienes su médico se la indicó.",
      how: "Tómela con comida y un vaso lleno de agua. Tome solo la dosis que le indicó su médico.",
      sideEffects: "Malestar de estómago, acidez o moretones con facilidad.",
      precautions: "Tome aspirina diaria solo si su médico se lo indicó. Llame a su médico si tiene heces negras, vomita sangre o un sangrado que no para."
    },
    ur: {
      use: "دل کی حفاظت کرتی ہے",
      helps: "کم خوراک والی اسپرین خون کے خلیوں (پلیٹلیٹس) کو کم چپچپا بناتی ہے۔ اس سے ان لوگوں میں ہارٹ اٹیک اور فالج کا خطرہ کم ہو سکتا ہے جنہیں ڈاکٹر نے یہ دی ہو۔",
      how: "کھانے اور ایک پورے گلاس پانی کے ساتھ لیں۔ صرف وہی خوراک لیں جو ڈاکٹر نے دی ہے۔",
      sideEffects: "پیٹ کی خرابی، سینے کی جلن یا آسانی سے نیل پڑنا۔",
      precautions: "روزانہ اسپرین صرف ڈاکٹر کے کہنے پر لیں۔ کالا پاخانہ، خون کی قے یا نہ رکنے والا خون آنے پر ڈاکٹر کو فون کریں۔"
    },
    ar: {
      use: "يحمي القلب",
      helps: "الأسبرين بجرعة منخفضة يجعل الصفائح الدموية أقل لزوجة. قد يقلل ذلك خطر النوبة القلبية والسكتة لدى من وصفه لهم الطبيب.",
      how: "تناوله مع الطعام وكوب ماء كامل. تناول فقط الجرعة التي حددها طبيبك.",
      sideEffects: "اضطراب المعدة أو حرقة أو كدمات بسهولة.",
      precautions: "لا تتناول الأسبرين يوميًا إلا إذا قال طبيبك ذلك. اتصل بطبيبك عند براز أسود أو قيء دموي أو نزيف لا يتوقف."
    },
    zh: {
      use: "保护心脏",
      helps: "低剂量阿司匹林让血小板不那么容易粘在一起，可降低医生为其开药者的心脏病发作和中风风险。",
      how: "随餐并用一整杯水送服。只服用医生开的剂量。",
      sideEffects: "胃部不适、烧心或容易瘀青。",
      precautions: "只有在医生要求时才每天服用阿司匹林。如出现黑便、呕血或出血不止，请联系医生。"
    }
  },
  "Atenolol": {
    es: {
      use: "Baja la presión arterial",
      helps: "Un betabloqueador. Hace más lento el corazón y baja la presión. También puede ayudar con el dolor de pecho (angina) y proteger el corazón después de un infarto.",
      how: "Tómela una vez al día a la misma hora, con o sin comida.",
      sideEffects: "Cansancio, mareo, manos y pies fríos o pulso lento.",
      precautions: "No la deje de golpe. Avise a su médico si se siente muy mareado, débil o con falta de aire."
    },
    ur: {
      use: "بلڈ پریشر کم کرتی ہے",
      helps: "بیٹا بلاکر۔ دل کی رفتار سست اور بلڈ پریشر کم کرتی ہے۔ سینے کے درد (انجائنا) میں مدد اور ہارٹ اٹیک کے بعد دل کی حفاظت بھی کر سکتی ہے۔",
      how: "دن میں ایک بار ایک ہی وقت پر لیں، کھانے کے ساتھ یا بغیر۔",
      sideEffects: "تھکاوٹ، چکر، ہاتھ پاؤں ٹھنڈے یا دل کی دھڑکن سست۔",
      precautions: "اچانک بند نہ کریں۔ اگر بہت چکر، کمزوری یا سانس پھولے تو ڈاکٹر کو بتائیں۔"
    },
    ar: {
      use: "يخفض ضغط الدم",
      helps: "حاصر بيتا. يبطئ القلب ويخفض ضغط الدم. قد يساعد أيضًا في ألم الصدر (الذبحة) ويحمي القلب بعد النوبة القلبية.",
      how: "تناوله مرة يوميًا في الوقت نفسه، مع الطعام أو بدونه.",
      sideEffects: "تعب أو دوخة أو برودة اليدين والقدمين أو بطء النبض.",
      precautions: "لا توقفه فجأة. أخبر طبيبك إذا شعرت بدوخة شديدة أو إغماء أو ضيق في التنفس."
    },
    zh: {
      use: "降低血压",
      helps: "一种β受体阻滞剂。减慢心率、降低血压，也可缓解胸痛（心绞痛）并在心脏病发作后保护心脏。",
      how: "每天一次，同一时间服用，饭前饭后均可。",
      sideEffects: "疲倦、头晕、手脚冰凉或心跳慢。",
      precautions: "不要突然停药。如感到非常头晕、要晕倒或气短，请告诉医生。"
    }
  },
  "Atorvastatin": {
    es: {
      use: "Baja el colesterol",
      helps: "Una estatina. Baja el colesterol 'malo' (LDL) para reducir el riesgo de infarto y derrame cerebral.",
      how: "Tómela una vez al día, a cualquier hora, con o sin comida. Evite tomar mucho jugo de toronja.",
      sideEffects: "Dolor muscular o de articulaciones, diarrea o malestar de estómago.",
      precautions: "Llame a su médico si tiene dolor o debilidad muscular sin explicación, u orina oscura."
    },
    ur: {
      use: "کولیسٹرول کم کرتی ہے",
      helps: "اسٹیٹن دوا۔ 'خراب' کولیسٹرول (LDL) کم کرتی ہے تاکہ ہارٹ اٹیک اور فالج کا خطرہ کم ہو۔",
      how: "دن میں ایک بار، کسی بھی وقت، کھانے کے ساتھ یا بغیر لیں۔ گریپ فروٹ کا جوس زیادہ نہ پئیں۔",
      sideEffects: "پٹھوں یا جوڑوں میں درد، دست یا پیٹ کی خرابی۔",
      precautions: "بلا وجہ پٹھوں میں درد یا کمزوری، یا گہرے رنگ کا پیشاب ہو تو ڈاکٹر کو فون کریں۔"
    },
    ar: {
      use: "يخفض الكوليسترول",
      helps: "من أدوية الستاتين. يخفض الكوليسترول 'الضار' (LDL) لتقليل خطر النوبة القلبية والسكتة.",
      how: "تناوله مرة يوميًا في أي وقت، مع الطعام أو بدونه. تجنب الإكثار من عصير الجريب فروت.",
      sideEffects: "آلام العضلات أو المفاصل أو إسهال أو اضطراب المعدة.",
      precautions: "اتصل بطبيبك عند ألم أو ضعف عضلي غير مفسر، أو بول داكن."
    },
    zh: {
      use: "降低胆固醇",
      helps: "一种他汀类药物。降低“坏”胆固醇（LDL），减少心脏病发作和中风的风险。",
      how: "每天一次，任何时间，饭前饭后均可。避免大量饮用葡萄柚汁。",
      sideEffects: "肌肉或关节痛、腹泻或胃部不适。",
      precautions: "如出现不明原因的肌肉疼痛或无力，或尿色变深，请联系医生。"
    }
  },
  "Carvedilol": {
    es: {
      use: "Ayuda al corazón",
      helps: "Un betabloqueador. Ayuda a que el corazón bombee mejor en la insuficiencia cardíaca y baja la presión.",
      how: "Tómela dos veces al día con comida.",
      sideEffects: "Mareo, cansancio, pulso lento o aumento de peso.",
      precautions: "No la deje de golpe. Levántese despacio. Avise a su médico si sube de peso de repente o tiene hinchazón nueva."
    },
    ur: {
      use: "دل کی مدد کرتی ہے",
      helps: "بیٹا بلاکر۔ ہارٹ فیلیئر میں دل کو بہتر پمپ کرنے میں مدد دیتی ہے اور بلڈ پریشر کم کرتی ہے۔",
      how: "دن میں دو بار کھانے کے ساتھ لیں۔",
      sideEffects: "چکر، تھکاوٹ، دل کی دھڑکن سست یا وزن بڑھنا۔",
      precautions: "اچانک بند نہ کریں۔ آہستہ اٹھیں۔ اچانک وزن بڑھنے یا نئی سوجن پر ڈاکٹر کو بتائیں۔"
    },
    ar: {
      use: "يساعد القلب",
      helps: "حاصر بيتا. يساعد القلب على الضخ بشكل أفضل في قصور القلب ويخفض ضغط الدم.",
      how: "تناوله مرتين يوميًا مع الطعام.",
      sideEffects: "دوخة أو تعب أو بطء النبض أو زيادة الوزن.",
      precautions: "لا توقفه فجأة. انهض ببطء. أخبر طبيبك عن زيادة مفاجئة في الوزن أو تورم جديد."
    },
    zh: {
      use: "帮助心脏",
      helps: "一种β受体阻滞剂。帮助心衰患者的心脏更好地泵血，并降低血压。",
      how: "每天两次，随餐服用。",
      sideEffects: "头晕、疲倦、心跳慢或体重增加。",
      precautions: "不要突然停药。起身要慢。如体重突然增加或出现新的肿胀，请告诉医生。"
    }
  },
  "Clopidogrel": {
    es: {
      use: "Previene coágulos",
      helps: "Evita que las plaquetas se peguen. Ayuda a prevenir infartos y derrames cerebrales, sobre todo después de un stent en el corazón.",
      how: "Tómela una vez al día, con o sin comida.",
      sideEffects: "Moretones o sangrado con más facilidad.",
      precautions: "No la deje sin preguntar a su cardiólogo. Dígale a su médico o dentista que la toma antes de cualquier procedimiento."
    },
    ur: {
      use: "خون کے لوتھڑوں سے بچاتی ہے",
      helps: "پلیٹلیٹس کو آپس میں چپکنے سے روکتی ہے۔ ہارٹ اٹیک اور فالج سے بچانے میں مدد دیتی ہے، خاص طور پر دل میں اسٹینٹ کے بعد۔",
      how: "دن میں ایک بار لیں، کھانے کے ساتھ یا بغیر۔",
      sideEffects: "آسانی سے نیل پڑنا یا خون آنا۔",
      precautions: "دل کے ڈاکٹر سے پوچھے بغیر بند نہ کریں۔ کسی بھی آپریشن یا علاج سے پہلے ڈاکٹر یا ڈینٹسٹ کو بتائیں۔"
    },
    ar: {
      use: "يمنع الجلطات",
      helps: "يمنع الصفائح الدموية من الالتصاق ببعضها. يساعد على منع النوبات القلبية والسكتات، خاصة بعد تركيب دعامة في القلب.",
      how: "تناوله مرة يوميًا، مع الطعام أو بدونه.",
      sideEffects: "كدمات أو نزيف بسهولة أكبر.",
      precautions: "لا توقفه دون سؤال طبيب القلب. أخبر طبيبك أو طبيب أسنانك أنك تتناوله قبل أي إجراء."
    },
    zh: {
      use: "预防血栓",
      helps: "防止血小板粘在一起，帮助预防心脏病发作和中风，尤其是心脏放支架后。",
      how: "每天一次，饭前饭后均可。",
      sideEffects: "更容易瘀青或出血。",
      precautions: "未经心脏科医生同意不要停药。做任何手术或治疗前告诉医生或牙医您在服用此药。"
    }
  },
  "Donepezil": {
    es: {
      use: "Ayuda a la memoria",
      helps: "Puede ayudar a la memoria, la atención y las actividades diarias en la enfermedad de Alzheimer. Alivia síntomas, pero no cura la enfermedad.",
      how: "Tómela una vez al día al acostarse, con o sin comida.",
      sideEffects: "Náuseas, diarrea, poco apetito, problemas para dormir, sueños vívidos o calambres.",
      precautions: "Avise a su médico si se desmaya, tiene el pulso muy lento o heces negras."
    },
    ur: {
      use: "یادداشت میں مدد دیتی ہے",
      helps: "الزائمر کی بیماری میں یادداشت، توجہ اور روزمرہ کاموں میں مدد دے سکتی ہے۔ علامات کم کرتی ہے لیکن بیماری کا علاج نہیں۔",
      how: "دن میں ایک بار سونے سے پہلے لیں، کھانے کے ساتھ یا بغیر۔",
      sideEffects: "متلی، دست، بھوک کم لگنا، نیند کی مشکل، واضح خواب یا پٹھوں میں اینٹھن۔",
      precautions: "بے ہوشی، بہت سست دھڑکن یا کالے پاخانے پر ڈاکٹر کو بتائیں۔"
    },
    ar: {
      use: "يساعد الذاكرة",
      helps: "قد يساعد الذاكرة والانتباه والأنشطة اليومية في مرض الزهايمر. يخفف الأعراض لكنه لا يشفي المرض.",
      how: "تناوله مرة يوميًا عند النوم، مع الطعام أو بدونه.",
      sideEffects: "غثيان أو إسهال أو قلة الشهية أو صعوبة النوم أو أحلام واضحة أو تقلصات عضلية.",
      precautions: "أخبر طبيبك عن الإغماء أو بطء شديد في النبض أو براز أسود."
    },
    zh: {
      use: "帮助记忆",
      helps: "可能有助于阿尔茨海默病患者的记忆、注意力和日常活动。能缓解症状，但不能治愈。",
      how: "每天一次，睡前服用，饭前饭后均可。",
      sideEffects: "恶心、腹泻、食欲差、失眠、多梦或肌肉抽筋。",
      precautions: "如出现晕倒、心跳非常慢或黑便，请告诉医生。"
    }
  },
  "Escitalopram": {
    es: {
      use: "Trata la depresión y la ansiedad",
      helps: "Ayuda a equilibrar la serotonina, una sustancia natural del cerebro, para aliviar la depresión y la ansiedad.",
      how: "Tómela una vez al día, con o sin comida. Puede tardar unas semanas en ayudar.",
      sideEffects: "Náuseas, problemas para dormir o somnolencia, sudor o cansancio.",
      precautions: "No la deje de golpe. Avise a su médico si tiene cambios de ánimo nuevos, confusión o sangrado fácil."
    },
    ur: {
      use: "ڈپریشن اور بے چینی کا علاج",
      helps: "دماغ کے قدرتی کیمیکل سیروٹونن کو متوازن کر کے ڈپریشن اور بے چینی کم کرتی ہے۔",
      how: "دن میں ایک بار لیں، کھانے کے ساتھ یا بغیر۔ اثر ہونے میں چند ہفتے لگ سکتے ہیں۔",
      sideEffects: "متلی، نیند کی مشکل یا غنودگی، پسینہ یا تھکاوٹ۔",
      precautions: "اچانک بند نہ کریں۔ موڈ میں نئی تبدیلی، الجھن یا آسانی سے خون آنے پر ڈاکٹر کو بتائیں۔"
    },
    ar: {
      use: "يعالج الاكتئاب والقلق",
      helps: "يساعد على موازنة السيروتونين، وهو مادة طبيعية في الدماغ، لتخفيف الاكتئاب والقلق.",
      how: "تناوله مرة يوميًا، مع الطعام أو بدونه. قد يستغرق بضعة أسابيع ليبدأ مفعوله.",
      sideEffects: "غثيان أو صعوبة النوم أو نعاس أو تعرق أو تعب.",
      precautions: "لا توقفه فجأة. أخبر طبيبك عن تغيرات مزاجية جديدة أو ارتباك أو نزيف بسهولة."
    },
    zh: {
      use: "治疗抑郁和焦虑",
      helps: "帮助平衡大脑中的天然化学物质血清素，缓解抑郁和焦虑。",
      how: "每天一次，饭前饭后均可。可能需要几周才见效。",
      sideEffects: "恶心、失眠或嗜睡、出汗或疲倦。",
      precautions: "不要突然停药。如出现新的情绪变化、意识混乱或容易出血，请告诉医生。"
    }
  },
  "Famotidine": {
    es: {
      use: "Reduce el ácido del estómago",
      helps: "Reduce el ácido que produce el estómago. Trata la acidez, el reflujo y las úlceras.",
      how: "Tómela como se indica, con o sin comida.",
      sideEffects: "Dolor de cabeza, estreñimiento, diarrea o mareo.",
      precautions: "Avise a su médico si se siente confundido o si tiene problemas de los riñones."
    },
    ur: {
      use: "معدے کی تیزابیت کم کرتی ہے",
      helps: "معدے میں بننے والا تیزاب کم کرتی ہے۔ سینے کی جلن، ایسڈ ریفلکس اور السر کا علاج کرتی ہے۔",
      how: "ہدایت کے مطابق لیں، کھانے کے ساتھ یا بغیر۔",
      sideEffects: "سر درد، قبض، دست یا چکر۔",
      precautions: "الجھن محسوس ہو یا گردے کا مسئلہ ہو تو ڈاکٹر کو بتائیں۔"
    },
    ar: {
      use: "يقلل حمض المعدة",
      helps: "يقلل كمية الحمض التي تفرزها المعدة. يعالج الحرقة والارتجاع والقرحة.",
      how: "تناوله حسب التعليمات، مع الطعام أو بدونه.",
      sideEffects: "صداع أو إمساك أو إسهال أو دوخة.",
      precautions: "أخبر طبيبك إذا شعرت بالارتباك، أو إذا كانت لديك مشاكل في الكلى."
    },
    zh: {
      use: "减少胃酸",
      helps: "减少胃分泌的胃酸。治疗烧心、胃酸反流和胃溃疡。",
      how: "按说明服用，饭前饭后均可。",
      sideEffects: "头痛、便秘、腹泻或头晕。",
      precautions: "如感到意识混乱或有肾脏问题，请告诉医生。"
    }
  },
  "Finasteride": {
    es: {
      use: "Ayuda con la próstata agrandada",
      helps: "Reduce poco a poco una próstata agrandada, lo que facilita orinar.",
      how: "Tómela una vez al día, con o sin comida. Puede tardar varios meses en ayudar.",
      sideEffects: "Menos deseo sexual, problemas de erección o menos semen.",
      precautions: "Las mujeres embarazadas o que puedan estarlo no deben tocar tabletas rotas o trituradas. Avise a su médico si nota bultos o dolor en el pecho."
    },
    ur: {
      use: "بڑھے ہوئے پروسٹیٹ میں مدد",
      helps: "بڑھے ہوئے پروسٹیٹ کو آہستہ آہستہ چھوٹا کرتی ہے، جس سے پیشاب آسانی سے آتا ہے۔",
      how: "دن میں ایک بار لیں، کھانے کے ساتھ یا بغیر۔ اثر ہونے میں کئی مہینے لگ سکتے ہیں۔",
      sideEffects: "جنسی خواہش میں کمی، عضو کی کمزوری یا کم منی۔",
      precautions: "حاملہ یا ممکنہ حاملہ خواتین ٹوٹی یا پسی ہوئی گولیوں کو ہاتھ نہ لگائیں۔ چھاتی میں گلٹی یا درد پر ڈاکٹر کو بتائیں۔"
    },
    ar: {
      use: "يساعد في تضخم البروستاتا",
      helps: "يقلص البروستاتا المتضخمة ببطء، مما يسهّل التبول.",
      how: "تناوله مرة يوميًا، مع الطعام أو بدونه. قد يستغرق عدة أشهر ليساعد.",
      sideEffects: "انخفاض الرغبة الجنسية أو ضعف الانتصاب أو قلة السائل المنوي.",
      precautions: "يجب ألا تلمس الحوامل أو من قد يكنّ حوامل الأقراص المكسورة أو المسحوقة. أخبر طبيبك عن كتل أو ألم في الثدي."
    },
    zh: {
      use: "改善前列腺增生",
      helps: "慢慢缩小增大的前列腺，使排尿更顺畅。",
      how: "每天一次，饭前饭后均可。可能需要几个月才见效。",
      sideEffects: "性欲下降、勃起困难或精液减少。",
      precautions: "孕妇或可能怀孕的女性不应接触破碎或压碎的药片。如乳房有肿块或疼痛，请告诉医生。"
    }
  },
  "Furosemide": {
    es: {
      use: "Pastilla para el agua",
      helps: "Una pastilla fuerte para eliminar líquido. Quita el exceso de líquido e hinchazón por problemas del corazón, hígado o riñones, y puede bajar la presión.",
      how: "Tómela en la mañana para no levantarse de noche al baño.",
      sideEffects: "Orinar seguido, mareo, sed o calambres.",
      precautions: "Puede bajar el potasio, así que su médico puede pedir análisis de sangre. Avise si tiene mareo, calambres u orina muy poco."
    },
    ur: {
      use: "پیشاب آور گولی",
      helps: "طاقتور پیشاب آور گولی۔ دل، جگر یا گردے کے مسائل سے ہونے والا اضافی پانی اور سوجن نکالتی ہے، اور بلڈ پریشر کم کر سکتی ہے۔",
      how: "صبح لیں تاکہ رات کو باتھ روم کے لیے نہ اٹھنا پڑے۔",
      sideEffects: "بار بار پیشاب، چکر، پیاس یا پٹھوں میں اینٹھن۔",
      precautions: "یہ پوٹاشیم کم کر سکتی ہے، اس لیے ڈاکٹر خون کے ٹیسٹ کر سکتے ہیں۔ چکر، اینٹھن یا بہت کم پیشاب پر ڈاکٹر کو بتائیں۔"
    },
    ar: {
      use: "حبة مدرّة للبول",
      helps: "مدر قوي للبول. يزيل السوائل الزائدة والتورم الناتج عن مشاكل القلب أو الكبد أو الكلى، وقد يخفض ضغط الدم.",
      how: "تناوله صباحًا حتى لا تستيقظ ليلًا لدخول الحمام.",
      sideEffects: "كثرة التبول أو دوخة أو عطش أو تقلصات عضلية.",
      precautions: "قد يخفض البوتاسيوم، لذا قد يطلب طبيبك تحاليل دم. أخبر طبيبك عن الدوخة أو التقلصات أو قلة البول الشديدة."
    },
    zh: {
      use: "利尿药",
      helps: "一种强效利尿药。排出心脏、肝脏或肾脏问题引起的多余体液和肿胀，也可降低血压。",
      how: "早上服用，以免夜里起来上厕所。",
      sideEffects: "尿频、头晕、口渴或肌肉抽筋。",
      precautions: "它可能降低血钾，医生可能会验血。如头晕、抽筋或尿量很少，请告诉医生。"
    }
  },
  "Gabapentin": {
    es: {
      use: "Ayuda con el dolor de nervios",
      helps: "Calma los nervios hiperactivos. Trata el dolor de nervios (por ejemplo después del herpes zóster) y algunos tipos de convulsiones.",
      how: "Tómela exactamente como se la recetaron, con o sin comida. No la deje de golpe.",
      sideEffects: "Somnolencia, mareo, caminar inestable o hinchazón en manos o pies.",
      precautions: "Puede aumentar el riesgo de caídas. Camine con cuidado, evite el alcohol y avise a su médico de cualquier caída."
    },
    ur: {
      use: "اعصابی درد میں مدد",
      helps: "زیادہ متحرک اعصاب کو پرسکون کرتی ہے۔ اعصابی درد (مثلاً شنگلز کے بعد) اور کچھ قسم کے دوروں کا علاج کرتی ہے۔",
      how: "بالکل نسخے کے مطابق لیں، کھانے کے ساتھ یا بغیر۔ اچانک بند نہ کریں۔",
      sideEffects: "غنودگی، چکر، لڑکھڑاہٹ یا ہاتھوں پیروں میں سوجن۔",
      precautions: "اس سے گرنے کا خطرہ بڑھ سکتا ہے۔ احتیاط سے چلیں، شراب سے پرہیز کریں اور گرنے پر ڈاکٹر کو بتائیں۔"
    },
    ar: {
      use: "يساعد في ألم الأعصاب",
      helps: "يهدئ الأعصاب مفرطة النشاط. يعالج ألم الأعصاب (مثلًا بعد الهربس النطاقي) وبعض أنواع النوبات.",
      how: "تناوله تمامًا كما وُصف، مع الطعام أو بدونه. لا توقفه فجأة.",
      sideEffects: "نعاس أو دوخة أو عدم ثبات في المشي أو تورم في اليدين أو القدمين.",
      precautions: "قد يزيد خطر السقوط. امشِ بحذر وتجنب الكحول وأخبر طبيبك عن أي سقوط."
    },
    zh: {
      use: "缓解神经痛",
      helps: "让过度活跃的神经平静下来。治疗神经痛（如带状疱疹后）和某些癫痫发作。",
      how: "严格按处方服用，饭前饭后均可。不要突然停药。",
      sideEffects: "嗜睡、头晕、走路不稳或手脚肿胀。",
      precautions: "可能更容易跌倒。走路小心、避免饮酒，跌倒后请告诉医生。"
    }
  },
  "Glipizide": {
    es: {
      use: "Baja el azúcar en la sangre",
      helps: "Ayuda al cuerpo a liberar más insulina para bajar el azúcar en la diabetes tipo 2.",
      how: "Tómela unos 30 minutos antes del desayuno. No se salte comidas.",
      sideEffects: "Azúcar baja, malestar de estómago o mareo.",
      precautions: "Las señales de azúcar baja son temblor, sudor o confusión. Tenga a mano un bocadillo dulce y avise a su médico si le pasa."
    },
    ur: {
      use: "خون کی شکر کم کرتی ہے",
      helps: "ٹائپ 2 ذیابیطس میں جسم کو زیادہ انسولین بنانے میں مدد دیتی ہے تاکہ شکر کم ہو۔",
      how: "ناشتے سے تقریباً 30 منٹ پہلے لیں۔ کھانا نہ چھوڑیں۔",
      sideEffects: "شکر کم ہونا، پیٹ کی خرابی یا چکر۔",
      precautions: "شکر کم ہونے کی علامات کپکپی، پسینہ یا الجھن ہیں۔ میٹھی چیز پاس رکھیں اور ایسا ہو تو ڈاکٹر کو بتائیں۔"
    },
    ar: {
      use: "يخفض سكر الدم",
      helps: "يساعد الجسم على إفراز المزيد من الأنسولين لخفض السكر في السكري من النوع الثاني.",
      how: "تناوله قبل الفطور بحوالي 30 دقيقة. لا تتخطَّ الوجبات.",
      sideEffects: "انخفاض السكر أو اضطراب المعدة أو دوخة.",
      precautions: "علامات انخفاض السكر: رعشة أو تعرق أو ارتباك. احتفظ بوجبة خفيفة حلوة قريبة وأخبر طبيبك إن حدث ذلك."
    },
    zh: {
      use: "降低血糖",
      helps: "帮助身体释放更多胰岛素，降低 2 型糖尿病患者的血糖。",
      how: "早餐前约 30 分钟服用。不要不吃饭。",
      sideEffects: "低血糖、胃部不适或头晕。",
      precautions: "低血糖的表现是发抖、出汗或意识混乱。身边备好甜食，如发生请告诉医生。"
    }
  },
  "Hydrochlorothiazide": {
    es: {
      use: "Pastilla para el agua para la presión",
      helps: "Una pastilla para eliminar líquido. Baja la presión y reduce la hinchazón ayudando al cuerpo a eliminar sal y agua de más.",
      how: "Tómela en la mañana para no levantarse de noche al baño.",
      sideEffects: "Orinar más seguido, mareo o piel que se quema más con el sol.",
      precautions: "Beba suficiente agua, a menos que su médico diga otra cosa. Use protector solar. Avise si tiene calambres o debilidad."
    },
    ur: {
      use: "بلڈ پریشر کی پیشاب آور گولی",
      helps: "پیشاب آور گولی۔ جسم سے اضافی نمک اور پانی نکال کر بلڈ پریشر اور سوجن کم کرتی ہے۔",
      how: "صبح لیں تاکہ رات کو باتھ روم کے لیے نہ اٹھنا پڑے۔",
      sideEffects: "زیادہ پیشاب، چکر یا دھوپ میں جلد کا جلدی جلنا۔",
      precautions: "کافی پانی پئیں جب تک ڈاکٹر منع نہ کرے۔ سن اسکرین لگائیں۔ پٹھوں میں اینٹھن یا کمزوری پر ڈاکٹر کو بتائیں۔"
    },
    ar: {
      use: "مدر للبول لضغط الدم",
      helps: "حبة مدرة للبول. تخفض ضغط الدم وتقلل التورم بمساعدة الجسم على التخلص من الملح والماء الزائدين.",
      how: "تناوله صباحًا حتى لا تستيقظ ليلًا لدخول الحمام.",
      sideEffects: "كثرة التبول أو دوخة أو احتراق الجلد بسهولة تحت الشمس.",
      precautions: "اشرب ماءً كافيًا ما لم يقل طبيبك غير ذلك. استخدم واقي الشمس. أخبر طبيبك عن التقلصات أو الضعف."
    },
    zh: {
      use: "降压利尿药",
      helps: "一种利尿药。帮助身体排出多余的盐和水，从而降低血压、减轻肿胀。",
      how: "早上服用，以免夜里起来上厕所。",
      sideEffects: "排尿增多、头晕或皮肤更容易晒伤。",
      precautions: "除非医生另有说明，请多喝水。涂防晒霜。如肌肉抽筋或无力，请告诉医生。"
    }
  },
  "Ibuprofen": {
    es: {
      use: "Alivia el dolor y la hinchazón",
      helps: "Alivia el dolor, la hinchazón y la fiebre, como por artritis o una lesión.",
      how: "Tómela con comida o leche. Use la dosis más baja por el menor tiempo.",
      sideEffects: "Malestar de estómago, acidez o náuseas.",
      precautions: "Puede causar sangrado del estómago, dañar los riñones y subir la presión. Pregunte a su médico antes de usarla seguido, sobre todo si toma un anticoagulante."
    },
    ur: {
      use: "درد اور سوجن میں آرام",
      helps: "درد، سوجن اور بخار میں آرام دیتی ہے، جیسے جوڑوں کے درد یا چوٹ میں۔",
      how: "کھانے یا دودھ کے ساتھ لیں۔ کم سے کم خوراک، کم سے کم مدت کے لیے۔",
      sideEffects: "پیٹ کی خرابی، سینے کی جلن یا متلی۔",
      precautions: "اس سے معدے سے خون آ سکتا ہے، گردوں کو نقصان اور بلڈ پریشر بڑھ سکتا ہے۔ بار بار استعمال سے پہلے ڈاکٹر سے پوچھیں، خاص طور پر اگر خون پتلا کرنے والی دوا لیتے ہیں۔"
    },
    ar: {
      use: "يخفف الألم والتورم",
      helps: "يخفف الألم والتورم والحمى، مثل التهاب المفاصل أو الإصابات.",
      how: "تناوله مع الطعام أو الحليب. استخدم أقل جرعة لأقصر مدة.",
      sideEffects: "اضطراب المعدة أو حرقة أو غثيان.",
      precautions: "قد يسبب نزيفًا في المعدة ويضر الكلى ويرفع ضغط الدم. اسأل طبيبك قبل استخدامه كثيرًا، خاصة إذا كنت تتناول مميعًا للدم."
    },
    zh: {
      use: "缓解疼痛和肿胀",
      helps: "缓解疼痛、肿胀和发烧，如关节炎或受伤引起的。",
      how: "随餐或与牛奶同服。用最小剂量、最短时间。",
      sideEffects: "胃部不适、烧心或恶心。",
      precautions: "可能引起胃出血、损伤肾脏并升高血压。经常使用前请咨询医生，尤其是在服用抗凝药时。"
    }
  },
  "Levothyroxine": {
    es: {
      use: "Hormona tiroidea",
      helps: "Reemplaza la hormona tiroidea cuando el cuerpo no produce suficiente (hipotiroidismo). Esto ayuda a la energía, el peso y la temperatura del cuerpo.",
      how: "Tómela con el estómago vacío y agua, de 30 a 60 minutos antes del desayuno.",
      sideEffects: "Pocos efectos a la dosis correcta. Demasiada puede causar latidos rápidos, temblor, problemas para dormir o mucho calor.",
      precautions: "Separe al menos 4 horas las pastillas de calcio o hierro. Avise a su médico si tiene el corazón acelerado o dolor de pecho."
    },
    ur: {
      use: "تھائرائیڈ ہارمون",
      helps: "جب جسم کافی تھائرائیڈ ہارمون نہ بنائے (ہائپوتھائرائیڈزم) تو اس کی کمی پوری کرتی ہے۔ اس سے توانائی، وزن اور جسم کا درجہ حرارت بہتر ہوتا ہے۔",
      how: "خالی پیٹ پانی کے ساتھ، ناشتے سے 30 سے 60 منٹ پہلے لیں۔",
      sideEffects: "صحیح خوراک پر کم اثرات۔ زیادہ ہو تو تیز دھڑکن، کپکپی، نیند کی کمی یا گرمی لگ سکتی ہے۔",
      precautions: "کیلشیم یا آئرن کی گولیاں کم از کم 4 گھنٹے کے فرق سے لیں۔ دل تیز دھڑکے یا سینے میں درد ہو تو ڈاکٹر کو بتائیں۔"
    },
    ar: {
      use: "هرمون الغدة الدرقية",
      helps: "يعوض هرمون الغدة الدرقية عندما لا يصنع الجسم ما يكفي (قصور الغدة الدرقية). يساعد ذلك في الطاقة والوزن وحرارة الجسم.",
      how: "تناوله على معدة فارغة مع الماء، قبل الفطور بـ 30 إلى 60 دقيقة.",
      sideEffects: "آثار قليلة بالجرعة الصحيحة. الزيادة قد تسبب تسارع القلب أو رعشة أو صعوبة النوم أو الشعور بالحر.",
      precautions: "باعد 4 ساعات على الأقل بينه وبين حبوب الكالسيوم أو الحديد. أخبر طبيبك عن تسارع القلب أو ألم الصدر."
    },
    zh: {
      use: "甲状腺激素",
      helps: "在身体甲状腺激素不足（甲减）时补充它，有助于精力、体重和体温。",
      how: "空腹用水送服，早餐前 30 到 60 分钟。",
      sideEffects: "剂量合适时副作用很少。过量可能导致心跳快、发抖、失眠或怕热。",
      precautions: "钙片或铁剂至少间隔 4 小时。如心跳加速或胸痛，请告诉医生。"
    }
  },
  "Lisinopril": {
    es: {
      use: "Baja la presión arterial",
      helps: "Relaja los vasos sanguíneos para bajar la presión. También ayuda al corazón después de un infarto o en la insuficiencia cardíaca.",
      how: "Tómela una vez al día a la misma hora, con o sin comida. Funciona aunque se sienta bien.",
      sideEffects: "Tos seca, mareo, dolor de cabeza o cansancio.",
      precautions: "La hinchazón de la cara, labios o lengua es una emergencia: llame al 911. Avise a su médico si tiene tos que no se quita."
    },
    ur: {
      use: "بلڈ پریشر کم کرتی ہے",
      helps: "خون کی نالیوں کو ڈھیلا کر کے بلڈ پریشر کم کرتی ہے۔ ہارٹ اٹیک کے بعد یا ہارٹ فیلیئر میں دل کی مدد بھی کرتی ہے۔",
      how: "دن میں ایک بار ایک ہی وقت پر لیں، کھانے کے ساتھ یا بغیر۔ آپ ٹھیک محسوس کریں تب بھی یہ کام کرتی ہے۔",
      sideEffects: "خشک کھانسی، چکر، سر درد یا تھکاوٹ۔",
      precautions: "چہرے، ہونٹوں یا زبان پر سوجن ہنگامی صورتحال ہے: 911 پر کال کریں۔ نہ جانے والی کھانسی پر ڈاکٹر کو بتائیں۔"
    },
    ar: {
      use: "يخفض ضغط الدم",
      helps: "يرخي الأوعية الدموية لخفض ضغط الدم. يساعد القلب أيضًا بعد النوبة القلبية أو في قصور القلب.",
      how: "تناوله مرة يوميًا في الوقت نفسه، مع الطعام أو بدونه. يعمل حتى عندما تشعر أنك بخير.",
      sideEffects: "سعال جاف أو دوخة أو صداع أو تعب.",
      precautions: "تورم الوجه أو الشفتين أو اللسان حالة طارئة: اتصل بالرقم 911. أخبر طبيبك عن سعال لا يزول."
    },
    zh: {
      use: "降低血压",
      helps: "放松血管以降低血压。也能在心脏病发作后或心衰时帮助心脏。",
      how: "每天一次，同一时间服用，饭前饭后均可。即使感觉良好也在起作用。",
      sideEffects: "干咳、头晕、头痛或疲倦。",
      precautions: "脸、嘴唇或舌头肿胀属于紧急情况：请拨打 911。如咳嗽一直不好，请告诉医生。"
    }
  },
  "Losartan": {
    es: {
      use: "Baja la presión arterial",
      helps: "Relaja los vasos sanguíneos para bajar la presión. También ayuda a proteger los riñones en personas con diabetes.",
      how: "Tómela una vez al día, con o sin comida.",
      sideEffects: "Mareo, cansancio o nariz tapada.",
      precautions: "Levántese despacio. La hinchazón de la cara, labios o lengua es una emergencia: llame al 911."
    },
    ur: {
      use: "بلڈ پریشر کم کرتی ہے",
      helps: "خون کی نالیوں کو ڈھیلا کر کے بلڈ پریشر کم کرتی ہے۔ ذیابیطس والوں میں گردوں کی حفاظت میں بھی مدد دیتی ہے۔",
      how: "دن میں ایک بار لیں، کھانے کے ساتھ یا بغیر۔",
      sideEffects: "چکر، تھکاوٹ یا ناک بند ہونا۔",
      precautions: "آہستہ اٹھیں۔ چہرے، ہونٹوں یا زبان پر سوجن ہنگامی صورتحال ہے: 911 پر کال کریں۔"
    },
    ar: {
      use: "يخفض ضغط الدم",
      helps: "يرخي الأوعية الدموية لخفض ضغط الدم. يساعد أيضًا في حماية الكلى لدى مرضى السكري.",
      how: "تناوله مرة يوميًا، مع الطعام أو بدونه.",
      sideEffects: "دوخة أو تعب أو انسداد الأنف.",
      precautions: "انهض ببطء. تورم الوجه أو الشفتين أو اللسان حالة طارئة: اتصل بالرقم 911."
    },
    zh: {
      use: "降低血压",
      helps: "放松血管以降低血压。也有助于保护糖尿病患者的肾脏。",
      how: "每天一次，饭前饭后均可。",
      sideEffects: "头晕、疲倦或鼻塞。",
      precautions: "起身要慢。脸、嘴唇或舌头肿胀属于紧急情况：请拨打 911。"
    }
  },
  "Metformin": {
    es: {
      use: "Controla el azúcar en la sangre",
      helps: "Baja el azúcar en la diabetes tipo 2 ayudando al cuerpo a usar mejor la insulina y haciendo que el hígado produzca menos azúcar.",
      how: "Tómela con las comidas para proteger el estómago.",
      sideEffects: "Malestar de estómago, diarrea, gases o sabor metálico. Suelen mejorar en unas semanas.",
      precautions: "Avise a su médico si tiene vómitos o diarrea fuertes, o mucha debilidad. Dígale que la toma antes de una cirugía o estudios con contraste."
    },
    ur: {
      use: "خون کی شکر کو قابو میں رکھتی ہے",
      helps: "ٹائپ 2 ذیابیطس میں شکر کم کرتی ہے: جسم انسولین بہتر استعمال کرتا ہے اور جگر کم شکر بناتا ہے۔",
      how: "معدے کی حفاظت کے لیے کھانے کے ساتھ لیں۔",
      sideEffects: "پیٹ کی خرابی، دست، گیس یا منہ میں دھاتی ذائقہ۔ یہ عموماً چند ہفتوں میں بہتر ہو جاتے ہیں۔",
      precautions: "شدید قے، دست یا بہت کمزوری پر ڈاکٹر کو بتائیں۔ آپریشن یا ڈائی والے اسکین سے پہلے بتائیں کہ آپ یہ لیتے ہیں۔"
    },
    ar: {
      use: "يضبط سكر الدم",
      helps: "يخفض السكر في السكري من النوع الثاني بمساعدة الجسم على استخدام الأنسولين بشكل أفضل وجعل الكبد يصنع سكرًا أقل.",
      how: "تناوله مع الوجبات لحماية معدتك.",
      sideEffects: "اضطراب المعدة أو إسهال أو غازات أو طعم معدني. غالبًا تتحسن بعد بضعة أسابيع.",
      precautions: "أخبر طبيبك عن القيء أو الإسهال الشديد أو الضعف الشديد. أخبره أنك تتناوله قبل الجراحة أو الأشعة بالصبغة."
    },
    zh: {
      use: "控制血糖",
      helps: "帮助身体更好地利用胰岛素并减少肝脏产生的糖，从而降低 2 型糖尿病患者的血糖。",
      how: "随餐服用，以保护胃。",
      sideEffects: "胃部不适、腹泻、胀气或口中有金属味。通常几周后会好转。",
      precautions: "如严重呕吐、腹泻或非常虚弱，请告诉医生。手术或做造影检查前告诉医生您在服用此药。"
    }
  },
  "Metoprolol": {
    es: {
      use: "Baja la presión arterial",
      helps: "Un betabloqueador. Hace más lento el corazón y baja la presión. También ayuda con el dolor de pecho y protege el corazón después de un infarto.",
      how: "Tómela con o justo después de una comida.",
      sideEffects: "Cansancio, mareo o pulso lento.",
      precautions: "No la deje de golpe. Avise a su médico si se siente muy cansado, mareado o con falta de aire."
    },
    ur: {
      use: "بلڈ پریشر کم کرتی ہے",
      helps: "بیٹا بلاکر۔ دل کی رفتار سست اور بلڈ پریشر کم کرتی ہے۔ سینے کے درد میں مدد اور ہارٹ اٹیک کے بعد دل کی حفاظت بھی کرتی ہے۔",
      how: "کھانے کے ساتھ یا فوراً بعد لیں۔",
      sideEffects: "تھکاوٹ، چکر یا دل کی دھڑکن سست۔",
      precautions: "اچانک بند نہ کریں۔ بہت تھکاوٹ، چکر یا سانس پھولنے پر ڈاکٹر کو بتائیں۔"
    },
    ar: {
      use: "يخفض ضغط الدم",
      helps: "حاصر بيتا. يبطئ القلب ويخفض ضغط الدم. يساعد أيضًا في ألم الصدر ويحمي القلب بعد النوبة القلبية.",
      how: "تناوله مع الوجبة أو بعدها مباشرة.",
      sideEffects: "تعب أو دوخة أو بطء النبض.",
      precautions: "لا توقفه فجأة. أخبر طبيبك إذا شعرت بتعب شديد أو دوخة أو ضيق في التنفس."
    },
    zh: {
      use: "降低血压",
      helps: "一种β受体阻滞剂。减慢心率、降低血压，也可缓解胸痛并在心脏病发作后保护心脏。",
      how: "随餐或饭后立即服用。",
      sideEffects: "疲倦、头晕或心跳慢。",
      precautions: "不要突然停药。如非常疲倦、头晕或气短，请告诉医生。"
    }
  },
  "Montelukast": {
    es: {
      use: "Previene síntomas de asma y alergia",
      helps: "Bloquea sustancias que inflaman las vías respiratorias. Ayuda a prevenir el asma y alivia las alergias.",
      how: "Tómela una vez al día en la noche. No detiene un ataque de asma repentino.",
      sideEffects: "Dolor de cabeza, dolor de estómago o tos.",
      precautions: "Avise a su médico de inmediato si tiene cambios de ánimo, pesadillas o pensamientos de hacerse daño."
    },
    ur: {
      use: "دمہ اور الرجی کی علامات سے بچاتی ہے",
      helps: "سانس کی نالیوں میں سوجن پیدا کرنے والے کیمیکلز کو روکتی ہے۔ دمہ کی علامات سے بچاتی ہے اور الرجی میں آرام دیتی ہے۔",
      how: "دن میں ایک بار شام کو لیں۔ یہ اچانک دمہ کے دورے کو نہیں روکتی۔",
      sideEffects: "سر درد، پیٹ درد یا کھانسی۔",
      precautions: "موڈ میں تبدیلی، برے خواب یا خود کو نقصان پہنچانے کے خیالات آئیں تو فوراً ڈاکٹر کو بتائیں۔"
    },
    ar: {
      use: "يمنع أعراض الربو والحساسية",
      helps: "يمنع المواد التي تسبب تورم المجاري التنفسية. يساعد على منع أعراض الربو ويخفف الحساسية.",
      how: "تناوله مرة يوميًا مساءً. لا يوقف نوبة الربو المفاجئة.",
      sideEffects: "صداع أو ألم في المعدة أو سعال.",
      precautions: "أخبر طبيبك فورًا عن تغيرات المزاج أو الكوابيس أو أفكار إيذاء النفس."
    },
    zh: {
      use: "预防哮喘和过敏症状",
      helps: "阻断引起气道肿胀的化学物质，帮助预防哮喘症状并缓解过敏。",
      how: "每天一次，傍晚服用。它不能制止突然的哮喘发作。",
      sideEffects: "头痛、胃痛或咳嗽。",
      precautions: "如出现情绪变化、噩梦或自伤的念头，请立即告诉医生。"
    }
  },
  "Omeprazole": {
    es: {
      use: "Reduce el ácido del estómago",
      helps: "Baja mucho el ácido del estómago. Trata la acidez, el reflujo y las úlceras.",
      how: "Tómela 30 minutos antes del desayuno con agua.",
      sideEffects: "Dolor de cabeza, dolor de estómago, náuseas o diarrea.",
      precautions: "Pregunte a su médico si la necesita por más de unas semanas. El uso largo puede bajar la vitamina B12 y el magnesio."
    },
    ur: {
      use: "معدے کی تیزابیت کم کرتی ہے",
      helps: "معدے کا تیزاب بہت کم کرتی ہے۔ سینے کی جلن، ایسڈ ریفلکس اور السر کا علاج کرتی ہے۔",
      how: "ناشتے سے 30 منٹ پہلے پانی کے ساتھ لیں۔",
      sideEffects: "سر درد، پیٹ درد، متلی یا دست۔",
      precautions: "اگر چند ہفتوں سے زیادہ ضرورت ہو تو ڈاکٹر سے پوچھیں۔ لمبے عرصے کا استعمال وٹامن B12 اور میگنیشیم کم کر سکتا ہے۔"
    },
    ar: {
      use: "يقلل حمض المعدة",
      helps: "يخفض حمض المعدة بقوة. يعالج الحرقة والارتجاع والقرحة.",
      how: "تناوله قبل الفطور بـ 30 دقيقة مع الماء.",
      sideEffects: "صداع أو ألم في المعدة أو غثيان أو إسهال.",
      precautions: "اسأل طبيبك إذا احتجته لأكثر من بضعة أسابيع. الاستخدام الطويل قد يخفض فيتامين B12 والمغنيسيوم."
    },
    zh: {
      use: "减少胃酸",
      helps: "强力减少胃酸。治疗烧心、胃酸反流和胃溃疡。",
      how: "早餐前 30 分钟用水送服。",
      sideEffects: "头痛、胃痛、恶心或腹泻。",
      precautions: "如需服用超过几周，请咨询医生。长期使用可能降低维生素 B12 和镁。"
    }
  },
  "Pantoprazole": {
    es: {
      use: "Reduce el ácido del estómago",
      helps: "Baja mucho el ácido del estómago. Trata la acidez, el reflujo y las úlceras.",
      how: "Tómela 30 minutos antes del desayuno. Trague la tableta entera.",
      sideEffects: "Dolor de cabeza, diarrea, náuseas o dolor de estómago.",
      precautions: "Pregunte a su médico si la necesita por mucho tiempo. El uso largo puede bajar la vitamina B12 y el magnesio."
    },
    ur: {
      use: "معدے کی تیزابیت کم کرتی ہے",
      helps: "معدے کا تیزاب بہت کم کرتی ہے۔ سینے کی جلن، ایسڈ ریفلکس اور السر کا علاج کرتی ہے۔",
      how: "ناشتے سے 30 منٹ پہلے لیں۔ گولی پوری نگلیں۔",
      sideEffects: "سر درد، دست، متلی یا پیٹ درد۔",
      precautions: "اگر لمبے عرصے تک ضرورت ہو تو ڈاکٹر سے پوچھیں۔ لمبا استعمال وٹامن B12 اور میگنیشیم کم کر سکتا ہے۔"
    },
    ar: {
      use: "يقلل حمض المعدة",
      helps: "يخفض حمض المعدة بقوة. يعالج الحرقة والارتجاع والقرحة.",
      how: "تناوله قبل الفطور بـ 30 دقيقة. ابلع القرص كاملًا.",
      sideEffects: "صداع أو إسهال أو غثيان أو ألم في المعدة.",
      precautions: "اسأل طبيبك إذا احتجته لفترة طويلة. الاستخدام الطويل قد يخفض فيتامين B12 والمغنيسيوم."
    },
    zh: {
      use: "减少胃酸",
      helps: "强力减少胃酸。治疗烧心、胃酸反流和胃溃疡。",
      how: "早餐前 30 分钟服用。整片吞服。",
      sideEffects: "头痛、腹泻、恶心或胃痛。",
      precautions: "如需长期服用，请咨询医生。长期使用可能降低维生素 B12 和镁。"
    }
  },
  "Pravastatin": {
    es: {
      use: "Baja el colesterol",
      helps: "Una estatina. Baja el colesterol 'malo' (LDL) para reducir el riesgo de infarto y derrame cerebral.",
      how: "Tómela una vez al día, con o sin comida.",
      sideEffects: "Dolor muscular, dolor de cabeza o malestar de estómago.",
      precautions: "Llame a su médico si tiene dolor o debilidad muscular sin explicación."
    },
    ur: {
      use: "کولیسٹرول کم کرتی ہے",
      helps: "اسٹیٹن دوا۔ 'خراب' کولیسٹرول (LDL) کم کرتی ہے تاکہ ہارٹ اٹیک اور فالج کا خطرہ کم ہو۔",
      how: "دن میں ایک بار لیں، کھانے کے ساتھ یا بغیر۔",
      sideEffects: "پٹھوں میں درد، سر درد یا پیٹ کی خرابی۔",
      precautions: "بلا وجہ پٹھوں میں درد یا کمزوری ہو تو ڈاکٹر کو فون کریں۔"
    },
    ar: {
      use: "يخفض الكوليسترول",
      helps: "من أدوية الستاتين. يخفض الكوليسترول 'الضار' (LDL) لتقليل خطر النوبة القلبية والسكتة.",
      how: "تناوله مرة يوميًا، مع الطعام أو بدونه.",
      sideEffects: "آلام العضلات أو صداع أو اضطراب المعدة.",
      precautions: "اتصل بطبيبك عند ألم أو ضعف عضلي غير مفسر."
    },
    zh: {
      use: "降低胆固醇",
      helps: "一种他汀类药物。降低“坏”胆固醇（LDL），减少心脏病发作和中风的风险。",
      how: "每天一次，饭前饭后均可。",
      sideEffects: "肌肉痛、头痛或胃部不适。",
      precautions: "如出现不明原因的肌肉疼痛或无力，请联系医生。"
    }
  },
  "Prednisone": {
    es: {
      use: "Calma la inflamación",
      helps: "Un esteroide. Calma la hinchazón y un sistema inmune demasiado activo en enfermedades como artritis, asma y alergias.",
      how: "Tómela en la mañana con comida.",
      sideEffects: "Más apetito, problemas para dormir, cambios de ánimo, azúcar más alta o retención de líquidos.",
      precautions: "No la deje de golpe si la ha tomado por más de unos días. El uso largo puede debilitar los huesos y facilitar infecciones."
    },
    ur: {
      use: "سوزش کم کرتی ہے",
      helps: "اسٹیرائڈ دوا۔ جوڑوں کے درد، دمہ اور الرجی جیسی بیماریوں میں سوجن اور زیادہ متحرک مدافعتی نظام کو پرسکون کرتی ہے۔",
      how: "صبح کھانے کے ساتھ لیں۔",
      sideEffects: "بھوک بڑھنا، نیند کی مشکل، موڈ میں تبدیلی، شکر بڑھنا یا جسم میں پانی جمع ہونا۔",
      precautions: "اگر چند دن سے زیادہ لی ہو تو اچانک بند نہ کریں۔ لمبا استعمال ہڈیوں کو کمزور اور انفیکشن کا خطرہ بڑھا سکتا ہے۔"
    },
    ar: {
      use: "يهدئ الالتهاب",
      helps: "من الستيرويدات. يهدئ التورم وجهاز المناعة مفرط النشاط في حالات مثل التهاب المفاصل والربو والحساسية.",
      how: "تناوله صباحًا مع الطعام.",
      sideEffects: "زيادة الشهية أو صعوبة النوم أو تغيرات المزاج أو ارتفاع السكر أو احتباس السوائل.",
      precautions: "لا توقفه فجأة إذا تناولته لأكثر من بضعة أيام. الاستخدام الطويل قد يضعف العظام ويزيد العدوى."
    },
    zh: {
      use: "消炎",
      helps: "一种类固醇。在关节炎、哮喘和过敏等疾病中缓解肿胀和过度活跃的免疫系统。",
      how: "早上随餐服用。",
      sideEffects: "食欲增加、失眠、情绪变化、血糖升高或水肿。",
      precautions: "如已服用超过几天，不要突然停药。长期使用可能使骨骼变弱并更易感染。"
    }
  },
  "Rosuvastatin": {
    es: {
      use: "Baja el colesterol",
      helps: "Una estatina. Baja el colesterol 'malo' (LDL) para reducir el riesgo de infarto y derrame cerebral.",
      how: "Tómela una vez al día, a cualquier hora, con o sin comida.",
      sideEffects: "Dolor muscular, dolor de cabeza, dolor de estómago o náuseas.",
      precautions: "Llame a su médico si tiene dolor o debilidad muscular sin explicación."
    },
    ur: {
      use: "کولیسٹرول کم کرتی ہے",
      helps: "اسٹیٹن دوا۔ 'خراب' کولیسٹرول (LDL) کم کرتی ہے تاکہ ہارٹ اٹیک اور فالج کا خطرہ کم ہو۔",
      how: "دن میں ایک بار، کسی بھی وقت، کھانے کے ساتھ یا بغیر لیں۔",
      sideEffects: "پٹھوں میں درد، سر درد، پیٹ درد یا متلی۔",
      precautions: "بلا وجہ پٹھوں میں درد یا کمزوری ہو تو ڈاکٹر کو فون کریں۔"
    },
    ar: {
      use: "يخفض الكوليسترول",
      helps: "من أدوية الستاتين. يخفض الكوليسترول 'الضار' (LDL) لتقليل خطر النوبة القلبية والسكتة.",
      how: "تناوله مرة يوميًا في أي وقت، مع الطعام أو بدونه.",
      sideEffects: "آلام العضلات أو صداع أو ألم في المعدة أو غثيان.",
      precautions: "اتصل بطبيبك عند ألم أو ضعف عضلي غير مفسر."
    },
    zh: {
      use: "降低胆固醇",
      helps: "一种他汀类药物。降低“坏”胆固醇（LDL），减少心脏病发作和中风的风险。",
      how: "每天一次，任何时间，饭前饭后均可。",
      sideEffects: "肌肉痛、头痛、胃痛或恶心。",
      precautions: "如出现不明原因的肌肉疼痛或无力，请联系医生。"
    }
  },
  "Sertraline": {
    es: {
      use: "Trata la depresión y la ansiedad",
      helps: "Ayuda a equilibrar la serotonina, una sustancia natural del cerebro, para aliviar la depresión y la ansiedad.",
      how: "Tómela una vez al día, con o sin comida. Puede tardar unas semanas en ayudar.",
      sideEffects: "Náuseas, diarrea, problemas para dormir o sudor.",
      precautions: "No la deje de golpe. Avise a su médico si tiene cambios de ánimo nuevos, confusión o sangrado fácil."
    },
    ur: {
      use: "ڈپریشن اور بے چینی کا علاج",
      helps: "دماغ کے قدرتی کیمیکل سیروٹونن کو متوازن کر کے ڈپریشن اور بے چینی کم کرتی ہے۔",
      how: "دن میں ایک بار لیں، کھانے کے ساتھ یا بغیر۔ اثر ہونے میں چند ہفتے لگ سکتے ہیں۔",
      sideEffects: "متلی، دست، نیند کی مشکل یا پسینہ۔",
      precautions: "اچانک بند نہ کریں۔ موڈ میں نئی تبدیلی، الجھن یا آسانی سے خون آنے پر ڈاکٹر کو بتائیں۔"
    },
    ar: {
      use: "يعالج الاكتئاب والقلق",
      helps: "يساعد على موازنة السيروتونين، وهو مادة طبيعية في الدماغ، لتخفيف الاكتئاب والقلق.",
      how: "تناوله مرة يوميًا، مع الطعام أو بدونه. قد يستغرق بضعة أسابيع ليبدأ مفعوله.",
      sideEffects: "غثيان أو إسهال أو صعوبة النوم أو تعرق.",
      precautions: "لا توقفه فجأة. أخبر طبيبك عن تغيرات مزاجية جديدة أو ارتباك أو نزيف بسهولة."
    },
    zh: {
      use: "治疗抑郁和焦虑",
      helps: "帮助平衡大脑中的天然化学物质血清素，缓解抑郁和焦虑。",
      how: "每天一次，饭前饭后均可。可能需要几周才见效。",
      sideEffects: "恶心、腹泻、失眠或出汗。",
      precautions: "不要突然停药。如出现新的情绪变化、意识混乱或容易出血，请告诉医生。"
    }
  },
  "Simvastatin": {
    es: {
      use: "Baja el colesterol",
      helps: "Una estatina. Baja el colesterol 'malo' (LDL) para reducir el riesgo de infarto y derrame cerebral.",
      how: "Tómela en la noche. Evite el jugo de toronja.",
      sideEffects: "Dolor muscular, estreñimiento o malestar de estómago.",
      precautions: "Llame a su médico si tiene dolor o debilidad muscular sin explicación."
    },
    ur: {
      use: "کولیسٹرول کم کرتی ہے",
      helps: "اسٹیٹن دوا۔ 'خراب' کولیسٹرول (LDL) کم کرتی ہے تاکہ ہارٹ اٹیک اور فالج کا خطرہ کم ہو۔",
      how: "شام کو لیں۔ گریپ فروٹ کا جوس نہ پئیں۔",
      sideEffects: "پٹھوں میں درد، قبض یا پیٹ کی خرابی۔",
      precautions: "بلا وجہ پٹھوں میں درد یا کمزوری ہو تو ڈاکٹر کو فون کریں۔"
    },
    ar: {
      use: "يخفض الكوليسترول",
      helps: "من أدوية الستاتين. يخفض الكوليسترول 'الضار' (LDL) لتقليل خطر النوبة القلبية والسكتة.",
      how: "تناوله مساءً. تجنب عصير الجريب فروت.",
      sideEffects: "آلام العضلات أو إمساك أو اضطراب المعدة.",
      precautions: "اتصل بطبيبك عند ألم أو ضعف عضلي غير مفسر."
    },
    zh: {
      use: "降低胆固醇",
      helps: "一种他汀类药物。降低“坏”胆固醇（LDL），减少心脏病发作和中风的风险。",
      how: "晚上服用。避免喝葡萄柚汁。",
      sideEffects: "肌肉痛、便秘或胃部不适。",
      precautions: "如出现不明原因的肌肉疼痛或无力，请联系医生。"
    }
  },
  "Spironolactone": {
    es: {
      use: "Pastilla para el agua que conserva el potasio",
      helps: "Ayuda en la insuficiencia cardíaca, baja la presión y reduce la retención de líquidos, sin bajar el potasio.",
      how: "Tómela a la misma hora cada día, siempre de la misma forma (siempre con comida o siempre sin comida).",
      sideEffects: "Mareo, malestar de estómago o pechos sensibles o hinchados.",
      precautions: "Evite pastillas de potasio y sustitutos de sal, a menos que su médico diga que sí. Avise si tiene debilidad muscular o latidos irregulares."
    },
    ur: {
      use: "پوٹاشیم بچانے والی پیشاب آور گولی",
      helps: "ہارٹ فیلیئر میں مدد، بلڈ پریشر کم اور جسم میں جمع پانی کم کرتی ہے، اور پوٹاشیم جسم میں رکھتی ہے۔",
      how: "ہر روز ایک ہی وقت پر، ہر بار ایک ہی طریقے سے لیں (ہمیشہ کھانے کے ساتھ یا ہمیشہ بغیر)۔",
      sideEffects: "چکر، پیٹ کی خرابی یا چھاتی میں درد یا سوجن۔",
      precautions: "ڈاکٹر کی اجازت کے بغیر پوٹاشیم کی گولیاں اور نمک کے متبادل استعمال نہ کریں۔ پٹھوں کی کمزوری یا بے ترتیب دھڑکن پر ڈاکٹر کو بتائیں۔"
    },
    ar: {
      use: "مدر للبول يحافظ على البوتاسيوم",
      helps: "يساعد في قصور القلب ويخفض ضغط الدم ويقلل احتباس السوائل، مع الحفاظ على البوتاسيوم في الجسم.",
      how: "تناوله في الوقت نفسه يوميًا وبالطريقة نفسها كل مرة (دائمًا مع الطعام أو دائمًا بدونه).",
      sideEffects: "دوخة أو اضطراب المعدة أو ألم أو تورم في الثدي.",
      precautions: "تجنب حبوب البوتاسيوم وبدائل الملح ما لم يوافق طبيبك. أخبر طبيبك عن ضعف العضلات أو عدم انتظام ضربات القلب."
    },
    zh: {
      use: "保钾利尿药",
      helps: "帮助治疗心衰、降低血压并减少体液潴留，同时保留体内的钾。",
      how: "每天同一时间、以同样方式服用（总是随餐或总是空腹）。",
      sideEffects: "头晕、胃部不适或乳房胀痛、肿大。",
      precautions: "除非医生同意，避免服用钾补充剂和代盐。如肌肉无力或心跳不规律，请告诉医生。"
    }
  },
  "Tamsulosin": {
    es: {
      use: "Ayuda a orinar",
      helps: "Relaja los músculos de la próstata y la vejiga para que la orina salga más fácil en hombres con próstata agrandada.",
      how: "Tómela 30 minutos después de la misma comida cada día. Trague la cápsula entera.",
      sideEffects: "Mareo, goteo de nariz o menos semen.",
      precautions: "Levántese despacio. Dígale a su oculista que la toma antes de cualquier cirugía de cataratas."
    },
    ur: {
      use: "پیشاب آسانی سے آنے میں مدد",
      helps: "پروسٹیٹ اور مثانے کے پٹھوں کو ڈھیلا کرتی ہے تاکہ بڑھے ہوئے پروسٹیٹ والے مردوں کو پیشاب آسانی سے آئے۔",
      how: "ہر روز ایک ہی کھانے کے 30 منٹ بعد لیں۔ کیپسول پورا نگلیں۔",
      sideEffects: "چکر، ناک بہنا یا کم منی۔",
      precautions: "آہستہ اٹھیں۔ موتیا کے کسی بھی آپریشن سے پہلے آنکھوں کے ڈاکٹر کو بتائیں کہ آپ یہ لیتے ہیں۔"
    },
    ar: {
      use: "يسهّل تدفق البول",
      helps: "يرخي عضلات البروستاتا والمثانة ليتدفق البول بسهولة أكبر لدى الرجال المصابين بتضخم البروستاتا.",
      how: "تناوله بعد 30 دقيقة من الوجبة نفسها يوميًا. ابلع الكبسولة كاملة.",
      sideEffects: "دوخة أو سيلان الأنف أو قلة السائل المنوي.",
      precautions: "انهض ببطء. أخبر طبيب العيون أنك تتناوله قبل أي جراحة للمياه البيضاء."
    },
    zh: {
      use: "帮助排尿",
      helps: "放松前列腺和膀胱的肌肉，使前列腺增生的男性排尿更顺畅。",
      how: "每天在同一餐后 30 分钟服用。整粒吞服。",
      sideEffects: "头晕、流鼻涕或精液减少。",
      precautions: "起身要慢。做任何白内障手术前告诉眼科医生您在服用此药。"
    }
  },
  "Valsartan": {
    es: {
      use: "Baja la presión arterial",
      helps: "Relaja los vasos sanguíneos para bajar la presión y ayuda en la insuficiencia cardíaca.",
      how: "Tómela a la misma hora cada día, con o sin comida.",
      sideEffects: "Mareo, cansancio o dolor de cabeza.",
      precautions: "Levántese despacio. No use pastillas de potasio ni sustitutos de sal a menos que su médico diga que sí."
    },
    ur: {
      use: "بلڈ پریشر کم کرتی ہے",
      helps: "خون کی نالیوں کو ڈھیلا کر کے بلڈ پریشر کم کرتی ہے اور ہارٹ فیلیئر میں مدد دیتی ہے۔",
      how: "ہر روز ایک ہی وقت پر لیں، کھانے کے ساتھ یا بغیر۔",
      sideEffects: "چکر، تھکاوٹ یا سر درد۔",
      precautions: "آہستہ اٹھیں۔ ڈاکٹر کی اجازت کے بغیر پوٹاشیم کی گولیاں یا نمک کے متبادل استعمال نہ کریں۔"
    },
    ar: {
      use: "يخفض ضغط الدم",
      helps: "يرخي الأوعية الدموية لخفض ضغط الدم ويساعد في قصور القلب.",
      how: "تناوله في الوقت نفسه يوميًا، مع الطعام أو بدونه.",
      sideEffects: "دوخة أو تعب أو صداع.",
      precautions: "انهض ببطء. لا تستخدم حبوب البوتاسيوم أو بدائل الملح ما لم يوافق طبيبك."
    },
    zh: {
      use: "降低血压",
      helps: "放松血管以降低血压，并有助于治疗心衰。",
      how: "每天同一时间服用，饭前饭后均可。",
      sideEffects: "头晕、疲倦或头痛。",
      precautions: "起身要慢。除非医生同意，不要服用钾补充剂或代盐。"
    }
  },
  "Warfarin": {
    es: {
      use: "Anticoagulante",
      helps: "Hace que la sangre coagule más lento para prevenir coágulos peligrosos y derrames cerebrales.",
      how: "Tómela a la misma hora todos los días. Vaya a todos sus análisis de sangre, porque su dosis puede cambiar.",
      sideEffects: "Moretones o sangrado con más facilidad.",
      precautions: "Busque ayuda si hay sangrado fuerte o una caída fuerte. Mantenga estable la cantidad de verduras de hoja verde que come. Pregunte antes de empezar cualquier medicina nueva."
    },
    ur: {
      use: "خون پتلا کرنے والی دوا",
      helps: "خون جمنے کی رفتار سست کرتی ہے تاکہ خطرناک لوتھڑے اور فالج نہ ہوں۔",
      how: "ہر روز ایک ہی وقت پر لیں۔ خون کے ہر ٹیسٹ پر جائیں، کیونکہ آپ کی خوراک بدل سکتی ہے۔",
      sideEffects: "آسانی سے نیل پڑنا یا خون آنا۔",
      precautions: "زیادہ خون بہنے یا سخت گرنے پر مدد لیں۔ ہری پتوں والی سبزیاں ہر روز تقریباً ایک جتنی کھائیں۔ کوئی نئی دوا شروع کرنے سے پہلے پوچھیں۔"
    },
    ar: {
      use: "مميّع للدم",
      helps: "يبطئ تجلط الدم لمنع الجلطات الخطيرة والسكتات.",
      how: "تناوله في الوقت نفسه كل يوم. احضر جميع تحاليل الدم، لأن جرعتك قد تتغير.",
      sideEffects: "كدمات أو نزيف بسهولة أكبر.",
      precautions: "اطلب المساعدة عند نزيف شديد أو سقوط قوي. حافظ على كمية ثابتة من الخضار الورقية الخضراء. اسأل قبل بدء أي دواء جديد."
    },
    zh: {
      use: "抗凝药（血液稀释剂）",
      helps: "减慢血液凝固，预防危险的血栓和中风。",
      how: "每天同一时间服用。按时做每次验血，因为剂量可能会调整。",
      sideEffects: "更容易瘀青或出血。",
      precautions: "如大出血或严重跌倒，请求助。每天吃的绿叶蔬菜量要保持稳定。开始任何新药前先询问。"
    }
  },
  "Calcium Carbonate": {
    es: {
      use: "Suplemento de calcio",
      helps: "El calcio mantiene los huesos fuertes. Tums también alivia la acidez.",
      how: "Tómelo con las comidas. No tome más de 500 a 600 mg a la vez.",
      sideEffects: "Estreñimiento o hinchazón.",
      precautions: "Sepárelo unas horas del hierro, la medicina de la tiroides y algunos antibióticos."
    },
    ur: {
      use: "کیلشیم سپلیمنٹ",
      helps: "کیلشیم ہڈیوں کو مضبوط رکھتا ہے۔ ٹمز سینے کی جلن میں بھی آرام دیتا ہے۔",
      how: "کھانے کے ساتھ لیں۔ ایک وقت میں 500 سے 600 mg سے زیادہ نہ لیں۔",
      sideEffects: "قبض یا پیٹ پھولنا۔",
      precautions: "آئرن، تھائرائیڈ کی دوا اور کچھ اینٹی بائیوٹکس سے چند گھنٹے کے فرق سے لیں۔"
    },
    ar: {
      use: "مكمل الكالسيوم",
      helps: "الكالسيوم يحافظ على قوة العظام. يخفف تمز أيضًا الحرقة.",
      how: "تناوله مع الوجبات. لا تتناول أكثر من 500 إلى 600 mg في المرة الواحدة.",
      sideEffects: "إمساك أو انتفاخ.",
      precautions: "باعد بينه وبين الحديد ودواء الغدة الدرقية وبعض المضادات الحيوية بضع ساعات."
    },
    zh: {
      use: "钙补充剂",
      helps: "钙能保持骨骼强壮。Tums 还能缓解烧心。",
      how: "随餐服用。一次不要超过 500 到 600 mg。",
      sideEffects: "便秘或腹胀。",
      precautions: "与铁剂、甲状腺药和某些抗生素间隔几个小时。"
    }
  },
  "Ferrous Sulfate": {
    es: {
      use: "Suplemento de hierro",
      helps: "El hierro ayuda a la sangre a llevar oxígeno. Trata la anemia por falta de hierro.",
      how: "Tómelo en la mañana con el estómago vacío si puede; con comida si le cae mal.",
      sideEffects: "Estreñimiento, náuseas o heces oscuras.",
      precautions: "Sepárelo al menos 4 horas de la medicina de la tiroides. Manténgalo lejos de los niños: demasiado hierro puede ser mortal para ellos."
    },
    ur: {
      use: "آئرن سپلیمنٹ",
      helps: "آئرن خون کو آکسیجن لے جانے میں مدد دیتا ہے۔ آئرن کی کمی سے ہونے والی خون کی کمی کا علاج کرتا ہے۔",
      how: "ہو سکے تو صبح خالی پیٹ لیں؛ پیٹ خراب ہو تو کھانے کے ساتھ۔",
      sideEffects: "قبض، متلی یا گہرے رنگ کا پاخانہ۔",
      precautions: "تھائرائیڈ کی دوا سے کم از کم 4 گھنٹے کے فرق سے لیں۔ بچوں سے دور رکھیں: زیادہ آئرن ان کے لیے جان لیوا ہو سکتا ہے۔"
    },
    ar: {
      use: "مكمل الحديد",
      helps: "الحديد يساعد الدم على حمل الأكسجين. يعالج فقر الدم الناتج عن نقص الحديد.",
      how: "تناوله صباحًا على معدة فارغة إن أمكن؛ ومع الطعام إن أزعج معدتك.",
      sideEffects: "إمساك أو غثيان أو براز داكن.",
      precautions: "باعد بينه وبين دواء الغدة الدرقية 4 ساعات على الأقل. أبعده عن الأطفال: الحديد الزائد قد يكون قاتلًا لهم."
    },
    zh: {
      use: "铁补充剂",
      helps: "铁帮助血液输送氧气，治疗缺铁性贫血。",
      how: "最好早上空腹服用；如胃不舒服可随餐服用。",
      sideEffects: "便秘、恶心或大便发黑。",
      precautions: "与甲状腺药至少间隔 4 小时。放在儿童拿不到的地方：铁过量对儿童可能致命。"
    }
  },
  "Fish Oil": {
    es: {
      use: "Suplemento de omega-3",
      helps: "El aceite de pescado tiene grasas omega-3. En dosis de receta baja los triglicéridos; como suplemento se toma a menudo para la salud del corazón.",
      how: "Tómelo con una comida para evitar eructos con sabor a pescado.",
      sideEffects: "Sabor o eructos a pescado, o malestar de estómago.",
      precautions: "Puede aumentar el riesgo de sangrado con anticoagulantes como warfarina o apixabán. Avise a su médico antes de una cirugía."
    },
    ur: {
      use: "اومیگا 3 سپلیمنٹ",
      helps: "مچھلی کے تیل میں اومیگا 3 چکنائی ہوتی ہے۔ نسخے والی خوراک ٹرائی گلیسرائیڈز کم کرتی ہے؛ سپلیمنٹ کے طور پر اکثر دل کی صحت کے لیے لیا جاتا ہے۔",
      how: "مچھلی والی ڈکار سے بچنے کے لیے کھانے کے ساتھ لیں۔",
      sideEffects: "مچھلی کا ذائقہ یا ڈکار، یا پیٹ کی خرابی۔",
      precautions: "وارفرین یا اپیکسابان جیسی خون پتلا کرنے والی دواؤں کے ساتھ خون بہنے کا خطرہ بڑھ سکتا ہے۔ آپریشن سے پہلے ڈاکٹر کو بتائیں۔"
    },
    ar: {
      use: "مكمل أوميغا 3",
      helps: "زيت السمك يحتوي على دهون أوميغا 3. الجرعات الموصوفة تخفض الدهون الثلاثية؛ وكمكمل يُؤخذ غالبًا لصحة القلب.",
      how: "تناوله مع وجبة لتجنب التجشؤ بطعم السمك.",
      sideEffects: "طعم أو تجشؤ بطعم السمك، أو اضطراب المعدة.",
      precautions: "قد يزيد خطر النزيف مع مميعات الدم مثل الوارفارين أو الأبيكسابان. أخبر طبيبك قبل أي جراحة."
    },
    zh: {
      use: "欧米伽-3 补充剂",
      helps: "鱼油含有欧米伽-3 脂肪。处方剂量可降低甘油三酯；作为保健品常用于心脏健康。",
      how: "随餐服用，避免打嗝有鱼腥味。",
      sideEffects: "鱼腥味或打嗝、胃部不适。",
      precautions: "与华法林或阿哌沙班等抗凝药同服可能增加出血风险。手术前请告诉医生。"
    }
  },
  "Magnesium": {
    es: {
      use: "Suplemento de magnesio",
      helps: "El magnesio ayuda a los músculos, los nervios y los huesos. Se usa para el magnesio bajo y a veces para calambres en las piernas o estreñimiento.",
      how: "Tómelo con comida.",
      sideEffects: "Diarrea o cólicos de estómago.",
      precautions: "Pregunte primero a su médico si tiene enfermedad de los riñones. Sepárelo unas horas de algunos antibióticos y de la medicina de la tiroides."
    },
    ur: {
      use: "میگنیشیم سپلیمنٹ",
      helps: "میگنیشیم پٹھوں، اعصاب اور ہڈیوں کے لیے مفید ہے۔ میگنیشیم کی کمی اور کبھی ٹانگوں کے اینٹھن یا قبض کے لیے استعمال ہوتا ہے۔",
      how: "کھانے کے ساتھ لیں۔",
      sideEffects: "دست یا پیٹ میں مروڑ۔",
      precautions: "گردے کی بیماری ہو تو پہلے ڈاکٹر سے پوچھیں۔ کچھ اینٹی بائیوٹکس اور تھائرائیڈ کی دوا سے چند گھنٹے کے فرق سے لیں۔"
    },
    ar: {
      use: "مكمل المغنيسيوم",
      helps: "المغنيسيوم يفيد العضلات والأعصاب والعظام. يُستخدم لنقص المغنيسيوم وأحيانًا لتشنجات الساقين أو الإمساك.",
      how: "تناوله مع الطعام.",
      sideEffects: "إسهال أو تقلصات في المعدة.",
      precautions: "اسأل طبيبك أولًا إذا كان لديك مرض في الكلى. باعد بينه وبين بعض المضادات الحيوية ودواء الغدة الدرقية بضع ساعات."
    },
    zh: {
      use: "镁补充剂",
      helps: "镁有益于肌肉、神经和骨骼。用于缺镁，有时也用于腿抽筋或便秘。",
      how: "随餐服用。",
      sideEffects: "腹泻或胃部绞痛。",
      precautions: "如有肾病，请先咨询医生。与某些抗生素和甲状腺药间隔几个小时。"
    }
  },
  "Multivitamin": {
    es: {
      use: "Multivitamínico diario",
      helps: "Llena pequeños vacíos de vitaminas y minerales que no obtiene de la comida.",
      how: "Tome 1 al día con una comida.",
      sideEffects: "Náuseas o malestar de estómago.",
      precautions: "No duplique la vitamina A ni el hierro con otros suplementos. Avise a su médico si toma warfarina (vitamina K)."
    },
    ur: {
      use: "روزانہ ملٹی وٹامن",
      helps: "کھانے سے ملنے والے وٹامنز اور معدنیات کی چھوٹی کمی پوری کرتا ہے۔",
      how: "دن میں 1 کھانے کے ساتھ لیں۔",
      sideEffects: "متلی یا پیٹ کی خرابی۔",
      precautions: "دوسرے سپلیمنٹس سے وٹامن A یا آئرن دوگنا نہ کریں۔ وارفرین لیتے ہوں تو ڈاکٹر کو بتائیں (وٹامن K)۔"
    },
    ar: {
      use: "فيتامينات متعددة يومية",
      helps: "يسد النقص البسيط في الفيتامينات والمعادن التي تحصل عليها من الطعام.",
      how: "تناول قرصًا واحدًا يوميًا مع وجبة.",
      sideEffects: "غثيان أو اضطراب المعدة.",
      precautions: "لا تضاعف فيتامين A أو الحديد من مكملات أخرى. أخبر طبيبك إذا كنت تتناول الوارفارين (فيتامين K)."
    },
    zh: {
      use: "每日复合维生素",
      helps: "补充从食物中获取不足的少量维生素和矿物质。",
      how: "每天 1 片，随餐服用。",
      sideEffects: "恶心或胃部不适。",
      precautions: "不要从其他保健品重复补充维生素 A 或铁。如服用华法林请告诉医生（维生素 K）。"
    }
  },
  "Vitamin B12": {
    es: {
      use: "Suplemento de vitamina B12",
      helps: "La vitamina B12 ayuda a formar glóbulos rojos y mantiene sanos los nervios. Muchos adultos mayores absorben menos.",
      how: "Tómela una vez al día a la misma hora.",
      sideEffects: "Por lo general leves, como náuseas o diarrea.",
      precautions: "El adormecimiento, hormigueo o problemas de memoria necesitan revisión médica; algunas personas necesitan inyecciones de B12."
    },
    ur: {
      use: "وٹامن B12 سپلیمنٹ",
      helps: "وٹامن B12 خون کے سرخ خلیے بنانے اور اعصاب کو صحت مند رکھنے میں مدد دیتا ہے۔ بہت سے بزرگ اسے کم جذب کرتے ہیں۔",
      how: "دن میں ایک بار ایک ہی وقت پر لیں۔",
      sideEffects: "عموماً ہلکے، جیسے متلی یا دست۔",
      precautions: "سن ہونا، جھنجھناہٹ یا یادداشت کے مسائل پر ڈاکٹر کا معائنہ ضروری ہے؛ کچھ لوگوں کو B12 کے انجکشن چاہیے ہوتے ہیں۔"
    },
    ar: {
      use: "مكمل فيتامين B12",
      helps: "يساعد فيتامين B12 في تكوين خلايا الدم الحمراء ويحافظ على صحة الأعصاب. كثير من كبار السن يمتصون كمية أقل منه.",
      how: "تناوله مرة يوميًا في الوقت نفسه.",
      sideEffects: "عادةً خفيفة، مثل الغثيان أو الإسهال.",
      precautions: "التنميل أو الوخز أو مشاكل الذاكرة تحتاج فحصًا طبيًا؛ بعض الناس يحتاجون حقن B12."
    },
    zh: {
      use: "维生素 B12 补充剂",
      helps: "维生素 B12 帮助生成红细胞并保持神经健康。很多老年人吸收较少。",
      how: "每天一次，同一时间服用。",
      sideEffects: "通常较轻，如恶心或腹泻。",
      precautions: "麻木、刺痛或记忆问题需要医生检查；有些人需要注射 B12。"
    }
  },
  "Vitamin D3": {
    es: {
      use: "Suplemento de vitamina D",
      helps: "La vitamina D ayuda al cuerpo a absorber calcio para tener huesos y músculos fuertes.",
      how: "Tómela con una comida.",
      sideEffects: "Por lo general ninguno a dosis normales.",
      precautions: "Demasiada puede subir el calcio en la sangre. No tome más de 4,000 UI al día a menos que su médico lo indique."
    },
    ur: {
      use: "وٹامن D سپلیمنٹ",
      helps: "وٹامن D جسم کو کیلشیم جذب کرنے میں مدد دیتا ہے تاکہ ہڈیاں اور پٹھے مضبوط رہیں۔",
      how: "کھانے کے ساتھ لیں۔",
      sideEffects: "عام خوراک میں عموماً کوئی نہیں۔",
      precautions: "زیادہ مقدار خون میں کیلشیم بڑھا سکتی ہے۔ ڈاکٹر کے کہے بغیر دن میں 4,000 IU سے زیادہ نہ لیں۔"
    },
    ar: {
      use: "مكمل فيتامين D",
      helps: "يساعد فيتامين D الجسم على امتصاص الكالسيوم لعظام وعضلات قوية.",
      how: "تناوله مع وجبة.",
      sideEffects: "عادةً لا شيء بالجرعات العادية.",
      precautions: "الكمية الزائدة قد ترفع الكالسيوم في الدم. لا تتناول أكثر من 4,000 وحدة دولية يوميًا إلا بأمر الطبيب."
    },
    zh: {
      use: "维生素 D 补充剂",
      helps: "维生素 D 帮助身体吸收钙，使骨骼和肌肉强壮。",
      how: "随餐服用。",
      sideEffects: "正常剂量下通常没有。",
      precautions: "过量可能使血钙升高。除非医生要求，每天不要超过 4,000 IU。"
    }
  },
  "Zinc": {
    es: {
      use: "Suplemento de zinc",
      helps: "El zinc ayuda al sistema inmune y a la cicatrización de heridas.",
      how: "Tómelo con comida si le cae mal al estómago.",
      sideEffects: "Náuseas, malestar de estómago o sabor metálico.",
      precautions: "Tomar más de 40 mg al día por mucho tiempo puede bajar el cobre. Sepárelo unas horas de algunos antibióticos."
    },
    ur: {
      use: "زنک سپلیمنٹ",
      helps: "زنک مدافعتی نظام اور زخم بھرنے میں مدد دیتا ہے۔",
      how: "پیٹ خراب ہو تو کھانے کے ساتھ لیں۔",
      sideEffects: "متلی، پیٹ کی خرابی یا دھاتی ذائقہ۔",
      precautions: "لمبے عرصے تک دن میں 40 mg سے زیادہ لینا تانبا (کاپر) کم کر سکتا ہے۔ کچھ اینٹی بائیوٹکس سے چند گھنٹے کے فرق سے لیں۔"
    },
    ar: {
      use: "مكمل الزنك",
      helps: "يساعد الزنك جهاز المناعة والتئام الجروح.",
      how: "تناوله مع الطعام إن أزعج معدتك.",
      sideEffects: "غثيان أو اضطراب المعدة أو طعم معدني.",
      precautions: "تناول أكثر من 40 mg يوميًا لفترة طويلة قد يخفض النحاس. باعد بينه وبين بعض المضادات الحيوية بضع ساعات."
    },
    zh: {
      use: "锌补充剂",
      helps: "锌有助于免疫系统和伤口愈合。",
      how: "如胃不舒服，可随餐服用。",
      sideEffects: "恶心、胃部不适或口中有金属味。",
      precautions: "长期每天超过 40 mg 可能降低铜。与某些抗生素间隔几个小时。"
    }
  }
};

// The short "what it's for" line. The key is the English line.
const useTranslations = {
  "Quick-relief inhaler": { es: "Inhalador de alivio rápido", ur: "فوری آرام والا انہیلر", ar: "بخاخ للتخفيف السريع", zh: "快速缓解吸入剂" },
  "Strengthens bones": { es: "Fortalece los huesos", ur: "ہڈیوں کو مضبوط کرتی ہے", ar: "يقوي العظام", zh: "强健骨骼" },
  "Treats anxiety and panic": { es: "Trata la ansiedad y el pánico", ur: "بے چینی اور گھبراہٹ کا علاج", ar: "يعالج القلق ونوبات الهلع", zh: "治疗焦虑和惊恐" },
  "Antibiotic": { es: "Antibiótico", ur: "اینٹی بائیوٹک", ar: "مضاد حيوي", zh: "抗生素" },
  "Treats bipolar disorder and schizophrenia": { es: "Trata el trastorno bipolar y la esquizofrenia", ur: "بائی پولر اور شیزوفرینیا کا علاج", ar: "يعالج الاضطراب ثنائي القطب والفصام", zh: "治疗双相障碍和精神分裂症" },
  "Nasal allergy spray": { es: "Aerosol nasal para alergias", ur: "الرجی کا ناک کا اسپرے", ar: "بخاخ أنفي للحساسية", zh: "过敏鼻喷剂" },
  "Relaxes tight muscles": { es: "Relaja los músculos tensos", ur: "اکڑے ہوئے پٹھوں کو ڈھیلا کرتی ہے", ar: "يرخي العضلات المتشنجة", zh: "放松紧绷的肌肉" },
  "Lowers blood pressure": { es: "Baja la presión arterial", ur: "بلڈ پریشر کم کرتی ہے", ar: "يخفض ضغط الدم", zh: "降低血压" },
  "Calms cough": { es: "Calma la tos", ur: "کھانسی کم کرتی ہے", ar: "يهدئ السعال", zh: "止咳" },
  "Daily inhaler for asthma and COPD": { es: "Inhalador diario para asma y EPOC", ur: "دمہ اور COPD کا روزانہ انہیلر", ar: "بخاخ يومي للربو ومرض الانسداد الرئوي", zh: "哮喘和慢阻肺的每日吸入剂" },
  "Treats depression": { es: "Trata la depresión", ur: "ڈپریشن کا علاج", ar: "يعالج الاكتئاب", zh: "治疗抑郁" },
  "Treats anxiety": { es: "Trata la ansiedad", ur: "بے چینی کا علاج", ar: "يعالج القلق", zh: "治疗焦虑" },
  "Relieves arthritis pain": { es: "Alivia el dolor de artritis", ur: "جوڑوں کے درد میں آرام", ar: "يخفف ألم التهاب المفاصل", zh: "缓解关节炎疼痛" },
  "Treats allergies": { es: "Trata las alergias", ur: "الرجی کا علاج", ar: "يعالج الحساسية", zh: "治疗过敏" },
  "Water pill for blood pressure": { es: "Pastilla para el agua para la presión", ur: "بلڈ پریشر کی پیشاب آور گولی", ar: "مدر للبول لضغط الدم", zh: "降压利尿药" },
  "Very strong steroid cream": { es: "Crema de esteroide muy fuerte", ur: "بہت طاقتور اسٹیرائڈ کریم", ar: "كريم ستيرويد قوي جدًا", zh: "强效类固醇药膏" },
  "Treats panic and seizures": { es: "Trata el pánico y las convulsiones", ur: "گھبراہٹ اور دوروں کا علاج", ar: "يعالج الهلع والنوبات", zh: "治疗惊恐和癫痫" },
  "Relaxes muscle spasms": { es: "Relaja los espasmos musculares", ur: "پٹھوں کی اینٹھن کم کرتی ہے", ar: "يرخي تشنجات العضلات", zh: "缓解肌肉痉挛" },
  "Lowers blood sugar, protects heart": { es: "Baja el azúcar, protege el corazón", ur: "شکر کم کرتی ہے، دل کی حفاظت", ar: "يخفض السكر ويحمي القلب", zh: "降血糖，保护心脏" },
  "Pain-relief gel for joints": { es: "Gel para el dolor de articulaciones", ur: "جوڑوں کے درد کا جیل", ar: "جل لتخفيف ألم المفاصل", zh: "关节止痛凝胶" },
  "Lowers blood pressure and heart rate": { es: "Baja la presión y el pulso", ur: "بلڈ پریشر اور دھڑکن کم کرتی ہے", ar: "يخفض ضغط الدم ومعدل القلب", zh: "降低血压和心率" },
  "Stool softener": { es: "Ablandador de heces", ur: "پاخانہ نرم کرنے والی دوا", ar: "ملين للبراز", zh: "大便软化剂" },
  "Lowers blood sugar": { es: "Baja el azúcar en la sangre", ur: "خون کی شکر کم کرتی ہے", ar: "يخفض سكر الدم", zh: "降低血糖" },
  "Treats depression, anxiety, nerve pain": { es: "Trata depresión, ansiedad y dolor de nervios", ur: "ڈپریشن، بے چینی اور اعصابی درد کا علاج", ar: "يعالج الاكتئاب والقلق وألم الأعصاب", zh: "治疗抑郁、焦虑和神经痛" },
  "Reduces stomach acid": { es: "Reduce el ácido del estómago", ur: "معدے کی تیزابیت کم کرتی ہے", ar: "يقلل حمض المعدة", zh: "减少胃酸" },
  "Estrogen hormone": { es: "Hormona estrógeno", ur: "ایسٹروجن ہارمون", ar: "هرمون الإستروجين", zh: "雌激素" },
  "Lowers cholesterol": { es: "Baja el colesterol", ur: "کولیسٹرول کم کرتی ہے", ar: "يخفض الكوليسترول", zh: "降低胆固醇" },
  "Lowers triglycerides": { es: "Baja los triglicéridos", ur: "ٹرائی گلیسرائیڈز کم کرتی ہے", ar: "يخفض الدهون الثلاثية", zh: "降低甘油三酯" },
  "Treats yeast infections": { es: "Trata infecciones por hongos", ur: "فنگل انفیکشن کا علاج", ar: "يعالج الالتهابات الفطرية", zh: "治疗酵母菌感染" },
  "Treats depression and anxiety": { es: "Trata la depresión y la ansiedad", ur: "ڈپریشن اور بے چینی کا علاج", ar: "يعالج الاكتئاب والقلق", zh: "治疗抑郁和焦虑" },
  "Folate (vitamin B9)": { es: "Folato (vitamina B9)", ur: "فولیٹ (وٹامن B9)", ar: "الفولات (فيتامين B9)", zh: "叶酸（维生素 B9）" },
  "Eases anxiety and itching": { es: "Alivia la ansiedad y la picazón", ur: "بے چینی اور خارش میں آرام", ar: "يخفف القلق والحكة", zh: "缓解焦虑和瘙痒" },
  "Mealtime insulin": { es: "Insulina para las comidas", ur: "کھانے کے وقت کی انسولین", ar: "أنسولين وقت الوجبات", zh: "餐时胰岛素" },
  "Long-acting insulin": { es: "Insulina de acción prolongada", ur: "دیر تک اثر کرنے والی انسولین", ar: "أنسولين طويل المفعول", zh: "长效胰岛素" },
  "Dandruff shampoo": { es: "Champú para la caspa", ur: "خشکی کا شیمپو", ar: "شامبو للقشرة", zh: "去屑洗发水" },
  "Prevents seizures, steadies mood": { es: "Previene convulsiones, estabiliza el ánimo", ur: "دوروں سے بچاتی ہے، موڈ متوازن رکھتی ہے", ar: "يمنع النوبات ويثبت المزاج", zh: "预防癫痫，稳定情绪" },
  "Eye drops for glaucoma": { es: "Gotas para el glaucoma", ur: "گلوکوما کے آنکھ کے قطرے", ar: "قطرات عين للمياه الزرقاء", zh: "青光眼滴眼液" },
  "Treats ADHD": { es: "Trata el TDAH", ur: "ADHD کا علاج", ar: "يعالج اضطراب نقص الانتباه وفرط الحركة", zh: "治疗多动症" },
  "Antibiotic ointment": { es: "Pomada antibiótica", ur: "اینٹی بائیوٹک مرہم", ar: "مرهم مضاد حيوي", zh: "抗生素软膏" },
  "Relieves pain and swelling": { es: "Alivia el dolor y la hinchazón", ur: "درد اور سوجن میں آرام", ar: "يخفف الألم والتورم", zh: "缓解疼痛和肿胀" },
  "Antibiotic for bladder infections": { es: "Antibiótico para infecciones de vejiga", ur: "مثانے کے انفیکشن کی اینٹی بائیوٹک", ar: "مضاد حيوي لالتهاب المثانة", zh: "治疗膀胱感染的抗生素" },
  "Progestin-only birth control": { es: "Anticonceptivo solo de progestina", ur: "صرف پروجسٹن والی مانع حمل گولی", ar: "حبوب منع حمل بالبروجستين فقط", zh: "单纯孕激素避孕药" },
  "Birth control pill": { es: "Pastilla anticonceptiva", ur: "مانع حمل گولی", ar: "حبوب منع الحمل", zh: "避孕药" },
  "Stops nausea and vomiting": { es: "Detiene náuseas y vómitos", ur: "متلی اور قے روکتی ہے", ar: "يوقف الغثيان والقيء", zh: "止恶心呕吐" },
  "Calms an overactive bladder": { es: "Calma la vejiga hiperactiva", ur: "زیادہ متحرک مثانے کو پرسکون کرتی ہے", ar: "يهدئ فرط نشاط المثانة", zh: "缓解膀胱过度活动" },
  "Treats constipation": { es: "Trata el estreñimiento", ur: "قبض کا علاج", ar: "يعالج الإمساك", zh: "治疗便秘" },
  "Potassium supplement": { es: "Suplemento de potasio", ur: "پوٹاشیم سپلیمنٹ", ar: "مكمل البوتاسيوم", zh: "钾补充剂" },
  "Helps nerve pain": { es: "Ayuda con el dolor de nervios", ur: "اعصابی درد میں مدد", ar: "يساعد في ألم الأعصاب", zh: "缓解神经痛" },
  "Progesterone hormone": { es: "Hormona progesterona", ur: "پروجیسٹرون ہارمون", ar: "هرمون البروجسترون", zh: "孕酮" },
  "Blood thinner": { es: "Anticoagulante", ur: "خون پتلا کرنے والی دوا", ar: "مميّع للدم", zh: "抗凝药" },
  "Lowers blood sugar and weight": { es: "Baja el azúcar y el peso", ur: "شکر اور وزن کم کرتی ہے", ar: "يخفض السكر والوزن", zh: "降低血糖和体重" },
  "Treats erectile dysfunction": { es: "Trata la disfunción eréctil", ur: "مردانہ کمزوری کا علاج", ar: "يعالج ضعف الانتصاب", zh: "治疗勃起功能障碍" },
  "Stops migraines": { es: "Detiene las migrañas", ur: "مائگرین روکتی ہے", ar: "يوقف الصداع النصفي", zh: "终止偏头痛" },
  "Treats erectile dysfunction and prostate": { es: "Trata la disfunción eréctil y la próstata", ur: "مردانہ کمزوری اور پروسٹیٹ کا علاج", ar: "يعالج ضعف الانتصاب والبروستاتا", zh: "治疗勃起功能障碍和前列腺问题" },
  "Vitamin B1 supplement": { es: "Suplemento de vitamina B1", ur: "وٹامن B1 سپلیمنٹ", ar: "مكمل فيتامين B1", zh: "维生素 B1 补充剂" },
  "Daily inhaler for COPD": { es: "Inhalador diario para EPOC", ur: "COPD کا روزانہ انہیلر", ar: "بخاخ يومي لمرض الانسداد الرئوي", zh: "慢阻肺的每日吸入剂" },
  "Prevents migraines and seizures": { es: "Previene migrañas y convulsiones", ur: "مائگرین اور دوروں سے بچاتی ہے", ar: "يمنع الصداع النصفي والنوبات", zh: "预防偏头痛和癫痫" },
  "Helps sleep and depression": { es: "Ayuda con el sueño y la depresión", ur: "نیند اور ڈپریشن میں مدد", ar: "يساعد على النوم وفي الاكتئاب", zh: "帮助睡眠和缓解抑郁" },
  "Acne cream": { es: "Crema para el acné", ur: "مہاسوں کی کریم", ar: "كريم لحب الشباب", zh: "祛痘药膏" },
  "Steroid cream for skin": { es: "Crema de esteroide para la piel", ur: "جلد کے لیے اسٹیرائڈ کریم", ar: "كريم ستيرويد للجلد", zh: "皮肤用类固醇药膏" },
  "Treats herpes and shingles": { es: "Trata el herpes y el herpes zóster", ur: "ہرپیز اور شنگلز کا علاج", ar: "يعالج الهربس والهربس النطاقي", zh: "治疗疱疹和带状疱疹" },
  "High-dose vitamin D": { es: "Vitamina D en dosis alta", ur: "زیادہ خوراک والا وٹامن D", ar: "فيتامين D بجرعة عالية", zh: "高剂量维生素 D" },
  "Helps sleep": { es: "Ayuda a dormir", ur: "نیند میں مدد", ar: "يساعد على النوم", zh: "帮助睡眠" }
};

// True if this medicine's full information exists in the chosen language
function hasTranslation(info) {
  if (settings.language === "en") {
    return true;
  }
  const translated = medicineTranslations[info.name];
  return translated !== undefined && translated[settings.language] !== undefined;
}

// Gets one part of a medicine's information (like "how") in a language.
// Falls back to English if it isn't translated.
function medicineTextIn(languageCode, info, field) {
  if (languageCode === "en") {
    return info[field];
  }
  const translated = medicineTranslations[info.name];
  if (translated && translated[languageCode]) {
    return translated[languageCode][field];
  }
  // the short "use" line is translated for every medicine
  if (field === "use" && useTranslations[info.use]) {
    return useTranslations[info.use][languageCode];
  }
  return info[field];
}

// The same, in the language the person picked
function medicineText(info, field) {
  return medicineTextIn(settings.language, info, field);
}
