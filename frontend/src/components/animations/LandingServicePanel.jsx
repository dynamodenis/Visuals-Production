import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import LoadableImage from '../animations/LoadableImage';

function LandingServicePanel({ title, text, image, delay = 0, index }) {
    const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.8 });

    const fadeUpVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } },
  };

    const isOddIndex = index % 2 === 1;

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUpVariants}
            className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-4 md:gap-0 w-full md:w-4xl mt-10"
        >
            {/* Image container - order changes based on index */}
            <div className={`md:col-span-1 ${isOddIndex ? 'md:order-1 md:pr-8' : 'md:order-2 md:pl-8'} w-full h-full`}>
                <LoadableImage
                    src={image}
                    alt={title}
                    className="rounded-lg w-full h-auto object-cover"
                    loaderClassName="w-60 h-60 md:w-60 md:h-60 mx-auto rounded-lg"
                />
            </div>
            
            {/* Text container - order changes based on index */}
            <div className={`md:col-span-1 p-2 rounded-lg transition-colors w-full md:h-40 flex flex-col items-start justify-start ${isOddIndex ? 'md:order-2' : 'md:order-1'}`}>
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className='text-left'>{text}</p>
            </div>
        </motion.div>
    );    
}

export default LandingServicePanel