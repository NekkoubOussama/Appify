import React from "react";
import Image from "next/image";
import Phero from "@/public/images/hero.png";
import Google from "@/public/images/Google.png";
import Apple from "@/public/images/Apple.png";
import { LinkApp } from "../link";

const appLinks = [
  { icon: Google, href: "https://play.google.com/store/apps?hl=fr&pli=1" },
  { icon: Apple, href: "https://www.apple.com/fr/app-store/" },
];

export default function Hero() {
  return (
    <section className=" bg-bg1 h-screen pt-[3vh] md:pt-[12vh] w-full ">
      <div className="flex justify-center items-center w-[90%] sm:w-[80%] h-full mx-auto">
        <div className="lg:w-[55%] ">
          <div className="w-fit bg-white rounded-4xl space-x-3 flex items-center justify-center py-1.5 px-5 shadow-md animate-fade-left">
            <div className="bg-primary text-white py-[0.25rem] px-[1.25rem] rounded-full">
              News
            </div>
            <p className="text-[0.875rem] leading-[1.25rem]">
              We have updated our term & condition policy
            </p>
          </div>
          <h1 className="my-6 animate-fade-in ">
            The premier workspace companion for your daily needs.
          </h1>
          <p className="text-grey animate-fade-in ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
            ipsam laudantium qui velit assumenda commodi laboriosam cumque
            laborum perferendis totam.
          </p>
          <div className="flex space-x-4 my-8 animate-pop">
            {appLinks.map((appLink, index) => (
              <LinkApp link={appLink.href} icon={appLink.icon} key={index} />
            ))}
          </div>
        </div>
        <div className="hidden lg:block animate-fade-in delay-500">
          <Image src={Phero} alt="Hero picture" width={700} height={700} />
        </div>
      </div>
    </section>
  );
}
