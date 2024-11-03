import { MenuItem, Categories, MenuCategory } from "@/models/menu";

export const checkEnvironment = () => {
  let base_url =
    process.env.NEXT_PUBLIC_URL ||
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://theolivebranchprague.com";
  return base_url;
};

// export const groupArrayBycategory:(arr: menuItem[])=> [{category:Categories,items:menuItem[]}] = (arr) => [...new Set(arr.map(e => e.category))].map(category => ({ category: category, items: Object.fromEntries(arr.filter(e => e.category === category).flatMap(e => Object.entries(e).filter(f => f[0] !== 'category')).map((e, i) => [`item${i + 1}`, e[1]])) }));
export const groupArrayByCategory: (arr: MenuItem[]) => Array<MenuCategory> = (
  arr
) => {
  //[MenuCategory]
  const newMenu: Array<MenuCategory> = [];
  if (arr) {
    const categoriesSet = new Set<Categories>(
      arr.map((e: MenuItem) => e.category)
    );
    categoriesSet.forEach((category: Categories) => {
      newMenu.push({
        category: category,
        items: arr.filter((item: MenuItem) => item.category === category),
      });
    });
  }
  return newMenu;
};
// [...new Set<any>(arr.map((e:menuItem) => e.category))].map((category:Categories) => ({ category: category, items: arr.filter(e => e.category === category)
// .flatMap(e => Object.entries(e)
// .filter(f => f[0] !== 'category')).map(e => e[1]) })));
