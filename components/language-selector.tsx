"use client";

import { Check, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/components/language-provider";
import Image from "next/image";

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  const languages = [
    {
      code: "en",
      name: "English",
      icon: "🇬🇧",
      image: "/flags/united-kingdom-flag-round-icon-32png",
    },
    {
      code: "cs",
      name: "Čeština",
      icon: "🇨🇿",
      image: "/flags/czech-republic-flag-round-icon-32.png",
    },
    {
      code: "ar",
      name: "العربية",
      icon: "🇪🇬",
      image: "/flags/egypt-flag-round-icon-32.png",
    },
  ];

  const languageImages = {
    en: "/flags/united-kingdom-flag-round-icon-32.png",
    cs: "/flags/czech-republic-flag-round-icon-32.png",
    ar: "/flags/egypt-flag-round-icon-32.png",
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-xl">
          <Image
            src={`${languageImages[language]}`}
            alt={language}
            width={32}
            height={32}
            className="h-8 w-8"
          />
          {/* <Globe className="h-4 w-4" /> */}
          <span className="sr-only">Select language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="rounded-xl glossy">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code as "en" | "cs" | "ar")}
            className="flex items-center justify-between rounded-lg"
          >
            <span>
              {lang.icon} {lang.name}
            </span>
            {language === lang.code && (
              <Check className="h-4 w-4 ml-2 text-olive" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
