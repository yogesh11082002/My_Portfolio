// import { assets, infoList, toolsData } from "@/assets/assets";
// import Image from "next/image";
// import React from "react";
// import { useContext } from "react";
// import { ThemeContext } from "@/app/layout";

// const About = () => {

//   const { isDarkMode } = useContext(ThemeContext);
//   return (
//     <div className="w-full px-[12%] py-10 scroll-mt-20" id="about">
//       <h4 className="text-center mb-2 text-lg font-ovo">Introduction</h4>
//       <h2 className="text-center text-5xl font-ovo">About me</h2>

//       <div className="flex flex-col w-full lg:flex-row items-center gap-20 my-20">
//         <div className="w-auto lg:w-2/5 rounded-3xl max-w-none">
//           <Image
//             className="w-full  rounded-3xl"
//             src={assets.user_image}
//             alt="user pic"
//           />
//         </div>
//         <div className="flex-1">
//           <p className="text-lg font-ovo text-justify">
//             Hello! I'm a passionate web developer with a keen interest in
//             creating dynamic and responsive web applications. I have experience
//             in various technologies and frameworks, and I love to learn new
//             skills to enhance my development capabilities.
//           </p>

//           <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mt-10">
//             {infoList.map(({ icon, iconDark, title, description }, index) => (
//               <li
//                 key={index}
//                 className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 transition-all ease-in-out hover:shadow-black  "
//               >
//                 <Image
//                   src={icon}
//                   alt={title}
//                   width={30}
//                   height={30}
//                   className="w-7 mt-3"
//                 />
//                 <h3 className="my-3 font-semibold text-gray-700">{title}</h3>
//                 <p className="text-gray-600 text-sm">{description}</p>
//               </li>
//             ))}
//           </ul>
//           <h4 className="my-6 text-gray-700 font-ovo">Tools I use</h4>
//           <ul className="flex items-center gap-3 sm:gap-5 flex-wrap">
//             {toolsData.map((tool , index) => (
//               <li className="flex items-center justify-center w-12 sm:w-14  aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 transition-all ease-in-out "
//                 key={index}
                
//               >
//                 <Image
//                   src={tool}
//                   alt={tool}
//                   width={20}
//                   height={20}
//                   className="w-5 sm:w-7" 
//                 />
                
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;
"use client";

import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React, { useContext } from "react";
import { ThemeContext } from "@/app/layout";
import { motion } from "framer-motion";

const About = () => {
  const { isDarkMode } = useContext(ThemeContext);

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <div
      className={`w-full px-[8%] py-10 scroll-mt-20 ${
        isDarkMode ? "bg-[#121212] text-white" : "bg-white text-black"
      }`}
      id="about"
    >
      {/* Heading */}
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-2 text-lg font-ovo"
      >
        Introduction
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center text-4xl sm:text-5xl font-ovo"
      >
        About me
      </motion.h2>

      <div className="flex flex-col w-full lg:flex-row items-center gap-14 my-16">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-auto lg:w-2/5 rounded-3xl max-w-none"
        >
          <Image
            className="w-full rounded-3xl"
            src={assets.user_image}
            alt="user pic"
          />
        </motion.div>

        {/* Text + Info Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true }}
          className="flex-1 w-full"
        >
          {/* Paragraph */}
          <motion.p
            variants={fadeInUp}
            className="text-lg font-ovo text-justify leading-relaxed"
          >
            Hello! I'm a passionate web developer with a keen interest in
            creating dynamic and responsive web applications. I have experience
            in various technologies and frameworks, and I love to learn new
            skills to enhance my development capabilities.
          </motion.p>

          {/* Info Cards */}
          <motion.ul
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mt-10"
          >
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                key={index}
                variants={fadeInUp}
                className={`rounded-xl p-6 cursor-pointer transition-all duration-500 ease-in-out hover:-translate-y-1 hover:shadow 
                ${isDarkMode
                    ? "border border-gray-600 bg-[#1e1e1e] text-white hover:bg-[#2a2a2a]"
                    : "border border-gray-300 bg-white text-gray-700 hover:bg-gray-100"
                  }`}
              >
                <Image
                  src={isDarkMode ? iconDark : icon}
                  alt={title}
                  width={30}
                  height={30}
                  className="w-7 mt-3"
                />
                <h3 className="my-3 font-semibold">{title}</h3>
                <p className="text-sm">{description}</p>
              </motion.li>
            ))}
          </motion.ul>

          {/* Tools */}
          <motion.h4
            variants={fadeInUp}
            className={`my-6 font-ovo ${isDarkMode ? "text-white" : "text-gray-700"}`}
          >
            Tools I use
          </motion.h4>
          <motion.ul
            variants={staggerContainer}
            className="flex items-center gap-3 sm:gap-5 flex-wrap"
          >
            {toolsData.map((tool, index) => (
              <motion.li
                key={index}
                variants={fadeInUp}
                className={`flex items-center justify-center w-12 sm:w-14 aspect-square rounded-lg cursor-pointer transition-all duration-500 ease-in-out hover:-translate-y-1 
                ${isDarkMode
                    ? "border border-gray-600 bg-[#1e1e1e] hover:bg-[#2a2a2a]"
                    : "border border-gray-300 bg-white hover:bg-gray-100"
                  }`}
              >
                <Image
                  src={tool}
                  alt={tool}
                  width={20}
                  height={20}
                  className="w-5 sm:w-7"
                />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

