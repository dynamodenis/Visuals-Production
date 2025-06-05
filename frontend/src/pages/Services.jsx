import React from 'react'
import { useState } from 'react';
import { Handshake, ChevronRight } from 'lucide-react';

import AnimateSection from '../components/AnimateSection'
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
    <div className='container mx-auto px-6 py-16 bg-white'>
      <AnimateSection>
        <div className='flex flex-col items-center py-10'>
          <h2 className="text-3xl font-bold mb-6 text-center flex flex-row justify-center items-center text-gray-900"><Handshake className="mr-3 text-pink-600 animate-bounce"/><span>Services</span><Handshake className="ml-2 text-pink-600 animate-bounce" /></h2>
          <div className='italic text-gray-600 text-center md:w-3xl'>
            <p>We are a full-service digital agency specializing in media buying strategies, creative content development, professional video production, and data-driven digital marketing strategies. 
            From concept to execution, we help brands tell their stories and connect with their audience.</p>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-4 pb-4'>
          {/* Left Sidebar */}
          <div className='space-y-2'>
            {/* services Section */}
            <div className='space-y-2 flex flex-col justify-start items-start'>
              <h3 className='text-sm font-semibold text-gray-600'>Services Category</h3>
              <ul className='space-y-2'>
                {services.map((service, index) => (
                  <li key={index} 
                    onClick={() => setSelectedService(service)}
                    className={`cursor-pointer flex items-center text-sm ${selectedService.name === service.name ? 'text-pink-600 font-semibold' : 'text-gray-600 hover:text-pink-600'
                      }`
                    }
                  >
                    <a href="#" className='flex items-center text-sm'>
                      <ChevronRight className='w-4 h-4 mr-2' />
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div
            className="grid md:grid-cols-1 col-span-3 gap-4"
          >
            {selectedService.component}
          </div>
        </div>
      </AnimateSection>
    </div>
  )
}

export default Services