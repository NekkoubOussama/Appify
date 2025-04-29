import Button from "@/components/button";
import React from "react";

export default function NotFound() {
  return (
    <div className="flex flex-row justify-center items-center m-auto bg-bg1 h-screen pt-[6vh] md:pt-[12vh] w-full pb-[2vh] ">
      <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 aspect-square bg-bg1 rounded-4xl text-[#c6005c] font-bold flex items-center justify-center text-[8rem] border-8 border-[#c6005c] animate-bounce ">
        440
      </div>
      <div className="pl-20 ml-20 border-l-2 border-gray-400 transform ">
        <h2 className="w-fit">This page could not be found</h2>
        <p className="mt-11 mb-14 text-lg text-gray-500 w-[75%]">
          You can either stay and chill here, or go back to the beginning.
        </p>
        <Button size={"normal"} intent={"primary"}>
          back to home
        </Button>
      </div>
    </div>
  );
}
