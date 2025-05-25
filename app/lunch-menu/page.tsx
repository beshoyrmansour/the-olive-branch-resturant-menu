"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Clock } from "lucide-react";
import { CategorySection } from "@/components/category-section";
import { useLanguage } from "@/components/language-provider";
import {
  lunchMenu,
  weekDays,
  getMenuItemsByDay,
  getMenuItemsByCategory,
  isLunchTime,
  getCurrentWeekDay,
} from "@/lib/data";
import { FooterWithMap } from "@/components/footer-with-map";
import { DecorativeDivider } from "@/components/decorative-divider";

export default function LunchMenuPage() {
  const { t, language, dir } = useLanguage();
  const [selectedDay, setSelectedDay] = useState<string>("1");
  const [isLunch, setIsLunch] = useState(true);

  // Set the current weekday on initial load
  useEffect(() => {
    const currentDay = getCurrentWeekDay().toString();
    setSelectedDay(currentDay);
    setIsLunch(isLunchTime());
  }, []);

  const dayItems = getMenuItemsByDay(lunchMenu, Number.parseInt(selectedDay));

  // Get unique category IDs for the selected day
  const categoriesForDay = Array.from(
    new Set(dayItems.map((item) => item.categoryId))
  );

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

        <Tabs
          defaultValue={selectedDay}
          onValueChange={setSelectedDay}
          className="w-full"
        >
          <TabsList className="w-full grid grid-cols-5 rounded-xl overflow-hidden sticky top-[85px] z-20 ">
            {weekDays.map((day) => (
              <TabsTrigger
                key={day.id}
                value={day.id.toString()}
                className="data-[state=active]:bg-olive data-[state=active]:text-white"
              >
                <span className="hidden md:inline">{day.name[language]}</span>
                <span className="md:hidden">{day.shortName[language]}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {weekDays.map((day) => (
            <TabsContent key={day.id} value={day.id.toString()}>
              <div className="mt-6">
                {categoriesForDay.length > 0 ? (
                  categoriesForDay.map((catId) => {
                    const categoryItems = getMenuItemsByCategory(
                      dayItems,
                      catId
                    );
                    return (
                      <CategorySection
                        key={catId}
                        categoryId={catId}
                        items={categoryItems}
                      />
                    );
                  })
                ) : (
                  <p className="text-muted-foreground">
                    {t("noItems", {
                      en: "No menu items available for this day.",
                      cs: "Pro tento den nejsou k dispozici žádné položky menu.",
                      ar: "لا توجد عناصر قائمة متاحة لهذا اليوم.",
                    })}
                  </p>
                )}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </main>

      <FooterWithMap />
    </div>
  );
}
