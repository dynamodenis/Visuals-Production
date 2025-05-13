import React, { useEffect, useState } from 'react';
import { Camera, Video, Mic, Laptop, ChevronLeft, ChevronRight } from 'lucide-react';
import EquipmentCard from './EquipmentCard';
import photography from '../assets/photography.jpg'
import gopro from '../assets/gopro.jpg'
import { useEquipementStore } from '../zustand/store';

const Equipment = () => {
    const { equipements } = useEquipementStore();
    const [localEquipements, setLocalEquipements] = useState([]);

    useEffect(() => {
        const stored = localStorage.getItem('equipements');
        if (stored) {
            setLocalEquipements(JSON.parse(stored));
        }
    }, []);

    const scrollLeft = () => {
        const container = document.getElementById('equipment-container');
        container.scrollLeft -= 300;
    };

    const scrollRight = () => {
        const container = document.getElementById('equipment-container');
        container.scrollLeft += 300;
    };

    return (
        <section className="py-15 bg-white relative shadow-md">
            {/* Top Gradient Border */}
            <div className="absolute top-0 left-0 right-0 h-7 bg-gradient-to-b from-gray-900 to-white" />

            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold mb-6 text-center flex flex-row justify-center items-center text-gray-900"><Camera className="mr-3 text-red-500" /><span>Equipment Rental </span><Mic className="ml-2 text-red-500" /></h2>
                <div className='flex flex-col items-center justify-center'>
                    <div className='md:w-3xl mb-5 italic text-gray-800'>We specialize in renting high-quality production equipment, including cameras, audio gear, and lighting kits, to bring your creative projects to life.
                        Whether you're filming, recording, or streaming, we provide reliable and professional tools to meet your needs. Let us equip you for success with top-tier production solutions.
                    </div>
                </div>
                <div className="relative">
                    {/* Scroll Buttons */}
                    <button
                        onClick={scrollLeft}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-red-600 p-2 rounded-full shadow-lg hover:bg-red-700 transition-colors"
                    >
                        <ChevronLeft className="w-6 h-6 text-white" />
                    </button>

                    <button
                        onClick={scrollRight}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-red-600 p-2 rounded-full shadow-lg hover:bg-red-700 transition-colors"
                    >
                        <ChevronRight className="w-6 h-6 text-white" />
                    </button>

                    {/* Scrollable Container */}
                    <div
                        id="equipment-container"
                        className="flex overflow-x-auto gap-6 scroll-smooth scrollbar-hide pb-4"
                        style={{
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none'
                        }}
                    >
                        {localEquipements?.map((product, index) => (
                            <EquipmentCard key={index} product={product} />
                        ))}
                    </div>
                </div>
            </div>
            {/* Bottom Gradient Border */}
            <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-gray-900 to-white" />
        </section>
    );
};

export default React.memo(Equipment);