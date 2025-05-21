import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function LandingServicePanel({ title, text, image, delay = 0 }) {
    const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.8 });

    const fadeUpVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } },
  };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUpVariants}
            className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-4 md:gap-0 w-full md:w-4xl mt-10"
        >
            <div className='md:col-span-1 md:pr-8'>
                <img src={image} alt={title} className="rounded-lg w-full h-auto object-cover" />
            </div>
            <div className="md:cols-span-1 p-2 rounded-lg transition-colors w-full md:h-40 flex flex-col items-start justify-start">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className='text-left'>{text}</p>
            </div>
        </motion.div>
    );    
}

export default LandingServicePanel