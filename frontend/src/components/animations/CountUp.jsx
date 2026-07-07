import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

/**
 * Animated number counter that runs once when scrolled into view.
 * Accepts values like "27", "5.4", "50.53" via `end`; suffix rendered after (e.g. "M", "K", "+").
 */
const CountUp = ({ end, suffix = '', duration = 2, className = '' }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-40px' });
    const [display, setDisplay] = useState('0');
    const decimals = (String(end).split('.')[1] || '').length;

    useEffect(() => {
        if (!isInView) return;
        const target = parseFloat(end);
        const start = performance.now();
        let rafId;

        const tick = (now) => {
            const progress = Math.min((now - start) / (duration * 1000), 1);
            const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
            setDisplay((target * eased).toFixed(decimals));
            if (progress < 1) rafId = requestAnimationFrame(tick);
        };
        rafId = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(rafId);
    }, [isInView, end, duration, decimals]);

    return (
        <span ref={ref} className={className}>
            {display}{suffix}
        </span>
    );
};

export default React.memo(CountUp);
