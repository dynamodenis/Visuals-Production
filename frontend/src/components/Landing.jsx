import React from 'react';
import { ChevronRight } from 'lucide-react';
import { motion } from "framer-motion";


const Landing = () => {
  // Text to be animated
  const text = "Welcome to Prism Media.";

  const our_work_array = [
    "Producing marketing videos, event videos, and social media content.",
    "Managing paid advertising on platforms like Google Ads and Facebook Ads to drive traffic and sales.",
    "High-end production gear rental for your creative projects.",
    "Creating and managing social media accounts for businesses.",
  ]

  // Variants for the container and individual letters
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // Delay between each letter
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Variants for the list items
  // Variants for the list items
  const listVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.6, // Delay for the first list item
        staggerChildren: 0.4, // Delay between each list item
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8,
        type: "spring",
        damping: 10
      }
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <header className="h-screen bg-gradient-to-r from-red-900 to-black flex items-center">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center justify-center h-full text-center">   
            <motion.h2
              className="text-5xl font-bold mb-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {text.split("").map((char, index) => (
                <motion.span key={index} variants={letterVariants}>
                  {char}
                </motion.span>
              ))}
            </motion.h2>
            {/* <p className="text-xl mb-8">High-end production gear rental for your creative projects</p> */}
            <motion.ul
              className='md:pl-10'
              variants={listVariants}
              initial="hidden"
              animate="visible"
            >
              {our_work_array.map((item, index) => (
                <motion.li 
                  key={index} 
                  variants={itemVariants}
                  className="flex items-center p-4"
                  >
                  <ChevronRight className="w-5 h-5 text-blue-500 mr-2" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </motion.ul>
            <button className="bg-pink-600  hover:bg-red-700 px-8 py-3 rounded-lg font-semibold flex items-center">
              Equipment Marketplace
              <ChevronRight className="ml-2" />
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default React.memo(Landing);