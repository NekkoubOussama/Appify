"use client";
import React, { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { useDotButton } from "./hooks";
import Autoplay from "embla-carousel-autoplay";
import c1 from "@/public/images/c1.png";
import c2 from "@/public/images/c2.png";
import c3 from "@/public/images/c3.png";
import { ClientCard } from "./box";
import { ChevronsLeft, ChevronsRight } from "lucide-react";

const clientsReview = [
  {
    Text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem numquam sunt voluptatibus itaque asperiores nobis nam ut ipsam placeat saepe enim ullam omnis amet rem esse voluptatum, laudantium, explicabo fugit.",
    Icon: c1,
    Name: "John Doe",
    Job: "Fullstack Web Developer",
    Rating: 5,
  },
  {
    Text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem numquam sunt voluptatibus itaque asperiores nobis nam ut ipsam placeat saepe enim ullam omnis amet rem esse voluptatum, laudantium, explicabo fugit.",
    Icon: c2,
    Name: "Jessy Doe",
    Job: "Fullstack Web Developer",
    Rating: 5,
  },
  {
    Text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem numquam sunt voluptatibus itaque asperiores nobis nam ut ipsam placeat saepe enim ullam omnis amet rem esse voluptatum, laudantium, explicabo fugit.",
    Icon: c3,
    Name: "Robie Doe",
    Job: "Web design",
    Rating: 4,
  },
];

export function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()]);
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes());
    }
  }, [emblaApi]);
  return (
    <div className="embla w-full relative  ">
      <div className="embla__viewport overflow-hidden mt-25" ref={emblaRef}>
        <div className="embla__container lg:w-[85%] mx-auto">
          {clientsReview.map((clientReview, index) => (
            <div
              key={index}
              className="embla__slide flex-[0_0_100%] lg:flex-[0_0_90%] px-4"
            >
              <ClientCard
                key={index}
                Text={clientReview.Text}
                Icon={clientReview.Icon}
                Name={clientReview.Name}
                Job={clientReview.Job}
                Rating={clientReview.Rating}
              />{" "}
            </div>
          ))}
        </div>
      </div>
      <div className="embla__controls flex flex-row justify-between ">
        <button
          className="embla__prev text-white bg-black/35 rounded-full h-10 w-10 lg:flex justify-center items-center hover:bg-black/70 m-1 absolute top-3/5 -translate-y-3/5 left-28 hidden  "
          onClick={scrollPrev}
        >
          <ChevronsLeft size={43} strokeWidth={1.25} />
        </button>
        {scrollSnaps.length > 0 && (
          <div className="embla__dots flex gap-2 justify-center mt-4 absolute bottom-10 left-1/2 -translate-x-1/2">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === selectedIndex ? "bg-black scale-110" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        )}
        <button
          className="embla__next  text-white bg-black/35 rounded-full h-10 w-10 lg:flex justify-center items-center  hover:bg-black/70 m-1 absolute top-3/5 -translate-y-3/5 right-28 hidden  "
          onClick={scrollNext}
        >
          <ChevronsRight size={43} strokeWidth={1.25} />
        </button>
      </div>
    </div>
  );
}
