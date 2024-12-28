import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs, FaPython } from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiCplusplus,
  SiDjango,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTailwindcss,
  SiBootstrap,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { motion } from "framer-motion";

const iconVariant = {
  initial: {
    opacity: 0,
    scale: 0.5,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const Technologies = () => {
  return (
    <div className="pb-24">
      <h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="my-16 font-bold text-center text-5xl"
      >
        Technologies
      </h2>
      <div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="flex flex-wrap items-center justify-center gap-10"
      >
        <div initial="initial" animate="animate" variants={iconVariant}>
          <SiCplusplus className="text-8xl text-blue-300 " />
        </div>

        <div initial="initial" animate="animate" variants={iconVariant}>
          <SiHtml5 className="text-8xl text-orange-600 " />
        </div>

        <div initial="initial" animate="animate" variants={iconVariant}>
          <SiCss3 className="text-8xl text-blue-300 " />
        </div>

        <div initial="initial" animate="animate" variants={iconVariant}>
          <SiJavascript className="text-8xl text-yellow-400 " />
        </div>

        <div initial="initial" animate="animate" variants={iconVariant}>
          <SiTailwindcss className="text-8xl text-blue-400 " />
        </div>

        <div initial="initial" animate="animate" variants={iconVariant}>
          <SiBootstrap className="text-8xl text-blue-600 " />
        </div>

        <div initial="initial" animate="animate" variants={iconVariant}>
          <RiReactjsLine className="text-8xl text-cyan-500" />
        </div>

        <div initial="initial" animate="animate" variants={iconVariant}>
          <FaNodeJs className="text-8xl text-green-600" />
        </div>

        <div initial="initial" animate="animate" variants={iconVariant}>
          <FaPython className="text-8xl text-yellow-600" />
        </div>

        <div initial="initial" animate="animate" variants={iconVariant}>
          <SiDjango className="text-8xl text-green-800" />
        </div>

        <div initial="initial" animate="animate" variants={iconVariant}>
          <SiExpress className="text-8xl text-gray-600" />
        </div>

        <div initial="initial" animate="animate" variants={iconVariant}>
          <SiMongodb className="text-8xl text-green-500" />
        </div>

        <div initial="initial" animate="animate" variants={iconVariant}>
          <GrMysql className="text-8xl text-blue-600" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
