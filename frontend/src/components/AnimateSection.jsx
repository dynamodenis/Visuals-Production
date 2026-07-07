import React from 'react'
import { motion, useReducedMotion } from 'framer-motion';

/** Scroll-in reveal wrapper: fade + rise, runs once, respects reduced-motion. */
const AnimateSection = ({ children, delay = 0, y = 40 }) => {
    const reduceMotion = useReducedMotion();

    return (
        <motion.div
            initial={reduceMotion ? false : { opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
        >
            {children}
        </motion.div>
    );
};

export default AnimateSection
