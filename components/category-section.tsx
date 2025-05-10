"use client";

import { useLanguage } from "@/components/language-provider";
import { MenuItemCard } from "@/components/menu-item-card";
import { type MenuItem, getCategoryById } from "@/lib/data";

interface CategorySectionProps {
  categoryId: number;
  items: MenuItem[];
}

export function CategorySection({ categoryId, items }: CategorySectionProps) {
  const { t, language } = useLanguage();
  const category = getCategoryById(categoryId);

  if (!category || items.length === 0) return null;

  return (
    <section className="mb-8 relative">
      <h2 className="text-2xl font-raleway-medium mb-4 text-primary text-center sticky top-[135px] glossy backdrop-blur supports-[backdrop-filter]:bg-background/60 z-10 px-4 py-2 rounded-lg shadow-sm">
        {category.name[language]}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item) => (
          <MenuItemCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
