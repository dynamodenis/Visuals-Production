import { useEffect } from 'react';
import Lenis from 'lenis';

/**
 * Buttery smooth scrolling (Lenis) — the scroll feel used on award-winning agency sites.
 * Wraps the whole app; native window.scrollTo still works for route changes.
 */
const SmoothScroll = ({ children }) => {
    useEffect(() => {
        const lenis = new Lenis({
            lerp: 0.1,
            smoothWheel: true,
            wheelMultiplier: 1,
        });

        let rafId;
        const raf = (time) => {
            lenis.raf(time);
            rafId = requestAnimationFrame(raf);
        };
        rafId = requestAnimationFrame(raf);

        return () => {
            cancelAnimationFrame(rafId);
            lenis.destroy();
        };
    }, []);

    return children;
};

export default SmoothScroll;
