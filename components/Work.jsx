// // import { assets, workData } from "@/assets/assets";
// // import Image from "next/image";
// // import React from "react";

// // const Work = () => {
// //   return (
// //     <div className="w-full px-[12%] py-10 scroll-mt-20" id="work">
// //       <h4 className="text-center mb-2 text-lg font-ovo">My portfolio</h4>
// //       <h2 className="text-center text-5xl font-ovo">My latest work</h2>
// //       <p className="max-w-2xl text-center mt-5 mb-12  mx-auto font-ovo">
// //         Welcome to my web development portfolio! Explore a collection of
// //         projects showcasing my expertise in front-end and full Stack
// //         development.
// //       </p>
// //       <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10">
// //         {workData.map((project, index) => (
// //           <div
// //             key={index}
// //             className=" aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group "
// //             style={{ backgroundImage: `url(${project.bgImage})` }}
// //           >
// //             <div className="bg-white w-10/12  rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 px-5 py-3 flex items-center justify-between group-hover:bottom-7 duration-500">
// //               <div>
// //                 <h2 className="font-semibold">{project.title}</h2>
// //                 <p className="text-sm text-gray-700">{project.description}</p>
// //               </div>
// //               <div className=" border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition duration-500">
// //                 <Image src={assets.send_icon} alt="" className="w-5" />
// //               </div>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //       <div className="flex items-center justify-center">
// //         <a className=" w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auo my-20 hover:bg-lightHover duration-500 " href=""> Show more
// //         <Image src={assets.right_arrow_bold} alt="right arrow"  className="w-4"/>
// //       </a>
// //       </div>
      
// //     </div>
// //   );
// // };

// // export default Work;


// 'use client';
// import { assets, workData } from "@/assets/assets";
// import Image from "next/image";
// import React, { useContext } from "react";
// import { ThemeContext } from "@/app/layout";

// const Work = () => {
//   const { isDarkMode } = useContext(ThemeContext);

//   return (
//     <div
//       id="work"
//       className={`w-full px-[12%] py-10 scroll-mt-20 transition-colors duration-500
//         ${isDarkMode ? 'bg-darkTheme text-lightHover' : "bg-white text-gray-800"}`}
//     >
//       <h4 className="text-center mb-2 text-lg font-ovo">My portfolio</h4>
//       <h2 className="text-center text-5xl font-ovo">My latest work</h2>
//       <p
//         className={`max-w-2xl text-center mt-5 mb-12 mx-auto font-ovo
//           ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
//       >
//         Welcome to my web development portfolio! Explore a collection of
//         projects showcasing my expertise in front-end and full stack
//         development.
//       </p>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10">
//         {workData.map((project, index) => (
//           <div
//             key={index}
//             className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
//             style={{ backgroundImage: `url(${project.bgImage})` }}
//           >
//             <div
//               className={`w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 px-5 py-3 flex items-center justify-between group-hover:bottom-7 duration-500
//                 ${isDarkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900"}`}
//             >
//               <div>
//                 <h2 className="font-semibold">{project.title}</h2>
//                 <p
//                   className={`text-sm ${
//                     isDarkMode ? "text-gray-300" : "text-gray-700"
//                   }`}
//                 >
//                   {project.description}
//                 </p>
//               </div>
//               <div
//                 className={`border rounded-full w-9 aspect-square flex items-center justify-center transition duration-500 shadow-[2px_2px_0_#000]
//                   ${
//                     isDarkMode
//                       ? "border-gray-300 group-hover:bg-lime-400"
//                       : "border-black group-hover:bg-lime-300"
//                   }`}
//               >
//                 <Image
//                   src={assets.send_icon}
//                   alt="send"
//                   className={`w-5 ${isDarkMode ? "invert" : ""}`}
//                 />
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="flex items-center justify-center">
//         <a
//           className={`w-max flex items-center justify-center gap-2 rounded-full py-3 px-10 mx-auo my-20 border-[0.5px] duration-500
//             ${
//               isDarkMode
//                 ? "text-gray-200 border-gray-300 hover:bg-gray-700"
//                 : "text-gray-700 border-gray-700 hover:bg-lightHover"
//             }`}
//           href=""
//         >
//           Show more
//           <Image
//             src={assets.right_arrow_bold}
//             alt="right arrow"
//             className={`w-4 ${isDarkMode ? "invert" : ""}`}
//           />
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Work;


'use client';

import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React, { useContext } from "react";
import { ThemeContext } from "@/app/layout";
import { motion } from "framer-motion";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 60,
    },
  },
};

const Work = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <motion.div
      id="work"
      className={`w-full px-[12%] py-10 scroll-mt-20 transition-colors duration-500
        ${isDarkMode ? 'bg-darkTheme text-lightHover' : "bg-white text-gray-800"}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <motion.h4 className="text-center mb-2 text-lg font-ovo" variants={cardVariants}>
        My portfolio
      </motion.h4>
      <motion.h2 className="text-center text-5xl font-ovo" variants={cardVariants}>
        My latest work
      </motion.h2>
      <motion.p
        className={`max-w-2xl text-center mt-5 mb-12 mx-auto font-ovo ${
          isDarkMode ? "text-gray-300" : "text-gray-600"
        }`}
        variants={cardVariants}
      >
        Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in front-end and full stack development.
      </motion.p>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10"
        variants={containerVariants}
      >
        {workData.map((project, index) => (
          <motion.div
            key={index}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
            style={{ backgroundImage: `url(${project.bgImage})` }}
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
          >
            <div
              className={`w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 px-5 py-3 flex items-center justify-between group-hover:bottom-7 duration-500
                ${isDarkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900"}`}
            >
              <div>
                <h2 className="font-semibold">{project.title}</h2>
                <p
                  className={`text-sm ${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {project.description}
                </p>
              </div>
              <div
                className={`border rounded-full w-9 aspect-square flex items-center justify-center transition duration-500 shadow-[2px_2px_0_#000]
                  ${
                    isDarkMode
                      ? "border-gray-300 group-hover:bg-lime-400"
                      : "border-black group-hover:bg-lime-300"
                  }`}
              >
                <Image
                  src={assets.send_icon}
                  alt="send"
                  className={`w-5 ${isDarkMode ? "invert" : ""}`}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="flex items-center justify-center"
        variants={cardVariants}
      >
        <a
          className={`w-max flex items-center justify-center gap-2 rounded-full py-3 px-10 mx-auo my-20 border-[0.5px] duration-500
            ${
              isDarkMode
                ? "text-gray-200 border-gray-300 hover:bg-gray-700"
                : "text-gray-700 border-gray-700 hover:bg-lightHover"
            }`}
          href=""
        >
          Show more
          <Image
            src={assets.right_arrow_bold}
            alt="right arrow"
            className={`w-4 ${isDarkMode ? "invert" : ""}`}
          />
        </a>
      </motion.div>
    </motion.div>
  );
};

export default Work;
