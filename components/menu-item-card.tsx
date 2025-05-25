"use client";

import Image from "next/image";
import { Leaf, AlertCircle, Info } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useLanguage } from "@/components/language-provider";
import { type MenuItem, getAllergyById } from "@/lib/data";

interface MenuItemCardProps {
  item: MenuItem;
}

export function MenuItemCard({ item }: MenuItemCardProps) {
  const { t, language, dir } = useLanguage();

  const formatPrice = (price: number) => {
    if (language === "cs") {
      return `${price} Kč`;
    } else if (language === "ar") {
      return `${price} كرونة`;
    } else {
      return `${price} CZK`;
    }
  };

  return (
    <TooltipProvider>
      <Card
        className={`rounded-2xl glossy-card ${
          !item.isAvailable ? "opacity-60" : ""
        }`}
        dir={dir}
      >
        <CardHeader className="p-4">
          <div className="flex justify-between items-start">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-muted-foreground">
                  {item.number}
                </span>
                {item.isVegan && (
                  <Tooltip>
                    <TooltipTrigger>
                      <Leaf className="h-4 w-4 text-olive " />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>
                        {t("vegan", {
                          en: "Vegan",
                          cs: "Veganské",
                          ar: "نباتي",
                        })}
                      </p>
                    </TooltipContent>
                  </Tooltip>
                )}
                {!item.isAvailable && (
                  <Tooltip>
                    <TooltipTrigger>
                      <AlertCircle className="h-4 w-4 text-red-500" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>
                        {t("unavailable", {
                          en: "Currently unavailable",
                          cs: "Momentálně nedostupné",
                          ar: "غير متوفر حاليا",
                        })}
                      </p>
                    </TooltipContent>
                  </Tooltip>
                )}
              </div>
              <CardTitle className="mt-1">{item.name[language]}</CardTitle>
            </div>
            <Badge
              variant="outline"
              className="text-lg font-semibold rounded-xl bg-olive/10 text-olive border-olive/30 whitespace-nowrap"
            >
              {formatPrice(item.price)}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          {
            item.img && item.img !== "/placeholder.svg?height=150&width=150" ? (
              <div className="relative h-40 w-full">
                <Image
                  src={item.img || "/placeholder.svg"}
                  alt={item.name[language]}
                  fill
                  className="object-cover"
                />
              </div>
            ) : null
            // <div className="h-40 w-full menu-card-pattern flex items-center justify-center p-4 bg-olive/5 relative">
            //   <div className="absolute inset-0 opacity-10 bg-olive-pattern"></div>
            //   <div className="text-center z-10">
            //     <div className="text-olive text-lg font-raleway-medium mb-2">
            //       {item.name[language]}
            //     </div>
            //     <div className="text-sm font-raleway-light text-muted-foreground">
            //       {item.description[language]}
            //     </div>
            //   </div>
            // </div>
          }
          <div className="p-4">
            <CardDescription className="text-sm">
              {item.description[language]}
            </CardDescription>
          </div>
        </CardContent>
        {item.allergies.length > 0 && (
          <CardFooter className="p-4 pt-0 flex flex-wrap gap-1">
            {item.allergies.map((allergyId) => {
              const allergy = getAllergyById(allergyId);
              if (!allergy) return null;

              return (
                <TooltipProvider key={allergyId}>
                  <Tooltip>
                    <TooltipTrigger>
                      <Badge variant="secondary" className="text-xs rounded-xl">
                        <Info className="h-3 w-3 mr-1" />
                        {allergy.id} {allergy.name[language]}
                      </Badge>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>
                        {t("allergyInfo", {
                          en: `Contains ${allergy.name.en}`,
                          cs: `Obsahuje ${allergy.name.cs}`,
                          ar: `يحتوي على ${allergy.name.ar}`,
                        })}
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              );
            })}
          </CardFooter>
        )}
      </Card>
    </TooltipProvider>
  );
}
