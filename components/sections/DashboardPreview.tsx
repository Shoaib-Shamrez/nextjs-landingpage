import Image from "next/image";
import React from "react";

const DashboardPreview = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl max-w-2xl font-bold  text-center mb-4">
          Lorem ipsum dolor sit amet consectetur.
        </h2>
        <p className="text-center  mb-12 max-w-2xl mx-auto">
          Manage your business with our intuitive and feature-rich dashboard
        </p>

        <div className=" rounded-lg flex items-center justify-center">
          <Image
            src="/images/Dashboard.png"
            alt="Dashboard"
            width={600}
            height={400}
          />
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;
