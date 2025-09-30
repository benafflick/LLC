import React from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
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

      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
        {/* Left Section */}
        <img
          src={assets.brand_img}
          alt=""
          className="w-full sm:w-1/2 max-w-lg"
        />

        <div className="flex flex-col items-center md:items-start mt-10 text-gray-600 ">
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
            <div>
              <p className="text-4xl font-medium text-gray-800">10+</p>
              <p>Years of Excellence</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">15+</p>
              <p>Projects Completed</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">30+</p>
              <p>Mn. Sq. Ft. Delivered</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">25+</p>
              <p>Ongoing Projects</p>
            </div>
          </div>
          <p className="my-10 max-w-lg">
            We are committed to delivering reliable real estate services that
            connect clients with their dream homes and valuable investments.
            With a focus on professionalism, integrity, and client satisfaction,
            our company has built a reputation for excellence across the U.S.
            property market.
          </p>
          <button className="bg-blue-600 text-white px-8 py-2 rounded">
            Discover More
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
