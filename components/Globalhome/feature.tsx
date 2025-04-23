import React from "react";
import { BoxFeature } from "../box";
import {
  BookText,
  Headset,
  Laptop,
  Layers,
  Monitor,
  Settings,
  ShieldHalf,
  Smartphone,
  Infinity,
} from "lucide-react";

const features = [
  { icon: Layers, color: "text-red-600", text: "50+ Unique Design Block" },
  { icon: Laptop, color: "text-blue-500", text: "Multiple Layouts" },
  { icon: Smartphone, color: "text-yellow-400", text: "Mobile First Design" },
  { icon: Monitor, color: "text-purple-700", text: "Fully Responsive" },
  { icon: Settings, color: "text-green-700", text: "Customizable Features" },
  { icon: Headset, color: "text-green-500", text: "Humanly Support" },
  { icon: Infinity, color: "text-pink-600", text: "Lifetime Updates" },
  { icon: BookText, color: "text-amber-800", text: "Rich Documentation" },
  { icon: ShieldHalf, color: "text-orange-400", text: "Enhanced Security" },
];

export default function Feature() {
  return (
    <section className="bg-[#fdf2f8] pt-[8vh] md:pt-[12vh] w-full pb-20">
      <h2 className="text-center">It’s Everything you will ever need</h2>
      <div className="grid mt-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto w-[90%] sm:w-[80%]">
        {features.map(({ icon: Icon, color, text }, index) => (
          <BoxFeature
            key={index}
            Text={text}
            Icon={<Icon className={color} width={32} height={32} />}
          />
        ))}
      </div>
    </section>
  );
}
