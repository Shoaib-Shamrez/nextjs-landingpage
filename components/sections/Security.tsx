import React from "react";
import Image from "next/image";
import {
  FileText,
  Pencil,
  CircleDot,
  Grid2X2,
  ShoppingBag,
  LucideIcon,
} from "lucide-react";

interface Card {
  icon: LucideIcon;
  title: string;
  colSpan?: string;
}

const Security: React.FC = () => {
  const cards: Card[] = [
    { icon: FileText, title: "Lorem Ipsum\nDollar" },
    { icon: Pencil, title: "Lorem Ipsum\nDollar" },
    { icon: CircleDot, title: "Lorem Ipsum\nDollar" },
    { icon: Grid2X2, title: "Lorem Ipsum\nDollar" },
    { icon: ShoppingBag, title: "Lorem Ipsum\nDollar", colSpan: "col-span-2" },
  ];

  return (
    <section className="min-h-screen text-white py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Section - Large Card with Image */}
          <div className=" rounded-xl p-8 flex flex-col justify-between">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4">
                Lorem Ipsum
                <br />
                <span className="text-white">Dollar</span>
              </h2>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Consectetur vitae convallis sed CHIC sed rutrum pulsu tincidunt
                nibh. Tincidunt trist scelerisqu
              </p>
            </div>

            <div className="flex justify-center">
              <Image
                src="/images/lock.png"
                alt="Security Lock"
                width={200}
                height={250}
                className="w-48 h-auto"
              />
            </div>
          </div>

          {/* Right Section - Grid of Cards */}
          <div className=" grid grid-cols-2 gap-3">
            {cards.map((card, index) => {
              const Icon = card.icon;
              const isLastCard = index === cards.length - 1;

              return (
                <div
                  key={index}
                  className={`bg-linear-to-bl from-[#3D3D3D] to-[#A0A0A00A]  rounded-xl   flex ${
                    isLastCard ? "items-center" : "flex-col items-center"
                  } justify-center text-center ${card.colSpan || ""}`}
                >
                  <div
                    className={`flex ${isLastCard ? "items-center gap-6" : "flex-col"}`}
                  >
                    <div className="rounded-lg p-4 mb-4 flex-col flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                      <p className="tex-lg font-semibold">{card.title}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;
