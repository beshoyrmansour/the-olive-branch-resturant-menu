"use client";

import { Header } from "@/components/header";
import { CategorySection } from "@/components/category-section";
import { useLanguage } from "@/components/language-provider";
import { mainMenu, categories, getMenuItemsByCategory } from "@/lib/data";
import { FooterWithMap } from "@/components/footer-with-map";
import { DecorativeDivider } from "@/components/decorative-divider";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

export default function MainMenuPage() {
  const { t, language, dir } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>("");
  const categoriesContainerRef = useRef<HTMLDivElement>(null);

  // Get unique category IDs from the main menu
  const menuCategories = Array.from(
    new Set(mainMenu.map((item) => item.categoryId))
  );

  useEffect(() => {
    if (activeCategory && categoriesContainerRef.current) {
      const activeButton =
        categoriesContainerRef.current.querySelector<HTMLButtonElement>(
          `[data-category-id="${activeCategory}"]`
        );
      if (activeButton) {
        activeButton.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  }, [activeCategory]);

  useEffect(() => {
    if (menuCategories.length > 0) {
      setActiveCategory(`category-${menuCategories[0]}`);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const intersectingEntries = entries.filter((e) => e.isIntersecting);
        if (intersectingEntries.length > 0) {
          const mostVisibleEntry = intersectingEntries.reduce(
            (prev, current) => {
              return prev.intersectionRatio > current.intersectionRatio
                ? prev
                : current;
            }
          );
          setActiveCategory(mostVisibleEntry.target.id);
        }
      },
      {
        rootMargin: "-140px 0px -70% 0px",
        threshold: 0.1, // Trigger when at least 10% of the element is visible
      }
    );

    const elements = menuCategories.map((id) =>
      document.getElementById(`category-${id}`)
    );
    elements.forEach((el) => el && observer.observe(el));

    return () => {
      elements.forEach((el) => el && observer.unobserve(el));
    };
  }, [menuCategories]);

  const handleScrollToCategory = (categoryId: string) => {
    const element = document.getElementById(categoryId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col min-h-screen" dir={dir}>
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

        <div
          ref={categoriesContainerRef}
          className="sticky top-[85px] z-20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 mb-6 rounded-xl overflow-hidden p-2 flex flex-nowrap overflow-x-auto justify-start gap-2"
        >
          {categories
            .filter((cat) => menuCategories.includes(cat.id))
            .map((category) => (
              <Button
                key={category.id}
                data-category-id={`category-${category.id}`}
                variant={
                  activeCategory === `category-${category.id}`
                    ? "default"
                    : "ghost"
                }
                className="hover:bg-olive/20"
                onClick={() =>
                  handleScrollToCategory(`category-${category.id}`)
                }
              >
                {category.name[language]}
              </Button>
            ))}
        </div>

        <div>
          {menuCategories.map((catId) => {
            const categoryItems = getMenuItemsByCategory(mainMenu, catId);
            return (
              <CategorySection
                key={catId}
                id={`category-${catId}`}
                categoryId={catId}
                items={categoryItems}
              />
            );
          })}
        </div>
      </main>

      <FooterWithMap />
    </div>
  );
}
