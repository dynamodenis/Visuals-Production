import React from 'react'
import { Handshake } from 'lucide-react';
import photography from '../assets/photography.jpg'


function Services() {
    return (
        <div><section id="equipment" className="py-20 bg-black">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold mb-6 text-center flex flex-row justify-center items-center"><Handshake className="mr-3 text-red-500" /><span>Our Services </span><Handshake className="ml-2 text-red-500" /></h2>
                <div className="flex flex-col items-center justify-center h-full text-center">
                    <div className='md:w-3xl mb-5 italic'>We are a full-service digital agency specializing in media buying strategies, creative content development, professional video production, and data-driven digital marketing strategies. 
                        From concept to execution, we help brands tell their stories and connect with their audience.
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-4 md:gap-0 w-full md:w-4xl">
                        <div className='md:col-span-1 md:pl-25'>
                            <img src={photography} alt="Camera Equipment" className="rounded-lg md:w-70 md:h-40 object-cover" />
                        </div>
                        <div className="md:cols-span-1 p-2 rounded-lg transition-colors w-full md:h-40 flex flex-col items-start justify-start">
                            <h3 className="text-xl font-semibold mb-3">Expert Photography & Videography</h3>
                            <p className='text-left'>
                            We turn your vision into captivating digital stories through expert videography and photography. We blend creative storytelling with technical expertise to produce content that resonates.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-4 md:gap-0 w-full md:w-4xl mt-10">
                        <div className='md:col-span-1 md:pl-25'>
                            <img src={photography} alt="Camera Equipment" className="rounded-lg md:w-70 md:h-40 object-cover" />
                        </div>
                        <div className="md:cols-span-1 p-2 rounded-lg transition-colors w-full md:h-40 flex flex-col items-start justify-start">
                            <h3 className="text-xl font-semibold mb-2">Media Buying Strategies</h3>
                            <p className='text-left'>
                            Unlock the power of digital advertising with our expert media buying solutions, designed to maximize visibility and impact.
                            From targeted ad campaigns to performance analytics, we craft winning media buying strategies that drive engagement and conversions.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-4 md:gap-0 w-full md:w-4xl mt-10">
                        <div className='md:col-span-1 md:pl-25'>
                            <img src={photography} alt="Camera Equipment" className="rounded-lg md:w-70 md:h-40 object-cover" />
                        </div>
                        <div className="md:cols-span-1 p-2 rounded-lg transition-colors w-full md:h-40 flex flex-col items-start justify-start">
                            <h3 className="text-xl font-semibold mb-2">Content Creation Equipments Rental</h3>
                            <p className='text-left'>
                            From DSLR cameras to studio lighting and sound equipment, we offer premium rentals for filmmakers, vloggers, and creatives looking to produce high-quality content.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section></div>
    )
}

export default Services