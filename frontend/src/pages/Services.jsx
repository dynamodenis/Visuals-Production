import React from 'react'
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageHero from '../components/ui/PageHero';
import Seo from '../components/Seo';

import ExpertPhotography from '../components/services/ExpertPhotography';
import VideoAudioPodcast from '../components/services/VideoAudioPodcast';
import MediaBuying from '../components/services/MediaBuying';
import EquipmentRental from '../components/services/EquipmentRental';

const Services = () => {
  const services = [
    {
      name: "Expert Photography & Videography",
      component: <ExpertPhotography />
    },
    {
      name: "Video, Audio and Podcast Production",
      component: <VideoAudioPodcast />
    },
    {
      name: "Media Buying Strategies",
      component: <MediaBuying />
    },
    {
      name: "Content Creation Equipments Rental",
      component: <EquipmentRental />
    }
  ];

  const [selectedService, setSelectedService] = useState(services[0]);

  return (
    <div className='bg-white'>
      <Seo
        title="Services — Video, Photography, Media Buying & Rentals"
        description="Explore Prism Media's services: expert videography and photography, video/audio/podcast production, media buying strategies and production equipment rental in Nairobi."
        path="/services"
      />
      <PageHero
        eyebrow="What we do"
        title="Services"
        subtitle="We are a full-service digital agency specializing in media buying strategies, creative content development, professional video production, and data-driven digital marketing. From concept to execution, we help brands tell their stories and connect with their audience."
      />

      <div className='container mx-auto px-6 md:px-10 py-16 md:py-20'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-10'>
          {/* Sticky numbered category nav */}
          <aside className='md:col-span-1'>
            <div className='md:sticky md:top-28 text-left'>
              <h3 className='text-xs uppercase tracking-[0.2em] text-gray-400 font-bold mb-5'>Services Category</h3>
              <ul className='space-y-1'>
                {services.map((service, index) => {
                  const isActive = selectedService.name === service.name;
                  return (
                    <li key={index}>
                      <button
                        onClick={() => setSelectedService(service)}
                        className={`w-full flex items-baseline gap-3 text-left rounded-xl px-3 py-3 text-sm font-semibold transition-all duration-300 cursor-pointer ${
                          isActive
                            ? 'bg-[#0a0a21] text-white'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-pink-600 hover:translate-x-1'
                        }`}
                      >
                        <span className={`font-mono text-xs ${isActive ? 'text-pink-500' : 'text-gray-400'}`}>
                          0{index + 1}
                        </span>
                        {service.name}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </aside>

          {/* Animated content panel */}
          <div className="md:col-span-3 text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedService.name}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                {selectedService.component}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
