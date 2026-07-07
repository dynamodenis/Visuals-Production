import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import EquipmentCard from './EquipmentCard';
import SectionHeading from './ui/SectionHeading';
import Button from './ui/Button';
import { useEquipementStore } from '../zustand/store';
import { motion } from 'framer-motion';

const Equipment = () => {
    const { equipements } = useEquipementStore();

    const scrollLeft = () => {
        const container = document.getElementById('equipment-container');
        container.scrollBy({ left: -320, behavior: 'smooth' });
    };

    const scrollRight = () => {
        const container = document.getElementById('equipment-container');
        container.scrollBy({ left: 320, behavior: 'smooth' });
    };

    return (
        <section className="py-14 md:py-16 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-10">
                <SectionHeading
                    eyebrow="Gear Up"
                    title="Equipment Rental"
                    subtitle="High-quality production equipment — cameras, audio gear and lighting kits — to bring your creative projects to life. Whether you're filming, recording or streaming, we equip you for success."
                />

                <div className="relative">
                    {/* Scroll buttons */}
                    <button
                        onClick={scrollLeft}
                        aria-label="Scroll left"
                        className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 items-center justify-center rounded-full bg-[#0a0a21] text-white shadow-lg hover:bg-pink-600 transition-colors duration-300 cursor-pointer"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                        onClick={scrollRight}
                        aria-label="Scroll right"
                        className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 items-center justify-center rounded-full bg-[#0a0a21] text-white shadow-lg hover:bg-pink-600 transition-colors duration-300 cursor-pointer"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>

                    {/* Scrollable card rail */}
                    <motion.div
                        id="equipment-container"
                        className="flex overflow-x-auto gap-6 scroll-smooth hide-scrollbar py-4 px-1"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-10%' }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    >
                        {equipements?.map((product, index) => (
                            <EquipmentCard key={index} index={index} product={product} />
                        ))}
                    </motion.div>
                </div>

                <div className="flex justify-center mt-6">
                    <Button to="/equipments" variant="dark">
                        View All Equipment
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default React.memo(Equipment);
