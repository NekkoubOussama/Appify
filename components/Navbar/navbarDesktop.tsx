import React from "react";
import Button from "../button";
import Logo from "../logo";
import Link from "next/link";
import { AlignRight } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/About" },
  { label: "Feature", href: "/Feature" },
  { label: "Testimonial", href: "/Testimonial" },
  { label: "Blog", href: "/Blog" },
  { label: "Contact", href: "/Contact" },
];

export default function NavbarDesktop() {
  return (
    <div className="w-full transition-all duration-200 h-[12vh] z-[1000] fixed top-0 left-0 right-0">
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        <Logo />
        <ul className="hidden lg:flex items-center space-x-8 ">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                className="group relative font-medium p-[0.25rem]"
              >
                {link.label}
                <div className="absolute bottom-0 right-0 -translate-x-0 w-0 h-[3px] bg-pink-700 transition-all duration-300 ease-out group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center space-x-4">
          <Button intent={"primary"} size={"normal"}>
            Join Now
          </Button>
          <AlignRight
            size={32}
            className="text-black cursor-pointer lg:hidden"
          />
        </div>
      </div>
    </div>
  );
}
