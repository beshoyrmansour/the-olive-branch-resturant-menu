export enum Categories {
  'předkrmy',
  'Východní desky',
  'Grilovaný',
  'Přílohy',
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
}

export type MenuCategory = {
  category: Categories;
  items: MenuItem[];
}