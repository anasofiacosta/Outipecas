import { Link } from "@tanstack/react-router";
import { useEffect, useId, useRef, useState } from "react";

export type Category = {
  title: string;
  desc: string;
  subcategories: { label: string; to: string }[];
};

export function CategoryGrid({ categories }: { categories: Category[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onPointerDown = (e: PointerEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpenIndex(null);
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, []);

  return (
    <div
      ref={containerRef}
      className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-stretch"
    >
      {categories.map((cat, i) => (
        <CategoryCard
          key={cat.title}
          category={cat}
          isOpen={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? null : i)}
        />
      ))}
    </div>
  );
}

function CategoryCard({
  category,
  isOpen,
  onToggle,
}: {
  category: Category;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const panelId = useId();

  return (
    <div
      role="button"
      tabIndex={0}
      aria-expanded={isOpen}
      aria-controls={panelId}
      onClick={onToggle}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onToggle();
        }
      }}
      data-open={isOpen ? "true" : undefined}
      className="group relative h-full border border-foreground/5 p-8 transition-all duration-300 ease-out cursor-pointer
        hover:border-accent/40 focus-within:border-accent/40 data-[open=true]:border-accent/40
        hover:z-10 focus-within:z-10 data-[open=true]:z-10
        hover:shadow-lg focus-within:shadow-lg data-[open=true]:shadow-lg
        focus:outline-none focus-visible:ring-1 focus-visible:ring-accent
        motion-reduce:transition-none"
    >
      <h3 className="font-display text-xl mb-4">{category.title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{category.desc}</p>

      <div
        id={panelId}
        className="grid grid-rows-[0fr] opacity-0 translate-y-3 transition-all duration-300 ease-out
          group-hover:grid-rows-[1fr] group-hover:opacity-100 group-hover:translate-y-0
          group-focus-within:grid-rows-[1fr] group-focus-within:opacity-100 group-focus-within:translate-y-0
          group-data-[open=true]:grid-rows-[1fr] group-data-[open=true]:opacity-100 group-data-[open=true]:translate-y-0
          motion-reduce:transition-none"
      >
        <ul className="overflow-hidden min-h-0 mt-6 space-y-2">
          {category.subcategories.map((sub) => (
            <li key={sub.label}>
              <Link
                to={sub.to}
                onClick={(e) => e.stopPropagation()}
                className="text-sm text-muted-foreground hover:text-accent hover:underline underline-offset-4 transition-colors"
              >
                {sub.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
