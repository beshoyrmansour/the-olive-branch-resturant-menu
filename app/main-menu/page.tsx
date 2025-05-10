"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CategorySection } from "@/components/category-section";
import { useLanguage } from "@/components/language-provider";
import { mainMenu, categories, getMenuItemsByCategory } from "@/lib/data";
import { FooterWithMap } from "@/components/footer-with-map";
import { DecorativeDivider } from "@/components/decorative-divider";

export default function MainMenuPage() {
  const { t, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  // Filter menu items by category if a specific category is selected
  const displayedItems =
    selectedCategory === "all"
      ? mainMenu
      : mainMenu.filter(
          (item) => item.categoryId === Number.parseInt(selectedCategory)
        );

  // Get unique category IDs from the main menu
  const menuCategories = Array.from(
    new Set(mainMenu.map((item) => item.categoryId))
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container px-4 py-8 md:px-6">
        <div className="flex items-center gap-4 mb-6">
          <h1 className="text-3xl font-raleway-medium text-olive">
            {t("mainMenu", {
              en: "Main Menu",
              cs: "Hlavní Menu",
              ar: "القائمة الرئيسية",
            })}
          </h1>
        </div>

        <DecorativeDivider />

        <Tabs
          defaultValue={selectedCategory}
          onValueChange={setSelectedCategory}
          className="w-full justify-center flex flex-col"
        >
          <TabsList className="mb-6 rounded-xl overflow-hidden sticky top-[85px] z-20 ">
            <TabsTrigger
              value="all"
              className="data-[state=active]:bg-olive data-[state=active]:text-white"
            >
              {t("allCategories", {
                en: "All Categories",
                cs: "Všechny Kategorie",
                ar: "جميع الفئات",
              })}
            </TabsTrigger>
            {categories
              .filter((cat) => menuCategories.includes(cat.id))
              .map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id.toString()}
                  className="data-[state=active]:bg-olive data-[state=active]:text-white"
                >
                  {category.name[language]}
                </TabsTrigger>
              ))}
          </TabsList>

          <TabsContent value="all">
            {menuCategories.map((catId) => {
              const categoryItems = getMenuItemsByCategory(mainMenu, catId);
              return (
                <CategorySection
                  key={catId}
                  categoryId={catId}
                  items={categoryItems}
                />
              );
            })}
          </TabsContent>

          {categories
            .filter((cat) => menuCategories.includes(cat.id))
            .map((category) => (
              <TabsContent key={category.id} value={category.id.toString()}>
                <CategorySection
                  categoryId={category.id}
                  items={getMenuItemsByCategory(mainMenu, category.id)}
                />
              </TabsContent>
            ))}
        </Tabs>
      </main>

      <FooterWithMap />
    </div>
  );
}
