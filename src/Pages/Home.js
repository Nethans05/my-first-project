// src/pages/Home.js
import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import vincentPortrait from "../assets/vincent-photo.png";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between min-h-[81vh]">
      {/* Left Section */}
      <div className="md:w-1/2 text-center md:text-left p-4 md:p-8">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-4">
          Hi, I'm <span className="text-green-600">Vincent Nethansclout</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-700 mb-4">
          Software Engineer & Full Stack Developer
        </p>
        <p className="text-base sm:text-lg text-gray-600">
          I craft scalable web applications using modern technologies.  
          Graduated from ICBT Campus with a Higher Diploma in Computing & Software Engineering.
        </p>

        {/* Tech Icons */}
        <div className="flex justify-center md:justify-start gap-4 mt-6">
          <FaReact className="text-blue-500 text-4xl" />
          <FaNodeJs className="text-green-500 text-4xl" />
          <FaHtml5 className="text-orange-500 text-4xl" />
          <FaCss3Alt className="text-blue-600 text-4xl" />
          <FaJsSquare className="text-yellow-500 text-4xl" />
          <SiMongodb className="text-green-700 text-4xl" />
        </div>
      </div>

      {/* Right Section - Round Photo with Proper Head Display */}
      <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center p-4 md:p-8">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="rounded-full w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 overflow-hidden shadow-2xl border-4 border-indigo-500"
        >
          <img
            src={vincentPortrait}
            alt="Vincent Nethansclout"
            className="w-full h-full object-cover object-top"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
