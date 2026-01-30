import React from "react";
import Image from "next/image";
interface feauture {
  title: string;
  description: string;
}
const FeautredSection: React.FC = () => {
  const feauturesData: feauture[] = [
    {
      title: "Feature 1",
      description:
        "Lorem ipsum dolor sit amet consectetur. Lacus aliquam vitae nulla velit. Sollicitudin. In crim velit sed libero velit lectus.",
    },
    {
      title: "Feature 2",
      description:
        "Lorem ipsum dolor sit amet consectetur. Lacus aliquam vitae nulla velit. Sollicitudin. In crim velit sed libero velit lectus.",
    },
    {
      title: "Feature 3",
      description:
        "Lorem ipsum dolor sit amet consectetur. Lacus aliquam vitae nulla velit. Sollicitudin. In crim velit sed libero velit lectus.",
    },
  ];
  return (
    <div className="min-h-screen   p-8">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-8">Lorem ipsum dolor</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Section - Features */}
          <div className="space-y-6">
            {feauturesData.map((feauture) => (
              <div className="border border-zinc-700 rounded-lg p-6 hover:border-zinc-600 transition-colors">
                <h3 className="text-xl font-semibold mb-3">{feauture.title}</h3>
                <p className=" leading-relaxed">{feauture.description}</p>
              </div>
            ))}
          </div>

          {/* Right Section - Dashboard Image */}
          <div className="relative">
            <Image
              src="/images/Dashboard.png"
              alt="Dashboard"
              width={800}
              height={1000}
              className="rounded-2xl shadow-2xl w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeautredSection;
