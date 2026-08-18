import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

export type GalleryImage = { src: string; alt: string };

export function GallerySlider({ images }: { images: GalleryImage[] }) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div
        ref={trackRef}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {images.map((img) => (
          <img
            key={img.src + img.alt}
            src={img.src}
            alt={img.alt}
            loading="lazy"
            className="w-[80%] sm:w-[48%] md:w-[calc((100%-2rem)/3)] shrink-0 snap-start aspect-square object-cover rounded-sm"
          />
        ))}
      </div>

      <div className="mt-6 flex gap-3">
        <button
          type="button"
          aria-label="Imagens anteriores"
          onClick={() => scrollBy(-1)}
          className="grid size-11 place-items-center border border-foreground/10 text-foreground transition-colors hover:border-accent/40 hover:text-accent"
        >
          <ChevronLeft className="size-4" />
        </button>
        <button
          type="button"
          aria-label="Imagens seguintes"
          onClick={() => scrollBy(1)}
          className="grid size-11 place-items-center border border-foreground/10 text-foreground transition-colors hover:border-accent/40 hover:text-accent"
        >
          <ChevronRight className="size-4" />
        </button>
      </div>
    </div>
  );
}
