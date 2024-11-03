export type Category =
  | "Talíře s hummusem"
  | "Plněné placky a tortilly"
  | "Naše specialita"
  | "Něco z našeho grilu"
  | "Přílohy"
  | "Dezerty"
  | "Nápoje";

export enum Categories {
  "Talíře s hummusem",
  "Plněné placky a tortilly",
  "Naše specialita",
  "Něco z našeho grilu",
  "Přílohy",
  "Dezerty",
  "Nápoje",
}
export enum Categories_en {
  "Talíře s hummusem" ="Hummus Section",
  "Plněné placky a tortilly" ="Sandwiches",
  "Naše specialita" ="Our Specials",
  "Něco z našeho grilu" ="Our grill",
  "Přílohy" ="Extras",
  "Dezerty" ="Desserts",
  "Nápoje" ="Beverages",
}

export type MenuItemOption = {
  en_name: string;
  cz_name: string;
  price: string;
};

export type MenuItem = {
  id: string;
  number: string;
  category: Categories;
  cz_description: string;
  en_description: string;
  price: string;
  cz_name: string;
  en_name: string;
  img: string;
  isVegan: boolean;
  options?: Array<MenuItemOption>;
  allergy: Array<number>;
};

export type MenuCategory = {
  category: Categories;
  items: MenuItem[];
};
