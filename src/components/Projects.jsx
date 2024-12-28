import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const childVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const Projects = () => {
  return (
    <div className="pb-4">
      <h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-center text-5xl font-bold my-12 "
      >
        Projects
      </h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="w-full lg:w-1/4 items-center flex justify-center mb-6 lg:mb-0 "
            >
              <img
                src={project.image}
                alt={project.title}
                width={250}
                height={250}
                className="rounded mb-6"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="w-full max-w-xl lg:w-3/4 mb-4"
            >
              <h3 className="text-3xl font-semibold mb-2">
                {project.title}
                {" - "}
                <a
                  href={project.live}
                  className="text-stone-400 text-2xl hover:text-stone-50 hover:scale-110 transition-all duration-300"
                >
                  {" "}
                  Link
                </a>
              </h3>
              <p className="mb-4 text-stone-200">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-white rounded-full px-3 py-1 text-stone-800 mr-2"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -200 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="flex justify-center mt-8 font-bold"
      >
        <a
          href="https://github.com/Riya-0704?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white rounded-full p-4 text-base text-stone-800 mb-10 hover:bg-stone-800 hover:text-white hover:shadow-lg 
             transition-all duration-300 transform hover:-translate-y-1"
        >
          See More Projects --&gt;
        </a>
      </motion.div>
    </div>
  );
};

export default Projects;
