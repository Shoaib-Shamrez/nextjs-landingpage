import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";

const Plans: React.FC = () => {
  return (
    <section className="min-h-screen   pb-10 mb-5 px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10 text-center">
        <h1 className="text-4xl font-bold ">Lorem ipsum dolor sit.</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-16">
          <div className="space-y-8">
            <div className="relative">
              <Image
                src="/images/dashboard-1.png"
                alt="Dashboard Preview 1"
                width={500}
                height={400}
                className="rounded-lg w-full h-auto"
                priority
              />
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">
                Lorem Ipsum <span className="text-white">Dolor Sed congue</span>
              </h2>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-6 h-6 rounded-full bg-white flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-zinc-950" strokeWidth={3} />
                </div>
                <div>
                  <p className="text-zinc-300 leading-relaxed">
                    Pellentesque odio sit sem nulla fringilla cum diam morbi at.
                    Convallis ut enim nulla faucibus donec morbi mattis.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="shrink-0 w-6 h-6 rounded-full bg-white flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-zinc-950" strokeWidth={3} />
                </div>
                <div>
                  <p className="text-zinc-300 leading-relaxed">
                    Pellentesque odio sit sem nulla fringilla cum diam morbi at.
                    Convallis ut enim nulla faucibus donec morbi mattis.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="shrink-0 w-6 h-6 rounded-full bg-white flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-zinc-950" strokeWidth={3} />
                </div>
                <div>
                  <p className="text-zinc-300 leading-relaxed">
                    Pellentesque odio sit sem nulla fringilla cum diam morbi at.
                    Convallis ut enim nulla faucibus donec morbi mattis.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="shrink-0 w-6 h-6 rounded-full bg-white flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-zinc-950" strokeWidth={3} />
                </div>
                <div>
                  <p className="text-zinc-300 leading-relaxed">
                    Pellentesque odio sit sem nulla fringilla cum diam morbi at.
                    Convallis ut enim nulla faucibus donec morbi mattis.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {/* Dashboard Image 2 */}
            <div className="relative">
              <Image
                src="/images/dashboard-2.png"
                alt="Dashboard Preview 2"
                width={500}
                height={400}
                className="rounded-lg w-full h-auto"
                priority
              />
            </div>

            {/* Title and Description */}
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Lorem Ipsum <span className="text-white">Dolor Sed congue</span>
              </h2>
            </div>

            {/* Feature List */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-6 h-6 rounded-full bg-white flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-zinc-950" strokeWidth={3} />
                </div>
                <div>
                  <p className="text-zinc-300 leading-relaxed">
                    Pellentesque odio sit sem nulla fringilla cum diam morbi at.
                    Convallis ut enim nulla faucibus donec morbi mattis.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="shrink-0 w-6 h-6 rounded-full bg-white flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-zinc-950" strokeWidth={3} />
                </div>
                <div>
                  <p className="text-zinc-300 leading-relaxed">
                    Pellentesque odio sit sem nulla fringilla cum diam morbi at.
                    Convallis ut enim nulla faucibus donec morbi mattis.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="shrink-0 w-6 h-6 rounded-full bg-white flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-zinc-950" strokeWidth={3} />
                </div>
                <div>
                  <p className="text-zinc-300 leading-relaxed">
                    Pellentesque odio sit sem nulla fringilla cum diam morbi at.
                    Convallis ut enim nulla faucibus donec morbi mattis.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="shrink-0 w-6 h-6 rounded-full bg-white flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-zinc-950" strokeWidth={3} />
                </div>
                <div>
                  <p className="text-zinc-300 leading-relaxed">
                    Pellentesque odio sit sem nulla fringilla cum diam morbi at.
                    Convallis ut enim nulla faucibus donec morbi mattis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-25 font-extrabold left-0 right-0 h-32 pointer-events-none">
          <svg
            className="w-full h-full"
            viewBox="0 0 1200 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 0,20 Q 300,80 600,50 T 1200,20"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="1"
              fill="none"
            />
          </svg>
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute -z-1 left-1/2 top-full h-150 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,#3d3e52_0%,#2a2b35_40%,transparent_70%)] blur-[120px]"
        />

        <div className="absolute inset-0 bottom-0 top-full pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-zinc-600 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.2,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;
