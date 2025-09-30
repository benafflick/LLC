import React from "react";

const TestimonialCard = () => {
  const cardsData = [
    {
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
      name: "Briar Martin",
      handle: "@neilstellar",
      message:
        "Working with LECON J LLC was a seamless experience — they helped us find our perfect home with ease.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
      name: "Avery Johnson",
      handle: "@averywrites",
      message:
        "The team at LECON J LLC was professional, knowledgeable, and attentive. We couldn’t be happier with our new property!",
    },
    {
      image:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60",
      name: "Jordan Lee",
      handle: "@jordantalks",
      message:
        "LECON J LLC turned our vision into reality. They guided us through every step.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60",
      name: "Avery Johnson",
      handle: "@averywrites",
      message:
        "From consultation to handing over the keys — everything was handled with care and expertise by LECON J LLC.",
    },
  ];

  const CreateCard = ({ card }) => (
    <div className="p-4 rounded-lg mx-4 shadow hover:shadow-lg transition-all duration-200 w-72 shrink-0 bg-white">
      <div className="flex gap-2">
        <img
          className="w-11 h-11 rounded-full object-cover"
          src={card.image}
          alt="User"
        />
        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <p className="font-semibold">{card.name}</p>
          </div>
          <span className="text-xs text-slate-500">{card.handle}</span>
        </div>
      </div>
      <p className="text-sm py-4 text-gray-800">{card.message}</p>
    </div>
  );

  return (
    <section className="py-12 bg-gray-50">
      {/* Section Heading */}
      <div className="max-w-3xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
        <p className="text-gray-600">
          At <span className="font-semibold">LECON J LLC</span>, we build
          lasting relationships by delivering exceptional service and beautiful
          homes. Here’s what some of our homeowners have to say about their
          journey with us.
        </p>
      </div>

      {/* Testimonials Marquee */}
      <div className="mt-10 marquee-row w-full mx-auto max-w-5xl overflow-hidden relative">
        <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent"></div>
        <div className="marquee-inner flex transform-gpu min-w-[200%] pt-10 pb-5 animate-marqueeScroll">
          {[...cardsData, ...cardsData].map((card, index) => (
            <CreateCard key={index} card={card} />
          ))}
        </div>
        <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent"></div>
      </div>

      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marqueeScroll {
          animation: marqueeScroll 25s linear infinite;
        }
        .marquee-reverse {
          animation-direction: reverse;
        }
      `}</style>
    </section>
  );
};

export default TestimonialCard;
