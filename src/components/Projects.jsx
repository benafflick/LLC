import React, { useEffect } from "react";
import { assets, projectsData } from "../assets/assets";
import { useState } from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(1);

  useEffect(() => {
    const updateItemsToShow = () => {
      if (window.innerWidth >= 1024) {
        setItemsToShow(projectsData.length);
      } else {
        setItemsToShow(1);
      }
    };

    updateItemsToShow();

    window.addEventListener("resize", updateItemsToShow);
    return () => window.removeEventListener("resize", updateItemsToShow);
  }, []);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden"
      id="Projects"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Milestones{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          Achieved
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-8 max-w-80 mx-auto">
        We take pride in delivering quality projects that exceed expectations
        and stand the test of time.
      </p>

      {/* Projects Grid */}

      <div className="flex justify-end items-center mb-8">
        <button
          className="p-3 bg-gray-200 rounded mr-2"
          aria-label="Previous"
          onClick={prevProject}
        >
          <img src={assets.left_arrow} alt="Previous" />
        </button>

        <button
          className="p-3 bg-gray-200 rounded mr-2"
          aria-label="Next"
          onClick={nextProject}
        >
          <img src={assets.right_arrow} alt="Next" />
        </button>
      </div>

      {/* Projects Cards */}
      <div className="overflow-hidden">
        <div
          className="flex gap-8 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / itemsToShow}%)`,
          }}
        >
          {projectsData.map((project, index) => (
            <div key={index} className="relative flex-shrink-0 w-full sm:w-1/4">
              <img src={project.image} alt={project.title} />
              <div className="absolute left-0 right-0 bottom-5 flex justify-center">
                <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-md">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {project.title}
                  </h2>
                  <p className="text-gray text-sm">
                    {project.price} <span>|</span> {project.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
