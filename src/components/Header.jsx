import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div
      className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden"
      style={{ backgroundImage: "url('/header_img.jpg')" }}
      id="Header"
    >
      <Navbar />
      <div className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white">
        <h2 className="text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20">
          Find Your Dream Home Today
        </h2>
        <p className="mx-auto mt-6 text-lg md:text-xl max-w-2xl text-gray-100">
          Find the perfect place to live, invest, or retire. Browse exclusive
          listings, from vibrant city apartments to peaceful suburban homes.
        </p>
        <div className="space-x-6 mt-16 ">
          <a href="#Projects" className="border border-white px-8 py-3 rounded">
            Projects
          </a>
          <a href="#Contact" className="bg-blue-500 px-8 py-3 rounded">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
