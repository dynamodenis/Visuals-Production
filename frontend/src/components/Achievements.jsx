import React from 'react'
import { Medal, TrophyIcon, ChevronLeft, ChevronRight } from 'lucide-react';

import { motion } from 'framer-motion';

const fadeUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } },
};

function Achievements() {
  const statsData = [
    {
      icon: "🎯", // You can replace with actual icons/SVGs
      label: "Projects",
      value: "27"
    },
    {
      icon: "👥",
      label: "Clients",
      value: "13"
    },
    {
      icon: "🌐",
      label: "Marketing Impressions",
      value: "5.4 M"
    },
    {
      icon: "🎁",
      label: "Conversions",
      value: "50.53K"
    }
  ];

  const achievementData = [
    {
      id: 1,
      title: "Tourism Reporting Award 2025 at AJEA",
      description: "Charles Muthoni, our co-founder, director, and videographer, won the prestigious Tourism Reporting Award at the Annual Journalism Excellence Awards (AJEA) 2025 in Kenya. His creative storytelling and dedication to impactful visual journalism earned national recognition. This award is a proud milestone reflecting our team's commitment to excellence and innovation.",
      image: "/photos/charles_award.jpeg"
    },
    
  ];

  const scrollLeft = () => {
    const container = document.getElementById('achievement-container');
    container.scrollLeft -= 300;
  };

  const scrollRight = () => {
    const container = document.getElementById('achievement-container');
    container.scrollLeft += 300;
  };

  return (
    <div className='py-12 relative shadow-md min-h-screen'>
      <div
        className="absolute inset-0 w-full h-full z-0"
        style={{
          backgroundImage: `url(/photos/achievements_background1.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.9
        }}
      />

      <div className="relative z-20 container mx-auto px-4 text-center h-full flex flex-col">
        {/* Top 60% - Achievement Stories */}
        <div className="flex-grow mb-8">
          <motion.h2
            className="text-3xl font-bold mb-6 text-center flex flex-row justify-center items-center text-white"
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
          ><Medal className="mr-3 text-pink-600" /><span>Achievements </span><TrophyIcon className="ml-2 text-pink-600" /></motion.h2>

          {/* Scroll Buttons */}
          <motion.button
            onClick={scrollLeft}
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-pink-600 p-2 rounded-full shadow-lg hover:bg-red-700 transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </motion.button>

          <motion.button
            onClick={scrollRight}
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-pink-600 p-2 rounded-full shadow-lg hover:bg-red-700 transition-colors cursor-pointer"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </motion.button>

          <motion.div 
            className="flex overflow-x-auto gap-6 scroll-smooth scrollbar-hide pb-4" 
            id="achievement-container"
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {/* Achievement story cards */}
            {achievementData.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden flex-none w-80 md:w-96 lg:w-1/2"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Image Section */}
                  <div className="w-full md:w-1/2  relative overflow-hidden">
                    <img
                      src={item.image ? item.image : "/photos/achievements_background1.jpg"}
                      alt={item.title}
                      className="w-full h-full object-contain md:object-cover object-center bg-gray-100"
                    />
                  </div>
                  
                  {/* Content Section */}
                  <div className="w-full md:w-1/2 p-6 dark_blue_bg text-white flex flex-col justify-center text-left opacity-90">
                    <h3 className="text-lg md:text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-sm mb-4 opacity-90 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom 40% - Stats Cards */}
        <motion.div 
          className="mt-8" 
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {statsData.map((stat, index) => (
              <div
                key={index}
                className="dark_blue_bg opacity-80 p-6 rounded-lg shadow-lg text-white text-center"
              >
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="text-sm font-medium mb-1 opacity-80">{stat.label}</div>
                <div className="text-3xl font-bold">{stat.value}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default React.memo(Achievements)