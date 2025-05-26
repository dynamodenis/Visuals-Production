import React, { useEffect, useState } from 'react';
import { Camera, Video, Mic, Laptop, ChevronLeft, ChevronRight } from 'lucide-react';
import EquipmentCard from './EquipmentCard';
import { useEquipementStore } from '../zustand/store';
import { motion } from 'framer-motion';

const fadeUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } },
};

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
            {/* <div className="absolute top-0 left-0 right-0 h-7 bg-gradient-to-b from-gray-900 to-white" /> */}

            <div className="container mx-auto px-6">
                <motion.h2 className="text-3xl font-bold mb-6 text-center flex flex-row justify-center items-center text-gray-900" variants={fadeUpVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.2 }}><Camera className="mr-3 text-pink-600" /><span>Equipment Rental </span><Mic className="ml-2 text-pink-600" /></motion.h2>
                <motion.div className='flex flex-col items-center justify-center' variants={fadeUpVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.2 }}>
                    <div className='md:w-3xl mb-5 italic text-gray-800'>We specialize in renting high-quality production equipment, including cameras, audio gear, and lighting kits, to bring your creative projects to life.
                        Whether you're filming, recording, or streaming, we provide reliable and professional tools to meet your needs. Let us equip you for success with top-tier production solutions.
                    </div>
                </motion.div>
                <div className="relative">
                    {/* Scroll Buttons */}
                    <motion.button
                        onClick={scrollLeft}
                        variants={fadeUpVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.2 }}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-pink-600  p-2 rounded-full shadow-lg hover:bg-red-700 transition-colors"
                    >
                        <ChevronLeft className="w-6 h-6 text-white" />
                    </motion.button>

                    <motion.button
                        onClick={scrollRight}
                        variants={fadeUpVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.2 }}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-pink-600  p-2 rounded-full shadow-lg hover:bg-red-700 transition-colors"
                    >
                        <ChevronRight className="w-6 h-6 text-white" />
                    </motion.button>

                    {/* Scrollable Container */}
                    <motion.div
                        id="equipment-container"
                        className="flex overflow-x-auto gap-6 scroll-smooth scrollbar-hide pb-4"
                        variants={fadeUpVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.2 }}
                        style={{
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none'
                        }}
                    >
                        {localEquipements?.map((product, index) => (
                            <EquipmentCard key={index} product={product} />
                        ))}
                    </motion.div>
                </div>
            </div>
            {/* Bottom Gradient Border */}
            <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-gray-900 to-white" />
        </section>
    );
};

export default React.memo(Equipment);