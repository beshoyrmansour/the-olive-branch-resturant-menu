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
  { id: 1, name: { en: "Starters", cs: "Předkrmy", ar: "المقبلات" } },
  {
    id: 2,
    name: { en: "Main Course", cs: "Hlavní Chod", ar: "الطبق الرئيسي" },
  },
  { id: 3, name: { en: "Desserts", cs: "Dezerty", ar: "الحلويات" } },
  { id: 4, name: { en: "Drinks", cs: "Nápoje", ar: "المشروبات" } },
  { id: 5, name: { en: "Soups", cs: "Polévky", ar: "الحساء" } },
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
  // Starters
  {
    id: 1,
    number: "S1",
    categoryId: 1,
    name: {
      en: "Caprese Salad",
      cs: "Caprese Salát",
      ar: "سلطة كابريزي",
    },
    description: {
      en: "Fresh mozzarella, tomatoes, and basil drizzled with balsamic glaze",
      cs: "Čerstvá mozzarella, rajčata a bazalka s balzamikovou glazurou",
      ar: "جبنة موزاريلا طازجة وطماطم وريحان مع صلصة البلسميك",
    },
    price: 110,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: false,
    isAvailable: true,
    allergies: [4],
  },
  {
    id: 2,
    number: "S2",
    categoryId: 1,
    name: {
      en: "Garlic Bread",
      cs: "Česnekový Chléb",
      ar: "خبز بالثوم",
    },
    description: {
      en: "Freshly baked bread with garlic butter and herbs",
      cs: "Čerstvě upečený chléb s česnekovým máslem a bylinkami",
      ar: "خبز طازج مع زبدة الثوم والأعشاب",
    },
    price: 75,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: false,
    isAvailable: true,
    allergies: [1, 4],
  },

  // Soups
  {
    id: 3,
    number: "SO1",
    categoryId: 5,
    name: {
      en: "French Onion Soup",
      cs: "Francouzská Cibulačka",
      ar: "حساء البصل الفرنسي",
    },
    description: {
      en: "Traditional onion soup topped with cheese and croutons",
      cs: "Tradiční cibulová polévka se sýrem a krutony",
      ar: "حساء البصل التقليدي مع الجبن والخبز المحمص",
    },
    price: 85,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: false,
    isAvailable: true,
    allergies: [1, 4],
  },
  {
    id: 4,
    number: "SO2",
    categoryId: 5,
    name: {
      en: "Chicken Noodle Soup",
      cs: "Kuřecí Polévka s Nudlemi",
      ar: "شوربة الدجاج بالمعكرونة",
    },
    description: {
      en: "Homemade chicken soup with vegetables and noodles",
      cs: "Domácí kuřecí polévka se zeleninou a nudlemi",
      ar: "شوربة دجاج محلية الصنع مع خضروات ومعكرونة",
    },
    price: 80,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: false,
    isAvailable: true,
    allergies: [1],
  },

  // Main Courses
  {
    id: 5,
    number: "M1",
    categoryId: 2,
    name: {
      en: "Beef Tenderloin Steak",
      cs: "Hovězí Steak z Pravé Svíčkové",
      ar: "ستيك لحم البقر",
    },
    description: {
      en: "Premium beef tenderloin grilled to your preference, served with roasted vegetables and mashed potatoes",
      cs: "Prvotřídní hovězí svíčková grilovaná podle vašeho přání, podávaná s pečenou zeleninou a bramborovou kaší",
      ar: "شريحة لحم بقري فاخرة مشوية حسب تفضيلك، تقدم مع خضروات محمرة وبطاطس مهروسة",
    },
    price: 320,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: false,
    isAvailable: true,
    allergies: [4],
  },
  {
    id: 6,
    number: "M2",
    categoryId: 2,
    name: {
      en: "Grilled Salmon",
      cs: "Grilovaný Losos",
      ar: "سمك السلمون المشوي",
    },
    description: {
      en: "Fresh salmon fillet grilled with lemon and herbs, served with steamed vegetables",
      cs: "Čerstvý filet z lososa grilovaný s citronem a bylinkami, podávaný s dušenou zeleninou",
      ar: "فيليه سمك السلمون الطازج المشوي مع الليمون والأعشاب، يقدم مع خضروات مطهوة على البخار",
    },
    price: 260,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: false,
    isAvailable: true,
    allergies: [3],
  },
  {
    id: 7,
    number: "M3",
    categoryId: 2,
    name: {
      en: "Vegetable Curry",
      cs: "Zeleninové Kari",
      ar: "كاري الخضار",
    },
    description: {
      en: "Mixed vegetables in a rich curry sauce, served with basmati rice",
      cs: "Míchaná zelenina v bohaté kari omáčce, podávaná s rýží basmati",
      ar: "خضروات مشكلة في صلصة كاري غنية، تقدم مع أرز بسمتي",
    },
    price: 180,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: true,
    isAvailable: true,
    allergies: [],
  },

  // Desserts
  {
    id: 8,
    number: "D1",
    categoryId: 3,
    name: {
      en: "Chocolate Fondant",
      cs: "Čokoládový Fondán",
      ar: "فوندان الشوكولاتة",
    },
    description: {
      en: "Warm chocolate cake with a molten center, served with vanilla ice cream",
      cs: "Teplý čokoládový dort s tekutým středem, podávaný s vanilkovou zmrzlinou",
      ar: "كعكة شوكولاتة دافئة ذات مركز سائل، تقدم مع آيس كريم الفانيليا",
    },
    price: 95,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: false,
    isAvailable: true,
    allergies: [1, 2, 4],
  },
  {
    id: 9,
    number: "D2",
    categoryId: 3,
    name: {
      en: "Fruit Sorbet",
      cs: "Ovocný Sorbet",
      ar: "سوربيه الفواكه",
    },
    description: {
      en: "Refreshing fruit sorbet made with seasonal fruits",
      cs: "Osvěžující ovocný sorbet vyrobený ze sezónního ovoce",
      ar: "سوربيه فواكه منعش مصنوع من الفواكه الموسمية",
    },
    price: 75,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: true,
    isAvailable: true,
    allergies: [],
  },

  // Drinks
  {
    id: 10,
    number: "DR1",
    categoryId: 4,
    name: {
      en: "Fresh Orange Juice",
      cs: "Čerstvý Pomerančový Džus",
      ar: "عصير برتقال طازج",
    },
    description: {
      en: "Freshly squeezed orange juice",
      cs: "Čerstvě vymačkaný pomerančový džus",
      ar: "عصير برتقال طازج معصور",
    },
    price: 65,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: true,
    isAvailable: true,
    allergies: [],
  },
  {
    id: 11,
    number: "DR2",
    categoryId: 4,
    name: {
      en: "House Wine",
      cs: "Domácí Víno",
      ar: "نبيذ المنزل",
    },
    description: {
      en: "Glass of our selected house wine (red or white)",
      cs: "Sklenka našeho vybraného domácího vína (červené nebo bílé)",
      ar: "كأس من نبيذ المنزل المختار (أحمر أو أبيض)",
    },
    price: 85,
    img: "/placeholder.svg?height=150&width=150",
    isVegan: true,
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
