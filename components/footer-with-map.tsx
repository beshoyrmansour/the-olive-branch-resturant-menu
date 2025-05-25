"use client";

import { useLanguage } from "@/components/language-provider";
import { RestaurantLogo } from "@/components/restaurant-logo";
import { RestaurantName } from "@/components/RestaurantName";
import OpenHours from "./open-hours";

export function FooterWithMap() {
  const { t, dir } = useLanguage();

  return (
    <footer className="border-t bg-secondary/50" dir={dir}>
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 mb-4">
              <RestaurantLogo variant="small" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-raleway-medium text-olive">
                {t("contactUs", {
                  en: "Contact Us",
                  cs: "Kontaktujte nás",
                  ar: "اتصل بنا",
                })}
              </h3>
              <p className="text-muted-foreground">
                {t("address", {
                  en: "Plzeňská 560/29, Smíchov, 150 00 Prague, Czech Republic",
                  cs: `Plzeňská 560/29, Smíchov, 150 00 Praha, Česká republika`,
                  ar: "Plzeňská 560/29, Smíchov, 150 00 براغ, جمهورية التشيك",
                })}
              </p>
              <p className="text-muted-foreground">
                {t("phone", { en: "Phone", cs: "Telefon", ar: "هاتف" })}: +420
                606 333 713
              </p>
              <p className="text-muted-foreground">
                {t("email", {
                  en: "Email",
                  cs: "Email",
                  ar: "البريد الإلكتروني",
                })}
                : info@oliverestaurant.cz
              </p>
            </div>
            <OpenHours titleStyle="text-lg font-raleway-medium text-olive" />
          </div>

          <div className="h-[300px] md:h-full rounded-2xl overflow-hidden glossy-card">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.750531818813!2d14.393565176534961!3d50.07223347152228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b94550cc0f239%3A0xbb87860121452efd!2zUGx6ZcWIc2vDoSA1NjAvMjksIDE1MCAwMCBQcmFoYSA1LVNtw61jaG92LCBDemVjaGlh!5e0!3m2!1sen!2seg!4v1748029930399!5m2!1sen!2seg"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${t("restaurantName", {
                en: "The Olive Branch Restaurant Location",
                cs: "Restaurace Olivová Větev - Poloha",
                ar: "موقع مطعم غصن الزيتون",
              })}`}
              className="rounded-2xl"
            ></iframe>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-muted">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} <RestaurantName />.{" "}
            {t("allRightsReserved", {
              en: "All rights reserved",
              cs: "Všechna práva vyhrazena",
              ar: "جميع الحقوق محفوظة",
            })}
            .
          </p>
          <p className="text-center text-sm text-muted-foreground">
            {t("websiteBy", {
              en: "Website by",
              cs: "Webové stránky od",
              ar: "موقع الويب من قبل",
            })}{" "}
            <a
              href="https://digitalizers.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-olive hover:underline"
            >
              Digitalizers
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
