const products = [
  // Samsung
  {
    category: "Samsung",
    model: "SAMSUNG X",
    price: "1800 lei",
    name: { ru: "SAMSUNG X", ro: "SAMSUNG X" },
    description: {
      ru: `Samsung Galaxy Xcover 4 – защищенный смартфон для активного использования с прочным корпусом, съемным аккумулятором и поддержкой перчаточного режима.\n\n📷 Камеры:\nОсновная камера: 13 МП, f/1.9\nФронтальная камера: 5 МП, f/2.2\nВидео: Full HD@30fps\n\n📱 Дисплей:\n4.99" TFT LCD (1280×720, 294 PPI)\nЗащитное стекло Corning Gorilla Glass\n\n⚡ Производительность:\nПроцессор Exynos 7570 Quad (1.4 ГГц)\n4 ГБ ОЗУ\n64 ГБ ПЗУ + слот microSD (до 256 ГБ)\nAndroid 7.0 Nougat → Обновляем до Android 9.0 Pie\n\n🔋 Аккумулятор:\n2800 мАч (съемный)\nЗарядка через microUSB\n\n🔹 Защита:\nСтандарт IP68 (пыле/влагозащита)\nСоответствие MIL-STD-810G (ударопрочность)\nФизические кнопки (работа в перчатках)`,
      ro: `Samsung Galaxy Xcover 4 – smartphone rezistent pentru utilizare în condiții dificile, cu carcasă robustă și baterie detașabilă.\n\n📷 Camere:\nPrincipală: 13 MP, f/1.9\nFrontală: 5 MP, f/2.2\nVideo: Full HD@30fps\n\n📱 Display:\n4.99" TFT LCD (1280×720, 294 PPI)\nSticlă de protecție Corning Gorilla Glass\n\n⚡ Performanță:\nProcesor Exynos 7570 Quad (1.4 GHz)\n4 GB RAM\n64 GB stocare + slot microSD (până la 256 GB)\nAndroid 7.0 Nougat → Actualizabil la Android 9.0 Pie\n\n🔋 Baterie:\n2800 mAh (detasabilă)\nÎncărcare prin microUSB\n\n🔹 Protecție:\nIP68 (rezistență la praf și apă)\nMIL-STD-810G (rezistență la șocuri)\nButoane fizice (funcționează cu mănuși)`
    },
    images: [
      "телефоны/Samsung/SAMSUNG X/photo_5413424647745171923_y.jpg",
      "телефоны/Samsung/SAMSUNG X/photo_5413424647745171924_y.jpg"
    ]
  },
  {
    category: "Samsung",
    model: "SAMSUNG A12",
    price: "1800 lei",
    name: { ru: "SAMSUNG A12", ro: "SAMSUNG A12" },
    description: {
      ru: `Samsung Galaxy A12 – надёжный бюджетный смартфон с мощной батареей, четырьмя камерами и большим экраном. Идеален для повседневных задач.\n\n📷 Четыре камеры:\nОсновная камера: 48 МП, f/2.0\nУльтраширокая: 5 МП, f/2.2, 123°\nМакро: 2 МП, f/2.4\nДатчик глубины: 2 МП\nФронтальная камера: 8 МП, f/2.2\nВидео: Full HD@30fps\n\n📱 Дисплей:\n6.5" PLS LCD (1600×720, 264 PPI)\nБез защиты от царапин\n\n⚡ Производительность:\nПроцессор MediaTek Helio P35 (12 нм)\n4 ГБ ОЗУ\n64 ГБ ПЗУ + слот microSD (до 1 ТБ)\nAndroid 10 → Обновляем до Android 12 + One UI Core 4.1\n\n🔋 Аккумулятор:\n5000 мАч – до 2 дней работы\nЗарядка 15W (адаптер в комплекте)\n\n🔹 Другие особенности:\nСканер отпечатков пальцев (боковой)\nРазъём 3.5 мм для наушников\nПоддержка 4G LTE`,
      ro: `Samsung Galaxy A12 – un smartphone accesibil cu baterie puternică, patru camere și ecran mare. Perfect pentru utilizare zilnică.\n\n📷 Patru camere:\nPrincipală: 48 MP, f/2.0\nUltra-wide: 5 MP, f/2.2, 123°\nMacro: 2 MP, f/2.4\nSenzor de adâncime: 2 MP\nFrontală: 8 MP, f/2.2\nVideo: Full HD@30fps\n\n📱 Display:\n6.5" PLS LCD (1600×720, 264 PPI)\nFără sticlă de protecție\n\n⚡ Performanță:\nProcesor MediaTek Helio P35 (12 nm)\n4 GB RAM\n64 GB stocare + slot microSD (până la 1 TB)\nAndroid 10 → Actualizabil la Android 12 + One UI Core 4.1\n\n🔋 Baterie:\n5000 mAh – până la 2 zile de utilizare\nÎncărcare 15W (încărcător inclus)\n\n🔹 Alte funcții:\nSenzor de amprentă (lateral)\nPort 3.5 mm pentru căști\nSuport 4G LTE`
    },
    images: [
      "телефоны/Samsung/SAMSUNG A12/photo_5413424647745171991_y.jpg",
      "телефоны/Samsung/SAMSUNG A12/photo_5413881215653639328_y.jpg"
    ]
  },
  {
    category: "Redmi",
    model: "REDMI NOTE 10S",
    price: "2200 lei",
    name: { ru: "REDMI NOTE 10S", ro: "REDMI NOTE 10S" },
    description: {
      ru: `Redmi Note 10S – стильный смартфон с AMOLED-экраном, мощной камерой и отличной автономностью. Идеальный выбор для любителей качественного дисплея и съёмки.\n\n📷 Четыре камеры для любых сценариев:\nОсновная камера: 64 МП, f/1.8 (улучшенный ночной режим)\nУльтраширокая: 8 МП, f/2.2, 118°\nМакро: 2 МП, f/2.4\nДатчик глубины: 2 МП\nФронтальная камера: 13 МП, f/2.5\nВидео: 4K@30fps, slow-motion 1080p@120fps\n\n📱 AMOLED-экран премиум-класса:\n6.43" FHD+ (2400×1080, 409 PPI)\nЧастота обновления 60 Гц\nЯркость до 1100 нит (пиковая)\nЗащитное стекло Gorilla Glass 3\n\n⚡ Мощная платформа:\nПроцессор MediaTek Helio G95 (12 нм)\n6 ГБ ОЗУ + расширение виртуальной памяти\n64 ГБ ПЗУ + слот microSD (до 512 ГБ)\nAndroid 11 + MIUI 12.5 (обновляем до MIUI 14)\n\n🔋 Аккумулятор и зарядка:\n5000 мАч – до 2 дней работы\nБыстрая зарядка 33W (адаптер в комплекте)\n\n🔹 Другие особенности:\nСканер отпечатков в экране\nСтереодинамики с поддержкой Hi-Res Audio\nИК-порт (пульт в телефоне)\nРазъём 3.5 мм\nNFC (в зависимости от региона)`,
      ro: `Redmi Note 10S – un smartphone elegant cu ecran AMOLED, cameră performantă și autonomie excelentă. Alegerea perfectă pentru iubitorii de displayuri de calitate.\n\n📷 Sistem cu patru camere:\nPrincipală: 64 MP, f/1.8 (mod îmbunătățit noaptea)\nUltra-wide: 8 MP, f/2.2, 118°\nMacro: 2 MP, f/2.4\nSenzor de adâncime: 2 MP\nFrontală: 13 MP, f/2.5\nVideo: 4K@30fps, slow-motion 1080p@120fps\n\n📱 Ecran AMOLED premium:\n6.43" FHD+ (2400×1080, 409 PPI)\nRata de reîmprospătare 60 Hz\nLuminozitate până la 1100 niti\nSticlă Gorilla Glass 3\n\n⚡ Performanță ridicată:\nProcesor MediaTek Helio G95 (12 nm)\n6 GB RAM + memorie virtuală\n64 GB stocare + slot microSD (până la 512 GB)\nAndroid 11 + MIUI 12.5 (actualizabil la MIUI 14)\n\n🔋 Baterie și încărcare:\n5000 mAh – până la 2 zile de utilizare\nÎncărcare rapidă 33W (încărcător inclus)\n\n🔹 Alte funcții:\nSenzor de amprentă în ecran\nDifuzoare stereo cu Hi-Res Audio\nPort IR (telecomandă)\nJack 3.5 mm\nNFC (în funcție de model)`
    },
    images: [
      "телефоны/Redmi/REDMI NOTE 10s/photo_5413424647745171958_y.jpg",
      "телефоны/Redmi/REDMI NOTE 10s/photo_5413424647745171959_y.jpg"
    ]
  },
  {
    category: "Redmi",
    model: "REDMI NOTE 9s",
    price: "1800 lei",
    name: { ru: "REDMI NOTE 9s", ro: "REDMI NOTE 9s" },
    description: {
      ru: `Redmi Note 9S – это надёжный смартфон среднего класса с большим экраном, мощным аккумулятором и квадрокамерой. Отличный выбор для тех, кто ценит баланс цены и производительности.\n\n📷 Квадрокамера:\nОсновная камера: 48 МП, f/1.8 (Sony IMX582)\nУльтраширокая: 8 МП, f/2.2, 118°\nМакро: 5 МП, f/2.4 (фокус 2-10 см)\nДатчик глубины: 2 МП\nФронтальная камера: 16 МП, f/2.5\nВидео: 4K@30fps, 1080p@30/60/120fps\n\n📱 Дисплей:\n6.67" IPS LCD (2400×1080, 395 PPI)\nЧастота обновления: 60 Гц\nЗащитное стекло Gorilla Glass 5\n\n⚡ Производительность:\nПроцессор Qualcomm Snapdragon 720G (8 нм)\n4/6 ГБ оперативной памяти\n64 ГБ встроенной памяти + слот microSD (до 512 ГБ)\nAndroid 10 + MIUI 11 (обновляем до MIUI 14)\n\n🔋 Аккумулятор:\n5020 мАч\nБыстрая зарядка 18W (адаптер в комплекте)\nДо 2 дней работы в обычном режиме\n\n🔹 Другие особенности:\nСканер отпечатков пальцев (боковой)\nИК-порт (пульт в телефоне)\nРазъём 3.5 мм для наушников\nПоддержка NFC (в зависимости от региона)`,
      ro: `Redmi Note 9S este un smartphone de clasă medie cu ecran mare, baterie puternică și sistem cu patru camere. O alegere excelentă pentru raportul calitate-preț.\n\n📷 Sistem cu patru camere:\nCamera principală: 48 MP, f/1.8 (Sony IMX582)\nUltra-wide: 8 MP, f/2.2, 118°\nMacro: 5 MP, f/2.4 (distanță 2-10 cm)\nSenzor de adâncime: 2 MP\nCamera frontală: 16 MP, f/2.5\nVideo: 4K@30fps, 1080p@30/60/120fps\n\n📱 Display:\n6.67" IPS LCD (2400×1080, 395 PPI)\nRata de reîmprospătare: 60 Hz\nSticlă de protecție Gorilla Glass 5\n\n⚡ Performanță:\nProcesor Qualcomm Snapdragon 720G (8 nm)\n4/6 GB RAM\n64 GB stocare + slot microSD (până la 512 GB)\nAndroid 10 + MIUI 11 (actualizabil la MIUI 14)\n\n🔋 Baterie:\n5020 mAh\nÎncărcare rapidă 18W (incărcător inclus)\nPână la 2 zile de utilizare normală\n\n🔹 Alte caracteristici:\nSenzor de amprentă (lateral)\nPort IR (telecomandă în telefon)\nPort 3.5 mm pentru căști\nSuport NFC (în funcție de regiune)`
    },
    images: [
      "телефоны/Redmi/REDMI NOTE 9s/photo_5413424647745171915_y.jpg",
      "телефоны/Redmi/REDMI NOTE 9s/photo_5413424647745171916_y.jpg"
    ]
  },
  {
    category: "Huawei",
    model: "HUAWEI P30 Lite",
    price: "1700 lei",
    name: { ru: "HUAWEI P30 Lite", ro: "HUAWEI P30 Lite" },
    description: {
      ru: `HUAWEI P30 Lite – это стильный и производительный смартфон с тройной камерой, который предлагает отличное качество съёмки и современный дизайн.\n\n📷 Камера:\n\nТройная основная камера: 48 МП (основная) + 8 МП (ультраширокая) + 2 МП (датчик глубины)\n\nФронтальная камера: 24 МП для ярких и детализированных селфи\n\nРежимы съёмки: Ночной режим, портретный режим с эффектом боке, AI-сценарии\n\n📱 Дисплей:\n\n6,15" IPS LCD с разрешением 2312 × 1080 (Full HD+)\n\nУльтратонкие рамки и каплевидный вырез под фронтальную камеру\n\n⚡ Производительность:\n\nПроцессор Huawei Kirin 710\n\nОперационная система EMUI 9.1 (на базе Android 9)\n\nОпции памяти: 4/6 ГБ ОЗУ + 128 ГБ ПЗУ (поддержка карты microSD до 512 ГБ)\n\n🔋 Аккумулятор:\n\n3340 мАч с поддержкой быстрой зарядки 18 Вт\n\n🔹 Другие особенности:\n\nСканер отпечатков пальцев (на задней панели)\n\nПоддержка NFC (в зависимости от региона)\n\nРазъём 3.5 мм для наушников\n\nГрадиентные цвета корпуса`,
      ro: `HUAWEI P30 Lite este un smartphone elegant și performant, cu un sistem triplu de camere care oferă o calitate excelentă a fotografiilor și un design modern.\n\n📷 Cameră:\n\nSistem triplu de camere: 48 MP (principală) + 8 MP (ultra-wide) + 2 MP (senzor de adâncime)\n\nCameră frontală: 24 MP pentru selfie-uri clare și detaliate\n\nModuri de fotografiere: Nocturn, portret cu efect bokeh, scenarii AI\n\n📱 Display:\n\n6,15" IPS LCD, rezoluție 2312 × 1080 (Full HD+)\n\nRame ultra-subțiri și decupaj în formă de picătură pentru camera frontală\n\n⚡ Performanță:\n\nProcesor Huawei Kirin 710\n\nSistem de operare EMUI 9.1 (bazat pe Android 9)\n\nOpțiuni de memorie: 4/6 GB RAM + 128 GB stocare (suport pentru card microSD până la 512 GB)\n\n🔋 Baterie:\n\n3340 mAh cu suport pentru încărcare rapidă de 18 W\n\n🔹 Alte caracteristici:\n\nSenzor de amprentă (pe panoul din spate)\n\nSuport NFC (în funcție de regiune)\n\nPort 3.5 mm pentru căști\n\nCulori gradient pentru carcasă`
    },
    images: [
      "телефоны/Huawei/HUAWEI P30 lite/задняя часть.jpg",
      "телефоны/Huawei/HUAWEI P30 lite/лицевая часть.jpg"
    ]
  },
  {
    category: "iPhone",
    model: "IPHONE 7",
    price: "1400 lei",
    name: { ru: "IPHONE 7", ro: "IPHONE 7" },
    description: {
      ru: `iPhone 7 – это классический смартфон от Apple с компактным дизайном, мощным процессором и отличной камерой. Данная модель имеет 32 ГБ памяти и состояние батареи 89%.\n\n📷 Камера:\nОсновная камера: 12 МП, диафрагма f/1.8, оптическая стабилизация (OIS)\nФронтальная камера: 7 МП, диафрагма f/2.2\nФункции: 4K-видео, замедленная съёмка 1080p (120 fps), портретный режим (на iOS 10+)\n\n📱 Дисплей:\n4,7" Retina HD (1334 × 750 пикселей) с технологией 3D Touch\nШирокий цветовой охват (P3) и защитное стекло\n\n⚡ Производительность:\nПроцессор Apple A10 Fusion (4 ядра)\nОперационная система iOS (поддерживает последние обновления)\n32 ГБ встроенной памяти (без слота для карт microSD)\n\n🔋 Аккумулятор:\n1960 мАч (до 10 часов работы в интернете)\nСостояние батареи: 89% (можно заменить при необходимости)\n\n🔹 Другие особенности:\nВлагозащита и пылезащита IP67\nКнопка Home с тактильной отдачей (Taptic Engine)\nСтереодинамики\nБез разъёма 3.5 мм`,
      ro: `iPhone 7 este un smartphone clasic de la Apple, cu un design compact, procesor puternic și cameră de calitate. Acest model are 32 GB de stocare și starea bateriei 89%.\n\n📷 Cameră:\nCameră principală: 12 MP, diafragmă f/1.8, stabilizare optică (OIS)\nCameră frontală: 7 MP, diafragmă f/2.2\nFuncții: Video 4K, slow-motion 1080p (120 fps), mod portret (pe iOS 10+)\n\n📱 Display:\n4,7" Retina HD (1334 × 750 pixeli) cu tehnologia 3D Touch\nGamă largă de culori (P3) și stică protectoare\n\n⚡ Performanță:\nProcesor Apple A10 Fusion (4 nuclee)\nSistem de operare iOS (suportă actualizări recente)\n32 GB stocare internă (fără slot pentru card microSD)\n\n🔋 Baterie:\n1960 mAh (până la 10 ore de navigare pe internet)\nStarea bateriei: 89% (poate fi înlocuită dacă este necesar)\n\n🔹 Alte caracteristici:\nRezistență la apă și praf IP67\nButon Home cu feedback tactil (Taptic Engine)\nDifuzoare stereo\nFără port 3.5 mm`
    },
    images: [
      "телефоны/Iphone/IPHONE  7/photo_5413424647745171997_y.jpg",
      "телефоны/Iphone/IPHONE  7/photo_5413424647745171998_y.jpg"
    ]
  },
  {
    category: "iPhone",
    model: "IPHONE 11 Pro Max",
    price: "5000 lei",
    name: { ru: "IPHONE 11 Pro Max", ro: "IPHONE 11 Pro Max" },
    description: {
      ru: `iPhone 11 Pro Max – это премиальный смартфон Apple с потрясающей OLED-матрицей, тройной камерой и одним из лучших аккумуляторов в линейке iPhone. Данная модель имеет идеальное состояние батареи – 100% и доступна в вариантах 64/256/512 ГБ.
\n📷 Профессиональная система камер:\nТройная камера 12 МП:\nШирокоугольная: ƒ/1.8, Night Mode\nТелеобъектив: ƒ/2.0, 2x оптический зум\nУльтраширокоугольная: ƒ/2.4, 120° поле зрения\nФронтальная камера: 12 МП, ƒ/2.2, запись 4K@60fps\nРежимы съёмки: Ночной режим (Night Mode), Глубина резкости (Portrait Mode), Smart HDR, Видео 4K@60fps с расширенным динамическим диапазоном\n\n📱 Дисплей Super Retina XDR:\n6.5" OLED (2688 × 1242 пикселей)\nТехнология True Tone и HDR10\nВысокая яркость – до 1200 нит (в HDR)\n\n⚡ Мощность и производительность:\nПроцессор Apple A13 Bionic (7 нм, 6 ядер)\n4 ГБ оперативной памяти\niOS 17 (поддержка последних обновлений)`,
      ro: `iPhone 11 Pro Max este un smartphone premium de la Apple, cu un ecran OLED uimitor, sistem triplu de camere și cea mai bună autonomie din gama iPhone. Acest model are baterie în stare perfectă – 100% și este disponibil în versiunile 64/256/512 GB.
\n📷 Sistem profesionist de camere:\nTriplu camera 12 MP:\nWide: ƒ/1.8, Night Mode\nTelefoto: ƒ/2.0, zoom optic 2x\nUltra-wide: ƒ/2.4, 120° unghi\nCamera frontală: 12 MP, ƒ/2.2, video 4K@60fps\nModuri foto: Night Mode (foto în condiții de lumină slabă), Portrait Mode (efect de profunzime), Smart HDR, Video 4K@60fps cu gamă dinamică extinsă\n\n📱 Super Retina XDR Display:\n6.5" OLED (2688 × 1242 pixeli)\nTehnologii True Tone și HDR10\nLuminozitate ridicată – până la 1200 niti (în HDR)\n\n⚡ Putere și performanță:\nProcesor Apple A13 Bionic (7 nm, 6 nuclee)\n4 GB RAM\niOS 17 (suportă cele mai recente actualizări)`
    },
    images: [
      "телефоны/Iphone/IPHONE 11 Pro Max/photo_5413424647745171966_y.jpg",
      "телефоны/Iphone/IPHONE 11 Pro Max/photo_5413424647745171967_y.jpg"
    ]
  },
  {
    category: "iPhone",
    model: "IPHONE 13",
    price: "6400 lei",
    name: { ru: "IPHONE 13", ro: "IPHONE 13" },
    description: {
      ru: `iPhone 13 – современный и мощный смартфон от Apple с улучшенной камерой, ярким OLED-экраном и отличной производительностью. Данная модель имеет состояние батареи 84% и доступна в вариантах 128/256/512 ГБ.\n\n📷 Улучшенная система камер:\nДвойная камера 12 МП:\nШирокоугольная: ƒ/1.6, Night Mode\nУльтраширокоугольная: ƒ/2.4, 120° поле зрения\nФронтальная камера: 12 МП, ƒ/2.2, запись 4K@60fps\nРежимы съёмки: Ночной режим (Night Mode), Глубина резкости (Portrait Mode), Smart HDR 4, Видео 4K@60fps с кинематографическим режимом\n\n📱 Дисплей Super Retina XDR:\n6.1" OLED (2532 × 1170 пикселей)\nТехнология True Tone и HDR10\nВысокая яркость – до 800 нит (в HDR)\n\n⚡ Мощность и производительность:\nПроцессор Apple A15 Bionic (5 нм, 6 ядер)\n4 ГБ оперативной памяти\niOS 17 (поддержка последних обновлений)\nВарианты памяти: 128 ГБ / 256 ГБ / 512 ГБ`,
      ro: `iPhone 13 este un smartphone modern și puternic de la Apple, cu camere îmbunătățite, ecran OLED luminos și performanță excelentă. Acest model are starea bateriei 84% și este disponibil în versiunile 128/256/512 GB.\n\n📷 Sistem de camere îmbunătățit:\nDublă cameră 12 MP:\nWide: ƒ/1.6, Night Mode\nUltra-wide: ƒ/2.4, 120° unghi\nCamera frontală: 12 MP, ƒ/2.2, video 4K@60fps\nModuri foto: Night Mode (foto în condiții de lumină slabă), Portrait Mode (efect de profunzime), Smart HDR 4, Video 4K@60fps cu mod cinematografic\n\n📱 Super Retina XDR Display:\n6.1" OLED (2532 × 1170 pixeli)\nTehnologii True Tone și HDR10\nLuminozitate ridicată – până la 800 niti (în HDR)\n\n⚡ Putere și performanță:\nProcesor Apple A15 Bionic (5 nm, 6 nuclee)\n4 GB RAM\niOS 17 (suportă cele mai recente actualizări)\nOpțiuni de stocare: 128 GB / 256 GB / 512 GB`
    },
    images: [
      "телефоны/Iphone/IPHONE 13/photo_5413424647745171969_y.jpg",
      "телефоны/Iphone/IPHONE 13/photo_5413424647745171970_y.jpg"
    ]
  },
  {
    category: "iPhone",
    model: "IPHONE 6s",
    price: "1300 lei",
    name: { ru: "IPHONE 6s", ro: "IPHONE 6s" },
    description: {
      ru: `iPhone 6s – проверенный временем смартфон от Apple с мощным процессором, отличной камерой и культовым дизайном. Данная модель имеет 32 ГБ памяти и идеальное состояние батареи – 100%.\n\n📷 Камера:\nОсновная камера: 12 МП, диафрагма f/2.2, запись видео 4K\nФронтальная камера: 5 МП, диафрагма f/2.2 (селфи с подсветкой Retina Flash)\nФункции: Live Photos, замедленная съёмка 1080p (120 fps), серийная съёмка\n\n📱 Дисплей:\n4,7" Retina HD (1334 × 750 пикселей) с технологией 3D Touch\nУстойчивое к царапинам стекло Ion-X\n\n⚡ Производительность:\nПроцессор Apple A9 (64-битный, 2 ядра) + сопроцессор M9\nОперационная система iOS (поддерживает обновления)\n32 ГБ встроенной памяти (без слота для карт microSD)\n\n🔋 Аккумулятор:\n1715 мАч (до 10-12 часов работы в режиме разговора)\nСостояние батареи: 100% (новая или недавно заменённая)\n\n🔹 Другие особенности:\nСканер отпечатков Touch ID 2-го поколения (быстрый и точный)\nПрочный алюминиевый корпус\nЕсть разъём 3.5 мм для наушников\nПоддержка Apple Pay (NFC)`,
      ro: `iPhone 6s este un smartphone clasic de la Apple, cu un procesor rapid, cameră bună și design iconic. Acest model are 32 GB de stocare și o baterie în stare perfectă – 100%.\n\n📷 Cameră:\nCameră principală: 12 MP, diafragmă f/2.2, înregistrare video 4K\nCameră frontală: 5 MP, diafragmă f/2.2 (selfie-uri cu Retina Flash)\nFuncții: Live Photos, slow-motion 1080p (120 fps), fotografii în rafală\n\n📱 Display:\n4,7" Retina HD (1334 × 750 pixeli) cu tehnologia 3D Touch\nSticlă rezistentă la zgârieturi Ion-X\n\n⚡ Performanță:\nProcesor Apple A9 (64-bit, 2 nuclee) + coprocesor M9\nSistem de operare iOS (suportă actualizări)\n32 GB stocare internă (fără slot pentru card microSD)\n\n🔋 Baterie:\n1715 mAh (până la 10-12 ore de convorbiri)\nStarea bateriei: 100% (nouă sau înlocuită recent)\n\n🔹 Alte caracteristici:\nSenzor de amprentă Touch ID (a 2-a generație) – rapid și precis\nCorp rezistent din aluminiu\nPort 3.5 mm pentru căști\nSuport pentru Apple Pay (NFC)`
    },
    images: [
      "телефоны/Iphone/IPHONE 6s/photo_5413424647745171995_y.jpg",
      "телефоны/Iphone/IPHONE 6s/photo_5413424647745171996_y.jpg"
    ]
  },
  {
    category: "Samsung",
    model: "SAMSUNG A05s",
    price: "1900 lei",
    name: { ru: "SAMSUNG A05s", ro: "SAMSUNG A05s" },
    description: {
      ru: `Samsung Galaxy A05s – доступный смартфон с большим экраном, тройной камерой и мощной батареей. Отличный выбор для повседневного использования.\n\n📷 Тройная камера:\nОсновная камера: 50 МП, f/1.8\nМакро: 2 МП, f/2.4\nДатчик глубины: 2 МП\nФронтальная камера: 13 МП, f/2.0\nВидео: Full HD@30fps\n\n📱 Дисплей:\n6.7" PLS LCD (1600×720, 264 PPI)\nЧастота обновления: 90 Гц\nБез защитного стекла\n\n⚡ Производительность:\nПроцессор Qualcomm Snapdragon 680 (6 нм)\n4 ГБ ОЗУ + виртуальное расширение RAM\n128 ГБ ПЗУ + слот microSD (до 1 ТБ)\nAndroid 13 + One UI Core\n\n🔋 Аккумулятор:\n5000 мАч\nСтандартная зарядка 25W (адаптер продаётся отдельно)\n\n🔹 Другие особенности:`,
      ro: `Samsung Galaxy A05s – un smartphone accesibil cu ecran mare, sistem triplu de camere și baterie puternică. Ideal pentru utilizare zilnică.\n\n📷 Cameră triplă:\nPrincipală: 50 MP, f/1.8\nMacro: 2 MP, f/2.4\nSenzor de adâncime: 2 MP\nFrontală: 13 MP, f/2.0\nVideo: Full HD@30fps\n\n📱 Display:\n6.7" PLS LCD (1600×720, 264 PPI)\nRata de reîmprospătare: 90 Hz\nFără sticlă de protecție\n\n⚡ Performanță:\nProcesor Qualcomm Snapdragon 680 (6 nm)\n4 GB RAM + extensie virtuală\n128 GB stocare + slot microSD (până la 1 TB)\nAndroid 13 + One UI Core\n\n🔋 Baterie:\n5000 mAh\nÎncărcare standard 25W (încărcător vândut separat)\n\n🔹 Alte funcții:`
    },
    images: [
      "телефоны/Samsung/SAMSUNG A05s/photo_5413424647745171986_y.jpg",
      "телефоны/Samsung/SAMSUNG A05s/photo_5413424647745171987_y.jpg"
    ]
  },
  {
    category: "iPhone",
    model: "IPHONE 7",
    price: "1400 lei",
    name: { ru: "IPHONE 7", ro: "IPHONE 7" },
    description: {
      ru: `iPhone 7 – это классический смартфон от Apple с компактным дизайном, мощным процессором и отличной камерой. Данная модель имеет 32 ГБ памяти и состояние батареи 89%.\n\n📷 Камера:\nОсновная камера: 12 МП, диафрагма f/1.8, оптическая стабилизация (OIS)\nФронтальная камера: 7 МП, диафрагма f/2.2\nФункции: 4K-видео, замедленная съёмка 1080p (120 fps), портретный режим (на iOS 10+)\n\n📱 Дисплей:\n4,7" Retina HD (1334 × 750 пикселей) с технологией 3D Touch\nШирокий цветовой охват (P3) и защитное стекло\n\n⚡ Производительность:\nПроцессор Apple A10 Fusion (4 ядра)\nОперационная система iOS (поддерживает последние обновления)\n32 ГБ встроенной памяти (без слота для карт microSD)\n\n🔋 Аккумулятор:\n1960 мАч (до 10 часов работы в интернете)\nСостояние батареи: 89% (можно заменить при необходимости)\n\n🔹 Другие особенности:\nВлагозащита и пылезащита IP67\nКнопка Home с тактильной отдачей (Taptic Engine)\nСтереодинамики\nБез разъёма 3.5 мм`,
      ro: `iPhone 7 este un smartphone clasic de la Apple, cu un design compact, procesor puternic și cameră de calitate. Acest model are 32 GB de stocare și starea bateriei 89%.\n\n📷 Cameră:\nCameră principală: 12 MP, diafragmă f/1.8, stabilizare optică (OIS)\nCameră frontală: 7 MP, diafragmă f/2.2\nFuncții: Video 4K, slow-motion 1080p (120 fps), mod portret (pe iOS 10+)\n\n📱 Display:\n4,7" Retina HD (1334 × 750 pixeli) cu tehnologia 3D Touch\nGamă largă de culori (P3) și stică protectoare\n\n⚡ Performanță:\nProcesor Apple A10 Fusion (4 nuclee)\nSistem de operare iOS (suportă actualizări recente)\n32 GB stocare internă (fără slot pentru card microSD)\n\n🔋 Baterie:\n1960 mAh (până la 10 ore de navigare pe internet)\nStarea bateriei: 89% (poate fi înlocuită dacă este necesar)\n\n🔹 Alte caracteristici:\nRezistență la apă și praf IP67\nButon Home cu feedback tactil (Taptic Engine)\nDifuzoare stereo\nFără port 3.5 mm`
    },
    images: [
      "телефоны/Iphone/IPHONE 7/photo_5413424647745172002_y.jpg",
      "телефоны/Iphone/IPHONE 7/photo_5413424647745172003_y.jpg"
    ]
  }
];