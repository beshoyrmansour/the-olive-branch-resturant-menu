"use client";
import React from "react";
import { useLanguage } from "@/components/language-provider";
import { cn } from "@/lib/utils";

interface Props {
  titleStyle?: string;
  className?: string;
}
const OpenHours = ({
  titleStyle = "text-2xl font-raleway-medium tracking-tighter text-olive",
  className = "",
}: Props) => {
  const { t } = useLanguage();
  return (
    <div className={cn("space-y-4", className)}>
      <h2
        className={(cn("text-2xl font-raleway-medium text-olive"), titleStyle)}
      >
        {t("openHours", {
          en: "Open Hours",
          cs: "Otevírací doba",
          ar: "ساعات العمل",
        })}
      </h2>
      <ul className="space-y-2 text-muted-foreground">
        <li className="flex justify-between">
          <span>Monday - Friday</span>
          <span>11:00 - 22:00</span>
        </li>
        <li className="flex justify-between">
          <span>Saturday</span>
          <span>12:00 - 23:00</span>
        </li>
        <li className="flex justify-between">
          <span>Sunday</span>
          <span>12:00 - 21:00</span>
        </li>
      </ul>
      <div className="pt-4">
        <p className="font-medium">
          {t("lunchMenuAvailable", {
            en: "Lunch Menu Available",
            cs: "Obědové menu k dispozici",
            ar: "قائمة الغداء متاحة",
          })}
        </p>
        <p className="text-muted-foreground">
          {t("lunchMenuHours", {
            en: "Monday - Friday",
            cs: "Pondělí - Pátek",
            ar: "الإثنين - الجمعة",
          })}
          , 11:00 - 15:00
        </p>
      </div>
    </div>
  );
};

export default OpenHours;
