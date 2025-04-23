import React from "react";
import { PriceCard } from "../box";

const Cardselemente = [
  {
    Price: 15,
    Title: "Starter Plan",
    Button: "Start 14 Days Free Trial",
    texts: [
      { state: true, text: "Unlimited Connection" },
      { state: true, text: "Basic Actions & Triggers" },
      { state: true, text: "Draft Payments" },
      { state: false, text: "Unlimited Flows & Supports" },
      { state: false, text: "Lifetime Updates" },
    ],
  },
  {
    Price: 45,
    Title: "Business Plan",
    Button: "Start 14 Days Free Trial",
    texts: [
      { state: true, text: "Unlimited Connection" },
      { state: true, text: "Basic Actions & Triggers" },
      { state: true, text: "Draft Payments" },
      { state: true, text: "Unlimited Flows & Supports" },
      { state: true, text: "Lifetime Updates" },
    ],
  },
];

export default function Price() {
  return (
    <section className="bg-[#edfbff] pt-[8vh] md:pt-[12vh] w-full pb-20">
      <h2 className="text-center">Meet exciting Pricing Plans</h2>
      <div className="w-[90%] md:w-[80%] mt-20 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        {Cardselemente.map((Cardelemente, index) => (
          <PriceCard
            key={index}
            Texts={Cardelemente.texts}
            Title={Cardelemente.Title}
            Price={Cardelemente.Price}
            Button={Cardelemente.Button}
          />
        ))}
      </div>
    </section>
  );
}
