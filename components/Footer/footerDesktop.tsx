import React from "react";
import Logo from "../logo";
import { FooterCard } from "../box";
import {
  Clock5,
  Dribbble,
  Facebook,
  Mail,
  MapPinned,
  Phone,
  Twitter,
} from "lucide-react";

const footerItems = [
  {
    title: "About Us",
    items: [
      { text: "Support Center", href: "#" },
      { text: "Customer Support", href: "#" },
      { text: "About Us", href: "#" },
      { text: "Copyright", href: "#" },
      { text: "Popular Campaign", href: "#" },
    ],
  },
  {
    title: "Our Information",
    items: [
      { text: "Return Policy", href: "#" },
      { text: "Privacy Policy", href: "#" },
      { text: "Terms & Condition", href: "#" },
      { text: "Site Map", href: "#" },
      { text: "Store Hours", href: "#" },
    ],
  },
  {
    title: "Contact Info",
    items: [
      {
        text: "Amsterdam, Netherlands",
        href: "#",
        Icon: <MapPinned size={14} />,
      },
      { text: "+01 23454 65456", href: "#", Icon: <Phone size={15} /> },
      { text: "7 Days - 8am - 10am", href: "#", Icon: <Clock5 size={15} /> },
      { text: "info.example@gmail.com", href: "#", Icon: <Mail size={15} /> },
    ],
  },
];

export default function FooterDesktop() {
  return (
    <div className="bg-white pt-30 pb-10 w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
        <div>
          <Logo />
          <p className="mt-4 text-sm font-medium leading-[2rem] w-[85%] text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem
            ipsum dolor sit amet.
          </p>
        </div>

        {footerItems.map((section, index) => (
          <FooterCard key={index} title={section.title} items={section.items} />
        ))}
      </div>

      <div className="my-8 border-t border-gray-300/50 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
        <p>Copyright © 2024 Webdev. All rights reserved</p>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <p>Social:</p>
          <Facebook size={15} className="hover:text-gray-800 cursor-pointer" />
          <Twitter size={15} className="hover:text-gray-800 cursor-pointer" />
          <Dribbble size={15} className="hover:text-gray-800 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
