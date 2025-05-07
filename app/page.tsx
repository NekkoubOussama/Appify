import Client from "@/components/Globalhome/client";
import Feature from "@/components/Globalhome/feature";
import Hero from "@/components/Globalhome/hero";
import Offer from "@/components/Globalhome/offer";
import Price from "@/components/Globalhome/price";
import Why from "@/components/Globalhome/why";

export default function Home() {
  return (
    <div>
      <Hero />
      <Why />
      <Feature />
      <Client />
      <Price />
      <Offer />
    </div>
  );
}
