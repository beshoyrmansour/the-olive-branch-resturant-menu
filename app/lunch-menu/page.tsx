"use client";

import { useState, useEffect, useRef } from "react";
import { Header } from "@/components/header";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Clock, ChefHat, UtensilsCrossed } from "lucide-react";
import { CategorySection } from "@/components/category-section";
import { useLanguage } from "@/components/language-provider";
import {
  lunchMenu,
  weekDays,
  getMenuItemsByDay,
  getMenuItemsByCategory,
  isLunchTime,
  getCurrentWeekDay,
  categories,
} from "@/lib/data";
import { FooterWithMap } from "@/components/footer-with-map";
import { DecorativeDivider } from "@/components/decorative-divider";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import TypographyTranslated from "@/components/TypographyTranslated";
import Link from "next/link";

export default function LunchMenuPage() {
  const { t, language, dir } = useLanguage();
  const [selectedDay, setSelectedDay] = useState<string>("1");
  const [isLunch, setIsLunch] = useState(true);
  const [activeCategory, setActiveCategory] = useState<string>("");
  const categoriesContainerRef = useRef<HTMLDivElement>(null);
  const HIDE_LUNCH_MENU = process.env.NEXT_PUBLIC_HIDE_LUNCH_MENU === "true";
  // Set the current weekday on initial load
  useEffect(() => {
    const currentDay = getCurrentWeekDay().toString();
    setSelectedDay(currentDay);
    setIsLunch(isLunchTime() && !HIDE_LUNCH_MENU);
  }, []);

  const dayItems = getMenuItemsByDay(lunchMenu, Number.parseInt(selectedDay));

  // Get unique category IDs for the selected day
  const categoriesForDay = Array.from(
    new Set(dayItems.map((item) => item.categoryId))
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
    if (categoriesForDay.length > 0) {
      setActiveCategory(`category-${categoriesForDay[0]}`);
    }

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
        rootMargin: "-200px 0px -70% 0px",
        threshold: 0.1, // Trigger when at least 10% of the element is visible
      }
    );

    const elements = categoriesForDay.map((id) =>
      document.getElementById(`category-${id}`)
    );
    elements.forEach((el) => el && observer.observe(el));

    return () => {
      elements.forEach((el) => el && observer.unobserve(el));
    };
  }, [categoriesForDay]);

  const handleScrollToCategory = (categoryId: string) => {
    const element = document.getElementById(categoryId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (HIDE_LUNCH_MENU) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <div className="flex items-center justify-center h-screen">
            <div className="flex flex-col items-center">
              <UtensilsCrossed className="h-24 w-24 text-olive" />
              <h1 className="text-3xl font-raleway-medium text-center  text-olive max-w-80">
                {t("lunchMenuClosed", {
                  en: "Comming Soon!",
                  cs: "Skoro bude!",
                  ar: "قريباً!",
                })}
              </h1>
              <Link href="/main-menu">
                <Button
                  size="lg"
                  variant={"default"}
                  className="w-full sm:w-auto rounded-xl mt-4"
                >
                  <TypographyTranslated
                    textKey="gotToMainMenu"
                    defaultText="Main Menu"
                    values={{
                      en: "Go to Main Menu",
                      cs: "Přejít na hlavní menu",
                    }}
                  />
                </Button>
              </Link>
            </div>
          </div>
        </main>
        <FooterWithMap />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen" dir={dir}>
      <Header />
      <main className="flex-1 container px-4 py-8 md:px-6">
        <div className="flex items-center justify-center gap-4 mb-6 w-full">
          <h1 className="text-3xl font-raleway-medium text-center  text-olive">
            {t("lunchMenu", {
              en: "Lunch Menu",
              cs: "Obědové Menu",
              ar: "قائمة الغداء",
            })}
          </h1>
        </div>

        {!isLunch && (
          <Alert className="mb-6 rounded-xl glossy">
            <Clock className="h-4 w-4" />
            <AlertTitle>
              {t("lunchTimeAlert", {
                en: "Lunch Menu Hours",
                cs: "Hodiny Obědového Menu",
                ar: "ساعات قائمة الغداء",
              })}
            </AlertTitle>
            <AlertDescription>
              {t("lunchTimeDescription", {
                en: "The lunch menu is only available Monday to Friday, from 12:00 to 15:00.",
                cs: "Obědové menu je k dispozici pouze od pondělí do pátku, od 12:00 do 15:00.",
                ar: "قائمة الغداء متاحة فقط من الاثنين إلى الجمعة، من الساعة 12:00 حتى 15:00.",
              })}
            </AlertDescription>
          </Alert>
        )}

        <DecorativeDivider />

        <div className="w-full grid grid-cols-5 rounded-xl overflow-hidden sticky top-[85px] z-30 glossy mb-6">
          {weekDays.map((day) => (
            <Button
              key={day.id}
              variant={selectedDay === day.id.toString() ? "default" : "ghost"}
              onClick={() => setSelectedDay(day.id.toString())}
              className="bg-olive/80 data-[state=active]:bg-olive data-[state=active]:text-white rounded-none flex-1"
            >
              <span className="hidden md:inline">{day.name[language]}</span>
              <span className="md:hidden">{day.shortName[language]}</span>
            </Button>
          ))}
        </div>

        {/* <Alert className="mb-6 rounded-xl glossy flex items-center gap-2"> */}
        <h2
          className={cn(
            "text-2xl font-raleway-medium text-olive text-center items-center gap-2 sticky z-10 flex justify-center mx-auto mb-6"
          )}
        >
          <ChefHat className="h-8 w-8" />
          {t("twoHotMeals", {
            en: "We serve 2 hot meals daily",
            cs: "Denně nabízíme 2 teplá jídla",
            ar: "نحن نقدم وجبتين ساخنتين يوميًا",
          })}
          <ChefHat className="h-8 w-8" />
        </h2>
        {/* </Alert> */}

        {/* {categoriesForDay.length > 0 && (
          <div
            ref={categoriesContainerRef}
            className="sticky top-[135px] z-20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 mb-6 rounded-xl overflow-hidden p-2 flex flex-nowrap overflow-x-auto justify-start gap-2"
          >
            {categories
              .filter((cat) => categoriesForDay.includes(cat.id))
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
        )} */}

        <div>
          {categoriesForDay.length > 0 ? (
            categoriesForDay.map((catId) => {
              const categoryItems = getMenuItemsByCategory(dayItems, catId);
              return (
                <CategorySection
                  key={catId}
                  id={`category-${catId}`}
                  categoryId={catId}
                  items={categoryItems}
                  stickyTopClass="top-[185px]"
                />
              );
            })
          ) : (
            <p className="text-muted-foreground text-center py-10">
              {t("noItems", {
                en: "No menu items available for this day.",
                cs: "Pro tento den nejsou k dispozici žádné položky menu.",
                ar: "لا توجد عناصر قائمة متاحة لهذا اليوم.",
              })}
            </p>
          )}
        </div>
      </main>

      <FooterWithMap />
    </div>
  );
}
