import React from 'react'
import { Medal, TrophyIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import achievements_background1 from '../assets/achievements_background1.jpg'

function Achievements() {
  const statsData = [
    {
      icon: "🎯", // You can replace with actual icons/SVGs
      label: "Projects",
      value: "100"
    },
    {
      icon: "👥",
      label: "Clients",
      value: "80"
    },
    {
      icon: "🌐",
      label: "6000+ Sites",
      value: "6000"
    },
    {
      icon: "🎁",
      label: "Gifts",
      value: "76"
    }
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
    <div className='py-12 relative shadow-md h-screen'>
      <div
        className="absolute inset-0 w-full h-full z-0"
        style={{
          backgroundImage: `url(${achievements_background1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.9
        }}
      />

      <div className="relative z-20 container mx-auto px-4 text-center h-full flex flex-col">
        {/* Top 60% - Achievement Stories */}
        <div className="flex-grow" style={{ height: '60%' }}>
          <h2 className="text-3xl font-bold mb-6 text-center flex flex-row justify-center items-center text-white"><Medal className="mr-3 text-red-500" /><span>Achievements </span><TrophyIcon className="ml-2 text-red-500" /></h2>

          {/* Achievements cards */}
          {/* Scroll Buttons */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-red-600 p-2 rounded-full shadow-lg hover:bg-red-700 transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-red-600 p-2 rounded-full shadow-lg hover:bg-red-700 transition-colors cursor-pointer"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          <div className="flex overflow-x-auto gap-6 scroll-smooth scrollbar-hide pb-4 h-full" id="achievement-container" style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}>
            {/* Achievement story cards */}
            {[1, 2, 3, 4, 5, 6, 7].map((item) => (
              <div
                key={item}
                className="bg-white rounded-lg shadow-lg overflow-hidden flex-none w-96 md:w-1/2 h-full flex flex-col justify-between dark_blue_bg opacity-80"

              >
                <div className="flex flex-col md:flex-row h-full">
                  {/* Image Section */}
                  <div
                    className="md:flex-row md:w-1/2 h-48 md:h-auto relative bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${achievements_background1})`
                    }}
                  >
                    {/* Optional overlay to enhance readability or add style */}
                    <div className="absolute inset-0 bg-black opacity-30 rounded-tl-lg rounded-bl-lg" />
                  </div>


                  {/* Content Section */}
                  <div className="md:w-1/2 p-6 dark_blue_bg text-white flex flex-col justify-center">
                    <h3 className="text-xl font-bold mb-3">Achievement {item}</h3>
                    <p className="text-sm mb-4 opacity-90">
                      This is a compelling achievement story that demonstrates our success and expertise in delivering exceptional results.
                    </p>
                    <p className="text-xs italic mb-4 opacity-75">Image from Freepik</p>
                    <button className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors w-fit">
                      READ MORE
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom 40% - Stats Cards */}
        <div className="mt-14 md:mt-20" style={{ height: '40%' }}>
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
        </div>
      </div>
    </div>
  )
}

export default React.memo(Achievements)