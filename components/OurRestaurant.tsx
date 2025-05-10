"use client";
import { useLanguage } from "@/components/language-provider";

const OurRestaurant = () => {
  const { t } = useLanguage();
  return (
    <div className="space-y-4 p-6 rounded-2xl glossy-card">
      <h2 className="text-3xl font-raleway-medium tracking-tighter text-olive">
        {t("ourRestaurant", {
          en: "Our Restaurant",
          cs: "Naše restaurace",
          ar: "مطعمنا",
        })}
      </h2>
      <p className="text-muted-foreground">
        {t("description", {
          en: "Welcome to our restaurant, where we offer a unique dining experience with a focus on quality ingredients and exceptional service. Our menu features a variety of dishes that cater to all tastes, and our team is dedicated to ensuring you have a memorable meal.",
          cs: "Vítejte v naší restauraci, kde nabízíme jedinečný gastronomický zážitek zaměřený na kvalitní suroviny a výjimečný servis. Naše menu obsahuje různé pokrmy, které vyhovují všem chutím, a náš tým se snaží zajistit, abyste měli nezapomenutelný zážitek.",
          ar: "مرحبًا بكم في مطعمنا، حيث نقدم تجربة طعام فريدة مع التركيز على المكونات عالية الجودة والخدمة الاستثنائية. تحتوي قائمتنا على مجموعة متنوعة من الأطباق التي تناسب جميع الأذواق، وفريقنا ملتزم بضمان حصولك على وجبة لا تُنسى.",
        })}
      </p>
    </div>
  );
};

export default OurRestaurant;
