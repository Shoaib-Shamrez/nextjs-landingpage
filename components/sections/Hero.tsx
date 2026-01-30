import React from "react";
import Glow from "../ui/Glow";

const Hero = () => {
  return (
    <section className="relative h-[calc(100vh-90px)] py-20">
      <div className="max-w-7xl mx-auto text-center flex justify-center items-center flex-col h-full">
        <h1 className="text-5xl max-w-3xl  font-bold">
          Lorem ipsum dolor sit adipisicing.
        </h1>
        <p className="mt-4 text-lg max-w-3xl mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          labore minima nobis, adipisci, provident facere, similique distinctio.
        </p>
        <button className="rounded-3xl bg-white px-5 py-2 mt-2 text-black">
          Explore
        </button>
      </div>
    </section>
  );
};

export default Hero;
