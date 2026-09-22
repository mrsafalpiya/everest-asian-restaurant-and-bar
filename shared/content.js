/* Everest Asian Restaurant & Bar. Bilingual content dictionary, Japanese default and English. Source: resources/website-content.md */
window.EVEREST_T = {
  ja: {
    code: "ja", other: "EN", otherLabel: "English", self: "日本語",
    nav: { home: "ホーム", concept: "コンセプト", menu: "メニュー", access: "アクセス", reserve: "予約する", call: "電話する" },
    brand: { name: "エベレスト アジアンレストラン＆バー", nameAlt: "EVEREST ASIAN RESTAURANT & BAR", short: "エベレスト", shortAlt: "EVEREST", reading: "えべれすと", tagline: "Good food brings people together", taglineJa: "美味しい料理は、人をつなぐ。" },
    hero: { kicker: "栃木市樋ノ口町のインドカレー", line1: "インド・ドバイで腕を磨いたシェフの", line2: "本格カレーを、日本人の舌に合わせて。", sub: "ランチセット 990円から。ナン・ライスおかわり無料。", cta: "ランチメニューを見る", cta2: "予約する", scroll: "スクロール", today: "本日の営業", lunch: "ランチ", dinner: "ディナー", prevStation: "思川", prevStationAlt: "Omoigawa", nextStation: "ランチ", nextStationAlt: "Lunch", drive: "JR両毛線・思川駅から車で約6分", yen: "円", from: "〜", openDaily: "毎日営業" },
    concept: { title: "コンセプト", titleAlt: "CONCEPT", body: "異国情緒漂う店内にて、インド・ドバイで腕を磨いたシェフが日本人の舌に合わせた本格的なカレーをご提供いたします。スパイスの種類や調合にこだわりぬき、カレーだけでなくサイドメニューも豊富に取り揃えております。", p1: "スパイスの種類と調合に、こだわりぬく。", p2: "カレーだけでなく、サイドメニューも豊富。", p3: "全席禁煙・駐車場あり・お子様歓迎。" },
    menu: { title: "メニュー", titleAlt: "MENU", lunchTitle: "ランチセット", lunchHours: "11:00 - 15:00 ／ L.O. 14:30", dinnerTitle: "ディナー・単品", dinnerHours: "17:00 - 22:00 ／ L.O. 21:30", courseTitle: "コース・パーティー", tax: "表示価格は税込です", refill: "ナン または ライスは、おかわり無料です。お気軽にお申し付けください。", curryTitle: "カレーの種類", spiceTitle: "カレーの辛さ", drinkTitle: "ドリンクの種類", drinkNote: "おかわり ＋200円", naanTitle: "ナンの種類変更", naanNote: "おかわりのナンは「プレーンナン」になります", takeoutTitle: "テイクアウト", takeout: "テイクアウトの場合は『20％ OFF』（ドリンク・サラダを除く）にて承っております。", takeoutBig: "20% OFF", choose: "お選びください", seeDinner: "ディナーメニューを見る", seeCourse: "コース・パーティー", alaCarte: "単品カレー", pieces: "ピース", forTwo: "2名様分" },
    lunchSets: [
      { name: "ランチＡセット", nameAlt: "Lunch Set A", price: "990", items: ["お好きなカレー 1種類", "ドリンク", "ナン または ライス", "ミニサラダ"], note: "" },
      { name: "ランチＢセット", nameAlt: "Lunch Set B", price: "1,210", items: ["お好きなカレー 2種類", "ドリンク", "ナン または ライス", "ミニサラダ"], note: "" },
      { name: "ランチＣセット", nameAlt: "Lunch Set C", price: "1,430", items: ["お好きなカレー 1種類", "ドリンク", "ナン または ライス", "ミニサラダ", "タンドリーチキン"], note: "" },
      { name: "お子様セット", nameAlt: "Kids Set", price: "748", items: ["甘口チキンカレー", "ミニナン または ミニライス", "ミニサラダ", "ミニアイス"], note: "10歳未満のお子様に限ります" },
      { name: "日替わりセット", nameAlt: "Daily Special", price: "935", items: ["本日のオススメカレー", "ドリンク", "ナン または ライス", "ミニサラダ"], note: "" }
    ],
    curries: ["チキンカレー", "キーマカレー", "マトンカレー", "バターチキンカレー", "サグチキンカレー", "野菜カレー", "豆カレー", "シーフードカレー"],
    spice: [ { n: "1", label: "普通" }, { n: "2", label: "中辛" }, { n: "3", label: "辛口" }, { n: "4", label: "激辛" }, { n: "5", label: "無限" } ],
    drinks: ["ラッシー", "マンゴーラッシー", "ウーロン茶", "コーヒー（Ice or Hot）", "チャイ（Ice or Hot）", "オレンジジュース", "コーラ"],
    naan: [ { name: "ガーリックチーズナン", price: "+495" }, { name: "チーズナン", price: "+385" }, { name: "ガーリックナン", price: "+165" } ],
    dinnerSets: [
      { name: "エベレストセット", price: "1,485", items: ["お好きなカレー 1種類", "ソフトドリンク", "ナン または ライス", "ミニサラダ"] },
      { name: "レディースセット", price: "1,650", items: ["ミニカレー 2種類", "ソフトドリンク", "ナン または ライス", "ミニサラダ", "デザート"] },
      { name: "瓶ビールセット", price: "1,705", items: ["瓶ビール 1本", "チキンティッカ 1ピース", "プレーンナン（おかわりOK）", "カレー 1種類 or ライス", "セットサラダ"] },
      { name: "スペシャルセット", price: "1,925", items: ["ミニカレー 2種類", "ナン または ライス", "ソフトドリンク", "ミニサラダ", "タンドリーチキン（ハーフ）", "シークカバブ 1ピース", "ミニデザート"] },
      { name: "エベレストペアセット", price: "4,125", items: ["【2名様分】", "お好きなカレー 2種類", "ソフトドリンク 2品", "ナン or チーズナン or ライス 2品", "タンドリーチキン 1ピース", "タンドリーシュリンプ 2ピース", "サラダ", "ミニデザート 2品"] }
    ],
    alaCarte: [
      { name: "チキンカレー", desc: "定番のカレー", price: "858" },
      { name: "バターチキンカレー", desc: "トマトソースとカシューナッツのクリーミーなカレー", price: "1,056" },
      { name: "サグチキンカレー", desc: "ほうれん草とチキン", price: "924" },
      { name: "チキントマトカレー", desc: "トマトベースのカレー", price: "968" },
      { name: "チキンマサラ", desc: "コクがあるちょっとドライなカレー", price: "924" },
      { name: "キーマエッグ", desc: "挽肉とたまごのカレー", price: "1,034" },
      { name: "チーズチキンカレー", desc: "チキンカレーにチーズをたっぷり", price: "1,034" }
    ],
    courses: [
      { name: "食べ放題", time: "120分", price: "3,740", notes: ["要予約（5名様以上）", "全メニューから選べるオーダーバイキング", "30分前ラストオーダー・店内のみ", "食べ残しは別途追加料金"] },
      { name: "食べ飲み放題", time: "150分", price: "4,950", notes: ["要予約（5名様以上）", "飲み物を含む全メニューのオーダーバイキング", "30分前ラストオーダー・店内のみ", "食べ残しは別途追加料金"] },
      { name: "ペアセット", time: "2名様", price: "4,125", notes: ["カレー2種類 ／ サラダ", "タンドリーチキン1P ／ タンドリーシュリンプ2P", "ナン or チーズナン or ライス", "ミニデザート2品 ／ ソフトドリンク2品"] }
    ],
    access: { title: "アクセス", titleAlt: "ACCESS", rows: [
      { k: "住所", v: "〒328-0024 栃木県栃木市樋ノ口町122-1" },
      { k: "アクセス", v: "JR両毛線・思川駅から車で約6分" },
      { k: "電話番号", v: "050-5590-3163（予約可）" },
      { k: "営業時間", v: "11:00 - 15:00（L.O. 14:30）／ 17:00 - 22:00（L.O. 21:30）" },
      { k: "定休日", v: "基本なし" },
      { k: "支払方法", v: "現金 または PayPay" },
      { k: "その他", v: "全面禁煙、駐車場あり、個室なし" }
    ], map: "地図を開く", mapNote: "Google マップ・食べログの地図へ", parking: "駐車場あり", nosmoke: "全面禁煙", paypay: "PayPay OK" },
    reserve: { title: "ご予約", body: "お電話または食べログからご予約いただけます。5名様以上のコースは要予約です。", phone: "050-5590-3163", tabelog: "食べログで予約", call: "電話で予約" },
    chef: { title: "シェフ", titleAlt: "THE CHEF", caption: "インド・ドバイで腕を磨いたシェフの、焼きたてナン。おかわり無料です。", illus: "イラスト：ナンを焼くシェフ（アニメ調）", illusNote: "制作予定の差し込み枠" },
    footer: { copy: "©2026 エベレスト アジアンレストラン＆バー", addr: "栃木県栃木市樋ノ口町122-1", placeholder: "仮写真・差し替え予定" }
  },
  en: {
    code: "en", other: "JA", otherLabel: "日本語", self: "English",
    nav: { home: "Home", concept: "Concept", menu: "Menu", access: "Access", reserve: "Reserve", call: "Call" },
    brand: { name: "EVEREST ASIAN RESTAURANT & BAR", nameAlt: "エベレスト アジアンレストラン＆バー", short: "EVEREST", shortAlt: "エベレスト", reading: "えべれすと", tagline: "Good food brings people together", taglineJa: "美味しい料理は、人をつなぐ。" },
    hero: { kicker: "Indian curry in Hinokuchi-cho, Tochigi", line1: "Authentic curry by a chef trained in India and Dubai,", line2: "tuned to the Japanese palate.", sub: "Lunch sets from ¥990. Free naan or rice refills.", cta: "See the lunch menu", cta2: "Reserve a table", scroll: "Scroll", today: "Open today", lunch: "Lunch", dinner: "Dinner", prevStation: "Omoigawa", prevStationAlt: "思川", nextStation: "Lunch", nextStationAlt: "ランチ", drive: "About 6 min by car from Omoigawa Station, JR Ryomo Line", yen: "yen", from: "from", openDaily: "OPEN DAILY" },
    concept: { title: "Concept", titleAlt: "コンセプト", body: "Our dining room feels like somewhere far from Tochigi. Our chef trained in India and Dubai and cooks authentic curry to suit Japanese tastes. We choose and blend our own spices, and the menu has many side dishes as well as curry.", p1: "We choose and blend our own spices.", p2: "Many side dishes as well as curry.", p3: "Non-smoking, parking available, kids welcome." },
    menu: { title: "Menu", titleAlt: "メニュー", lunchTitle: "Lunch sets", lunchHours: "11:00 - 15:00 / last order 14:30", dinnerTitle: "Dinner & À la carte", dinnerHours: "17:00 - 22:00 / last order 21:30", courseTitle: "Course and party", tax: "All prices include tax", refill: "Naan or rice refills are free. Just ask.", curryTitle: "Choose your curry", spiceTitle: "Spice level", drinkTitle: "Choose your drink", drinkNote: "Refill +¥200", naanTitle: "Naan upgrades", naanNote: "Refill naan is plain naan", takeoutTitle: "Takeout", takeout: "Takeout orders are 20% off (excluding drinks and salad).", takeoutBig: "20% OFF", choose: "your choice", seeDinner: "See the dinner menu", seeCourse: "Course and party", alaCarte: "À la carte curries", pieces: "pc", forTwo: "for two" },
    lunchSets: [
      { name: "Lunch Set A", nameAlt: "ランチＡセット", price: "990", items: ["1 curry of your choice", "Drink", "Naan or rice", "Mini salad"], note: "" },
      { name: "Lunch Set B", nameAlt: "ランチＢセット", price: "1,210", items: ["2 curries of your choice", "Drink", "Naan or rice", "Mini salad"], note: "" },
      { name: "Lunch Set C", nameAlt: "ランチＣセット", price: "1,430", items: ["1 curry of your choice", "Drink", "Naan or rice", "Mini salad", "Tandoori chicken"], note: "" },
      { name: "Kids Set", nameAlt: "お子様セット", price: "748", items: ["Mild chicken curry", "Mini naan or mini rice", "Mini salad", "Mini ice cream"], note: "Children under 10 only" },
      { name: "Daily Special", nameAlt: "日替わりセット", price: "935", items: ["Today's recommended curry", "Drink", "Naan or rice", "Mini salad"], note: "" }
    ],
    curries: ["Chicken curry", "Keema curry", "Mutton curry", "Butter chicken curry", "Saag chicken curry", "Vegetable curry", "Dal curry", "Seafood curry"],
    spice: [ { n: "1", label: "Regular" }, { n: "2", label: "Medium" }, { n: "3", label: "Hot" }, { n: "4", label: "Extra hot" }, { n: "5", label: "Infinite" } ],
    drinks: ["Lassi", "Mango lassi", "Oolong tea", "Coffee (iced or hot)", "Chai (iced or hot)", "Orange juice", "Cola"],
    naan: [ { name: "Garlic cheese naan", price: "+495" }, { name: "Cheese naan", price: "+385" }, { name: "Garlic naan", price: "+165" } ],
    dinnerSets: [
      { name: "Everest Set", price: "1,485", items: ["1 curry of your choice", "Soft drink", "Naan or rice", "Mini salad"] },
      { name: "Ladies' Set", price: "1,650", items: ["2 mini curries", "Soft drink", "Naan or rice", "Mini salad", "Dessert"] },
      { name: "Bottled Beer Set", price: "1,705", items: ["1 bottled beer", "Chicken tikka, 1 pc", "Plain naan (refills OK)", "1 curry or rice", "Set salad"] },
      { name: "Special Set", price: "1,925", items: ["2 mini curries", "Naan or rice", "Soft drink", "Mini salad", "Tandoori chicken (half)", "Seekh kebab, 1 pc", "Mini dessert"] },
      { name: "Everest Pair Set", price: "4,125", items: ["[For two]", "2 curries of your choice", "2 soft drinks", "Any 2 of naan / cheese naan / rice", "Tandoori chicken, 1 pc", "Tandoori shrimp, 2 pcs", "Salad", "2 mini desserts"] }
    ],
    alaCarte: [
      { name: "Chicken curry", desc: "The classic", price: "858" },
      { name: "Butter chicken curry", desc: "Creamy tomato and cashew", price: "1,056" },
      { name: "Saag chicken curry", desc: "Spinach and chicken", price: "924" },
      { name: "Chicken tomato curry", desc: "Tomato-based", price: "968" },
      { name: "Chicken masala", desc: "Rich, slightly dry", price: "924" },
      { name: "Keema egg", desc: "Minced meat and egg", price: "1,034" },
      { name: "Cheese chicken curry", desc: "Chicken curry under plenty of cheese", price: "1,034" }
    ],
    courses: [
      { name: "All-you-can-eat", time: "120 min", price: "3,740", notes: ["Reservation required, 5+ people", "Order-style buffet from the full menu", "Last order 30 min before end, dine-in only", "Extra charge for leftovers"] },
      { name: "All-you-can-eat & drink", time: "150 min", price: "4,950", notes: ["Reservation required, 5+ people", "Full menu including drinks", "Last order 30 min before end, dine-in only", "Extra charge for leftovers"] },
      { name: "Pair Set", time: "for two", price: "4,125", notes: ["2 curries / salad", "Tandoori chicken 1 pc / tandoori shrimp 2 pcs", "Naan, cheese naan or rice", "2 mini desserts / 2 soft drinks"] }
    ],
    access: { title: "Access", titleAlt: "アクセス", rows: [
      { k: "Address", v: "122-1 Hinokuchi-cho, Tochigi City, Tochigi 328-0024" },
      { k: "Access", v: "About 6 min by car from Omoigawa Station (JR Ryomo Line)" },
      { k: "Phone", v: "050-5590-3163 (reservations welcome)" },
      { k: "Hours", v: "11:00 - 15:00 (L.O. 14:30) / 17:00 - 22:00 (L.O. 21:30)" },
      { k: "Closed", v: "No regular closing day" },
      { k: "Payment", v: "Cash or PayPay" },
      { k: "Other", v: "Fully non-smoking, parking available, no private rooms" }
    ], map: "Open the map", mapNote: "Google Maps / Tabelog map", parking: "Parking", nosmoke: "Non-smoking", paypay: "PayPay OK" },
    reserve: { title: "Reservations", body: "Reserve by phone or on Tabelog. Course plans for 5 or more need a reservation.", phone: "050-5590-3163", tabelog: "Reserve on Tabelog", call: "Call to reserve" },
    chef: { title: "The chef", titleAlt: "シェフ", caption: "Fresh-baked naan from a chef trained in India and Dubai. Refills are free.", illus: "Illustration: the chef making naan (anime style)", illusNote: "Slot for the commissioned artwork, still to be supplied" },
    footer: { copy: "©2026 Everest Asian Restaurant & Bar", addr: "122-1 Hinokuchi-cho, Tochigi City, Tochigi", placeholder: "Placeholder photo, to be replaced" }
  }
};
window.EVEREST_LINKS = { tabelog: "https://tabelog.com/tochigi/A0902/A090203/9016016/", map: "https://tabelog.com/tochigi/A0902/A090203/9016016/dtlmap/", menu: "https://tabelog.com/tochigi/A0902/A090203/9016016/dtlmenu/", tel: "tel:050-5590-3163" };
