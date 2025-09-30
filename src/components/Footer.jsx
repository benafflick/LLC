import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer
      className="pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden"
      id="Footer"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Logo & About */}
        <div className="w-full md:w-1/3">
          <img
            src={assets.logo}
            alt="LECON J LLC Logo"
            className="w-[180px] h-[60px] object-contain"
          />
          <p className="text-gray-400 mt-4 text-sm md:text-base">
            At LECON J LLC, we deliver premium real estate services with
            dedication and expertise, helping you find your perfect property
            effortlessly.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="w-full md:w-1/5">
          <h3 className="text-white text-lg font-bold mb-4">Company</h3>
          <ul className="flex flex-col gap-2 text-gray-400">
            <a href="#Header" className="hover:text-white">
              Home
            </a>
            <a href="#About" className="hover:text-white">
              About us
            </a>
            <a href="#Contact" className="hover:text-white">
              Contact us
            </a>
            <a href="#" className="hover:text-white">
              Privacy policy
            </a>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="w-full md:w-1/3">
          <h3 className="text-white text-lg font-bold mb-4">
            Subscribe to our newsletter
          </h3>
          <p className="text-gray-400 mt-2 mb-4 text-sm">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none w-full sm:w-auto"
            />
            <button className="py-2 px-4 rounded bg-blue-500 text-white hover:bg-blue-600 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} LECON J LLC. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
