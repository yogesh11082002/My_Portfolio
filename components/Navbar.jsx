// 'use client';
// import { assets } from '@/assets/assets'
// import React, { useRef, useContext } from 'react'
// import Image from 'next/image'
// import { ThemeContext } from '@/app/layout'

// const Navbar = () => {
//   const sideMenuRef = useRef();
//   const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);

//   const openMenu = () => {
//     sideMenuRef.current.style.transform = 'translateX(-16rem)'
//   }
//   const closeMenu = () => {
//     sideMenuRef.current.style.transform = 'translateX(16rem)'
//   }

//   return (
//     <>
//       <nav className='w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex justify-between items-center bg-[var(--bg)] text-[var(--text)] shadow-sm z-50 transition-colors duration-300'>
        
//         <h1 className='text-3xl font-black'>Yogesh Thakur</h1>

//         {/* Desktop Menu */}
//         <ul 
//   className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-[var(--bg)] shadow-sm bg-opacity-50 transition-colors duration-300 
//     ${isDarkMode ? 'border border-white-300' : 'border border-gray-400'}`}
// >
//   <li><a className='font-ovo' href="#top">Home</a></li>
//   <li><a className='font-ovo' href="#about">About me</a></li>
//   <li><a className='font-ovo' href="#services">Services</a></li>
//   <li><a className='font-ovo' href="#work">My Work</a></li>
//   <li><a className='font-ovo' href="#contact">Contact me</a></li>
// </ul>


//         {/* Right Side Controls */}
//         <div className='flex items-center gap-4 lg:gap-6'>
//           {/* Dark Mode Toggle */}
//           <button onClick={() => setIsDarkMode(!isDarkMode)}>
//             <Image 
//               src={isDarkMode ? assets.sun_icon : assets.moon_icon} 
//               alt="toggle theme" 
//               className='w-6 cursor-pointer transition-transform duration-300 hover:scale-110'
//             />
//           </button>

//           {/* Contact Button (Desktop Only) */}
//           <a href="#contact" className='hidden lg:flex items-center text-lg font-outfit gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 transition-colors duration-300'>
//             Contact 
//             <Image src={ isDarkMode? assets.arrow_icon_dark :assets.arrow_icon} alt="arrow icon" className='w-3' />
//           </a>

//           {/* Mobile Menu Button */}
//          {/* Mobile Menu Button */}
// <button className='block md:hidden ml-3' onClick={openMenu}>
//   <Image 
//     src={isDarkMode ? assets.menu_white : assets.menu_black} 
//     alt="menu icon" 
//     className='w-6 transition-transform duration-300 hover:scale-110'
//   />
// </button>

//         </div>

//         {/* Mobile Menu */}
//         <ul 
//           ref={sideMenuRef} 
//           className='md:hidden flex flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-[var(--bg)] text-[var(--text)] transition duration-500 rounded-lg'
//         >
//           <div className='absolute top-6 right-6' onClick={closeMenu}>
//             <Image src={ isDarkMode? assets.close_white: assets.close_black} alt="close icon" className='w-6 cursor-pointer' />
//           </div>
//           <li><a className='font-ovo' onClick={closeMenu} href="#top">Home</a></li>
//           <li><a className='font-ovo' onClick={closeMenu} href="#about">About me</a></li>
//           <li><a className='font-ovo' onClick={closeMenu} href="#services">Services</a></li>
//           <li><a className='font-ovo' onClick={closeMenu} href="#work">My Work</a></li>
//           <li><a className='font-ovo' onClick={closeMenu} href="#contact">Contact me</a></li>
//         </ul>
//       </nav>
//     </>
//   )
// }

// export default Navbar

'use client';

import React, { useRef, useContext, useEffect } from 'react';
import { assets } from '@/assets/assets';
import Image from 'next/image';
import { ThemeContext } from '@/app/layout';
import { motion, AnimatePresence } from 'framer-motion';

// Variants for desktop menu
const navVariants = {
  hidden: { y: -60, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      when: 'beforeChildren',
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

// Mobile menu slide animation
const mobileMenuVariants = {
  hidden: { x: '100%' },
  visible: {
    x: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
  exit: {
    x: '100%',
    transition: { duration: 0.3, ease: 'easeIn' },
  },
};

const Navbar = () => {
  const sideMenuRef = useRef();
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = React.useState(false);

  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (menuOpen && sideMenuRef.current) {
      sideMenuRef.current.scrollTop = 0; // Prevent background scroll lock issues
    }
  }, [menuOpen]);

  return (
    <>
      {/* Navbar */}
      <motion.nav
        className='w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex justify-between items-center bg-[var(--bg)] text-[var(--text)] shadow-sm z-50 transition-colors duration-300'
        initial="hidden"
        animate="visible"
        variants={navVariants}
      >
        {/* Logo */}
        <motion.h1 className='text-3xl font-black' variants={itemVariants}>
          Yogesh Thakur
        </motion.h1>

        {/* Desktop Menu */}
        <motion.ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-[var(--bg)] shadow-sm bg-opacity-50 transition-colors duration-300 
          ${isDarkMode ? 'border border-white-300' : 'border border-gray-400'}`}
        >
          {['Home', 'About me', 'Services', 'My Work', 'Contact me'].map((text, idx) => (
            <motion.li key={idx} variants={itemVariants}>
              <a className='font-ovo' href={`#${text.toLowerCase().replace(/\s/g, '')}`}>
                {text}
              </a>
            </motion.li>
          ))}
        </motion.ul>

        {/* Right Side Controls */}
        <div className='flex items-center gap-4 lg:gap-6'>
          {/* Dark Mode Toggle */}
          <motion.button
            onClick={() => setIsDarkMode(!isDarkMode)}
            whileTap={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt="toggle theme"
              className='w-6 cursor-pointer transition-transform duration-300 hover:scale-110'
            />
          </motion.button>

          {/* Contact Button */}
          <motion.a
            href="#contact"
            className='hidden lg:flex items-center text-lg font-outfit gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 transition-colors duration-300'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact
            <Image
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              alt="arrow icon"
              className='w-3'
            />
          </motion.a>

          {/* Mobile Menu Button */}
          <motion.button
            className='block md:hidden ml-3'
            onClick={openMenu}
            whileTap={{ scale: 0.9 }}
          >
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt="menu icon"
              className='w-6 transition-transform duration-300 hover:scale-110'
            />
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu (Animated) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            ref={sideMenuRef}
            className='md:hidden flex flex-col gap-4 py-20 px-10 fixed top-0 right-0 bottom-0 w-64 z-50 h-screen bg-[var(--bg)] text-[var(--text)] transition duration-500 rounded-lg'
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
          >
            <div className='absolute top-6 right-6' onClick={closeMenu}>
              <Image
                src={isDarkMode ? assets.close_white : assets.close_black}
                alt="close icon"
                className='w-6 cursor-pointer'
              />
            </div>
            {['Home', 'About me', 'Services', 'My Work', 'Contact me'].map((text, idx) => (
              <li key={idx}>
                <a
                  className='font-ovo'
                  href={`#${text.toLowerCase().replace(/\s/g, '')}`}
                  onClick={closeMenu}
                >
                  {text}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
