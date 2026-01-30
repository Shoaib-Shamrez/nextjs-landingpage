import React from "react";
import Glow from "../ui/Glow";

const Supporters = () => {
  const supporters = [
    "TechCorp",
    "StartupHub",
    "InnovateLabs",
    "FutureSys",
    "CloudFirst",
  ];

  return (
    <section className="relative py-16 z-10 ">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className=" text-3xl font-bold  mb-12">
          Trusted by leading companies
        </h2>
        <div className="flex flex-wrap justify-around gap-8">
          {supporters.map((supporter, index) => (
            <div key={index} className=" font-semibold">
              {supporter}
            </div>
          ))}
        </div>
      </div>
      <Glow />
    </section>
  );
};

export default Supporters;
