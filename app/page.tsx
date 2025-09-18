import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { isLunchTime } from "@/lib/data";
import { DecorativeDivider } from "@/components/decorative-divider";
import { FooterWithMap } from "@/components/footer-with-map";
import OurRestaurant from "@/components/OurRestaurant";
import OpenHours from "@/components/open-hours";
import GoToTheRightMenu from "@/components/go-to-the-right-menu";
import MainPageHero from "@/components/MainPageHero";

export default function Home() {
  const HIDE_LUNCH_MENU = process.env.NEXT_PUBLIC_HIDE_LUNCH_MENU === "true";

  const showLunchMenu = isLunchTime() && !HIDE_LUNCH_MENU;
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {!HIDE_LUNCH_MENU && <GoToTheRightMenu />}
      <main className="flex-1">
        <MainPageHero />
        <DecorativeDivider />

        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <OurRestaurant />
              <OpenHours
                className=" p-6 rounded-2xl glossy-card"
                titleStyle="text-3xl font-raleway-medium tracking-tighter text-olive"
              />
            </div>
          </div>
        </section>
      </main>

      <FooterWithMap />
    </div>
  );
}
