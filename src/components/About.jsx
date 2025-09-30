import React from "react";

const About = () => {
  return (
    <div
      className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden"
      id="About"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2">
        About{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          Our Company
        </span>
      </h1>
      <p className="mt-2 text-sm text-gray-500 uppercase tracking-wide">
        Trusted Real Estate Solutions in the USA for Homes and Investments
      </p>
    </div>
  );
};

export default About;
