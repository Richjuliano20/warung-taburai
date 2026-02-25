"use client";

import { useState } from "react";
import type { MenuItem } from "@/types";
import MenuCard from "./MenuCard";
import MenuModal from "./MenuModal";

export default function MenuGrid({
  items,
  className,
}: {
  items: MenuItem[];
  className?: string;
}) {
  const [selected, setSelected] = useState<MenuItem | null>(null);

  return (
    <>
      <div className={className}>
        {items.map((item) => (
          <MenuCard key={item.id} item={item} onClick={setSelected} />
        ))}
      </div>
      <MenuModal item={selected} onClose={() => setSelected(null)} />
    </>
  );
}
