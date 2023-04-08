export enum Categories {
  'Předkrmy',
  'Východní desky',
  'Grilovaný',
  'Přílohy',
}
export enum Categories_en {
  'Appetizers',
  'Eastern Plates',
  'Grilled',
  'Side dishes',
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