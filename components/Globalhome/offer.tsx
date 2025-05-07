import React from "react";
import Button from "../button";

export default function Offer() {
  return (
    <div className="flex flex-col items-center justify-center py-24 px-6 bg-black">
      <h2 className="text-white text-center">
        Explore ultimate feature with premium
      </h2>
      <p className="text-gray-400 mt-4 mb-8 text-center">
        Tell us your Apple ID email address so we could send you a TestFlight
        invitation directly.
      </p>
      <Button intent={"primary"} size={"big"}>
        Start 14 Days Free Trial
      </Button>
      <p className="text-gray-400 mt-4">No credit Card Required</p>
    </div>
  );
}
