"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";

export default function ExperienceSlider({ children }: any) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {children}
        </div>
      </div>

      <div className="flex justify-center gap-4 mt-6">
        <button onClick={scrollPrev} className="p-2 border rounded-full">
          ←
        </button>

        <button onClick={scrollNext} className="p-2 border rounded-full">
          →
        </button>
      </div>
    </div>
  );
}