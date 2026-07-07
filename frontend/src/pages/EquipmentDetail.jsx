import React, { useEffect, useMemo } from 'react';
import { ChevronLeft, ChevronRight, ArrowLeft, Check } from 'lucide-react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import EquipmentCard from '../components/EquipmentCard';
import Button from '../components/ui/Button';
import Seo from '../components/Seo';
import { useEquipementStore } from '../zustand/store';

const EquipmentDetail = () => {
    const { id } = useParams();
    const { equipements, getEquipements } = useEquipementStore();

    useEffect(() => {
        getEquipements();
    }, []);

    const product = equipements?.[id];

    // Items sharing a category with the current product, original indices preserved
    const relatedProducts = useMemo(() => {
        if (!product || !equipements) return [];
        return equipements
            .map((equip, originalIndex) => ({ equip, originalIndex }))
            .filter(
                ({ equip, originalIndex }) =>
                    originalIndex !== Number(id) &&
                    equip.category?.some((cat) => product.category?.includes(cat))
            );
    }, [equipements, product, id]);

    const scrollLeft = () => {
        const container = document.getElementById('equipment-container');
        container.scrollBy({ left: -320, behavior: 'smooth' });
    };

    const scrollRight = () => {
        const container = document.getElementById('equipment-container');
        container.scrollBy({ left: 320, behavior: 'smooth' });
    };

    if (!product) {
        return (
            <div className="container mx-auto px-6 md:px-10 pt-36 pb-24 bg-white text-center">
                <p className="text-gray-500 mb-6">Equipment not found.</p>
                <Button to="/equipments" variant="dark">Browse Equipment</Button>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-6 md:px-10 pt-28 md:pt-36 pb-20 bg-white">
            <Seo
                title={`${product.title} for Hire`}
                description={`Rent the ${product.title} in Nairobi from KSh ${product.price?.toLocaleString()} per day at Prism Media. Book online or call to reserve.`}
                path={`/equipment/${id}`}
            />
            {/* Breadcrumb back link */}
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-8 text-left"
            >
                <Link
                    to="/equipments"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-pink-600 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" /> All Equipment
                </Link>
            </motion.div>

            {/* Product */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-start mb-20">
                {/* Image */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="group rounded-2xl bg-gray-50 border border-gray-100 overflow-hidden"
                >
                    <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-auto object-contain aspect-square transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                </motion.div>

                {/* Info */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col items-start text-left"
                >
                    {/* Category chips */}
                    <div className="flex flex-wrap gap-2 mb-4">
                        {product.category?.map((cat, index) => (
                            <span
                                key={index}
                                className="rounded-full bg-pink-600/10 text-pink-600 px-3 py-1 text-xs font-semibold uppercase tracking-wide"
                            >
                                {cat}
                            </span>
                        ))}
                    </div>

                    <h1 className="display-section text-gray-900 mb-4">{product.title}</h1>

                    <div className="mb-8">
                        {product.price != null ? (
                            <p className="text-2xl md:text-3xl font-extrabold text-pink-600">
                                {product.currency ?? 'KSH'} {product.price.toLocaleString()}
                                <span className="text-gray-400 font-medium text-base"> / day</span>
                            </p>
                        ) : (
                            <span className="text-gray-400">Price not available</span>
                        )}
                    </div>

                    {/* Key features */}
                    {product.features?.length > 0 && (
                        <div className="mb-8 w-full">
                            <h3 className="text-xs uppercase tracking-[0.2em] text-gray-400 font-bold mb-4">
                                Key Features
                            </h3>
                            <ul className="space-y-2.5">
                                {product.features.map((feature, index) => (
                                    <li key={index} className="flex items-start gap-3 text-gray-600 text-sm md:text-base">
                                        <Check className="w-4 h-4 text-pink-600 mt-1 shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    <div className="flex flex-wrap gap-4">
                        <Button to="/contact">Book This Equipment</Button>
                        <Button href="tel:+254768173480" variant="outline" withArrow={false}>
                            Call to Reserve
                        </Button>
                    </div>
                </motion.div>
            </div>

            {/* Related products */}
            <div className="text-left">
                <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900 mb-8">
                    Related Products
                </h2>

                {relatedProducts.length === 0 ? (
                    <div className="text-gray-500 rounded-2xl border border-dashed border-gray-200 text-center py-12">
                        No related products found.
                    </div>
                ) : (
                    <div className="relative">
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

                        <div
                            id="equipment-container"
                            className="flex overflow-x-auto gap-6 scroll-smooth hide-scrollbar py-4 px-1"
                        >
                            {relatedProducts.map(({ equip, originalIndex }) => (
                                <EquipmentCard key={originalIndex} index={originalIndex} product={equip} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default React.memo(EquipmentDetail);
