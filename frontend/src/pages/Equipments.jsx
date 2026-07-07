import React, { useState, useEffect, useMemo } from 'react';
import { Search } from 'lucide-react';
import { motion } from 'framer-motion';
import EquipmentCard from '../components/EquipmentCard';
import PageHero from '../components/ui/PageHero';
import Seo from '../components/Seo';
import { useEquipementStore } from '../zustand/store';

const categories = [
    { name: 'All Products', keywords: [], value: 'all' },
    { name: 'Camera', keywords: ['Camera'], value: 'camera' },
    { name: 'Lighting', keywords: ['Lighting', 'Light'], value: 'lighting' },
    { name: 'Audio', keywords: ['Audio', 'Sound'], value: 'audio' },
    { name: 'Others', keywords: ['Miscellaneous', 'Accessories'], value: 'others' },
];

const Equipments = () => {
    const { equipements, getEquipements } = useEquipementStore();
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');

    useEffect(() => {
        getEquipements();
    }, []);

    // Live filtering derived from store + UI state; originalIndex preserved so
    // detail links point at the right item in the full list.
    const filteredEquipements = useMemo(() => {
        const category = categories.find((cat) => cat.value === selectedCategory);
        const searchTerm = searchQuery.trim().toLowerCase();

        return (equipements ?? [])
            .map((product, originalIndex) => ({ product, originalIndex }))
            .filter(({ product }) => {
                if (category && category.value !== 'all') {
                    const inCategory = product.category?.some((productCategory) =>
                        category.keywords.some(
                            (keyword) => productCategory.toLowerCase() === keyword.toLowerCase()
                        )
                    );
                    if (!inCategory) return false;
                }

                if (searchTerm) {
                    const titleMatch = product.title?.toLowerCase().includes(searchTerm);
                    const categoryMatch = product.category?.some((cat) =>
                        cat.toLowerCase().includes(searchTerm)
                    );
                    const descriptionMatch = product.description?.toLowerCase().includes(searchTerm);
                    if (!titleMatch && !categoryMatch && !descriptionMatch) return false;
                }

                return true;
            });
    }, [equipements, selectedCategory, searchQuery]);

    return (
        <div className='bg-white'>
            <Seo
                title="Camera & Production Equipment Rental in Nairobi"
                description="Rent professional production gear in Nairobi: Sony a7 IV, DJI mics, RS4 Pro gimbal, Aputure lighting, softboxes and more — daily rates from KSh 500."
                path="/equipments"
            />
            <PageHero
                eyebrow="Gear up"
                title="Equipment Rental"
                subtitle="From DSLR cameras to studio lighting and sound equipment, we offer premium rentals for filmmakers, vloggers, and creatives looking to produce high-quality content."
            />

            <div className='container mx-auto px-6 md:px-10 py-16 md:py-20'>
                {/* Toolbar: category pills + search */}
                <div className='flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12'>
                    <div className='flex flex-wrap gap-2.5'>
                        {categories.map((category) => {
                            const isActive = selectedCategory === category.value;
                            return (
                                <button
                                    key={category.value}
                                    onClick={() => setSelectedCategory(category.value)}
                                    className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 cursor-pointer border ${
                                        isActive
                                            ? 'bg-[#0a0a21] text-white border-[#0a0a21]'
                                            : 'bg-white text-gray-600 border-gray-200 hover:border-pink-600 hover:text-pink-600'
                                    }`}
                                >
                                    {category.name}
                                </button>
                            );
                        })}
                    </div>

                    <div className='relative w-full lg:w-80'>
                        <Search className='absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400' />
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className='w-full rounded-full border border-gray-200 pl-11 pr-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-600/60 focus:border-pink-600 transition-all duration-300'
                        />
                    </div>
                </div>

                {/* Result count */}
                <p className='text-sm text-gray-400 mb-6 text-left'>
                    Showing {filteredEquipements.length} of {equipements?.length ?? 0} products
                </p>

                {/* Grid */}
                {filteredEquipements.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {filteredEquipements.map(({ product, originalIndex }, i) => (
                            <motion.div
                                key={originalIndex}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-5%' }}
                                transition={{ duration: 0.5, delay: (i % 4) * 0.08, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <EquipmentCard index={originalIndex} product={product} className="w-full" />
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 rounded-2xl border border-dashed border-gray-200">
                        <p className="text-gray-500">No equipment found matching your criteria.</p>
                        <button
                            onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
                            className='mt-3 text-pink-600 font-semibold text-sm hover:underline cursor-pointer'
                        >
                            Clear filters
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default React.memo(Equipments);
