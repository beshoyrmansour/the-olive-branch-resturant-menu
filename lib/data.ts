export type Language = "en" | "cs" | "ar";

export interface MultilingualText {
  en: string;
  cs: string;
  ar: string;
}

export interface Allergy {
  id: number;
  name: MultilingualText;
  icon: string;
}

export interface Category {
  id: number;
  name: MultilingualText;
}

export interface WeekDay {
  id: number;
  name: MultilingualText;
  shortName: MultilingualText;
}

export interface MenuItem {
  id: number;
  number: string;
  categoryId: number;
  name: MultilingualText;
  description: MultilingualText;
  price: number;
  img: string;
  isVegan: boolean;
  isAvailable: boolean;
  allergies: number[];
  lunchMenuDayId?: number;
}

// Mock data
export const allergies: Allergy[] = [
  { id: 1, name: { en: "Gluten", cs: "Lepek", ar: "الغلوتين" }, icon: "wheat" },
  { id: 2, name: { en: "Egg", cs: "Vejce", ar: "البيض" }, icon: "egg" },
  { id: 3, name: { en: "Fish", cs: "Ryby", ar: "السمك" }, icon: "fish" },
  {
    id: 4,
    name: { en: "Lactose", cs: "Laktóza", ar: "اللاكتوز" },
    icon: "milk",
  },
  { id: 5, name: { en: "Nuts", cs: "Ořechy", ar: "المكسرات" }, icon: "nut" },
  { id: 6, name: { en: "Soy", cs: "Sója", ar: "الصويا" }, icon: "soy" },
];

export const categories: Category[] = [
  { id: 1, name: { en: "Soups", cs: "Polévky:", ar: "الشوربات" } },
  { id: 2, name: { en: "Salads", cs: "Saláty", ar: "السلطات" }},
  { id: 3, name: { en: "Cold Appetizers", cs: "Studené předkrmy", ar: "المقبلات الباردة" } },
  { id: 4, name: { en: "Hot Appetizers", cs: "Teplé předkrmy", ar: "المقبلات الساخنة" } },
  { id: 5, name: { en: "Main Course", cs: "Hlavní jídla:", ar: "الأطباق الرئيسية" } },
  { id: 6, name: { en: "Grills", cs: "Z našeho grilu", ar: "المشاوي" } },
  { id: 7, name: { en: "Seafood dishes", cs: "Ryby a mořské plody", ar: "الأسماك" } },
  { id: 8, name: { en: "Extras", cs: "Přílohy", ar: "الإضافات الجانبية" } },
  { id: 9, name: { en: "Desserts", cs:"Dezerty", ar: "الحلويات"} },
];

export const weekDays: WeekDay[] = [
  {
    id: 1,
    name: { en: "Monday", cs: "Pondělí", ar: "الإثنين" },
    shortName: { en: "Mon", cs: "Po", ar: "الإثنين" },
  },
  {
    id: 2,
    name: { en: "Tuesday", cs: "Úterý", ar: "الثلاثاء" },
    shortName: { en: "Tue", cs: "Út", ar: "الثلاثاء" },
  },
  {
    id: 3,
    name: { en: "Wednesday", cs: "Středa", ar: "الأربعاء" },
    shortName: { en: "Wed", cs: "St", ar: "الأربعاء" },
  },
  {
    id: 4,
    name: { en: "Thursday", cs: "Čtvrtek", ar: "الخميس" },
    shortName: { en: "Thu", cs: "Čt", ar: "الخميس" },
  },
  {
    id: 5,
    name: { en: "Friday", cs: "Pátek", ar: "الجمعة" },
    shortName: { en: "Fri", cs: "Pá", ar: "الجمعة" },
  },
];

export const lunchMenu: MenuItem[] = [
  // Monday - Starters
  {
    id: 101,
    number: "L1.1",
    categoryId: 1,
    name: {
      en: "Tomato Bruschetta",
      cs: "Rajčatová Bruschetta",
      ar: "بروسكيتا الطماطم",
    },
    description: {
      en: "Toasted bread topped with fresh tomatoes, basil, and olive oil",
      cs: "Opečený chléb s čerstvými rajčaty, bazalkou a olivovým olejem",
      ar: "خبز محمص مع طماطم طازجة وريحان وزيت زيتون",
    },
    price: 85,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: true,
    isAvailable: true,
    allergies: [1],
    lunchMenuDayId: 1,
  },
  // Monday - Main Course
  {
    id: 102,
    number: "L1.2",
    categoryId: 2,
    name: {
      en: "Grilled Chicken with Rice",
      cs: "Grilované Kuře s Rýží",
      ar: "دجاج مشوي مع أرز",
    },
    description: {
      en: "Tender grilled chicken breast served with steamed rice and vegetables",
      cs: "Šťavnaté grilované kuřecí prso podávané s dušenou rýží a zeleninou",
      ar: "صدر دجاج مشوي طري يقدم مع أرز مطهو على البخار وخضروات",
    },
    price: 145,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: false,
    isAvailable: true,
    allergies: [],
    lunchMenuDayId: 1,
  },
  // Monday - Dessert
  {
    id: 103,
    number: "L1.3",
    categoryId: 3,
    name: {
      en: "Apple Strudel",
      cs: "Jablečný Štrúdl",
      ar: "فطيرة التفاح",
    },
    description: {
      en: "Traditional pastry filled with apples, cinnamon, and raisins",
      cs: "Tradiční moučník plněný jablky, skořicí a rozinkami",
      ar: "معجنات تقليدية محشوة بالتفاح والقرفة والزبيب",
    },
    price: 75,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: false,
    isAvailable: true,
    allergies: [1, 2, 4],
    lunchMenuDayId: 1,
  },

  // Tuesday - Soup
  {
    id: 104,
    number: "L2.1",
    categoryId: 5,
    name: {
      en: "Mushroom Soup",
      cs: "Houbová Polévka",
      ar: "شوربة الفطر",
    },
    description: {
      en: "Creamy soup made with fresh forest mushrooms and herbs",
      cs: "Krémová polévka z čerstvých lesních hub a bylin",
      ar: "شوربة كريمية مصنوعة من فطر الغابات الطازج والأعشاب",
    },
    price: 65,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: false,
    isAvailable: true,
    allergies: [4],
    lunchMenuDayId: 2,
  },
  // Tuesday - Main Course
  {
    id: 105,
    number: "L2.2",
    categoryId: 2,
    name: {
      en: "Beef Goulash",
      cs: "Hovězí Guláš",
      ar: "جولاش لحم البقر",
    },
    description: {
      en: "Traditional beef stew with paprika, served with dumplings",
      cs: "Tradiční hovězí dušené maso s paprikou, podávané s knedlíky",
      ar: "يخنة لحم البقر التقليدية مع الفلفل الأحمر، تقدم مع زلابية",
    },
    price: 155,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: false,
    isAvailable: true,
    allergies: [1],
    lunchMenuDayId: 2,
  },

  // Wednesday - Starters
  {
    id: 106,
    number: "L3.1",
    categoryId: 1,
    name: {
      en: "Greek Salad",
      cs: "Řecký Salát",
      ar: "سلطة يونانية",
    },
    description: {
      en: "Fresh salad with tomatoes, cucumbers, olives, and feta cheese",
      cs: "Čerstvý salát s rajčaty, okurkami, olivami a sýrem feta",
      ar: "سلطة طازجة مع طماطم وخيار وزيتون وجبنة فيتا",
    },
    price: 95,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: false,
    isAvailable: true,
    allergies: [4],
    lunchMenuDayId: 3,
  },
  // Wednesday - Main Course
  {
    id: 107,
    number: "L3.2",
    categoryId: 2,
    name: {
      en: "Vegetable Risotto",
      cs: "Zeleninové Rizoto",
      ar: "ريزوتو الخضار",
    },
    description: {
      en: "Creamy Italian rice with seasonal vegetables and parmesan",
      cs: "Krémová italská rýže se sezónní zeleninou a parmezánem",
      ar: "أرز إيطالي كريمي مع خضروات موسمية وجبن بارميزان",
    },
    price: 125,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: false,
    isAvailable: true,
    allergies: [4],
    lunchMenuDayId: 3,
  },

  // Thursday - Soup
  {
    id: 108,
    number: "L4.1",
    categoryId: 5,
    name: {
      en: "Tomato Soup",
      cs: "Rajčatová Polévka",
      ar: "شوربة طماطم",
    },
    description: {
      en: "Homemade tomato soup with fresh basil and cream",
      cs: "Domácí rajčatová polévka s čerstvou bazalkou a smetanou",
      ar: "شوربة طماطم محلية الصنع مع ريحان طازج وكريمة",
    },
    price: 60,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: false,
    isAvailable: true,
    allergies: [4],
    lunchMenuDayId: 4,
  },
  // Thursday - Main Course
  {
    id: 109,
    number: "L4.2",
    categoryId: 2,
    name: {
      en: "Pork Schnitzel",
      cs: "Vepřový Řízek",
      ar: "شنيتزل لحم الخنزير",
    },
    description: {
      en: "Breaded pork cutlet served with potato salad",
      cs: "Obalovaná vepřová kotleta podávaná s bramborovým salátem",
      ar: "شريحة لحم خنزير مغطاة بالبقسماط تقدم مع سلطة بطاطس",
    },
    price: 140,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: false,
    isAvailable: true,
    allergies: [1, 2],
    lunchMenuDayId: 4,
  },

  // Friday - Starters
  {
    id: 110,
    number: "L5.1",
    categoryId: 1,
    name: {
      en: "Hummus with Pita",
      cs: "Hummus s Pitou",
      ar: "حمص مع خبز بيتا",
    },
    description: {
      en: "Chickpea spread with tahini, served with warm pita bread",
      cs: "Cizrnová pomazánka s tahini, podávaná s teplým chlebem pita",
      ar: "معجون الحمص مع الطحينة، يقدم مع خبز بيتا دافئ",
    },
    price: 85,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: true,
    isAvailable: true,
    allergies: [1],
    lunchMenuDayId: 5,
  },
  // Friday - Main Course
  {
    id: 111,
    number: "L5.2",
    categoryId: 2,
    name: {
      en: "Grilled Trout",
      cs: "Grilovaný Pstruh",
      ar: "سمك السلمون المرقط المشوي",
    },
    description: {
      en: "Whole grilled trout with herbs, served with roasted potatoes",
      cs: "Celý grilovaný pstruh s bylinkami, podávaný s pečenými bramborami",
      ar: "سمك السلمون المرقط المشوي بالكامل مع الأعشاب، يقدم مع البطاطس المحمرة",
    },
    price: 165,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: false,
    isAvailable: true,
    allergies: [3],
    lunchMenuDayId: 5,
  },
];

export const mainMenu: MenuItem[] = [
  {
    "id": 1,
    "number": "A1",
    "categoryId": 1,
    "name": {
      "en": "Ground Lentil Soup",
      "cs": "Čočková polévka",
      "ar": "شوربة العدس"
    },
    "description": {
      "en": "Lentils, Onions, Carrots",
      "cs": "čočka, cibule, mrkev",
      "ar": "عدس، بصل، جزر"
    },
    "price": 999,
    "img": "/placeholder.svg?height=150&width=150",
    "isVegan": false,
    "isAvailable": true,
    "allergies": []
  },
  {
    "id": 2,
    "number": "A2",
    "categoryId": 1,
    "name": {
      "en": "Chicken and Vegetables Soup",
      "cs": "Kuřecí vývar",
      "ar": "شوربة الخضار مع الدجاج"
    },
    "description": {
      "en": "Chicken, Carrots, Peas, Potatoes, Garlic, Onions, Coriander",
      "cs": "kuřecí maso, mrkev, hrášek, brambory, česnek, cibule, koriandr",
      "ar": "دجاج، جزر، بازيلاء، بطاطس، ثوم، بصل، كزبرة"
    },
    "price": 999,
    "img": "/placeholder.svg?height=150&width=150",
    "isVegan": false,
    "isAvailable": true,
    "allergies": []
  },
  {
    "id": 3,
    "number": "B1",
    "categoryId": 2,
    "name": {
      "en": "Tabbouleh",
      "cs": "Tabbúleh",
      "ar": "تبولة"
    },
    "description": {
      "en": "Parsley, Mint, Onions, Tomatoes, Bulgur, Olive oil, Lemon juice",
      "cs": "petržel, máta, cibule, rajčata, bulgur, olivový olej, citronová šťáva",
      "ar": "بقدونس، نعناع، بصل، بندورة، برغل، زيت زيتون، حامض"
    },
    "price": 999,
    "img": "/placeholder.svg?height=150&width=150",
    "isVegan": false,
    "isAvailable": true,
    "allergies": []
  },
  {
    "id": 4,
    "number": "B2",
    "categoryId": 2,
    "name": {
      "en": "Fattoush",
      "cs": "Fattúš",
      "ar": "فتوش"
    },
    "description": {
      "en": "Lettuce, Tomatoes, Cucumbers, Radishes, Onions, Bell peppers, Mint, Parsley, Sumac, Croutons, Olive oil, Lemon juice",
      "cs": "hlávkový salát, rajčata, okurky, ředkvičky, cibule, paprika, máta, petržel, sumak, krutony, olivový olej, citronová šťáva",
      "ar": "خس، بندورة، خيار، فجل، بصل، فلفل حلو، نعناع، بقدونس، سماق، خبز محمص، زيت زيتون، حامض"
    },
    "price": 999,
    "img": "/placeholder.svg?height=150&width=150",
    "isVegan": false,
    "isAvailable": true,
    "allergies": []
  },
  {
    "id": 5,
    "number": "B3",
    "categoryId": 2,
    "name": {
      "en": "Vegetables With Cheese",
      "cs": "Salát se sýrem",
      "ar": "خضار مع جبنة"
    },
    "description": {
      "en": "Tomatoes, Cucumbers, Bell peppers, Radishes, Onions, Olives, Cheese, Olive oil, Lemon juice",
      "cs": "rajčata, okurky, papriky, ředkvičky, cibule, olivy, sýr, olivový olej, citronová šťáva",
      "ar": "بندورة، خيار، فلفل حلو، فجل، بصل، زيتون، جبنة، زيت زيتون، حامض"
    },
    "price": 999,
    "img": "/placeholder.svg?height=150&width=150",
    "isVegan": false,
    "isAvailable": true,
    "allergies": []
  },
  {
    "id": 6,
    "number": "B4",
    "categoryId": 2,
    "name": {
      "en": "Falahia",
      "cs": "Falahija",
      "ar": "فلاحية"
    },
    "description": {
      "en": "Tomatoes, Onions, Green chillies, Olive oil, Lemon juice",
      "cs": "rajčata, cibule, zelené chilli papričky, olivový olej, citronová šťáva",
      "ar": "بندورة، بصل، شطة خضرة، زيت زيتون، حامض"
    },
    "price": 999,
    "img": "/placeholder.svg?height=150&width=150",
    "isVegan": false,
    "isAvailable": true,
    "allergies": []
  },
  {
    "id": 7,
    "number": "B5",
    "categoryId": 2,
    "name": {
      "en": "Turkish Salad",
      "cs": "Turecký salát",
      "ar": "تركية"
    },
    "description": {
      "en": "Tomatoes, Tomato paste, Onions, Parsley, Chilli, Vinegar, Cumin, Olive oil",
      "cs": "rajčata, rajčatový protlak, cibule, petržel, chilli, ocet, kmín, olivový olej",
      "ar": "بندورة، صلصة بندورة، بصل، بقدونس، شطة، خل، كمون، زيت زيتون"
    },
    "price": 999,
    "img": "/placeholder.svg?height=150&width=150",
    "isVegan": false,
    "isAvailable": true,
    "allergies": []
  },
  {
    "id": 8,
    "number": "B6",
    "categoryId": 2,
    "name": {
      "en": "Corn Salad",
      "cs": "Kukuřičný salát",
      "ar": "سلطة الذرة"
    },
    "description": {
      "en": "Corn, Bell peppers, Pickled cucumbers",
      "cs": "kukuřice, paprika, nakládané okurky",
      "ar": "ذرة، فلفل حلو، خيار مخلل"
    },
    "price": 999,
    "img": "/placeholder.svg?height=150&width=150",
    "isVegan": false,
    "isAvailable": true,
    "allergies": []
  },
  {
    "id": 9,
    "number": "B7",
    "categoryId": 2,
    "name": {
      "en": "The Olive Branch Salad",
      "cs": "The Olive Branch salát",
      "ar": "أوليڤ برانش"
    },
    "description": {
      "en": "Nuts, Parsley, Basil, Dill, Raisins, Pomegranate molasses, Olive oil, Lemon juice",
      "cs": "ořechy, petržel, bazalka, kopr, rozinky, melasa z granátových jablek, olivový olej, citronová šťáva",
      "ar": "مكسرات، بقدونس، ريحان، شبت، زبيب، دبس الرمان، زيت زيتون، حامض"
    },
    "price": 999,
    "img": "/placeholder.svg?height=150&width=150",
    "isVegan": false,
    "isAvailable": true,
    "allergies": []
  },
  {
    "id": 10,
    "number": "C1",
    "categoryId": 3,
    "name": {
      "en": "Hummus",
      "cs": "Hummus",
      "ar": "حمص"
    },
    "description": {
      "en": "Chickpeas, Tahini, Lemon juice, Olive oil",
      "cs": "cizrna, tahini, citronová šťáva, olivový olej",
      "ar": "حمص، طحينة، عصير ليمون، زيت زيتون"
    },
    "price": 999,
    "img": "/placeholder.svg?height=150&width=150",
    "isVegan": false,
    "isAvailable": true,
    "allergies": []
  },
  {
    "id": 11,
    "number": "C2",
    "categoryId": 3,
    "name": {
      "en": "Hummus With Meat",
      "cs": "Hummus s jehněčím masem",
      "ar": "حمص مع لحمة"
    },
    "description": {
      "en": "chickpeas, tahini, lemon juice, lamb meat nuts, olive oil",
      "cs": "cizrna, tahini, citronová šťáva, jehněčí maso, ořechy, olivový olej",
      "ar": "حمص، طحينة، عصير ليمون، لحمة خروف، مكسرات، زيت زيتون"
    },
    "price": 999,
    "img": "/placeholder.svg?height=150&width=150",
    "isVegan": false,
    "isAvailable": true,
    "allergies": []
  },
  {
    "id": 12,
    "number": "C3",
    "categoryId": 3,
    "name": {
      "en": "Baba Ghanoush",
      "cs": "Baba ghanúš",
      "ar": "متبل"
    },
    "description": {
      "en": "Grilled Eggplants, Garlic, Tahini, Lemon juice, Olive oil",
      "cs": "grilovaný lilek, česnek, tahini, citronová šťáva, olivový olej",
      "ar": "باذنجان مشوي، ثوم، طحينة، عصير ليمون، زيت زيتون"
    },
    "price": 999,
    "img": "/placeholder.svg?height=150&width=150",
    "isVegan": false,
    "isAvailable": true,
    "allergies": []
  },
  {
    "id": 13,
    "number": "C4",
    "categoryId": 3,
    "name": {
      "en": "Eggplants With Garlic",
      "cs": "Smažený lilenk s česnekem",
      "ar": "باذنجان بثوم"
    },
    "description": {
      "en": "Fried Eggplant, Garlic, Red chilli sauce, Parsley, Lemon juice",
      "cs": "smažený lilek, česnek, červená chilli omáčka, petržel, citronová šťáva",
      "ar": "باذنجان مقلي، ثوم ، شطة، بقدونس، عصير ليمون"
    },
    "price": 999,
    "img": "/placeholder.svg?height=150&width=150",
    "isVegan": false,
    "isAvailable": true,
    "allergies": []
  },
  {
    "id": 14,
    "number": "C5",
    "categoryId": 3,
    "name": {
      "en": "Labneh",
      "cs": "Labneh",
      "ar": "لبنة"
    },
    "description": {
      "en": "Labneh, Mint, Garlic, Olive oil",
      "cs": "labneh, máta, česnek, olivový olej",
      "ar": "لبنة، نعناع، ثوم، زيت زيتون"
    },
    "price": 999,
    "img": "/placeholder.svg?height=150&width=150",
    "isVegan": false,
    "isAvailable": true,
    "allergies": []
  },
  {
    "id": 15,
    "number": "C6",
    "categoryId": 3,
    "name": {
      "en": "Stuffed Grape Leaves",
      "cs": "Plněné vinné listy",
      "ar": "ورق عنب"
    },
    "description": {
      "en": "Vine leaves, Tomatoes, Rice, Onions, Parsley, Olive oil",
      "cs": "vinné listy, rajčata, rýže, cibule, petržel, olivový olej",
      "ar": "ورق العنب، بندورة، أرز، بصل، بقدونس، زيت زيتون"
    },
    "price": 999,
    "img": "/placeholder.svg?height=150&width=150",
    "isVegan": false,
    "isAvailable": true,
    "allergies": []
  },
  {
    "id": 16,
    "number": "C7",
    "categoryId": 3,
    "name": {
      "en": "Muhammara",
      "cs": "Muhammara",
      "ar": "محمرة"
    },
    "description": {
      "en": "Nuts, Bell peppers, Chilli, Olive oil",
      "cs": "ořechy, paprika, chilli, olivový olej",
      "ar": "مكسرات، فلفل حلوة، شطة، زيت زيتون"
    },
    "price": 999,
    "img": "/placeholder.svg?height=150&width=150",
    "isVegan": false,
    "isAvailable": true,
    "allergies": []
  },
  {
    "id": 17,
    "number": "C8",
    "categoryId": 3,
    "name": {
      "en": "Pickles and Olives",
      "cs": "Nakládaná zelenina a olivy",
      "ar": "مخلالات و زيتون"
    },
    "description": {
      "en": "",
      "cs": "",
      "ar": ""
    },
    "price": 999,
    "img": "/placeholder.svg?height=150&width=150",
    "isVegan": false,
    "isAvailable": true,
    "allergies": []
  },
  {
    "id": 18,
    "number": "D1",
    "categoryId": 4,
    "name": {
      "en": "Falafel",
      "cs": "Falafel",
      "ar": "فلافل"
    },
    "description": {
      "en": "Chickpeas, Parsley, Onions, Garlic, Green peppers, Tahini",
      "cs": "cizrna, petržel, cibule, česnek, zelená paprika, tahini",
      "ar": "حمص، بقدونس، بصل، ثوم، فلفل أخضر، طحينة"
    },
    "price": 999,
    "img": "/placeholder.svg?height=150&width=150",
    "isVegan": false,
    "isAvailable": true,
    "allergies": []
  },
  {
    "id": 19,
    "number": "D2",
    "categoryId": 4,
    "name": {
      "en": "Kibbeh",
      "cs": "Kibbeh",
      "ar": "كبة مقلية"
    },
    "description": {
      "en": "bulgur, lamb and veal meat, onions, pine",
      "cs": "bulgur, jehněčí a telecí maso, cibule, pinie",
      "ar": "برغل، لحم خروف و عجل، بصل، صنوبر"
    },
    "price": 999,
    "img": "/placeholder.svg?height=150&width=150",
    "isVegan": false,
    "isAvailable": true,
    "allergies": []
  },
  {
    "id": 20,
    "number": "D3",
    "categoryId": 4,
    "name": {
      "en": "Grilled Chicken Wings",
      "cs": "Grilovaná kuřecí křidélka",
      "ar": "جوانح الدجاج المشوية"
    },
    "description": {
      "en": "Chicken wings, Garlic, Special seasoning, Garlic sauce",
      "cs": "kuřecí křídla, česnek, speciální koření, česneková omáčka",
      "ar": "جوانح، ثوم ، توابل خاصة، ثومية"
    },
    "price": 999,
    "img": "/placeholder.svg?height=150&width=150",
    "isVegan": false,
    "isAvailable": true,
    "allergies": []
  },
  {
    "id": 21,
    "number": "D4",
    "categoryId": 4,
    "name": {
      "en": "Meat Arayes",
      "cs": "Arayes s masem",
      "ar": "عرايس لحمة"
    },
    "description": {
      "en": "Pitta bread, lamb and veal meat, onions, parsley",
      "cs": "pitta chléb, jehněčí a telecí maso, cibule, petržel",
      "ar": "خبز عربي، لحم خروف و عجل، بصل، بقدونس"
    },
    "price": 999,
    "img": "/placeholder.svg?height=150&width=150",
    "isVegan": false,
    "isAvailable": true,
    "allergies": []
  },
  {
    "id": 22,
    "number": "D5",
    "categoryId": 4,
    "name": {
      "en": "Cheese Arayes",
      "cs": "Arayes se sýrem",
      "ar": "عرايس جبنة"
    },
    "description": {
      "en": "Pitta bread, White cheese, Tomatoes, Thyme",
      "cs": "pitta chléb, bílý sýr, rajčata, tymián",
      "ar": "خبز عربي، جبنة بيضاء، بندورة، زعتر"
    },
    "price": 999,
    "img": "/placeholder.svg?height=150&width=150",
    "isVegan": false,
    "isAvailable": true,
    "allergies": []
  },
  {
    "id": 23,
    "number": "D6",
    "categoryId": 4,
    "name": {
      "en": "Meat Pie",
      "cs": "Fatajer s masem",
      "ar": "فطاير لحمة"
    },
    "description": {
      "en": "Lamb meat, Onions, Parsley, Nuts",
      "cs": "těsto plněné jehněčím masem, cibule, petržel, ořechy",
      "ar": "لحمة عجل، بصل، بقدونس، مكسرات)'"
    },
    "price": 999,
    "img": "/placeholder.svg?height=150&width=150",
    "isVegan": false,
    "isAvailable": true,
    "allergies": []
  },
  {
    "id": 24,
    "number": "D7",
    "categoryId": 4,
    "name": {
      "en": "Cheese Pie",
      "cs": "Fatajer se sýrem",
      "ar": "فطاير جبنة"
    },
    "description": {
      "en": "White cheese, Mint",
      "cs": "těsto plněné sýrem s mátou",
      "ar": "جبنة بيضاء، نعناع"
    },
    "price": 999,
    "img": "/placeholder.svg?height=150&width=150",
    "isVegan": false,
    "isAvailable": true,
    "allergies": []
  },
  {
    "id": 25,
    "number": "D8",
    "categoryId": 4,
    "name": {
      "en": "Spinach Pie",
      "cs": "Fatajer se špenátem",
      "ar": "فطاير سبانخ"
    },
    "description": {
      "en": "Spinach, Onions, Garlic, Lemon juice",
      "cs": "těsto plněné špenátem, cibule, česnek, citronová šťáva",
      "ar": "سبانخ، بصل، ثوم، عصير ليمون"
    },
    "price": 999,
    "img": "/placeholder.svg?height=150&width=150",
    "isVegan": false,
    "isAvailable": true,
    "allergies": []
  },
  {
    "id": 26,
    "number": "D9",
    "categoryId": 4,
    "name": {
      "en": "Appetisers Platter",
      "cs": "Výběr z nejlepších předkrmů",
      "ar": "صحن مقبلات مشكل"
    },
    "description": {
      "en": "Chickpeas, Baba Ghanoush, Stuffed Grape Leaves, Kibbeh, Falafel, Tabbouleh, Meat Pie, Cheese Pie, Spinach pie",
      "cs": "Cizrna, Baba ghanúš, plněné vinné listy, kibbeh, falafel, tabbouleh, fatajer s masem, sýrem a špenátem",
      "ar": "حمص، متبل، ورق عنب، كبة، فلافل، تبولة، فطاير لحمة و جبنة و سبانخ"
    },
    "price": 999,
    "img": "/placeholder.svg?height=150&width=150",
    "isVegan": false,
    "isAvailable": true,
    "allergies": []
  },
  {
    "id": 27,
    "number": "E1",
    "categoryId": 5,
    "name": {
      "en": "Mansaf",
      "cs": "Mansaf",
      "ar": "منسف"
    },
    "description": {
      "en": "Lamb and Veal meat /Chicken, Rice, Nuts, Parsley, Mansaf soup",
      "cs": "jehněčí a telecí maso / kuřecí maso, rýže, ořechy, petržel, polévka mansaf",
      "ar": "لحم خروف و عجل/ دجاج، أرز، مكسرات، بقدونس، شوربة منسف"
    },
    "price": 999,
    "img": "/placeholder.svg?height=150&width=150",
    "isVegan": false,
    "isAvailable": true,
    "allergies": []
  },
  {
    "id": 28,
    "number": "E2",
    "categoryId": 5,
    "name": {
      "en": "Qidreh",
      "cs": "Qidreh",
      "ar": "قدرة"
    },
    "description": {
      "en": "Lamb and Veal meat/ Chicken, Rice, Garlic, Chickpeas, Onions, Nuts",
      "cs": "jehněčí a telecí maso/kuřecí maso, rýže, česnek, cizrna, cibule, ořechy",
      "ar": "لحم خروف و عجل/ دجاج، أرز، ثوم، حمص، بصل، مكسرات"
    },
    "price": 999,
    "img": "/placeholder.svg?height=150&width=150",
    "isVegan": false,
    "isAvailable": true,
    "allergies": []
  },
  {
    "id": 29,
    "number": "E3",
    "categoryId": 5,
    "name": {
      "en": "Musakhan",
      "cs": "Musakhan",
      "ar": "مسخن"
    },
    "description": {
      "en": "Bread, Chicken, Onions, Sumac, Olive oil, Nuts",
      "cs": "chléb, kuřecí maso, cibule, sumak, olivový olej, ořechy",
      "ar": "خبز، دجاج، بصل، سماق، زيت زيتون، مكسرات"
    },
    "price": 999,
    "img": "/placeholder.svg?height=150&width=150",
    "isVegan": false,
    "isAvailable": true,
    "allergies": []
  },
  {
    "id": 30,
    "number": "E4",
    "categoryId": 5,
    "name": {
      "en": "kufta",
      "cs": "Kufta",
      "ar": "كفتة"
    },
    "description": {
      "en": "Lamb and Veal meat, Parsley, Onions, Tomatoes, French fries/ Rice/ Freekah",
      "cs": "jehněčí a telecí maso, petržel, cibule, rajčata, hranolky/rýže/freeka",
      "ar": "لحم خروف و عجل، بقدونس، بصل، بندورة، بطاطس مقلية/ أرز/ فريكة"
    },
    "price": 999,
    "img": "/placeholder.svg?height=150&width=150",
    "isVegan": false,
    "isAvailable": true,
    "allergies": []
  },
  {
    "id": 31,
    "number": "E5",
    "categoryId": 5,
    "name": {
      "en": "kufta With Tahini",
      "cs": "Kufta s tahini",
      "ar": "كفتة بطحينة"
    },
    "description": {
      "en": "Lamb and Veal meat, Parsley, Onions, tahini, French fries/ Rice/ Freekah",
      "cs": "jehněčí a telecí maso, petržel, cibule, tahini, hranolky/rýže/freeka",
      "ar": "لحم خروف و عجل، بقدونس ، بصل، طحينة، بطاطس مقلية/ أرز/ فريكة"
    },
    "price": 999,
    "img": "/placeholder.svg?height=150&width=150",
    "isVegan": false,
    "isAvailable": true,
    "allergies": []
  },
  {
    "id": 32,
    "number": "F1",
    "categoryId": 6,
    "name": {
      "en": "Shish Taouk",
      "cs": "Shish Taouk",
      "ar": "شيش طاووق"
    },
    "description": {
      "en": "Grilled Chicken breast on skewers, Garlic, Special seasoning, French fries/ Rice/ Freekah/ Grilled vegetables, Garlic sauce",
      "cs": "grilovaná kuřecí prsa na špízu, česnek, speciální koření, hranolky/ rýže/ freekah/ grilovaná zelenina, česneková omáčka",
      "ar": "صدور دجاج، ثوم، توابل خاصة، بطاطس مقلية/ أرز/ فريكة/ خضار مشوية، ثومية"
    },
    "price": 999,
    "img": "/placeholder.svg?height=150&width=150",
    "isVegan": false,
    "isAvailable": true,
    "allergies": []
  },
  {
    "id": 33,
    "number": "F2",
    "categoryId": 6,
    "name": {
      "en": "Chicken Mosahab",
      "cs": "Kuřecí Mosahab",
      "ar": "دجاج مسحب"
    },
    "description": {
      "en": "Half a chicken, French fries/ Rice/ Freekah/ Grilled vegetables, Garlic sauce",
      "cs": "půlka kuřete, hranolky/ rýže/ volská oka/ grilovaná zelenina, česneková omáčka",
      "ar": "نصف دجاجة، بطاطس مقلية/ أرز/ فريكة/ خضار مشوية، ثومية"
    },
    "price": 999,
    "img": "/placeholder.svg?height=150&width=150",
    "isVegan": false,
    "isAvailable": true,
    "allergies": []
  },
  {
    "id": 34,
    "number": "F3",
    "categoryId": 6,
    "name": {
      "en": "Grilled Chicken Thighs",
      "cs": "Grilovaná kuřecí stehna",
      "ar": "فخد دجاج مسحب"
    },
    "description": {
      "en": "Chicken thighs mosahab, French fries/ Rice/ Freekah/ Grilled vegetables, Garlic sauce",
      "cs": "kuřecí stehna mosahab, hranolky/ rýže/ freekah/ grilovaná zelenina, česneková omáčka",
      "ar": "فخد دجاج، بطاطس مقلية/ أرز/ فريكة/ خضار مشوية، ثومية"
    },
    "price": 999,
    "img": "/placeholder.svg?height=150&width=150",
    "isVegan": false,
    "isAvailable": true,
    "allergies": []
  },
  {
    "id": 35,
    "number": "F4",
    "categoryId": 6,
    "name": {
      "en": "Shish Kebab",
      "cs": "Shish Kebab",
      "ar": "شيش كباب"
    },
    "description": {
      "en": "Grilled cubes of lamb and veal meat on skewers, Onions, Parsley, French fries/ Rice/ Freekah/ Grilled vegetables, Tahini",
      "cs": "grilované jehněčí a telecí maso na špízu, cibule, petržel, hranolky/ rýže/ freekah/ grilovaná zelenina, tahini",
      "ar": "لحم خروف و عجل، بصل، بقدونس، بطاطس مقلية/ أرز/ فريكة/ خضار مشوية، طحينة"
    },
    "price": 999,
    "img": "/placeholder.svg?height=150&width=150",
    "isVegan": false,
    "isAvailable": true,
    "allergies": []
  },
  {
    "id": 36,
    "number": "F5",
    "categoryId": 6,
    "name": {
      "en": "Sliced Lamb Meat",
      "cs": "Plátky jehněčího masa",
      "ar": "شرائح خروف"
    },
    "description": {
      "en": "Lamb meat, French fries/ Rice/ Freekah/ Grilled vegetables",
      "cs": "jehněčí maso, hranolky/ rýže/ freekah/ grilovaná zelenina",
      "ar": "لحم خروف، بطاطس مقلية/ أرز/ فريكة/ خضار مشوية"
    },
    "price": 999,
    "img": "/placeholder.svg?height=150&width=150",
    "isVegan": false,
    "isAvailable": true,
    "allergies": []
  },
  {
    "id": 37,
    "number": "F6",
    "categoryId": 6,
    "name": {
      "en": "Lamb Ribs",
      "cs": "Grilovaná jehněčí žebra",
      "ar": "ريش خروف"
    },
    "description": {
      "en": "Lamb ribs, French fries/ Rice/ Freekah/ Grilled vegetables",
      "cs": "jehněčí žebírka, hranolky/ rýže/ freekah/ grilovaná zelenina",
      "ar": "ريش خروف، بطاطس مقلية/ أرز/ فريكة/ خضار مشوية"
    },
    "price": 999,
    "img": "/placeholder.svg?height=150&width=150",
    "isVegan": false,
    "isAvailable": true,
    "allergies": []
  },
  {
    "id": 38,
    "number": "F7",
    "categoryId": 6,
    "name": {
      "en": "Mixed Grills For One Person",
      "cs": "Mixed gril pro 1 osobu",
      "ar": "مشاوي مشكل لشخص"
    },
    "description": {
      "en": "Grilled chicken on skewers, Grilled cubes of meat on skewers, Sliced lamb meat, French fries/ Rice/ Freekah/ Grilled vegetables, Garlic sauce",
      "cs": "grilované kuřecí na špejlích, grilované kostky masa na špejlích, plátky jehněčího masa, hranolky/ rýže/ freekah/ grilovaná zelenina, česneková omáčka",
      "ar": "شيش طاووق، شيش كباب، شرائح خروف، بطاطس مقلية/ أرز/فريكة/ خضار مشوية، ثومية"
    },
    "price": 999,
    "img": "/placeholder.svg?height=150&width=150",
    "isVegan": false,
    "isAvailable": true,
    "allergies": []
  },
  {
    "id": 39,
    "number": "F8",
    "categoryId": 6,
    "name": {
      "en": "Mixed Grills For Two People",
      "cs": "Mixed gril pro 2 osoby",
      "ar": "مشاوي مشكل لشخصين"
    },
    "description": {
      "en": "Grilled chicken on skewers, Grilled cubes of meat on skewers, Chicken slices, Lamb ribs, Chicken wings, French fries/ Rice/ Freekah/ Grilled vegetables, Garlic sauce, Tahini",
      "cs": "grilované kuřecí maso na špízu, grilované kostky masa na špízu, kuřecí plátky, jehněčí žebra, kuřecí křídla, hranolky/ rýže/ freekah/ grilovaná zelenina, česneková omáčka, tahini",
      "ar": "شيش طاوو، شيش كباب، شرائح خرف، ريش خروف، جوانح دجاج ، بطاطس مقلية/ أرز/ فريكة/ خضار مشوي، ثومية، طحينة"
    },
    "price": 999,
    "img": "/placeholder.svg?height=150&width=150",
    "isVegan": false,
    "isAvailable": true,
    "allergies": []
  },
  {
    "id": 40,
    "number": "F9",
    "categoryId": 6,
    "name": {
      "en": "Mixed Grills For Three People",
      "cs": "Mixed gril pro 3 osoby",
      "ar": "مشاوي مشكل لثلاث أشخاص"
    },
    "description": {
      "en": "",
      "cs": "",
      "ar": ""
    },
    "price": 999,
    "img": "/placeholder.svg?height=150&width=150",
    "isVegan": false,
    "isAvailable": true,
    "allergies": []
  },
  {
    "id": 41,
    "number": "G1",
    "categoryId": 7,
    "name": {
      "en": "Salmon",
      "cs": "Losos",
      "ar": "سلمون"
    },
    "description": {
      "en": "Salmon, Rosemary, Butter, Lemon, French fries/ Rice/ Freekah/ Mixed vegetables",
      "cs": "losos, rozmarýn, máslo, citron, hranolky/ rýže/ freekah / zeleninová směs",
      "ar": "سلمون، إكليل الجبل ، زبدة، ليمون، بطاطس مقلية/ أرز/ فريكة/ خضار مشكل"
    },
    "price": 999,
    "img": "/placeholder.svg?height=150&width=150",
    "isVegan": false,
    "isAvailable": true,
    "allergies": []
  },
  {
    "id": 42,
    "number": "G2",
    "categoryId": 7,
    "name": {
      "en": "Silver Sea-bream",
      "cs": "Mořský vlk",
      "ar": "سمكة الدنيس"
    },
    "description": {
      "en": "Silver seabream, Garlic, Coriander, Lemon, Rice/ Freekah/ Mixed vegetables",
      "cs": "mořský vlk, česnek, koriandr, citron, rýže / freekah / zeleninový směs",
      "ar": "دنيس، ثوم، كزبرة، ليمون، أرز/ فريكة/ خضار مشوية"
    },
    "price": 999,
    "img": "/placeholder.svg?height=150&width=150",
    "isVegan": false,
    "isAvailable": true,
    "allergies": []
  },
  {
    "id": 43,
    "number": "G3",
    "categoryId": 7,
    "name": {
      "en": "Shrimp Bowl",
      "cs": "Krevetová miska",
      "ar": "زبدية الجمبري"
    },
    "description": {
      "en": "Shrimps, Tomatoes, Chilli, Onions, Garlic, Lemon juice",
      "cs": "krevety, rajčata, chilli, cibule, česnek, citronová šťáva",
      "ar": "جمبري، بندورة، شطة، بصل ، ثوم، عصير ليمون"
    },
    "price": 999,
    "img": "/placeholder.svg?height=150&width=150",
    "isVegan": false,
    "isAvailable": true,
    "allergies": []
  },
  {
    "id": 44,
    "number": "G4",
    "categoryId": 7,
    "name": {
      "en": "Shrimp With Butter and Garlic",
      "cs": "Krevety na másle a česneku",
      "ar": "جمبري مع الزبدة و الثوم"
    },
    "description": {
      "en": "Shrimps, Butter, Garlic, Rice/ Freekah/ Mixed vegetables",
      "cs": "krevety, máslo, česnek, rýže / freekah / zeleninový směs",
      "ar": "جمبري، زبدة، ثوم، أرز، فريكة، خضار مشكل"
    },
    "price": 999,
    "img": "/placeholder.svg?height=150&width=150",
    "isVegan": false,
    "isAvailable": true,
    "allergies": []
  },
  {
    "id": 45,
    "number": "H1",
    "categoryId": 8,
    "name": {
      "en": "French Fries",
      "cs": "Hranolky",
      "ar": "بطاطس مقلية"
    },
    "description": {
      "en": "",
      "cs": "",
      "ar": ""
    },
    "price": 999,
    "img": "/placeholder.svg?height=150&width=150",
    "isVegan": false,
    "isAvailable": true,
    "allergies": []
  },
  {
    "id": 46,
    "number": "H2",
    "categoryId": 8,
    "name": {
      "en": "Rice",
      "cs": "Rýže",
      "ar": "أرز"
    },
    "description": {
      "en": "",
      "cs": "",
      "ar": ""
    },
    "price": 999,
    "img": "/placeholder.svg?height=150&width=150",
    "isVegan": false,
    "isAvailable": true,
    "allergies": []
  },
  {
    "id": 47,
    "number": "H3",
    "categoryId": 8,
    "name": {
      "en": "Freekah",
      "cs": "Freekah",
      "ar": "فريكة"
    },
    "description": {
      "en": "",
      "cs": "",
      "ar": ""
    },
    "price": 999,
    "img": "/placeholder.svg?height=150&width=150",
    "isVegan": false,
    "isAvailable": true,
    "allergies": []
  },
  {
    "id": 48,
    "number": "H4",
    "categoryId": 8,
    "name": {
      "en": "Grilled Vegetables",
      "cs": "Grilovaná zelenina",
      "ar": "خضار مشوية"
    },
    "description": {
      "en": "",
      "cs": "",
      "ar": ""
    },
    "price": 999,
    "img": "/placeholder.svg?height=150&width=150",
    "isVegan": false,
    "isAvailable": true,
    "allergies": []
  },
  {
    "id": 49,
    "number": "I1",
    "categoryId": 9,
    "name": {
      "en": "Baklava",
      "cs": "Baklava",
      "ar": "بقلاوة"
    },
    "description": {
      "en": "Phyllo dough, Butter, Pistachios/ Walnuts, Sugar syrup",
      "cs": "filo těsto, máslo, pistácie/vlaštské ořechy, cukrový sirup",
      "ar": "عجينة الفيلو، زبدة، فستق/ جوز، شراب السكر"
    },
    "price": 999,
    "img": "/placeholder.svg?height=150&width=150",
    "isVegan": false,
    "isAvailable": true,
    "allergies": []
  },
  {
    "id": 50,
    "number": "I2",
    "categoryId": 9,
    "name": {
      "en": "Knafeh",
      "cs": "Knafeh",
      "ar": "كنافة"
    },
    "description": {
      "en": "Kadayif spun pastry dough, Akkawi cheese, Butter, Sugar syrup",
      "cs": "těsto kadayif, sýr Akkawi, máslo, cukrový sirup",
      "ar": "عجينة الكنافة، جبنة عكاوي، زبدة، شراب السكر"
    },
    "price": 999,
    "img": "/placeholder.svg?height=150&width=150",
    "isVegan": false,
    "isAvailable": true,
    "allergies": []
  }
]

// Helper functions
export function getCategoryById(id: number): Category | undefined {
  return categories.find((category) => category.id === id);
}

export function getAllergyById(id: number): Allergy | undefined {
  return allergies.find((allergy) => allergy.id === id);
}

export function getWeekDayById(id: number): WeekDay | undefined {
  return weekDays.find((day) => day.id === id);
}

export function getMenuItemsByCategory(
  items: MenuItem[],
  categoryId: number
): MenuItem[] {
  return items.filter((item) => item.categoryId === categoryId);
}

export function getMenuItemsByDay(
  items: MenuItem[],
  dayId: number
): MenuItem[] {
  return items.filter((item) => item.lunchMenuDayId === dayId);
}

export function isLunchTime(): boolean {
  const now = new Date();
  const hours = now.getHours();
  // Lunch time is between 12:00 and 15:00
  return hours >= 12 && hours < 15;
}

export function getCurrentWeekDay(): number {
  const now = new Date();
  const day = now.getDay();
  console.log("Current day:", day);

  // Convert from Sunday-based (0-6) to Monday-based (1-5)
  return day === 0 ? 5 : day;
}
