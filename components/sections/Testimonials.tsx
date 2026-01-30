"use client";
import Masonry from "react-layout-masonry";
// import Masonry from "react-responsive-masonry";

// import  { ResponsiveMasonry } from "react-responsive-masonry/lib/ResponsiveMasonry/index";

const testimonials = [
  {
    name: "Floyd Miles",
    avatar: "https://i.pravatar.cc/300",
    content:
      "Magnis lacus pharetra commodo ac semper nam. Malesuada viverra mattis pellentesque consectetur nunc.",
  },
  {
    name: "Esther Howard",
    avatar: "https://i.pravatar.cc/300",
    content:
      "Arcu augue egestas nec facilisis volutpat tortor tempus vitae sit.",
  },
  {
    name: "Erat consectetur",
    avatar: "https://i.pravatar.cc/300",
    content:
      "Diam tellus risus venenatis arcu sed pretium enim. Gravida odio tincidunt sem risus.",
  },
  {
    name: "Mauris pulvinar",
    avatar: "https://i.pravatar.cc/300",
    content:
      "Quis ultricies molestie massa convallis lectus orci. Acquis vulputate tempor dapibus.",
  },
  {
    name: "Egestas mauris",
    avatar: "https://i.pravatar.cc/300",
    content:
      "Magna in ut amet blandit sit auctor gravida. Massa praesent nibh.",
  },
  {
    name: "Aliquet rhoncus",
    avatar: "https://i.pravatar.cc/300",
    content:
      "Urna pellentesque id elementum lacus urna quis odio posuere mattis ultrices.",
  },
  {
    name: "Placerat nisl",
    avatar: "https://i.pravatar.cc/300",
    content:
      "Tristique nulla proin augue ut aliquam donec ornare. Aliquam gravida egestas.",
  },
  {
    name: "Magna tellus",
    avatar: "https://i.pravatar.cc/300",
    content:
      "Leo praesent quisque placerat adipiscing sed erat turpis pharetra.",
  },
  {
    name: "Magna tellus",
    avatar: "https://i.pravatar.cc/300",
    content:
      "Leo praesent quisque placerat adipiscing sed erat turpis pharetra.",
  },
  {
    name: "Magna tellus",
    avatar: "https://i.pravatar.cc/300",
    content:
      "Leo praesent quisque placerat adipiscing sed erat turpis pharetra.",
  },
];

const Testimonials = () => {
  return (
    <section className="relative  py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-14">
          Tons of others love using PentAi.
        </h2>

        <Masonry columns={{ 640: 2, 768: 3, 1024: 4, 1280: 5 }} gap={10}>
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="relative rounded-2xl p-5 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))] border border-white/10 shadow-[0_20px_30px_rgba(0,0,0,0.35)] backdrop-blur-sm"
            >
              <div className=" pointer-events-none inset-0 rounded-2xl bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_60%)]" />

              <div className="relative z-10 flex items-center gap-3 mb-3">
                <div className="h-9 w-9 rounded-full bg-white/10 overflow-hidden">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="text-sm font-medium">{item.name}</p>
              </div>

              <p className="relative z-10 text-sm  leading-relaxed">
                {item.content}
              </p>
            </div>
          ))}
        </Masonry>
      </div>
    </section>
  );
};

export default Testimonials;
