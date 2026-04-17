import React from "react";
import Button from "../ui/Button";

const CTA = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 text-center ">
        <div className=" rounded-3xl bg-[#232323] py-10">
          <h2 className="text-4xl font-bold  mb-4">Ready to Get Started?</h2>
          <p className="mb-8 text-lg">
            Join thousands of companies transforming their business today
          </p>

          <Button>Start Free Trials</Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
