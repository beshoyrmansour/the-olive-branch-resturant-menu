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
              src="https://www.google.com/maps/place/The+Olive+Branch+Prague/@50.0722369,14.3935652,17z/data=!3m1!4b1!4m6!3m5!1s0x470b955eccc1f185:0x5c48578d047c7427!8m2!3d50.0722335!4d14.3961401!16s%2Fg%2F11xmx6ph8s?entry=ttu&g_ep=EgoyMDI1MDcxMy4wIKXMDSoASAFQAw%3D%3D"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${t("restaurantName", {
                en: "The Olive Branch Restaurant",
                cs: "Restaurace Olivová Větev",
                ar: "مطعم غصن الزيتون",
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
