export enum Categories {
  'Talíře s hummusem',
  'Plněné placky a tortilly',
  'Naše specialita',
  'Něco z našeho grilu',
  'Přílohy'
}
export enum Categories_en {
  'Hummus Section',
  'Sandwiches',
  'Our Specials',
  'Our grill',
  'Extras'
}

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
}

export type MenuCategory = {
  category: Categories;
  items: MenuItem[];
}