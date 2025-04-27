"use client";
import React from "react";
import Button from "./button";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { BadgeCheck, BadgeX, Quote, Star } from "lucide-react";
import { useInView } from "./hooks";
import clsx from "clsx";

type BoxProps = {
  Titel: string;
  Button: string;
  Texte: string;
  Icon: StaticImageData;
  index: number;
};
export function BoxWhy(props: BoxProps) {
  const { inView, ref } = useInView();
  return (
    <div
      ref={ref}
      className={clsx(
        "flex flex-col justify-center items-center max-w-[240px] mx-auto transition-all opacity-0",
        inView ? "fade-left" : ""
      )}
      style={{ animationDelay: `${props.index * 200}ms` }}
    >
      <Image width={80} height={80} src={props.Icon} alt="icon" />
      <h3 className="py-5 font-semibold leading-[1.75rem] text-[1.125rem] text-center">
        {props.Titel}
      </h3>
      <p className="pb-7 leading-[1.25rem] text-[0.875rem] text-gray-600 text-center">
        {props.Texte}
      </p>
      <Button intent={"tertiary"} size={"small"} icontype="arrow">
        {props.Button}
      </Button>
    </div>
  );
}

type Box2Props = {
  Text: string;
  Icon: React.JSX.Element;
  index: number;
};
export function BoxFeature(props: Box2Props) {
  const { inView, ref } = useInView();
  return (
    <div
      ref={ref}
      className={clsx(
        "flex items-center justify-center p-4 bg-white rounded-lg shadow-md space-x-3 opacity-0 transform transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:shadow-xl hover:scale-105 hover:-translate-y-1 hover:ring-1 hover:ring-gray-200 ",
        inView ? "flip-right " : ""
      )}
      style={{ animationDelay: `${props.index * 250}ms` }}
    >
      <div className="text-3xl w-14 h-14 bg-gray-800/10 flex items-center justify-center flex-col rounded-full ">
        {props.Icon}
      </div>
      <p className="font-semibold ">{props.Text}</p>
    </div>
  );
}

type CardProps = {
  Text: string;
  Icon: StaticImageData;
  Name: string;
  Job: string;
  Rating: number;
};
export function ClientCard(props: CardProps) {
  return (
    <div className="flex flex-col-reverse lg:flex-row w-[90%] relative mx-2 p-6 bg-white shadow-lg rounded-lg mt-10 embla__slide lg:mx-10">
      <Quote
        color="#e4e4e4"
        strokeWidth={2}
        className="rotate-180 absolute top-8 left-5"
        size={56}
      />
      <div className="lg:w-[60%] z-10 flex flex-col justify-center  w-full ">
        <p className="mt-8 text-gray-600 font-medium mb-6 leading-[1.5rem] sm:leading-[1.8rem] md:leading-[2.5rem] text-sm sm:text-base md:text-lg">
          {props.Text}
        </p>
        <div className=" flex flex-row space-x-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              color={i < props.Rating ? "#ca8a04" : "#e5e7eb"}
              strokeWidth={5}
              size={22}
            />
          ))}
        </div>
        <p className="text-xl font-semibold mt-8">{props.Name}</p>
        <p className="mt-2 text-lg text-gray-600 font-medium mb-6">
          {props.Job}
        </p>
      </div>
      <Image
        src={props.Icon}
        alt={props.Name}
        className="rounded-full self-center mx-auto shadow-2px "
        width={250}
        height={250}
      />
      <Quote
        color="#e4e4e4"
        strokeWidth={2}
        className=" absolute bottom-6 right-6"
        size={56}
      />
    </div>
  );
}

type TextsItem = {
  state: boolean;
  text: string;
};

type Card2Props = {
  Price: number;
  Title: string;
  Button: string;
  Texts: TextsItem[];
};
export function PriceCard(props: Card2Props) {
  const { inView, ref } = useInView({ threshold: 0.3 });
  return (
    <div
      ref={ref}
      className={clsx(
        "bg-white p-12 rounded-lg shadow-lg opacity-0",
        inView ? "fade-in " : ""
      )}
    >
      <p className="mt-8 text-xl font-semibold text-blue-600 text-center">
        {props.Title}
      </p>
      <p className="font-medium text-3xl mt-4 text-center">
        $<span className="text-5xl font-bold">{props.Price}</span>/mo
      </p>
      <p className="mt-2 text-gray-600 text-center">Per user</p>
      <ul className="mt-7 mb-8 space-y-4 text-sm font-semibold text-gray-700">
        {props.Texts.map((Text, index) => (
          <li className="flex items-center " key={index}>
            {Text.state ? (
              <BadgeCheck
                className="text-green-500 rounded-full mr-2"
                size={32}
              />
            ) : (
              <BadgeX className="text-red-500 rounded-full mr-2" size={32} />
            )}
            {Text.text}
          </li>
        ))}
      </ul>
      <Button intent={"square"} size={"big"} className="w-full">
        {props.Button}
      </Button>
    </div>
  );
}

type FooterItem = {
  Icon?: React.JSX.Element;
  text: string;
  href: string;
};

type FooterProps = {
  title: string;
  items: FooterItem[];
};

export function FooterCard(props: FooterProps) {
  return (
    <ul className=" space-y-4 w-fit ">
      <li className="text-lg font-semibold text-gray-900 ">{props.title}</li>
      {props.items.map((item, index) => (
        <li
          key={index}
          className="text-sm font-semibold text-gray-500 flex flex-row space-x-1 items-center hover:text-gray-800"
        >
          {item.Icon && item.Icon}
          <Link href={item.href}>{item.text}</Link>
        </li>
      ))}
    </ul>
  );
}
