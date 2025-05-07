import React from "react";
import c1 from "@/public/images/c1.png";
import c2 from "@/public/images/c2.png";
import c3 from "@/public/images/c3.png";
import { ClientCard } from "../box";

const ClientsReview = [
  {
    Text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem numquam sunt voluptatibus itaque asperiores nobis nam ut ipsam placeat saepe enim ullam omnis amet rem esse voluptatum, laudantium, explicabo fugit.",
    Icon: c1,
    Name: "John Doe",
    Job: "Fullstack Web Developer",
    Rating: 5,
  },
  {
    Text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem numquam sunt voluptatibus itaque asperiores nobis nam ut ipsam placeat saepe enim ullam omnis amet rem esse voluptatum, laudantium, explicabo fugit.",
    Icon: c2,
    Name: "Jessy Doe",
    Job: "Fullstack Web Developer",
    Rating: 5,
  },
  {
    Text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem numquam sunt voluptatibus itaque asperiores nobis nam ut ipsam placeat saepe enim ullam omnis amet rem esse voluptatum, laudantium, explicabo fugit.",
    Icon: c3,
    Name: "Robie Doe",
    Job: "Web design",
    Rating: 4,
  },
];

export default function Client() {
  return (
    <section className="bg-[#fef5ff] pt-[8vh] md:pt-[12vh] w-full pb-20">
      <h2 className="text-center">What client say about us</h2>
      <div className="lg:w-[80%] mx-auto mt-20">
        {ClientsReview.map((ClientReview, index) => (
          <ClientCard
            key={index}
            Text={ClientReview.Text}
            Icon={ClientReview.Icon}
            Name={ClientReview.Name}
            Job={ClientReview.Job}
            Rating={ClientReview.Rating}
          />
        ))}
      </div>
    </section>
  );
}
