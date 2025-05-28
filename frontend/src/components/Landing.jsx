import React from 'react';
import { ChevronRight } from 'lucide-react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

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
      {/* Hero Section with Video Background */}
      <header className="relative h-screen overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          poster="/photos/achievements_background1.jpg" // Optional: poster image while video loads
        >
          {/* <source src="/videos/compressed_prism_media.mp4" type="video/mp4" /> */}
          Your browser does not support the video tag.
        </video>
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
        
        {/* Content */}
        <div className="relative z-20 container mx-auto px-6 h-full">
          <div className="flex flex-col items-center justify-center h-full text-center text-white">   
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
                  <ChevronRight className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0" />
                  <span className="text-left">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
            
            <motion.button 
              className="bg-pink-600 hover:bg-pink-700 px-8 py-2 rounded-lg font-semibold flex items-center mt-8 transition-colors duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5, duration: 0.6 }}
            >
              <Link to="/services" className="flex items-center">
                <span>Explore Services</span>
              </Link>
              <ChevronRight className="ml-2" />
            </motion.button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default React.memo(Landing);