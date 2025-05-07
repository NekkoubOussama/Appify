import React from "react";
import clsx from "clsx";

export default function Logo({ color = "text-black" }) {
  return (
    <p
      className={clsx(
        "text-xl md:text-2xl font-bold leading-8 cursor-context-menu",
        color
      )}
    >
      <span className="text-3xl md:text-4xl text-pink-700 leading-8">A</span>
      ppify
    </p>
  );
}
