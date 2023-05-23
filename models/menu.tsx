export enum Categories {
  'Talíře s hommosem',
  'Plněné placky a tortilly',
  'Naše specialita',
  'Něco z našeho grilu',
  'Přílohy',
  'Dezerty',
  'Nápoje'
}

export enum Categories_en {
  'Hummus Section',
  'Sandwiches',
  'Our Specials',
  'Our grill',
  'Extras',
  'Desserts',
  'Beverages'
}

export type MenuItemOption = {
  en_name: string;
  cz_name: string;
  price: string;
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
  options?: Array<MenuItemOption>;
}

export type MenuCategory = {
  category: Categories;
  items: MenuItem[];
    
}
