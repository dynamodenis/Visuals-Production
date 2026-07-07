import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

/**
 * Consistent section header: eyebrow label + display title + optional subtitle.
 * variant "light" for white sections, "dark" for navy sections.
 */
const SectionHeading = ({ eyebrow, title, subtitle, variant = 'light', align = 'center', className = '' }) => {
    const isDark = variant === 'dark';
    const alignClass = align === 'left' ? 'text-left items-start' : 'text-center items-center';

    return (
        <motion.div
            className={`flex flex-col ${alignClass} mb-8 md:mb-10 ${className}`}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
        >
            {eyebrow && (
                <span className="eyebrow mb-3">
                    <span className="h-px w-8 bg-pink-600 inline-block" />
                    {eyebrow}
                    {align !== 'left' && <span className="h-px w-8 bg-pink-600 inline-block" />}
                </span>
            )}
            <h2 className={`display-section ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {title}
            </h2>
            {subtitle && (
                <p className={`mt-4 max-w-2xl text-base md:text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    {subtitle}
                </p>
            )}
        </motion.div>
    );
};

export default React.memo(SectionHeading);
