import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import LoadableImage from '../animations/LoadableImage';

/**
 * Numbered service row — image and copy alternate sides, image scales on hover.
 */
function LandingServicePanel({ title, text, image, index }) {
    const isOddIndex = index % 2 === 1;

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="group grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-16 w-full border-t border-white/10 py-12 md:py-16"
        >
            {/* Image — clipped container, slow scale on hover */}
            <div className={`${isOddIndex ? 'md:order-1' : 'md:order-2'} w-full`}>
                <Link to="/services" className="block overflow-hidden rounded-2xl">
                    <LoadableImage
                        src={image}
                        alt={title}
                        className="w-full h-64 md:h-80 object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        loaderClassName="w-full h-64 md:h-80 rounded-2xl"
                    />
                </Link>
            </div>

            {/* Copy */}
            <div className={`${isOddIndex ? 'md:order-2' : 'md:order-1'} flex flex-col items-start text-left`}>
                <span className="font-mono text-sm text-pink-500 mb-3">
                    {String(index).padStart(2, '0')}
                </span>
                <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white mb-4 transition-transform duration-300 group-hover:translate-x-1">
                    {title}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">{text}</p>
                <Link
                    to="/services"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-pink-500 hover:text-pink-400 transition-colors"
                >
                    Learn more
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
            </div>
        </motion.div>
    );
}

export default LandingServicePanel
