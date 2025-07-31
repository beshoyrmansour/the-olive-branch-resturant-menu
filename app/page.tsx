import Link from "next/link";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { isLunchTime } from "@/lib/data";
import { RestaurantLogo } from "@/components/restaurant-logo";
import { DecorativeDivider } from "@/components/decorative-divider";
import { FooterWithMap } from "@/components/footer-with-map";
import { cn } from "@/lib/utils";
import { RestaurantName } from "@/components/RestaurantName";
import OurRestaurant from "@/components/OurRestaurant";
import OpenHours from "@/components/open-hours";
import GoToTheRightMenu from "@/components/go-to-the-right-menu";

export default function Home() {
  const showLunchMenu = isLunchTime();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <GoToTheRightMenu />
      <main className="flex-1">
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
                Authentic cuisine in a historical Czech setting since 1892
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                {/* HIDE LUNCH MENU */}
                {/* <Link
                  href="/lunch-menu"
                  className={cn(!showLunchMenu && "order-2")}
                >
                  <Button
                    size="lg"
                    className="w-full sm:w-auto rounded-xl"
                    variant={!showLunchMenu ? "outline" : "default"}
                  >
                    View Lunch Menu {!showLunchMenu && "(12:00 - 15:00)"}
                  </Button>
                </Link> */}
                <Link
                  href="/main-menu"
                  className={cn(!showLunchMenu && "order-1")}
                >
                  <Button
                    size="lg"
                    variant={showLunchMenu ? "outline" : "default"}
                    className="w-full sm:w-auto rounded-xl"
                  >
                    View Main Menu
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

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
