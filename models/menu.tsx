export enum Categories {
  'Mashawi',
  'Side Dishes',
  'Drinks',
  'Main',
}

export type MenuItem = {
  id: string;
  number: string;
  category: Categories;
  description: string;
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

