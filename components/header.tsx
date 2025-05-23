"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useLanguage } from "@/components/language-provider";
import { LanguageSelector } from "@/components/language-selector";
import { RestaurantLogo } from "@/components/restaurant-logo";

export function Header() {
  const pathname = usePathname();
  const { t, dir } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    // {
    //   href: "/",
    //   label: {
    //     en: "Home",
    //     cs: "Domů",
    //     ar: "الرئيسية",
    //   },
    // },
    {
      href: "/lunch-menu",
      label: {
        en: "Lunch Menu",
        cs: "Obědové Menu",
        ar: "قائمة الغداء",
      },
    },
    {
      href: "/main-menu",
      label: {
        en: "Main Menu",
        cs: "Hlavní Menu",
        ar: "القائمة الرئيسية",
      },
    },
  ];

  return (
    <header
      dir={dir}
      className="sticky top-0 z-50 w-full border-b glossy backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container flex h-20 items-center justify-between">
        <div className="lg:hidden flex items-center gap-2 ">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="outline" size="icon" className="rounded-xl">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="lg:hidden rounded-r-2xl">
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-lg font-medium ${
                      pathname === item.href
                        ? "text-olive"
                        : "text-muted-foreground"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {t("nav." + item.href, item.label)}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
        <Link href="/" className="flex items-center ">
          <RestaurantLogo variant="small" />
        </Link>
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-raleway-medium transition-colors hover:text-olive ${
                pathname === item.href ? "text-olive" : "text-muted-foreground"
              }`}
            >
              {t("nav." + item.href, item.label)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSelector />
        </div>
      </div>
    </header>
  );
}
