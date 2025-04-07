import React from "react";
import NavbarDesktop from "./navbarDesktop";
import NavbarMobile from "./navbarMobile";

export default function ResponsiveNavbar() {
  return (
    <div>
      <NavbarDesktop />
      <NavbarMobile />
    </div>
  );
}
