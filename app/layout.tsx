import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ResponsiveFooter from "@/components/Footer/responsiveFooter";
import NavbarDesktop from "@/components/Navbar/navbarDesktop";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Appity",
  description: "App landing page ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <NavbarDesktop />
        {children}
        <ResponsiveFooter />
      </body>
    </html>
  );
}
