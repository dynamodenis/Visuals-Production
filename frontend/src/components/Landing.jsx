import React from 'react';
import { Camera, Video, Mic, Laptop, ChevronRight } from 'lucide-react';
import { motion } from "framer-motion";


const Landing = () => {
  // Text to be animated
  const text = "Welcome to Visuals Production";

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
            <p className="text-xl mb-8">High-end production gear rental for your creative projects</p>
            <button className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-lg font-semibold flex items-center">
              Browse Equipment
              <ChevronRight className="ml-2" />
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default React.memo(Landing);