
// 'use client';
// import { assets } from '@/assets/assets';
// import Image from 'next/image';
// import React, { useState, useContext } from 'react';
// import { ThemeContext } from '@/app/layout';

// const Contact = () => {
//   const [result, setResult] = useState("");
//   const { isDarkMode } = useContext(ThemeContext);

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     setResult("Sending....");
//     const formData = new FormData(event.target);

//     formData.append("access_key", "2428512a-f0dc-41b9-b674-f28901f47325");

//     const response = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       body: formData
//     });

//     const data = await response.json();

//     if (data.success) {
//       setResult("Form Submitted Successfully");
//       event.target.reset();
//     } else {
//       console.log("Error", data);
//       setResult(data.message);
//     }
//   };

//   return (
//     <div  
//       id="contact"
//       className={`w-full px-[12%] py-16 scroll-mt-20 transition-colors duration-500
//         ${isDarkMode ? 'bg-darkTheme text-lightHover' : 'bg-gray-50 text-gray-800'}`}
//     >
//       <h4 className="text-center mb-2 text-lg font-ovo">Connect with me</h4>
//       <h2 className="text-center text-5xl font-ovo">Get in touch</h2>
//       <p className={`max-w-2xl text-center mt-5 mb-12 mx-auto font-ovo 
//         ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
//         I'd love to hear from you! If you have any questions, comments or 
//         feedback, please use the form below.
//       </p>

//       <form onSubmit={onSubmit} className='max-w-2xl mx-auto'>
//         <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 mb-8'>
//           <input 
//             className={`flex-1 p-3 outline-none border rounded-md shadow-sm 
//               ${isDarkMode 
//                 ? 'border-gray-600 bg-gray-700 text-lightHover focus:ring-indigo-400' 
//                 : 'border-gray-300 bg-white text-gray-800 focus:ring-indigo-500'}`} 
//             type="text" placeholder='Enter your name' required name='name'
//           />
//           <input 
//             className={`flex-1 p-3 outline-none border rounded-md shadow-sm 
//               ${isDarkMode 
//                 ? 'border-gray-600 bg-gray-700 text-lightHover focus:ring-indigo-400' 
//                 : 'border-gray-300 bg-white text-gray-800 focus:ring-indigo-500'}`} 
//             type="email" placeholder='Enter your email' required name='email'
//           />
//         </div>

//         <textarea 
//           className={`w-full p-4 outline-none border rounded-md shadow-sm mb-6
//             ${isDarkMode 
//               ? 'border-gray-600 bg-gray-700 text-lightHover focus:ring-indigo-400' 
//               : 'border-gray-300 bg-white text-gray-800 focus:ring-indigo-500'}`}
//           rows={6} placeholder='Enter your message' required name='message'>
//         </textarea>

//         <button 
//           className={`py-3 px-8 w-max flex items-center justify-between gap-2 rounded-full mx-auto duration-500
//             ${isDarkMode 
//               ? 'bg-white text-black hover:bg-gray-200' 
//               : 'bg-black text-white hover:bg-gray-800'}`}
//           type='submit'
//         > 
//           Submit now
//           <Image 
//             src={assets.right_arrow_white} 
//             alt="right arrow" 
//             className={`w-4 ${isDarkMode ? 'invert' : ''}`} 
//           />
//         </button>

//         <p className='mt-4 text-center'>{result}</p>
//       </form>
//     </div>
//   )
// }

// export default Contact;

'use client';

import { assets } from '@/assets/assets';
import Image from 'next/image';
import React, { useState, useContext } from 'react';
import { ThemeContext } from '@/app/layout';
import { motion } from 'framer-motion';

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 60 },
  },
};

const Contact = () => {
  const [result, setResult] = useState("");
  const { isDarkMode } = useContext(ThemeContext);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "2428512a-f0dc-41b9-b674-f28901f47325");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <motion.div
      id="contact"
      className={`w-full px-[12%] py-16 scroll-mt-20 transition-colors duration-500
        ${isDarkMode ? 'bg-darkTheme text-lightHover' : 'bg-gray-50 text-gray-800'}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <motion.h4 className="text-center mb-2 text-lg font-ovo" variants={itemVariants}>
        Connect with me
      </motion.h4>
      <motion.h2 className="text-center text-5xl font-ovo" variants={itemVariants}>
        Get in touch
      </motion.h2>
      <motion.p
        className={`max-w-2xl text-center mt-5 mb-12 mx-auto font-ovo 
          ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
        variants={itemVariants}
      >
        I'd love to hear from you! If you have any questions, comments or 
        feedback, please use the form below.
      </motion.p>

      <motion.form
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto"
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 mb-8">
          <motion.input
            type="text"
            name="name"
            required
            placeholder="Enter your name"
            variants={itemVariants}
            className={`flex-1 p-3 outline-none border rounded-md shadow-sm 
              ${isDarkMode 
                ? 'border-gray-600 bg-gray-700 text-lightHover focus:ring-indigo-400' 
                : 'border-gray-300 bg-white text-gray-800 focus:ring-indigo-500'}`}
          />
          <motion.input
            type="email"
            name="email"
            required
            placeholder="Enter your email"
            variants={itemVariants}
            className={`flex-1 p-3 outline-none border rounded-md shadow-sm 
              ${isDarkMode 
                ? 'border-gray-600 bg-gray-700 text-lightHover focus:ring-indigo-400' 
                : 'border-gray-300 bg-white text-gray-800 focus:ring-indigo-500'}`}
          />
        </div>

        <motion.textarea
          name="message"
          required
          rows={6}
          placeholder="Enter your message"
          variants={itemVariants}
          className={`w-full p-4 outline-none border rounded-md shadow-sm mb-6
            ${isDarkMode 
              ? 'border-gray-600 bg-gray-700 text-lightHover focus:ring-indigo-400' 
              : 'border-gray-300 bg-white text-gray-800 focus:ring-indigo-500'}`}
        />

        <motion.button
          type="submit"
          variants={itemVariants}
          whileHover={{ scale: 1.03 }}
          className={`py-3 px-8 w-max flex items-center justify-between gap-2 rounded-full mx-auto duration-500
            ${isDarkMode 
              ? 'bg-white text-black hover:bg-gray-200' 
              : 'bg-black text-white hover:bg-gray-800'}`}
        >
          Submit now
          <Image
            src={assets.right_arrow_white}
            alt="right arrow"
            className={`w-4 ${isDarkMode ? 'invert' : ''}`}
          />
        </motion.button>

        <motion.p className="mt-4 text-center" variants={itemVariants}>
          {result}
        </motion.p>
      </motion.form>
    </motion.div>
  );
};

export default Contact;


