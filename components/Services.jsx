// import { assets, serviceData } from '@/assets/assets'
// import Image from 'next/image'
// import React from 'react'

// const Services = () => {
//   return (
//     <div  className="w-full px-[12%] py-10 scroll-mt-20" id="services">
//       <h4 className="text-center mb-2 text-lg font-ovo">What I Offer</h4>
//       <h2 className="text-center text-5xl font-ovo">My Services</h2>
//       <p className='max-w-2xl text-center mt-5 mb-12  mx-auto font-ovo'> I am a passionate full stack developer skilled in building dynamic, scalable web applications using modern technologies and frameworks.</p>
    
//     <div className='grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10'>
//     {serviceData.map(({icon,title,description,link},index)=>(
//       <div key={index}
//       className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 '>
//           <Image src={icon} alt="" className='w-10' />
//           <h3 className='text-lg my-4 text-gray-700'>{title}</h3>
//           <p className='text-sm text-gray-600 leading-5'>{description}</p>
//           <a href={link} className='flex items-center gap-2 mt-5 text-sm'>
//             Read more <Image src={assets.right_arrow} alt="" className='w-4' />
//           </a>
//       </div>
//     ))}
//     </div>
    
//     </div>
//   )
// }

// export default Services

'use client'

import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React, { useContext } from 'react'
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
        {serviceData.map(({ icon, title, description, link }, index) => (
          <motion.div
            key={index}
            className={`
              rounded-lg px-8 py-12 cursor-pointer transition-all duration-500 ease-in-out
              hover:-translate-y-1 hover:shadow 
              ${isDarkMode 
                ? 'bg-[#1e1e1e] border border-gray-600 text-white hover:bg-[#2a2a2a]' 
                : 'bg-white border border-gray-300 text-gray-800 hover:bg-gray-100'
              }
            `}
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
          >
            <Image src={icon} alt="" className='w-10' />
            <h3 className={`text-lg my-4 font-semibold ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
              {title}
            </h3>
            <p className={`text-sm leading-5 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {description}
            </p>
            <a href={link} className='flex items-center gap-2 mt-5 text-sm underline'>
              Read more <Image src={assets.right_arrow} alt="" className='w-4' />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Services
