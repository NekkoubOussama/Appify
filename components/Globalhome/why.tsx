import React from "react";
import { BoxWhy } from "../box";
import Picture from "@/public/images/a.jpg";
import I1 from "@/public/images/i1.png";
import I2 from "@/public/images/i2.png";
import I3 from "@/public/images/i3.png";
import I4 from "@/public/images/i4.png";
import Button from "../button";
import { Check } from "lucide-react";
import ImageAniame from "../animationImage";

const boxContents = [
  {
    Icon: I1,
    Titel: "Create Free Account",
    Text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, maxime. Lorem, ipsum.",
    Button: "Start Earning",
  },
  {
    Icon: I2,
    Titel: "Monitor User Analytics",
    Text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, maxime. Lorem, ipsum.",
    Button: "Sign up your store",
  },
  {
    Icon: I3,
    Titel: "Safe & Trusted",
    Text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, maxime. Lorem, ipsum.",
    Button: "Get The App",
  },
  {
    Icon: I4,
    Titel: "Fast Customer Support",
    Text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, maxime. Lorem, ipsum.",
    Button: "Learn More",
  },
];

const Texts = [
  { text: "Chat prompt module supported" },
  { text: "Enjoy unlimited features by paid plan" },
  { text: "Manage ultimate conversation" },
];
export default function why() {
  return (
    <section className=" bg-white py-[4vh] mt-6 md:pt-[12vh] w-full ">
      <h2 className="text-center">Why You Choose This Application</h2>
      <div className=" mt-20 mx-auto w-[90%] sm:w-[80%] gap-12 flex flex-row flex-wrap pb-16">
        {boxContents.map((boxContent, index) => (
          <BoxWhy
            Icon={boxContent.Icon}
            Texte={boxContent.Text}
            Titel={boxContent.Titel}
            Button={boxContent.Button}
            index={index}
            key={index}
          />
        ))}
      </div>
      <div className="lg:flex justify-between w-[90%] sm:w-[80%] h-full mx-auto py-24">
        <ImageAniame image={Picture} />
        <div className="lg:w-[50%]  lg:p-12 p-6">
          <p className="text-[#f97316] font-semibold ">
            Audience tracking and insights
          </p>
          <h2 className="my-4 ">
            Powerful analytics tools that put you in control and are fully
            customizable.
          </h2>
          <p className="text-sm text-gray-600 font-medium leading-[2rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel modi
            dolorem, sint ipsa voluptate maiores quidem. Velit tempora minus
            tempore aperiam enim, voluptate laborum doloremque.
          </p>
          <ul className="mt-7 mb-8 space-y-2 font-semibold">
            {Texts.map((Text, index) => (
              <li className="flex items-center" key={index}>
                <Check
                  className="bg-[#22c55e] rounded-full mr-2"
                  size={16}
                  color="#ffffff"
                  strokeWidth={3.5}
                />
                {Text.text}
              </li>
            ))}
          </ul>
          <Button intent={"secondary"} size={"normal"} icontype="arrow">
            Explore More
          </Button>
        </div>
      </div>
    </section>
  );
}
