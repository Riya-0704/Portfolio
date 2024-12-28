import React from "react";
import profilePic from "../assets/Profile_Pic.png";
import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, staggerChildren: 0.5 },
  },
};

const childVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const Hero = () => {
  return (
    <div className=" bg-container flex flex-col lg:flex-row items-center lg:items-start lg:space-x-6 mt-10">
      <div className="w-full lg:w-1/2 lg:order-2 flex justify-center lg:justify-end mb-6 lg:mb-0">
        <motion.img
          src={profilePic}
          alt="Riya"
          className="border border-stone-900 rounded-lg lg:w-full shadow-lg shadow-cyan-800 "
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          width={750}
          height={750}
        />
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="w-full lg:w-1/2 lg:order-1 flex flex-col items-center lg:items-start"
      >
        <motion.h2
          variants={childVariants}
          className="pb-2 text-5xl font-bold tracking-tighter lg:text-5xl"
        >
          {" "}
          Riya
        </motion.h2>
        <motion.span
          variants={childVariants}
          className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-4xl font-semibold tracking-tight text-transparent"
        >
          Full Stack Developer
        </motion.span>
        <motion.p
          variants={childVariants}
          className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter text-center lg:text-left"
        >
          {HERO_CONTENT}
        </motion.p>
        <motion.a
          variants={childVariants}
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          href="/Riya_Resume.pdf"
          className="bg-white rounded-full p-4 text-sm text-stone-800 mb-10 
             hover:bg-stone-800 hover:text-white hover:shadow-lg 
             transition-all duration-300 transform hover:-translate-y-1"
          download
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Resume
        </motion.a>
      </motion.div>
    </div>
  );
};

export default Hero;
