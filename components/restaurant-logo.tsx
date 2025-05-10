"use client";

import Image from "next/image";

interface RestaurantLogoProps {
  variant?: "default" | "small";
}

export function RestaurantLogo({ variant = "default" }: RestaurantLogoProps) {
  const isSmall = variant === "small";

  return (
    <div className="relative">
      <Image
        src="/logo.svg"
        alt="Olive Restaurant Logo"
        width={isSmall ? 60 : 160}
        height={isSmall ? 60 : 160}
        className="object-contain"
      />
    </div>
  );
}
