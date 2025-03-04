import React from 'react'

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimateSection = ({ children }) => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    );
  };

export default AnimateSection