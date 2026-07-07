import React from 'react';
import { motion } from 'framer-motion';

/**
 * Navy page header for inner pages: eyebrow + masked display title + subtitle.
 * Sits under the fixed navbar (pt clears it) and gives every page a consistent opening.
 */
const PageHero = ({ eyebrow, title, subtitle }) => {
    return (
        <section className="dark_blue_bg relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-pink-600/15 blur-3xl animate-float-slow" />
            <div className="container mx-auto px-6 md:px-10 pt-28 md:pt-32 pb-10 md:pb-12 relative">
                {eyebrow && (
                    <motion.p
                        className="eyebrow mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <span className="h-px w-8 bg-pink-600 inline-block" />
                        {eyebrow}
                    </motion.p>
                )}
                <h1 className="display-hero text-white overflow-hidden">
                    <motion.span
                        className="block"
                        initial={{ y: '110%' }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                        {title}
                    </motion.span>
                </h1>
                {subtitle && (
                    <motion.p
                        className="mt-5 text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed"
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    >
                        {subtitle}
                    </motion.p>
                )}
            </div>
        </section>
    );
};

export default React.memo(PageHero);
