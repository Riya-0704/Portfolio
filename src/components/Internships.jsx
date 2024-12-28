import React from "react";
import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Internships = () => {
  return (
    <div className="pb-3">
      <h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-center text-5xl font-bold text-gray my-12 "
      >
        Internships
      </h2>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-lg text-stone-400">{experience.year}</p>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h3 className="text-xl font-semibold mb-2">
                {experience.role} -{"  "}
                <span className="text-stone-400 text-lg">
                  {experience.company}
                </span>
              </h3>
              <p className="mb-4 text-stone-500">{experience.description}</p>
              {experience.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-stone-900 rounded-full px-3 py-1 text-stone-300 mr-2 mt-4 font-medium"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Internships;
