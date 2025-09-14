

import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useContext } from "react";
import { ThemeContext } from "@/app/layout";
import { motion } from "framer-motion";

const Header = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto min-h-screen flex flex-col items-center justify-center gap-3 pt-12 lg:pt-24 ">

      {/* Profile Image */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
      >
        <Image src={assets.profile_img} alt="profile" className="rounded-lg w-50" />
      </motion.div>

      {/* Heading with hand icon */}
      <motion.h3
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo"
      >
        Hi! I'm Yogesh Sengar
        <motion.div
          initial={{ rotate: -20 }}
          animate={{ rotate: [ -20, 20, -20 ] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
        >
          <Image src={assets.hand_icon} alt="wave hand" className="w-6" />
        </motion.div>
      </motion.h3>

      {/* Main Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.7 }}
        className="text-3xl sm:text-6xl lg:text-[50px] font-ovo"
      >
        Full Stack Web Developer
      </motion.h1>

      {/* Paragraph */}
      <motion.p
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 1 }}
        className="max-w-2xl mx-auto font-ovo"
      >
        I am a passionate full stack developer skilled in building dynamic,
        scalable web applications using modern technologies and frameworks.
      </motion.p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        
        {/* Contact button */}
        <motion.a
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.2 }}
          href="#contact"
          className="flex items-center gap-2 px-10 py-3 border border-white bg-black text-white rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
        >
          Contact Me
          <Image src={assets.right_arrow_white} alt="arrow icon" className="w-4" />
        </motion.a>

        {/* Resume button */}
        <motion.a
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.4 }}
          href="/yogesh-resume.pdf"
          download
          className={`flex items-center gap-2 px-10 py-3 border rounded-full font-ovo shadow-md hover:scale-105 transition-transform duration-300
            ${isDarkMode
              ? "bg-white text-black border-white"
              : "border-gray-500 bg-transparent text-black"
            }`}
        >
          My Resume
          <Image src={assets.download_icon} alt="download icon" className="w-4" />
        </motion.a>
      </div>
    </div>
  );
};

export default Header;

