import Link from "next/link";
import React, { ReactNode } from "react";
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

type LinkButtonProps = {
  link: string;
  children: ReactNode;
  className?: string;
};

export function LinkButton({ link, children, className }: LinkButtonProps) {
  return (
    <Link
      href={link}
      className={`leading-[1.5rem] w-fit transition-all duration-200 ease-in-out cursor-pointer disabled:cursor-context-menu flex items-center justify-center gap-[0.5rem] bg-primary text-white shadow-sm hover:bg-shade2 font-semibold rounded-full md:px-8 md:py-3.5 px-6 py-4 text-[1.15rem] hover:ring hover:ring-shade2 hover:ring-offset-2 hover:ring-2  ${className}`}
    >
      {children}
    </Link>
  );
}
