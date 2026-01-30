import React from "react";

const Stats = () => {
  const stats = [
    { label: "Active Users", value: "10K+" },
    { label: "Companies", value: "500+" },
    { label: "Uptime", value: "99.9%" },
    { label: "Average Rating", value: "4.5" },
  ];

  return (
    <section className="py-20 ">
      <div className="max-w-7xl mx-auto px-6">
        <h2></h2>
        <div className="flex items-center justify-center flex-wrap gap-8">
          {stats.map((stat, index) => (
            <div className="flex flex-col items-center">
              <div
                key={index}
                className="relative rounded-2xl px-8 py-10 text-center w-64 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))] border border-white/10 shadow-[0_35px_35px_rgba(0,0,0,0.35)] backdrop-blur-sm"
              >
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_bottom,rgba(255,255,255,0.12),transparent_60%)]" />

                <h3 className="relative z-10 text-4xl font-semibold  mb-2">
                  {stat.value}
                </h3>
              </div>
              <p className="relative z-10 text-sm  leading-relaxed">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
