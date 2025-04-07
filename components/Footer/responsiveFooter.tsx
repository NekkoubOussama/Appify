import React from "react";
import FooterDesktop from "./footerDesktop";
import FooterMobile from "./footerMobile";

export default function ResponsiveFooter() {
  return (
    <div>
      <FooterDesktop />
      <FooterMobile />
    </div>
  );
}
