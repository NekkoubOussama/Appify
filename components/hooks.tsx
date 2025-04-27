import type { Ref } from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import type { EmblaCarouselType } from "embla-carousel";

export function useDotButton(emblaApi: EmblaCarouselType | undefined) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onDotButtonClick = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  const onInit = useCallback(
    (embla: EmblaCarouselType) => setScrollSnaps(embla.scrollSnapList()),
    []
  );

  const onSelect = useCallback(
    (embla: EmblaCarouselType) => setSelectedIndex(embla.selectedScrollSnap()),
    []
  );

  useEffect(() => {
    if (!emblaApi) return;

    // Initialize on first mount
    onInit(emblaApi);
    onSelect(emblaApi);

    // Attach event listeners
    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);

    // Cleanup on unmount
    return () => {
      emblaApi.off("reInit", onInit);
      emblaApi.off("reInit", onSelect);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onInit, onSelect]);

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
  };
}

type IntersectionOptions = {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
};

export function useInView(options: IntersectionOptions = {}): {
  inView: boolean;
  ref: Ref<HTMLDivElement>;
} {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const currentRef = ref.current; // Store ref.current in a variable
    // If an observer already exists, disconnect it to avoid memory leaks
    if (observer.current) {
      observer.current.disconnect();
    }

    // Create a new observer
    observer.current = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting);
    }, options);

    // If the element is attached, start observing it
    if (ref.current) {
      observer.current.observe(ref.current);
    }

    // Cleanup when the component unmounts or options change
    return () => {
      if (currentRef && observer.current) {
        observer.current.unobserve(currentRef);
      }
    };
  }, [options]);

  return { inView, ref };
}
