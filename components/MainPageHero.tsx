import Link from "next/link";
import { Button } from "@/components/ui/button";

import React from "react";
import { isLunchTime } from "@/lib/data";
import { RestaurantLogo } from "@/components/restaurant-logo";
import { cn } from "@/lib/utils";
import { RestaurantName } from "@/components/RestaurantName";
import TypographyTranslated from "./TypographyTranslated";

const MainPageHero = () => {
  const HIDE_LUNCH_MENU = process.env.NEXT_PUBLIC_HIDE_LUNCH_MENU === "true";

  const showLunchMenu = isLunchTime() && !HIDE_LUNCH_MENU;
  return (
    <section className="py-12 md:py-20 lg:py-24 bg-gradient-to-b from-background to-muted decorative-border">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="mb-6">
            <RestaurantLogo />
          </div>
          <h1 className="text-3xl font-raleway-medium tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-olive">
            <RestaurantName />
          </h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl font-raleway-light">
            <TypographyTranslated
              textKey="homeTagline"
              defaultText="Authentic cuisine in a historical Czech setting since 1892"
              values={{
                en: "Authentic cuisine in a historical Czech setting since 1892",
                cs: "Autentická kuchyně v historickém českém prostředí od roku 1892",
                ar: "مأكولات أصيلة في بيئة تشيكية تاريخية منذ عام 1892",
              }}
            />
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            {/* HIDE LUNCH MENU */}
            {!HIDE_LUNCH_MENU && (
              <Link
                href="/lunch-menu"
                className={cn(!showLunchMenu && "order-2")}
              >
                <Button
                  size="lg"
                  className="w-full sm:w-auto rounded-xl"
                  variant={!showLunchMenu ? "outline" : "default"}
                >
                  <TypographyTranslated
                    textKey="lunchMenu"
                    defaultText="Lunch Menu"
                    values={{
                      en: "Lunch Menu",
                      cs: "Lunchna menu",
                      ar: "قائمة الغداء",
                    }}
                  />{" "}
                  {!showLunchMenu && "(12:00 - 15:00)"}
                </Button>
              </Link>
            )}
            <Link href="/main-menu" className={cn(!showLunchMenu && "order-1")}>
              <Button
                size="lg"
                variant={
                  !HIDE_LUNCH_MENU && showLunchMenu ? "outline" : "default"
                }
                className="w-full sm:w-auto rounded-xl"
              >
                <TypographyTranslated
                  textKey="mainMenu"
                  defaultText="Main Menu"
                  values={{
                    en: "Main Menu",
                    cs: "Hlavní Menu",
                    ar: "القائمة الرئيسية",
                  }}
                />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainPageHero;
