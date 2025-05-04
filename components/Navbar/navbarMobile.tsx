import clsx from "clsx";
import { X } from "lucide-react";
import Link from "next/link";
import Logo from "../logo";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/About" },
  { label: "Feature", href: "/Feature" },
  { label: "Testimonial", href: "/Testimonial" },
  { label: "Blog", href: "/Blog" },
  { label: "Contact", href: "/Contact" },
];

export default function NavbarMobile({
  open,
  setOpen,
}: {
  setOpen: (value: boolean) => void;
  open: boolean;
}) {
  return (
    <div className="fixed top-0 left-0">
      <div
        className={clsx(
          "bg-black/70 fixed top-0 left-0 w-full h-screen z-40 transform transition-all ease-in-out duration-500 ",
          open ? "translate-x-0 " : "-translate-x-full  "
        )}
      />
      <div
        className={clsx(
          "w-[80%] sm:w-[65%] z-50 fixed top-0 left-0 bg-[#312e81] h-screen transform transition-all ease-in-out duration-500 ",
          open ? "translate-x-0 delay-300" : "-translate-x-full delay-300 "
        )}
      >
        <div className=" flex flex-row justify-between items-center p-9">
          <Logo color="text-white" />
          <X
            size={34}
            color="white"
            className="cursor-pointer"
            onClick={() => setOpen(false)}
          />
        </div>
        <ul className="flex flex-col justify-center space-y-6 p-12 justify-self-center">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                className="group relative font-medium p-[0.25rem] text-white"
              >
                {link.label}
                <div className="absolute bottom-0 right-0 h-[2px] bg-white w-full" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
