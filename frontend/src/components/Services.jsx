import React from 'react'
import { Handshake } from 'lucide-react';
import photography from '../assets/photography.jpg'


function Services() {
    return (
        <div><section id="equipment" className="py-20 bg-black">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold mb-12 text-center flex flex-row justify-center items-center"><Handshake className="mr-3 text-red-500" /><span>Our Services </span><Handshake className="ml-2 text-red-500" /></h2>
                <div className="flex flex-col items-center justify-center h-full text-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-4 md:gap-0 w-full md:w-4xl">
                        <div className='md:col-span-1 md:pl-25'>
                            <img src={photography} alt="Camera Equipment" className="rounded-lg md:w-70 md:h-40 object-cover" />
                        </div>
                        <div className="md:cols-span-1 p-2 rounded-lg transition-colors w-full md:h-40 flex flex-col items-start justify-start">
                            <h3 className="text-xl font-semibold mb-3">Expert Photography & Videography</h3>
                            <p className='text-left'>
                            We produce high resolution content, tailored for all your digital needs. We listen. We understand. Then we create! A three step process towards creating the exciting brand-identity you deserve!
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-4 md:gap-0 w-full md:w-4xl mt-10">
                        <div className='md:col-span-1 md:pl-25'>
                            <img src={photography} alt="Camera Equipment" className="rounded-lg md:w-70 md:h-40 object-cover" />
                        </div>
                        <div className="md:cols-span-1 p-2 rounded-lg transition-colors w-full md:h-40 flex flex-col items-start justify-start">
                            <h3 className="text-xl font-semibold mb-3">Expert Photography & Videography</h3>
                            <p className='text-left'>
                            We produce high resolution content, tailored for all your digital needs. We listen. We understand. Then we create! A three step process towards creating the exciting brand-identity you deserve!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section></div>
    )
}

export default Services