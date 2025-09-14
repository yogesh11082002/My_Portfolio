

"use client";

import React, { useState, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeContext } from "@/app/layout";
import Image from "next/image";

import ecommerceImg from "@/public/projects/ecommerce.png";
import blogImg from "@/public/projects/echoblog.png";
import jobImg from "@/public/projects/job_portal.png";
import portfolioImg from "@/public/projects/portfolio.png";
import chatImg from "@/public/projects/chat.png";
import NetflixImg from "@/public/projects/netflix.png";

// Data
const workData = [
  {
    title: "Nexa AI",
    description: "  AI-powered content generation platform",
    bgImage: portfolioImg,
    link: "https://nexa-ai-neon-yogesh.vercel.app/",
  },
  {
    title: "E-Commerce",
    description: "A modern e-commerce site with cart and payment integration",
    bgImage: ecommerceImg,
    link: "https://quickcart-yogesh.vercel.app/",
  },
  {
    title: "Blog",
    description:
      "A full-stack blog platform with authentication and CMS features",
    bgImage: blogImg,
    link: "https://echoblog-yogesh.vercel.app/",
  },
   {
    title: " Movie Website",
    description: " A movie website like Netflix with aunthetication",
    bgImage: NetflixImg,
    link: "https://mymovieapp-yogesh.vercel.app/",
  },
  // Extra projects
    {
    title: "Job Portal",
    description: "An online platform connecting job seekers and employers",
    bgImage: jobImg,
    link: "https://yogesh-job-portal.vercel.app/",
  },

  {
    title: "Chat App",
    description: "Real-time chat app with WebSockets and authentication",
    bgImage: chatImg,
    link: "#",
  },
 
];

// Variants
const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: 20,
    scale: 0.98,
    transition: { duration: 0.25 },
  },
};

const Work = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? workData : workData.slice(0, 4);

  return (
    <section
      id="work" // ✅ Fix for navbar anchor link
      className="w-11/12 max-w-6xl mx-auto text-center py-16 scroll-mt-20"
    >
      {/* Header */}
      <motion.div
        variants={headerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        <p className="text-lg">My portfolio</p>
        <h2 className="text-4xl font-bold my-2">My latest work</h2>
        <p
          className={`max-w-2xl mx-auto ${
            isDarkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Welcome to my web development portfolio! Explore a collection of
          projects showcasing my expertise in front-end and full stack
          development.
        </p>
      </motion.div>

      {/* Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 sm:gap-6 mt-10"

        variants={gridVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <AnimatePresence mode="popLayout">
          {displayedProjects.map((project) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-2xl overflow-hidden shadow-md transition duration-300 ${
                isDarkMode ? "bg-gray-800" : "bg-white"
              }`}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              layout
              whileHover={{ y: -6, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
             <div className="relative w-full aspect-[4/3]">
  <Image
    src={project.bgImage}
    alt={project.title}
    fill
    className="object-cover rounded-t-2xl"
    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
  />
</div>

              <div className="p-5 text-left">
                <h3
                  className={`text-lg font-semibold ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {project.title}
                </h3>
                <p
                  className={`mt-2 text-sm ${
                    isDarkMode ? "text-gray-400" : "text-gray-700"
                  }`}
                >
                  {project.description}
                </p>
              </div>
            </motion.a>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Show More / Show Less */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setShowAll((s) => !s)}
        className={`mt-10 px-6 py-2 rounded-full font-medium shadow-md transition ${
          isDarkMode
            ? "bg-lime-400 text-black hover:bg-lime-300"
            : "bg-lime-500 text-white hover:bg-lime-600"
        }`}
      >
        {showAll ? "Show Less" : "Show More"}
      </motion.button>
    </section>
  );
};

export default Work;

