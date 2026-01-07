"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import clsx from "clsx";
import { useInView } from "./hooks";
import { StaticImageData } from "next/dist/shared/lib/get-img-props";

export default function ImageAnimate({ image }: { image: StaticImageData }) {
  const { inView, ref } = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (!inView) return;

    const tiles = document.querySelectorAll<HTMLElement>(".tiles span");

    tiles.forEach((tile, i) => {
      tile.style.setProperty("--i", i.toString());
    });
  }, [inView]);

  return (
    <div ref={ref} className={clsx("grid-reveal", inView && "is-visible")}>
      <Image src={image} alt="Picture" width={500} height={500} priority />

      <div className="tiles absolute inset-0 grid grid-cols-4 grid-rows-4 pointer-events-none">
        {Array.from({ length: 16 }).map((_, i) => (
          <span className="bg-white opacity-100" key={i} />
        ))}
      </div>
    </div>
  );
}
