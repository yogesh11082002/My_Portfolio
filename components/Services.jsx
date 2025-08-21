
'use client'

import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React, { useContext, useState } from 'react'
import { motion } from 'framer-motion'
import { ThemeContext } from '@/app/layout'

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      duration: 0.6
    }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 50,
    }
  }
}

const Services = () => {
  const { isDarkMode } = useContext(ThemeContext)
  const [expandedIndex, setExpandedIndex] = useState(null) // track which card is expanded

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <motion.div 
      className={`w-full px-[8%] py-10 scroll-mt-20 ${
        isDarkMode ? 'bg-[#121212] text-white' : 'bg-white text-black'
      }`}
      id="services"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <motion.h4 
        className="text-center mb-2 text-lg font-ovo"
        variants={cardVariants}
      >
        What I Offer
      </motion.h4>

      <motion.h2 
        className="text-center text-4xl sm:text-5xl font-ovo"
        variants={cardVariants}
      >
        My Services
      </motion.h2>

      <motion.p 
        className='max-w-2xl text-center mt-5 mb-12 mx-auto font-ovo'
        variants={cardVariants}
      >
        I am a passionate full stack developer skilled in building dynamic, scalable web applications using modern technologies and frameworks.
      </motion.p>

      <motion.div 
        className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10'
        variants={containerVariants}
      >
        {serviceData.map(({ icon, title, description, moreContent }, index) => (
        <motion.div
  key={index}
  className={`
    rounded-lg px-8 py-12 cursor-pointer transition-all duration-500 ease-in-out
    hover:-translate-y-2 hover:scale-[1.02]
    ${isDarkMode 
  ? 'bg-[#1e1e1e] border border-gray-600 text-white hover:bg-[#1a1f2e] hover:shadow-[0_8px_25px_rgba(59,130,246,0.25)]' 
  : 'bg-white border border-gray-300 text-gray-800 hover:bg-gray-100 hover:shadow-[0_4px_20px_rgba(0,0,0,0.1)]'
}

  `}
  variants={cardVariants}
  whileHover={{ scale: 1.03 }}
>

            <Image src={icon} alt="" className='w-10' />
            <h3 className={`text-lg my-4 font-semibold ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
              {title}
            </h3>
            <p className={`text-sm leading-5 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {description}
            </p>

           
           {/* Expanded content */}
{expandedIndex === index && (
  <motion.div 
    initial={{ opacity: 0, height: 0 }}
    animate={{ opacity: 1, height: "auto" }}
    exit={{ opacity: 0, height: 0 }}
    transition={{ duration: 0.4, ease: "easeInOut" }}
    className={`mt-4 p-3 rounded-lg border text-sm leading-6 shadow-sm
      ${isDarkMode 
        ? "bg-[#2a2a2a] border-gray-700 text-gray-300" 
        : "bg-gray-50 border-gray-200 text-gray-700"
      }`}
  >
    {moreContent}
  </motion.div>
)}


            {/* Toggle button */}
            <button 
              onClick={() => handleToggle(index)} 
              className="flex items-center gap-2 mt-5 text-sm underline"
            >
              {expandedIndex === index ? 'Show less' : 'Read more'}
              <Image src={assets.right_arrow} alt="" className={`w-4 transition-transform ${expandedIndex === index ? 'rotate-90' : ''}`} />
            </button>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Services
