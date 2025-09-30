import React from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <>
      {/* Contact Section */}
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        id="Contact"
        className="relative min-h-screen p-6 py-20 l]g:px-32 flex flex-col items-center mb-7 bg-gray-50 w-full"
      >
        {/* Heading and Intro Text */}
        <div className="text-center px-6 md:px-16 py-12">
          <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
            Contact{" "}
            <span className="underline underline-offset-4 decoration-1 under font-light">
              With Us
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We’d love to hear from you. Whether you have questions about our
            services or want to start your next property project, we’re here to
            help.
          </p>
        </div>

        {/* Two Columns: Image + Contact Info */}
        <div className="flex flex-col md:flex-row w-full max-w-6xl">
          {/* Left Column - Image */}
          <div className="md:w-1/2 h-80 md:h-auto relative">
            <img
              src={assets.contact_img} // make sure assets.contact points to your image
              alt="Contact background"
              className="w-full h-full object-cover rounded-l-xl"
            />
          </div>

          {/* Right Column - Contact Info */}
          {/* Right Column - Contact Info */}
          <div className="md:w-1/2 flex flex-col items-start justify-center p-8 md:p-16 bg-white rounded-r-xl shadow-lg transition-transform hover:scale-105 duration-300">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              LECON J LLC
            </h2>
            <ul className="space-y-6 text-gray-700">
              <li className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-600 mt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 12.414m0 0L10 15l-4-4 4-4 3.414 3.414m-3.414-3.414L17.657 7.343M12 3v18"
                  />
                </svg>
                <span>
                  <span className="font-semibold">Address:</span> 3212
                  Schumacher St SW, Albuquerque, NM 87120
                </span>
              </li>

              <li className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5h2M3 9h2m0 4h2m0 4h2M7 5h2m0 4h2m0 4h2m0 4h2"
                  />
                </svg>
                <span>
                  <span className="font-semibold">Phone:</span>{" "}
                  <a
                    href="tel:+15551234567"
                    className="text-blue-600 hover:underline"
                  >
                    (555) 123-4567
                  </a>
                </span>
              </li>

              <li className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 12h2m-2 4h2m-2-8h2M4 4h16v16H4V4z"
                  />
                </svg>
                <span>
                  <span className="font-semibold">Email:</span>{" "}
                  <a
                    href="mailto:contact@leconjllc.com"
                    className="text-blue-600 hover:underline"
                  >
                    contact@leconjllc.com
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Homepage;
