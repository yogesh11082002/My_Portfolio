// 'use client';
// import React, { useContext } from 'react';
// import { assets } from '../assets/assets';
// import Image from 'next/image';
// import { ThemeContext } from '@/app/layout';

// const Footer = () => {
//   const { isDarkMode } = useContext(ThemeContext);

//   return (
//     <div className={`container px-4 2xl:px-20 mx-auto flex items-center justify-between gap-4 py-3 mt-20 
//                      ${isDarkMode ? 'bg-darkTheme text-lightHover' : 'bg-white text-gray-900'}`}>

//       <h2 className='text-2xl lg:text-3xl'>Yogesh Thakur</h2>

//       <p className='flex-1 flex justify-center items-center text-sm max-sm:hidden'>
//         Copyright © YogeshThakur | All Rights Reserved
//       </p>

//       <div className='flex items-center gap-2.5'>
//         <a href="https://www.facebook.com/yogesh.sengar.589" target="_blank" rel="noopener noreferrer">
//           <Image width={38} src={assets.facebook_icon} alt="facebook" className={isDarkMode ? 'invert' : ''} />
//         </a>
//         <a href="https://twitter.com/YogeshT12554000" target="_blank" rel="noopener noreferrer">
//           <Image width={38} src={assets.twitter_icon} alt="twitter" className={isDarkMode ? 'invert' : ''} />
//         </a>
//         <a href="https://www.instagram.com/yogesh_thakur_1108" target="_blank" rel="noopener noreferrer">
//           <Image width={38} src={assets.instagram_icon} alt="instagram" className={isDarkMode ? 'invert' : ''} />
//         </a>
//         <a href="https://github.com/yogesh11082002" target="_blank" rel="noopener noreferrer">
//           <Image width={38} src={assets.git} alt="github" className={isDarkMode ? 'invert' : ''} />
//         </a>
//       </div>
//     </div>
//   )
// }

// export default Footer;

'use client';

import React, { useContext } from 'react';
import { assets } from '../assets/assets';
import Image from 'next/image';
import { ThemeContext } from '@/app/layout';
import { motion } from 'framer-motion';

// Animation variants
const footerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const iconsContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const iconVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 70 },
  },
};

const Footer = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <motion.footer
      className={`container px-4 2xl:px-20 mx-auto flex items-center justify-between gap-4 py-3 mt-20 
                 ${isDarkMode ? 'bg-darkTheme text-lightHover' : 'bg-white text-gray-900'}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerVariants}
    >
      <motion.h2
        className="text-2xl lg:text-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Yogesh Thakur
      </motion.h2>

      <motion.p
        className="flex-1 flex justify-center items-center text-sm max-sm:hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Copyright © YogeshThakur | All Rights Reserved
      </motion.p>

      <motion.div
        className="flex items-center gap-2.5"
        variants={iconsContainerVariants}
        initial="hidden"
        animate="visible"
      >
        {[
          { href: "https://www.facebook.com/yogesh.sengar.589", icon: assets.facebook_icon, alt: "facebook" },
          { href: "https://twitter.com/YogeshT12554000", icon: assets.twitter_icon, alt: "twitter" },
          { href: "https://www.instagram.com/yogesh_thakur_1108", icon: assets.instagram_icon, alt: "instagram" },
          { href: "https://github.com/yogesh11082002", icon: assets.git, alt: "github" },
        ].map(({ href, icon, alt }, index) => (
          <motion.a
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            variants={iconVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              width={38}
              src={icon}
              alt={alt}
              className={isDarkMode ? 'invert' : ''}
            />
          </motion.a>
        ))}
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
