import Link from "next/link";
import React from "react";
import Image, { StaticImageData } from "next/image";

type LinkAppProps = { link: string; icon: StaticImageData };
export function LinkApp(props: LinkAppProps) {
  return (
    <Link
      href={props.link}
      className="transition-transform duration-[350ms] hover:ease hover:scale-110 hover:opacity-95"
    >
      <Image
        src={props.icon}
        alt="App Icon"
        className=" rounded-[0.18rem] w-fit"
      />
    </Link>
  );
}
