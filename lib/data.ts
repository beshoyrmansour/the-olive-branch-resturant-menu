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
  { id: 1, name: { en: "Cereals containing gluten", cs: "Obiloviny obsahující lepek", ar: "حبوب تحتوي على الغلوتين" }, icon: "wheat" },
  { id: 3, name: { en: "Eggs and egg products", cs: "Vejce a výrobky z nich", ar: "بيض ومنتجاته" }, icon: "egg" },
  { id: 4, name: { en: "Fish and fish products", cs: "Ryby a výrobky z nich", ar: "أسماك ومنتجاتها" }, icon: "fish" },
  { id: 5, name: { en: "Groundnut kernels (peanuts)", cs: "Jádra podzemnice olejné (arašídy)", ar: "فول سوداني (فستق عبيد)" }, icon: "peanut" },
  { id: 7, name: { en: "Milk and milk products", cs: "Mléko a výrobky z něj", ar: "حليب ومنتجاته" }, icon: "milk" },
  { id: 8, name: { en: "Nuts", cs: "Skořápkové plody", ar: "مكسرات" }, icon: "nut" },
  { id: 11, name: { en: "Sesame seeds ", cs: "Sezamová semena", ar: "سمسم" }, icon: "sesame" },
];

export const categories: Category[] = [
  { id: 1, name: { en: "Soups", cs: "Polévky", ar: "الشوربات" } },
  { id: 2, name: { en: "Salads", cs: "Saláty", ar: "السلطات" } },
  {
    id: 3,
    name: {
      en: "Cold Appetizers",
      cs: "Studené předkrmy",
      ar: "المقبلات الباردة",
    },
  },
  {
    id: 4,
    name: {
      en: "Hot Appetizers",
      cs: "Teplé předkrmy",
      ar: "المقبلات الساخنة",
    },
  },
  {
    id: 5,
    name: { en: "Main Course", cs: "Hlavní jídla:", ar: "الأطباق الرئيسية" },
  },
  { id: 6, name: { en: "Grills", cs: "Z našeho grilu", ar: "المشاوي" } },
  {
    id: 7,
    name: { en: "Seafood dishes", cs: "Ryby a mořské plody", ar: "الأسماك" },
  },
  { id: 8, name: { en: "Extras", cs: "Přílohy", ar: "الإضافات الجانبية" } },
  { id: 9, name: { en: "Desserts", cs: "Dezerty", ar: "الحلويات" } },
  { id: 10, name: { en: "Drinks", cs: "Nápoje", ar: "المشروبات" } },
  {
    id: 696,
    name: { en: "Menu of the day", cs: "Denní menu", ar: "قائمة اليوم" },
  },
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
  {
    id: 1,
    number: "1",
    categoryId: 696,
    lunchMenuDayId: 1,
    name: {
      en: "Today’s Soup",
      cs: "polévka dne",
      ar: "شوربة اليوم",
    },
    description: {
      en: "",
      cs: "",
      ar: "",
    },
    price: 45,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: false,
    isAvailable: true,
    allergies: [],
  },
  {
    id: 2,
    number: "2",
    categoryId: 696,
    lunchMenuDayId: 1,
    name: {
      en: "Hummus falafel",
      cs: "Hummus falafel",
      ar: "حمص فلافل",
    },
    description: {
      en: "Hummus, falafel, olive oil, Arabic bread",
      cs: "Hummus, falafel, olivový olej, arabský chléb",
      ar: "حمص، فلافل، زيت زيتون، خبز عربي",
    },
    price: 210,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: true,
    isAvailable: true,
    allergies: [1,11],
  },
  {
    id: 3,
    number: "3",
    categoryId: 696,
    lunchMenuDayId: 1,
    name: {
      en: "Hummus With Chicken Shawarma",
      cs: "Hummus s kuřecí šawarmou",
      ar: "حمص مع شاورما دجاج",
    },
    description: {
      en: "Hummus, Chicken shawarma, Arabic bread",
      cs: "Hummus, kuřecí shawarma, arabský chléb",
      ar: "حمص، شاورما دجاج، خبز عربي",
    },
    price: 225,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: false,
    isAvailable: true,
    allergies: [1,11],
  },
  {
    id: 4,
    number: "4",
    categoryId: 696,
    lunchMenuDayId: 1,
    name: {
      en: "Hummus falafel meal",
      cs: "Hummus falafel menu",
      ar: "وجبة حمص فلافل ",
    },
    description: {
      en: "Hummus, falafel, homemade pickles, arabic bread",
      cs: "Hummus, falafel, nakládaná a čerstvá zelenina, arabský chléb",
      ar: "حمص، فلافل، خضار مخللة ، خبز عربي",
    },
    price: 225,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: true,
    isAvailable: true,
    allergies: [],
  },
  {
    id: 5,
    number: "5",
    categoryId: 696,
    lunchMenuDayId: 1,
    name: {
      en: "Hummus With Chicken Shawarma Menu",
      cs: "Hummus s kuřecí šawarmou menu",
      ar: "وجبة حمص مع شاورما دجاج",
    },
    description: {
      en: "Hummus, Chicken shawarma, Pickled and fresh vegetables, Arabic bread",
      cs: "Hummus, kuřecí šawarmou, nakládaná a čerstvá zelenina, arabský chléb",
      ar: "حمص، شاورما دجاج، خضار مخللة وطازجة، خبز عربي",
    },
    price: 249,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: false,
    isAvailable: true,
    allergies: [],
  },
  {
    id: 6,
    number: "6",
    categoryId: 696,
    lunchMenuDayId: 1,
    name: {
      en: "Palestinian Musakhan Laffa",
      cs: "Palestinský musakhan laffa",
      ar: "لفافا مسخن فلسطيني",
    },
    description: {
      en: "Homemade laffa bread, onions with olive oil, chicken meat, roasted almonds, sumac spice",
      cs: "Obalená domácí tortilla, cibule s olivovým olejem, kuřecí maso, pražené mandle, koření sumak",
      ar: "لفافا محلية الصنع، بصل بزيت الزيتون، لحم دجاج، لوز محمص، بهارات السماق",
    },
    price: 245,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: false,
    isAvailable: true,
    allergies: [],
  },
  {
    id: 1,
    number: "1",
    categoryId: 696,
    lunchMenuDayId: 2,
    name: {
      en: "Today’s Soup",
      cs: "polévka dne",
      ar: "شوربة اليوم",
    },
    description: {
      en: "",
      cs: "",
      ar: "",
    },
    price: 45,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: false,
    isAvailable: true,
    allergies: [],
  },
  {
    id: 2,
    number: "2",
    categoryId: 696,
    lunchMenuDayId: 2,
    name: {
      en: "Hummus falafel",
      cs: "Hummus falafel",
      ar: "حمص فلافل",
    },
    description: {
      en: "Hummus, falafel, olive oil, Arabic bread",
      cs: "Hummus, falafel, olivový olej, arabský chléb",
      ar: "حمص، فلافل، زيت زيتون، خبز عربي",
    },
    price: 210,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: true,
    isAvailable: true,
    allergies: [1,11],
  },
  {
    id: 3,
    number: "3",
    categoryId: 696,
    lunchMenuDayId: 2,
    name: {
      en: "Hummus With Chicken Shawarma",
      cs: "Hummus s kuřecí šawarmou",
      ar: "حمص مع شاورما دجاج",
    },
    description: {
      en: "Hummus, Chicken shawarma, Arabic bread",
      cs: "Hummus, kuřecí shawarma, arabský chléb",
      ar: "حمص، شاورما دجاج، خبز عربي",
    },
    price: 225,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: false,
    isAvailable: true,
    allergies: [1,11],
  },
  {
    id: 4,
    number: "4",
    categoryId: 696,
    lunchMenuDayId: 2,
    name: {
      en: "Hummus falafel meal",
      cs: "Hummus falafel menu",
      ar: "وجبة حمص فلافل ",
    },
    description: {
      en: "Hummus, falafel, homemade pickles, arabic bread",
      cs: "Hummus, falafel, nakládaná a čerstvá zelenina, arabský chléb",
      ar: "حمص، فلافل، خضار مخللة ، خبز عربي",
    },
    price: 225,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: true,
    isAvailable: true,
    allergies: [],
  },
  {
    id: 5,
    number: "5",
    categoryId: 696,
    lunchMenuDayId: 2,
    name: {
      en: "Hummus With Chicken Shawarma Menu",
      cs: "Hummus s kuřecí šawarmou menu",
      ar: "وجبة حمص مع شاورما دجاج",
    },
    description: {
      en: "Hummus, Chicken shawarma, Pickled and fresh vegetables, Arabic bread",
      cs: "Hummus, kuřecí šawarmou, nakládaná a čerstvá zelenina, arabský chléb",
      ar: "حمص، شاورما دجاج، خضار مخللة وطازجة، خبز عربي",
    },
    price: 249,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: false,
    isAvailable: true,
    allergies: [],
  },
  {
    id: 6,
    number: "6",
    categoryId: 696,
    lunchMenuDayId: 2,
    name: {
      en: "Palestinian Musakhan Laffa",
      cs: "Palestinský musakhan laffa",
      ar: "لفافا مسخن فلسطيني",
    },
    description: {
      en: "Homemade laffa bread, onions with olive oil, chicken meat, roasted almonds, sumac spice",
      cs: "Obalená domácí tortilla, cibule s olivovým olejem, kuřecí maso, pražené mandle, koření sumak",
      ar: "لفافا محلية الصنع، بصل بزيت الزيتون، لحم دجاج، لوز محمص، بهارات السماق",
    },
    price: 245,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: false,
    isAvailable: true,
    allergies: [],
  },
  {
    id: 1,
    number: "1",
    categoryId: 696,
    lunchMenuDayId: 3,
    name: {
      en: "Today’s Soup",
      cs: "polévka dne",
      ar: "شوربة اليوم",
    },
    description: {
      en: "",
      cs: "",
      ar: "",
    },
    price: 45,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: false,
    isAvailable: true,
    allergies: [],
  },
  {
    id: 2,
    number: "2",
    categoryId: 696,
    lunchMenuDayId: 3,
    name: {
      en: "Hummus falafel",
      cs: "Hummus falafel",
      ar: "حمص فلافل",
    },
    description: {
      en: "Hummus, falafel, olive oil, Arabic bread",
      cs: "Hummus, falafel, olivový olej, arabský chléb",
      ar: "حمص، فلافل، زيت زيتون، خبز عربي",
    },
    price: 210,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: true,
    isAvailable: true,
    allergies: [1,11],
  },
  {
    id: 3,
    number: "3",
    categoryId: 696,
    lunchMenuDayId: 3,
    name: {
      en: "Hummus With Chicken Shawarma",
      cs: "Hummus s kuřecí šawarmou",
      ar: "حمص مع شاورما دجاج",
    },
    description: {
      en: "Hummus, Chicken shawarma, Arabic bread",
      cs: "Hummus, kuřecí shawarma, arabský chléb",
      ar: "حمص، شاورما دجاج، خبز عربي",
    },
    price: 225,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: false,
    isAvailable: true,
    allergies: [1,11],
  },
  {
    id: 4,
    number: "4",
    categoryId: 696,
    lunchMenuDayId: 3,
    name: {
      en: "Hummus falafel meal",
      cs: "Hummus falafel menu",
      ar: "وجبة حمص فلافل ",
    },
    description: {
      en: "Hummus, falafel, homemade pickles, arabic bread",
      cs: "Hummus, falafel, nakládaná a čerstvá zelenina, arabský chléb",
      ar: "حمص، فلافل، خضار مخللة ، خبز عربي",
    },
    price: 225,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: true,
    isAvailable: true,
    allergies: [],
  },
  {
    id: 5,
    number: "5",
    categoryId: 696,
    lunchMenuDayId: 3,
    name: {
      en: "Hummus With Chicken Shawarma Menu",
      cs: "Hummus s kuřecí šawarmou menu",
      ar: "وجبة حمص مع شاورما دجاج",
    },
    description: {
      en: "Hummus, Chicken shawarma, Pickled and fresh vegetables, Arabic bread",
      cs: "Hummus, kuřecí šawarmou, nakládaná a čerstvá zelenina, arabský chléb",
      ar: "حمص، شاورما دجاج، خضار مخللة وطازجة، خبز عربي",
    },
    price: 249,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: false,
    isAvailable: true,
    allergies: [],
  },
  {
    id: 6,
    number: "6",
    categoryId: 696,
    lunchMenuDayId: 3,
    name: {
      en: "Palestinian Musakhan Laffa",
      cs: "Palestinský musakhan laffa",
      ar: "لفافا مسخن فلسطيني",
    },
    description: {
      en: "Homemade laffa bread, onions with olive oil, chicken meat, roasted almonds, sumac spice",
      cs: "Obalená domácí tortilla, cibule s olivovým olejem, kuřecí maso, pražené mandle, koření sumak",
      ar: "لفافا محلية الصنع، بصل بزيت الزيتون، لحم دجاج، لوز محمص، بهارات السماق",
    },
    price: 245,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: false,
    isAvailable: true,
    allergies: [],
  },
  {
    id: 1,
    number: "1",
    categoryId: 696,
    lunchMenuDayId: 4,
    name: {
      en: "Today’s Soup",
      cs: "polévka dne",
      ar: "شوربة اليوم",
    },
    description: {
      en: "",
      cs: "",
      ar: "",
    },
    price: 45,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: false,
    isAvailable: true,
    allergies: [],
  },
  {
    id: 2,
    number: "2",
    categoryId: 696,
    lunchMenuDayId: 4,
    name: {
      en: "Hummus falafel",
      cs: "Hummus falafel",
      ar: "حمص فلافل",
    },
    description: {
      en: "Hummus, falafel, olive oil, Arabic bread",
      cs: "Hummus, falafel, olivový olej, arabský chléb",
      ar: "حمص، فلافل، زيت زيتون، خبز عربي",
    },
    price: 210,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: true,
    isAvailable: true,
    allergies: [1,11],
  },
  {
    id: 3,
    number: "3",
    categoryId: 696,
    lunchMenuDayId: 4,
    name: {
      en: "Hummus With Chicken Shawarma",
      cs: "Hummus s kuřecí šawarmou",
      ar: "حمص مع شاورما دجاج",
    },
    description: {
      en: "Hummus, Chicken shawarma, Arabic bread",
      cs: "Hummus, kuřecí shawarma, arabský chléb",
      ar: "حمص، شاورما دجاج، خبز عربي",
    },
    price: 225,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: false,
    isAvailable: true,
    allergies: [1,11],
  },
  {
    id: 4,
    number: "4",
    categoryId: 696,
    lunchMenuDayId: 4,
    name: {
      en: "Hummus falafel meal",
      cs: "Hummus falafel menu",
      ar: "وجبة حمص فلافل ",
    },
    description: {
      en: "Hummus, falafel, homemade pickles, arabic bread",
      cs: "Hummus, falafel, nakládaná a čerstvá zelenina, arabský chléb",
      ar: "حمص، فلافل، خضار مخللة ، خبز عربي",
    },
    price: 225,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: true,
    isAvailable: true,
    allergies: [],
  },
  {
    id: 5,
    number: "5",
    categoryId: 696,
    lunchMenuDayId: 4,
    name: {
      en: "Hummus With Chicken Shawarma Menu",
      cs: "Hummus s kuřecí šawarmou menu",
      ar: "وجبة حمص مع شاورما دجاج",
    },
    description: {
      en: "Hummus, Chicken shawarma, Pickled and fresh vegetables, Arabic bread",
      cs: "Hummus, kuřecí šawarmou, nakládaná a čerstvá zelenina, arabský chléb",
      ar: "حمص، شاورما دجاج، خضار مخللة وطازجة، خبز عربي",
    },
    price: 249,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: false,
    isAvailable: true,
    allergies: [],
  },
  {
    id: 6,
    number: "6",
    categoryId: 696,
    lunchMenuDayId: 4,
    name: {
      en: "Palestinian Musakhan Laffa",
      cs: "Palestinský musakhan laffa",
      ar: "لفافا مسخن فلسطيني",
    },
    description: {
      en: "Homemade laffa bread, onions with olive oil, chicken meat, roasted almonds, sumac spice",
      cs: "Obalená domácí tortilla, cibule s olivovým olejem, kuřecí maso, pražené mandle, koření sumak",
      ar: "لفافا محلية الصنع، بصل بزيت الزيتون، لحم دجاج، لوز محمص، بهارات السماق",
    },
    price: 245,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: false,
    isAvailable: true,
    allergies: [],
  },
  {
    id: 1,
    number: "1",
    categoryId: 696,
    lunchMenuDayId: 5,
    name: {
      en: "Today’s Soup",
      cs: "polévka dne",
      ar: "شوربة اليوم",
    },
    description: {
      en: "",
      cs: "",
      ar: "",
    },
    price: 45,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: false,
    isAvailable: true,
    allergies: [],
  },
  {
    id: 2,
    number: "2",
    categoryId: 696,
    lunchMenuDayId: 5,
    name: {
      en: "Hummus falafel",
      cs: "Hummus falafel",
      ar: "حمص فلافل",
    },
    description: {
      en: "Hummus, falafel, olive oil, Arabic bread",
      cs: "Hummus, falafel, olivový olej, arabský chléb",
      ar: "حمص، فلافل، زيت زيتون، خبز عربي",
    },
    price: 210,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: true,
    isAvailable: true,
    allergies: [1,11],
  },
  {
    id: 3,
    number: "3",
    categoryId: 696,
    lunchMenuDayId: 5,
    name: {
      en: "Hummus With Chicken Shawarma",
      cs: "Hummus s kuřecí šawarmou",
      ar: "حمص مع شاورما دجاج",
    },
    description: {
      en: "Hummus, Chicken shawarma, Arabic bread",
      cs: "Hummus, kuřecí shawarma, arabský chléb",
      ar: "حمص، شاورما دجاج، خبز عربي",
    },
    price: 225,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: false,
    isAvailable: true,
    allergies: [1,11],
  },
  {
    id: 4,
    number: "4",
    categoryId: 696,
    lunchMenuDayId: 5,
    name: {
      en: "Hummus falafel meal",
      cs: "Hummus falafel menu",
      ar: "وجبة حمص فلافل ",
    },
    description: {
      en: "Hummus, falafel, homemade pickles, arabic bread",
      cs: "Hummus, falafel, nakládaná a čerstvá zelenina, arabský chléb",
      ar: "حمص، فلافل، خضار مخللة ، خبز عربي",
    },
    price: 225,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: true,
    isAvailable: true,
    allergies: [],
  },
  {
    id: 5,
    number: "5",
    categoryId: 696,
    lunchMenuDayId: 5,
    name: {
      en: "Hummus With Chicken Shawarma Menu",
      cs: "Hummus s kuřecí šawarmou menu",
      ar: "وجبة حمص مع شاورما دجاج",
    },
    description: {
      en: "Hummus, Chicken shawarma, Pickled and fresh vegetables, Arabic bread",
      cs: "Hummus, kuřecí šawarmou, nakládaná a čerstvá zelenina, arabský chléb",
      ar: "حمص، شاورما دجاج، خضار مخللة وطازجة، خبز عربي",
    },
    price: 249,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: false,
    isAvailable: true,
    allergies: [],
  },
  {
    id: 6,
    number: "6",
    categoryId: 696,
    lunchMenuDayId: 5,
    name: {
      en: "Palestinian Musakhan Laffa",
      cs: "Palestinský musakhan laffa",
      ar: "لفافا مسخن فلسطيني",
    },
    description: {
      en: "Homemade laffa bread, onions with olive oil, chicken meat, roasted almonds, sumac spice",
      cs: "Obalená domácí tortilla, cibule s olivovým olejem, kuřecí maso, pražené mandle, koření sumak",
      ar: "لفافا محلية الصنع، بصل بزيت الزيتون، لحم دجاج، لوز محمص، بهارات السماق",
    },
    price: 245,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: false,
    isAvailable: true,
    allergies: [],
  },
]

export const mainMenu: MenuItem[] = [
  {
    id: 1,
    number: "A1",
    categoryId: 1,
    name: {
      en: "Ground Lentil Soup",
      cs: "Čočková polévka",
      ar: "شوربة العدس",
    },
    description: {
      en: "Lentils, Onions, Carrots",
      cs: "čočka, cibule, mrkev",
      ar: "عدس، بصل، جزر",
    },
    price: 65,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: true,
    isAvailable: true,
    allergies: [],
  },
  {
    id: 2,
    number: "A2",
    categoryId: 1,
    name: {
      en: "Chicken and Vegetables Soup",
      cs: "Kuřecí vývar",
      ar: "شوربة الخضار مع الدجاج",
    },
    description: {
      en: "Chicken, Carrots, Peas, Potatoes, Garlic, Onions, Coriander",
      cs: "kuřecí maso, mrkev, hrášek, brambory, česnek, cibule, koriandr",
      ar: "دجاج، جزر، بازيلاء، بطاطس، ثوم، بصل، كزبرة",
    },
    price: 75,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: false,
    isAvailable: true,
    allergies: [],
  },
  {
    id: 3,
    number: "B1",
    categoryId: 2,
    name: {
      en: "Tabbouleh",
      cs: "Tabbúleh",
      ar: "تبولة",
    },
    description: {
      en: "Parsley, Mint, Onions, Tomatoes, Bulgur, Olive oil, Lemon juice",
      cs: "Petržel, máta, cibulka, rajčata, bulgur, olivový olej, citronová šťáva",
      ar: "بقدونس، نعناع، بصل، بندورة، برغل، زيت زيتون، حامض",
    },
    price: 145,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: true,
    isAvailable: true,
    allergies: [1],
  },
  {
    id: 4,
    number: "B2",
    categoryId: 2,
    name: {
      en: "Fattoush",
      cs: "Fattúš",
      ar: "فتوش",
    },
    description: {
      en: "Lettuce, Tomatoes, Cucumbers, Radishes, Onions, Bell peppers, Mint, Parsley, Sumac, Croutons, Olive oil, Lemon juice",
      cs: "Ledový salát, rajčata, okurky, ředkvičky, cibule, paprika, máta, petržel, sumak, krutony, olivový olej, citronová šťáva",
      ar: "خس، بندورة، خيار، فجل، بصل، فلفل حلو، نعناع، بقدونس، سماق، خبز محمص، زيت زيتون، حامض",
    },
    price: 145,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: true,
    isAvailable: true,
    allergies: [1],
  },
  {
    id: 5,
    number: "B3",
    categoryId: 2,
    name: {
      en: "Vegetables With Cheese",
      cs: "Salát se sýrem",
      ar: "خضار مع جبنة",
    },
    description: {
      en: "Tomatoes, Cucumbers, Bell peppers, Radishes, Onions, Olives, Cheese, Olive oil, Lemon juice",
      cs: "rajčata, okurky, papriky, ředkvičky, cibule, olivy, sýr, olivový olej, citronová šťáva",
      ar: "بندورة، خيار، فلفل حلو، فجل، بصل، زيتون، جبنة، زيت زيتون، حامض",
    },
    price: 145,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: true,
    isAvailable: true,
    allergies: [7],
  },
  {
    id: 6,
    number: "B4",
    categoryId: 2,
    name: {
      en: "Falahia",
      cs: "Falahija",
      ar: "فلاحية",
    },
    description: {
      en: "Tomatoes, Onions, Green chillies, Olive oil, Lemon juice",
      cs: "rajčata, cibule, zelené chilli papričky, olivový olej, citronová šťáva",
      ar: "بندورة، بصل، شطة خضرة، زيت زيتون، حامض",
    },
    price: 135,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: true,
    isAvailable: true,
    allergies: [],
  },
  {
    id: 7,
    number: "B5",
    categoryId: 2,
    name: {
      en: "Turkish Salad",
      cs: "Turecký salát",
      ar: "سلطة تركية",
    },
    description: {
      en: "Tomatoes, Tomato paste, Onions, Parsley, Chilli, Vinegar, Cumin, Olive oil",
      cs: "rajčata, rajčatový pasta, cibule, petržel, chilli, ocet, kmín, olivový olej",
      ar: "بندورة، صلصة بندورة، بصل، بقدونس، شطة، خل، كمون، زيت زيتون",
    },
    price: 145,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: true,
    isAvailable: true,
    allergies: [],
  },
  {
    id: 8,
    number: "B6",
    categoryId: 2,
    name: {
      en: "Corn Salad",
      cs: "Kukuřičný salát",
      ar: "سلطة الذرة",
    },
    description: {
      en: "Corn, Bell peppers, Pickled cucumbers, dill",
      cs: "kukuřice, paprika, nakládané okurky, kopr",
      ar: "شبت ، ذرة، فلفل حلو، خيار مخلل",
    },
    price: 145,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: true,
    isAvailable: true,
    allergies: [],
  },
  {
    id: 9,
    number: "B7",
    categoryId: 2,
    name: {
      en: "The Olive Branch Salad",
      cs: "The Olive Branch salát",
      ar: "سلطةأوليڤ برانش",
    },
    description: {
      en: "Nuts, Parsley, Basil, Dill, Raisins, Pomegranate molasses, Olive oil, Lemon juice",
      cs: "ořechy, petržel, bazalka, kopr, rozinky, melasa z granátových jablek, olivový olej, citronová šťáva",
      ar: "مكسرات، بقدونس، ريحان، شبت، زبيب، دبس الرمان، زيت زيتون، حامض",
    },
    price: 189,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: true,
    isAvailable: true,
    allergies: [8],
  },
  {
    id: 10,
    number: "C1",
    categoryId: 3,
    name: {
      en: "Hummus",
      cs: "Hummus",
      ar: "حمص",
    },
    description: {
      en: "Hummus, Tahini, Lemon juice, Olive oil",
      cs: "Hummus, tahini, citronová šťáva, olivový olej",
      ar: "حمص، طحينة، عصير ليمون، زيت زيتون",
    },
    price: 110,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: true,
    isAvailable: true,
    allergies: [11],
  },
  {
    id: 11,
    number: "C2",
    categoryId: 3,
    name: {
      en: "Hummus With Meat",
      cs: "Hummus s jehněčím masem",
      ar: "حمص مع لحمة",
    },
    description: {
      en: "Hummus, tahini, lemon juice, lamb meat nuts, olive oil",
      cs: "Hummus, tahini, citronová šťáva, jehněčí maso, ořechy, olivový olej",
      ar: "حمص، طحينة، عصير ليمون، لحمة خروف، مكسرات، زيت زيتون",
    },
    price: 160,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: false,
    isAvailable: true,
    allergies: [8,11],
  },
  {
    id: 12,
    number: "C3",
    categoryId: 3,
    name: {
      en: "Baba Ganoush",
      cs: "Baba ganúš",
      ar: "بابا غنوج",
    },
    description: {
      en: "Grilled Eggplants, Garlic, Tahini, Lemon juice, Olive oil",
      cs: "Grilovaný lilek, česnek, tahini, citronová šťáva, olivový olej",
      ar: "باذنجان مشوي، ثوم، طحينة، عصير ليمون، زيت زيتون",
    },
    price: 145,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: true,
    isAvailable: true,
    allergies: [11],
  },
  {
    id: 13,
    number: "C4",
    categoryId: 3,
    name: {
      en: "Eggplants With Garlic",
      cs: "Smažený lilek s česnekem",
      ar: "باذنجان بثوم",
    },
    description: {
      en: "Fried Eggplant, Garlic, Red chilli sauce, Parsley, Lemon juice",
      cs: "smažený lilek, česnek, červená chilli omáčka, petržel, citronová šťáva",
      ar: "باذنجان مقلي، ثوم ، شطة، بقدونس، عصير ليمون",
    },
    price: 145,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: true,
    isAvailable: true,
    allergies: [],
  },
  {
    id: 14,
    number: "C5",
    categoryId: 3,
    name: {
      en: "Labneh",
      cs: "Labneh",
      ar: "لبنة",
    },
    description: {
      en: "Labneh, Mint, Garlic, Olive oil",
      cs: "Labneh, máta, česnek, olivový olej",
      ar: "لبنة، نعناع، ثوم، زيت زيتون",
    },
    price: 125,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: true,
    isAvailable: true,
    allergies: [7],
  },
  {
    id: 15,
    number: "C6",
    categoryId: 3,
    name: {
      en: "Stuffed Grape Leaves",
      cs: "Plněné vinné listy",
      ar: "ورق عنب",
    },
    description: {
      en: "6 Pieces Vine leaves, Tomatoes, Rice, Onions, Parsley, Olive oil, Lemon juice",
      cs: "6 kusy vinné listy, rajčata, rýže, cibule, petržel, olivový olej, citronová šťáva",
      ar: "٦ قطع ورق عنب، بندورة، أرز، بصل، بقدونس، زيت زيتون، عصير ليمون",
    },
    price: 120,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: true,
    isAvailable: true,
    allergies: [],
  },
  {
    id: 16,
    number: "C7",
    categoryId: 3,
    name: {
      en: "Muhammara",
      cs: "Muhammara",
      ar: "محمرة",
    },
    description: {
      en: "Nuts, Bell peppers, Chilli, Olive oil",
      cs: "ořechy, paprika, chilli, olivový olej",
      ar: "مكسرات، فلفل حلوة، شطة، زيت زيتون",
    },
    price: 145,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: true,
    isAvailable: true,
    allergies: [8],
  },
  {
    id: 17,
    number: "C8",
    categoryId: 3,
    name: {
      en: "Pickles and Olives",
      cs: "Nakládaná zelenina a olivy",
      ar: "مخلالات و زيتون",
    },
    description: {
      en: "Olives, Carrots, radishes, red beets, cauliflower",
      cs: "Olivy, Mrkev, ředkev, červená řepa, květák",
      ar: "زيتون، جزر، فجل، شمندر أحمر، قرنبيط",
    },
    price: 110,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: true,
    isAvailable: true,
    allergies: [],
  },
  {
    id: 18,
    number: "D1",
    categoryId: 4,
    name: {
      en: "Falafel (6 Pieces)",
      cs: "Falafe (6 ks)",
      ar: "فلافل (٦ قطع)",
    },
    description: {
      en: "Chickpeas, Parsley, Onions, Garlic, Green peppers, Tahini",
      cs: "cizrna, petržel, cibule, česnek, zelená paprika, tahini",
      ar: "حمص، بقدونس، بصل، ثوم، فلفل أخضر، طحينة",
    },
    price: 110,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: true,
    isAvailable: true,
    allergies: [11],
  },
  {
    id: 19,
    number: "D2",
    categoryId: 4,
    name: {
      en: "Kibbeh (3 pieces)",
      cs: "Kibbeh (3 ks)",
      ar: "كبة (٣ قطع)",
    },
    description: {
      en: "bulgur, lamb and veal meat, onions, pine",
      cs: "bulgur, jehněčí a telecí maso, cibule, pinie",
      ar: "برغل، لحم خروف و عجل، بصل، صنوبر",
    },
    price: 150,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: false,
    isAvailable: true,
    allergies: [8],
  },
  {
    id: 20,
    number: "D3",
    categoryId: 4,
    name: {
      en: "Grilled Chicken Wings",
      cs: "Grilovaná kuřecí křidélka",
      ar: "جوانح الدجاج المشوية",
    },
    description: {
      en: "6 Chicken wings, Garlic, Special seasoning, Garlic sauce",
      cs: "6 kuřecí křídla, česnek, speciální koření, česneková omáčka",
      ar: "٦ جوانح، ثوم ، توابل خاصة، ثومية",
    },
    price: 120,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: false,
    isAvailable: true,
    allergies: [3],
  },
  {
    id: 21,
    number: "D4",
    categoryId: 4,
    name: {
      en: "Meat Arayes (4 peices)",
      cs: "Arayes s masem (4 ks)",
      ar: "عرايس لحمة (٤ قطع)",
    },
    description: {
      en: "Arabic bread, lamb and veal meat, onions, parsley",
      cs: "Arabský chléb, jehněčí a telecí maso, cibule, petržel",
      ar: "خبز عربي، لحم خروف و عجل، بصل، بقدونس",
    },
    price: 110,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: false,
    isAvailable: true,
    allergies: [1],
  },
  {
    id: 22,
    number: "D6",
    categoryId: 4,
    name: {
      en: "Meat Pie (3 peices)",
      cs: "Fatajer s masem (3 kusy)",
      ar: "فطاير لحمة (٣ قطع)",
    },
    description: {
      en: "Lamb meat, Onions, Parsley, Nuts",
      cs: "těsto plněné jehněčím masem, cibule, petržel, ořechy",
      ar: "لحمة عجل، بصل، بقدونس، مكسرات",
    },
    price: 99,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: false,
    isAvailable: true,
    allergies: [1,8],
  },
  {
    id: 23,
    number: "D7",
    categoryId: 4,
    name: {
      en: "Cheese Pie (3 peices)",
      cs: "Fatajer se sýrem (3 kusy)",
      ar: "فطاير جبنة (٣ قطع)",
    },
    description: {
      en: "White cheese, Mint",
      cs: "těsto plněné sýrem s mátou",
      ar: "جبنة بيضاء، نعناع",
    },
    price: 99,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: true,
    isAvailable: true,
    allergies: [1,7],
  },
  {
    id: 24,
    number: "D8",
    categoryId: 4,
    name: {
      en: "Spinach Pie (3 peices)",
      cs: "Fatajer se špenátem (3 kusy)",
      ar: "فطاير سبانخ (٣ قطع)",
    },
    description: {
      en: "Spinach, Onions, Garlic, Lemon juice",
      cs: "těsto plněné špenátem, cibule, česnek, citronová šťáva",
      ar: "سبانخ، بصل، ثوم، عصير ليمون",
    },
    price: 99,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: true,
    isAvailable: true,
    allergies: [1],
  },
  {
    id: 25,
    number: "D9",
    categoryId: 4,
    name: {
      en: "Appetisers Platter",
      cs: "Výběr z nejlepších předkrmů",
      ar: "صحن مقبلات مشكل",
    },
    description: {
      en: "Hummus, Baba Ghanoush, Stuffed Grape Leaves, Kibbeh, Falafel, Tabbouleh, Meat Pie, Cheese Pie, Spinach pie",
      cs: "Hummus, Baba ghanúš, plněné vinné listy, kibbeh, falafel, tabbouleh, fatajer s masem, sýrem a špenátem",
      ar: "حمص، بابا غنوج، ورق عنب، كبة، فلافل، تبولة، فطاير لحمة و جبنة و سبانخ",
    },
    price: 390,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: false,
    isAvailable: true,
    allergies: [1,7,8,11],
  },
  {
    id: 26,
    number: "E1",
    categoryId: 5,
    name: {
      en: "Mansaf",
      cs: "Mansaf",
      ar: "منسف",
    },
    description: {
      en: "350g of Lamb meat, Rice, Nuts, Parsley, Cooked yogurt for mansaf",
      cs: "350g jehněčí maso, rýže, ořechy, petržel, Vařený jogurt na mansaf",
      ar: "٣٥٠غ لحم خروف ، أرز، مكسرات، بقدونس، لبن (زبادي) مطبوخ للمنسف",
    },
    price: 339,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: false,
    isAvailable: true,
    allergies: [7,8],
  },
  {
    id: 27,
    number: "E2",
    categoryId: 5,
    name: {
      en: "Qidreh",
      cs: "Qidreh",
      ar: "قدرة",
    },
    description: {
      en: "350g of Lamb and Veal meat/ Chicken, Rice, Garlic, Chickpeas, Onions, Nuts",
      cs: "350g jehněčí a telecí maso/kuřecí maso, rýže, česnek, cizrna, cibule, ořechy",
      ar: "٣٥٠غ لحم خروف و عجل/ دجاج، أرز، ثوم، حمص، بصل، مكسرات",
    },
    price: 339,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: false,
    isAvailable: true,
    allergies: [8],
  },
  {
    id: 28,
    number: "E3",
    categoryId: 5,
    name: {
      en: "Musakhan",
      cs: "Musakhan",
      ar: "مسخن",
    },
    description: {
      en: "Bread, 350g of Chicken, Onions, Sumac, Olive oil, Nuts",
      cs: "chléb, 350g kuřecí maso, cibule, sumak, olivový olej, ořechy",
      ar: "خبز، ٣٥٠غ دجاج، بصل، سماق، زيت زيتون، مكسرات",
    },
    price: 290,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: false,
    isAvailable: true,
    allergies: [1,8],
  },
  {
    id: 29,
    number: "E4",
    categoryId: 5,
    name: {
      en: "kufta",
      cs: "Kufta",
      ar: "كفتة",
    },
    description: {
      en: "200g of Lamb and Veal meat, Parsley, Onions, Tomatoes, French fries/ Rice/ Bulgur",
      cs: "200g jehněčí a telecí maso, petržel, cibule, rajčata, hranolky/rýže/Bulgur",
      ar: "٢٠٠غ لحم خروف و عجل، بقدونس، بصل، بندورة، بطاطس مقلية/ ارز / برغل",
    },
    price: 295,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: false,
    isAvailable: true,
    allergies: [1],
  },
  {
    id: 30,
    number: "E5",
    categoryId: 5,
    name: {
      en: "kufta With Tahini",
      cs: "Kufta s tahini",
      ar: "كفتة بطحينة",
    },
    description: {
      en: "200g of Lamb and Veal meat, Parsley, Onions, tahini, French fries/ Rice/ Bulgur",
      cs: "200g jehněčí a telecí maso, petržel, cibule, tahini, hranolky/rýže/Bulgur",
      ar: "٢٠٠غ لحم خروف و عجل، بقدونس ، بصل، طحينة، بطاطس مقلية/ ارز / برغل",
    },
    price: 295,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: false,
    isAvailable: true,
    allergies: [1,11],
  },
  {
    id: 31,
    number: "F1",
    categoryId: 6,
    name: {
      en: "Shish Taouk",
      cs: "Shish Taouk",
      ar: "شيش طاووق",
    },
    description: {
      en: "200g of Grilled Chicken breast on skewers, Garlic, Special seasoning, French fries/ Rice/ Bulgur, Garlic sauce",
      cs: "200g grilovaná kuřecí prsa na špízu, česnek, speciální koření, hranolky/ rýže/ Bulgur, česneková omáčka",
      ar: "٢٠٠غ صدور دجاج، ثوم، توابل خاصة، بطاطس مقلية/ ارز / برغل، ثومية",
    },
    price: 280,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: false,
    isAvailable: true,
    allergies: [1,3,7],
  },
  {
    id: 32,
    number: "F2",
    categoryId: 6,
    name: {
      en: "Chicken Mosahab",
      cs: "Kuřecí Mosahab",
      ar: "دجاج مسحب",
    },
    description: {
      en: "200g of Chicken thigh, French fries/ Rice/ Bulgur, Garlic sauce",
      cs: "200g kuřecí stehno, hranolky/ rýže/ volská oka, česneková omáčka",
      ar: "٢٠٠غ فخد دجاجة، بطاطس مقلية/ ارز / برغل، ثومية",
    },
    price: 245,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: false,
    isAvailable: true,
    allergies: [1,3],
  },
  {
    id: 33,
    number: "F3", // was F4, now sequential
    categoryId: 6,
    name: {
      en: "Shish Kebeb",
      cs: "Shish Kebeb",
      ar: "شيش كباب",
    },
    description: {
      en: "200g of Grilled lamb and veal meat on skewers, Onions, Parsley, French fries/ Rice/ Bulgur, Tahini",
      cs: "200g Grilované jehněčí a telecí maso na špízu, cibule, petržel, hranolky/ rýže/ Bulgur, tahini",
      ar: "٢٠٠غ لحم خروف و عجل، بصل، بقدونس، بطاطس مقلية/ ارز / برغل، طحينة",
    },
    price: 320,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: false,
    isAvailable: true,
    allergies: [1,11],
  },
  {
    id: 34,
    number: "F4", // was F5, now sequential
    categoryId: 6,
    name: {
      en: "Gilled lamb meat",
      cs: "Grilované jehněčí maso",
      ar: "لحم خروف مشوي",
    },
    description: {
      en: "200g of Lamb meat, French fries/ Rice/ Bulgur",
      cs: "200g jehněčí maso, hranolky/ rýže/ Bulgur",
      ar: "٢٠٠غ لحم خروف، بطاطس مقلية/ ارز / برغل",
    },
    price: 379,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: false,
    isAvailable: true,
    allergies: [1],
  },
  {
    id: 35,
    number: "F5", // was F6, now sequential
    categoryId: 6,
    name: {
      en: "Lamb Ribs",
      cs: "Grilovaná jehněčí kotletky",
      ar: "ريش خروف",
    },
    description: {
      en: "4 pieces of Lamb ribs, French fries/ Rice/ Bulgur",
      cs: "4 kusy jehněčí kotlety, hranolky/ rýže/ Bulgur",
      ar: "٤ قطع ريش خروف، بطاطس مقلية/ ارز / برغل",
    },
    price: 439,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: false,
    isAvailable: true,
    allergies: [1],
  },
  {
    id: 36,
    number: "F6", // was F7, now sequential
    categoryId: 6,
    name: {
      en: "Mixed Grills For One Person (400g)",
      cs: "Mixed gril pro 1 osobu (400g)",
      ar: "مشاوي مشكل لشخص (٤٠٠غ)",
    },
    description: {
      en: "Shish Taouk, Shish Kebeb, Lamb cubes, 1x Lamb ribs, Chicken wings, French fries/ Rice/ Bulgur, Garlic sauce, Tahini",
      cs: "Shish tatouk, shish kebab, jehněčí kousky, 1x jehněčí kotlet, kuřecí křídla, hranolky/ rýže/ bulgur, česneková omáčka, Tahini",
      ar: "شيش طاووق، شيش كباب، قطع لحم خروف، ريشة خروف، جوانح دجاج ، بطاطس مقلية/ أرز/ برغل ، ثومية ، طحينة",
    },
    price: 490,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: false,
    isAvailable: true, 
    allergies: [1,3,7,11],
  },
  {
    id: 37,
    number: "F7", // was F8, now sequential
    categoryId: 6,
    name: {
      en: "Mixed Grills For Two People (800g)",
      cs: "Mixed gril pro 2 osoby (800g)",
      ar: "مشاوي مشكل لشخصين (٨٠٠غ)",
    },
    description: {
      en: "Shish Taouk, Shish Kebeb, Lamb cubes, 2x Lamb ribs, Chicken wings, French fries/ Rice/ Bulgur, Garlic sauce, Tahini",
      cs: "Shish tatouk, shish kebab, jehněčí kousky, 2x jehněčí kotlet, kuřecí křídla, hranolky/ rýže/ bulgur, česneková omáčka, Tahini",
      ar: "شيش طاووق، شيش كباب، قطع لحم خروف، ريشتين خروف، جوانح دجاج ، بطاطس مقلية/ أرز/ برغل ، ثومية ، طحينة",
    },
    price: 950,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: false,
    isAvailable: true,
    allergies: [1,3,7,11],
  },
  {
    id: 38,
    number: "F8", // was F9, now sequential
    categoryId: 6,
    name: {
      en: "Mixed Grills For Three People (1200g)",
      cs: "Mixed gril pro 3 osoby (1200g)",
      ar: "مشاوي مشكل لثلاث أشخاص (١٢٠٠غ)",
    },
    description: {
      en: "Shish Taouk, Shish Kebeb, Lamb cubes, 1x Lamb ribs, Chicken wings, French fries/ Rice/ Bulgur, Garlic sauce, Tahini",
      cs: "Shish tatouk, shish kebab, jehněčí kousky, 1x jehněčí kotlet, kuřecí křídla, hranolky/ rýže/ bulgur, česneková omáčka, Tahini",
      ar: "شيش طاووق، شيش كباب، قطع لحم خروف، ثلاث ريشات خروف، جوانح دجاج ، بطاطس مقلية/ أرز/ برغل ، ثومية ، طحينة",
    },
    price: 1400,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: false,
    isAvailable: true,
    allergies: [1,3,7,11],
  },
  {
    id: 39,
    number: "G1",
    categoryId: 7,
    name: {
      en: "Grilled Salmon",
      cs: "Grilování losos",
      ar: "سلمون مشوي",
    },
    description: {
      en: "200g of Salmon, Rosemary, Butter, Lemon, French fries/ Rice/ Bulgur",
      cs: "200g losos, rozmarýn, máslo, citron, hranolky/ rýže/ Bulgur",
      ar: "٢٠٠غ سلمون، إكليل الجبل ، زبدة، ليمون، بطاطس مقلية/ أرز / برغل",
    },
    price: 360,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: false,
    isAvailable: true,
    allergies: [1,4,7],
  },
  {
    id: 40,
    number: "G2",
    categoryId: 7,
    name: {
      en: "Sea-bass",
      cs: "Mořský vlk",
      ar: "سمكة القاروس",
    },
    description: {
      en: "300-350g Silver seabream, Garlic, Coriander, Lemon, French fries/ Rice/ Bulgur",
      cs: "300-350g mořský vlk, česnek, koriandr, citron, hranolky/ rýže/ Bulgur",
      ar: "القاروس، ثوم، كزبرة، ليمون، بطاطس مقلية/ أرز / برغل",
    },
    price: 420,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: false,
    isAvailable: true,
    allergies: [1,4],
  },
  {
    id: 41,
    number: "G3",
    categoryId: 7,
    name: {
      en: "Shrimp Bowl",
      cs: "Krevetová miska",
      ar: "زبدية الجمبري",
    },
    description: {
      en: "Shrimps, Tomatoes, Chilli, Onions, Garlic, Lemon juice",
      cs: "krevety, rajčata, chilli, cibule, česnek, citronová šťáva",
      ar: "جمبري، بندورة، شطة، بصل ، ثوم، عصير ليمون",
    },
    price: 460,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: false,
    isAvailable: true,
    allergies: [4],
  },
  {
    id: 42,
    number: "G4",
    categoryId: 7,
    name: {
      en: "Shrimp With Butter and Garlic",
      cs: "Krevety na másle a česneku",
      ar: "جمبري مع الزبدة و الثوم",
    },
    description: {
      en: "Shrimps, Butter, Garlic,French fries/ Rice/ Bulgur",
      cs: "krevety, máslo, česnek, hranolky/ rýže/ Bulgur",
      ar: "جمبري، زبدة، ثوم، بطاطس مقلية/ أرز / برغل",
    },
    price: 390,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: false,
    isAvailable: true,
    allergies: [1,4,7],
  },
  {
    id: 44,
    number: "H1",
    categoryId: 8,
    name: {
      en: "French Fries",
      cs: "Hranolky",
      ar: "بطاطس مقلية",
    },
    description: {
      en: "",
      cs: "",
      ar: "",
    },
    price: 75,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: false,
    isAvailable: true,
    allergies: [],
  },
  {
    id: 45,
    number: "H2",
    categoryId: 8,
    name: {
      en: "Rice",
      cs: "Rýže",
      ar: "أرز",
    },
    description: {
      en: "",
      cs: "",
      ar: "",
    },
    price: 65,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: false,
    isAvailable: true,
    allergies: [],
  },
  {
    id: 46,
    number: "H3",
    categoryId: 8,
    name: {
      en: "Bulgur",
      cs: "Bulgur",
      ar: "برغل",
    },
    description: {
      en: "",
      cs: "",
      ar: "",
    },
    price: 65,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: false,
    isAvailable: true,
    allergies: [],
  },
  {
    id: 47, // was 48
    number: "I1",
    categoryId: 9,
    name: {
      en: "Baklava",
      cs: "Baklava",
      ar: "بقلاوة",
    },
    description: {
      en: "Phyllo dough, Butter, Pistachios/ Walnuts, Sugar syrup",
      cs: "filo těsto, máslo, pistácie/vlaštské ořechy, cukrový sirup",
      ar: "عجينة الفيلو، زبدة، فستق/ جوز، شراب السكر",
    },
    price: 75,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: false,
    isAvailable: true,
    allergies: [1,7,8],
  },
  {
    id: 48, // was 49
    number: "I2",
    categoryId: 9,
    name: {
      en: "Knafeh",
      cs: "Knafeh",
      ar: "كنافة",
    },
    description: {
      en: "Kadayif spun pastry dough, Akkawi cheese, Butter, Sugar syrup",
      cs: "těsto kadayif, sýr Akkawi, máslo, cukrový sirup",
      ar: "عجينة الكنافة، جبنة عكاوي، زبدة، شراب السكر",
    },
    price: 110,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: false,
    isAvailable: true,
    allergies: [1,7,8],
  },
  {
    id: 49, // was 50
    number: "J1",
    categoryId: 10,
    name: {
      en: "Water",
      cs: "voda ",
      ar: "ماء",
    },
    description: {
      en: "Still or sparkling water 0.5l",
      cs: "Neperlivá nebo perlivá voda 0.5l",
      ar: "ماء عادي أو غازي 0.5 لتر",
    },
    price: 45,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: false,
    isAvailable: true,
    allergies: [],
  },
  {
    id: 50, // was 51
    number: "J2",
    categoryId: 10,
    name: {
      en: "Palestine cola 0.33L",
      cs: "Palestine cola 0.33L",
      ar: "كولا فلسطين 0.33 لتر",
    },
    description: {
      en: "",
      cs: "",
      ar: "",
    },
    price: 50,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: false,
    isAvailable: true,
    allergies: [],
  },
  {
    id: 51, // was 52
    number: "J3",
    categoryId: 10,
    name: {
      en: "Palestine orange soda 0.33L",
      cs: "Palestine pomerančový soda 0.33L",
      ar: "برتقال فلسطين 0.33 لتر",
    },
    description: {
      en: "",
      cs: "",
      ar: "",
    },
    price: 50,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: false,
    isAvailable: true,
    allergies: [],
  },
  {
    id: 52, // was 53
    number: "J4",
    categoryId: 10,
    name: {
      en: "Flavored Mattoni 0.5L",
      cs: "Ochucený Mattoni 0.5L",
      ar: "ماتوني بنكهة 0.5 لتر",
    },
    description: {
      en: "",
      cs: "",
      ar: "",
    },
    price: 55,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: false,
    isAvailable: true,
    allergies: [],
  },
  {
    id: 53, // was 54
    number: "J5",
    categoryId: 10,
    name: {
      en: "Relax Juice 0.3L",
      cs: "Relax šťáva 0.3L",
      ar: "عصير ريلاكس 0.3 لتر",
    },
    description: {
      en: "",
      cs: "",
      ar: "",
    },
    price: 45,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: false,
    isAvailable: true,
    allergies: [],
  },
  {
    id: 54, // was 55
    number: "J6",
    categoryId: 10,
    name: {
      en: "Frizbe Flavored Soda 0.25L",
      cs: "Frizbe Ochucená Soda 0.25L",
      ar: "فريزبي بنكهة 0.25 لتر",
    },
    description: {
      en: "",
      cs: "",
      ar: "",
    },
    price: 60,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: false,
    isAvailable: true,
    allergies: [],
  },
  {
    id: 55, // was 56
    number: "J7",
    categoryId: 10,
    name: {
      en: "Non Alcoholic Beer 0.5L",
      cs: "Nealkoholické pivo 0.5L",
      ar: "بيرة بدون كحول 0.5 لتر",
    },
    description: {
      en: "",
      cs: "",
      ar: "",
    },
    price: 60,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: false,
    isAvailable: true,
    allergies: [],
  },
  {
    id: 56, // was 57
    number: "J8",
    categoryId: 10,
    name: {
      en: "Palestine Watermelon Soda 1L",
      cs: "Palestine melounová soda 1L",
      ar: "بطيخ فلسطين 1 لتر",
    },
    description: {
      en: "",
      cs: "",
      ar: "",
    },
    price: 80,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: false,
    isAvailable: true,
    allergies: [],
  },
  {
    id: 57, // was 58
    number: "J9",
    categoryId: 10,
    name: {
      en: "Non Alchololic Wine 0.75L",
      cs: "Nealkoholické víno 0.75L",
      ar: "نبيذ بدون كحول 0.75 لتر",
    },
    description: {
      en: "",
      cs: "",
      ar: "",
    },
    price: 380,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: false,
    isAvailable: true,
    allergies: [],
  },
  {
    id: 58, // was 59
    number: "J10",
    categoryId: 10,
    name: {
      en: "Non Alchololic Champaign 0.75L",
      cs: "Nealkoholické šampaňské 0.75L",
      ar: "شامبانيا بدون كحول 0.75 لتر",
    },
    description: {
      en: "",
      cs: "",
      ar: "",
    },
    price: 380,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: false,
    isAvailable: true,
    allergies: [],
  },
];

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
  // check if it's between 12 PM and 3 PM and not weekend
  if (now.getDay() === 0 || now.getDay() === 6) {
    console.log("It's weekend, not lunch time.");
    return false;
  }
  const hours = now.getHours();
  // Lunch time is between 12:00 and 15:00
  console.log("Current hour:", hours);
  return hours >= 12 && hours < 15;
}

export function getCurrentWeekDay(): number {
  const now = new Date();
  const day = now.getDay();
  console.log("Current day:", day);

  // Convert from Sunday-based (0-6) to Monday-based (1-5)
  return day === 0 ? 5 : day;
}