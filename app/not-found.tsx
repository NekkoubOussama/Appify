import Button from "@/components/button";
import React from "react";

export default function NotFound() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center m-auto bg-bg1 h-screen pt-[6vh] md:pt-[12vh] w-full pb-[2vh] px-6 ">
      <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 aspect-square bg-bg1 rounded-4xl text-[#c6005c] font-bold flex items-center justify-center lg:text-[8rem] md:text-[6rem] text-[4.5rem] border-8 border-[#c6005c] animate-bounce ">
        404
      </div>
      <div className="mt-10 lg:pl-20 lg:ml-20 lg:mt-0 max-lg:text-center lg:border-l-2 border-gray-400 ">
        <h2 className="w-fit max-lg:mx-auto">This page could not be found</h2>
        <p className="mt-8 mb-12 lg:mt-11 lg:mb-14 text-lg text-gray-500 max-w-md max-lg:mx-auto ">
          You can either stay and chill here, or go back to the beginning.
        </p>
        <Button size={"normal"} intent={"primary"} className="max-lg:mx-auto">
          back to home
        </Button>
      </div>
    </div>
  );
}
