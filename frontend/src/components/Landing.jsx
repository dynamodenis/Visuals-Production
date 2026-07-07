import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import Button from './ui/Button';

// Headline rendered as masked lines that slide up into view
const headlineLines = [
    <>We craft <span className="text-gradient-brand">stories</span></>,
    <>that move brands</>,
    <>forward.</>,
];

const capabilities = [
    'Video Production',
    'Photography',
    'Media Buying',
    'Equipment Rental',
    'Social Media',
];

const Landing = () => {
    const heroRef = useRef(null);
    const reduceMotion = useReducedMotion();
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });

    // Subtle parallax: content drifts up slower than the scroll, background overlay deepens
    const contentY = useTransform(scrollYProgress, [0, 1], ['0%', reduceMotion ? '0%' : '25%']);
    const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

    return (
        <header ref={heroRef} className="relative h-screen overflow-hidden dark_blue_bg">
            {/* Video background (poster keeps the original image while it loads) */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0"
                poster="/photos/achievements_background1.jpg"
            >
                {/* <source src="/videos/compressed_prism_media.mp4" type="video/mp4" /> */}
                Your browser does not support the video tag.
            </video>

            {/* Navy gradient overlay for readability, on-brand instead of flat black */}
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#0a0a21]/80 via-[#0a0a21]/55 to-[#0a0a21]/90" />

            {/* Decorative brand glow */}
            <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-pink-600/20 blur-3xl z-10 animate-float-slow" />

            {/* Content */}
            <motion.div
                style={{ y: contentY, opacity: contentOpacity }}
                className="relative z-20 container mx-auto px-6 md:px-10 h-full flex flex-col justify-center"
            >
                <div className="max-w-4xl text-left">
                    {/* Eyebrow */}
                    <motion.p
                        className="eyebrow mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <span className="h-px w-8 bg-pink-600 inline-block" />
                        Welcome to Prism Media — Nairobi, Kenya
                    </motion.p>

                    {/* Masked line-reveal headline */}
                    <h1 className="display-hero text-white mb-8">
                        {headlineLines.map((line, i) => (
                            <span key={i} className="block overflow-hidden">
                                <motion.span
                                    className="block"
                                    initial={{ y: '110%' }}
                                    animate={{ y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.35 + i * 0.09, ease: [0.16, 1, 0.3, 1] }}
                                >
                                    {line}
                                </motion.span>
                            </span>
                        ))}
                    </h1>

                    {/* Subhead */}
                    <motion.p
                        className="text-lg md:text-xl text-gray-300 max-w-xl leading-relaxed mb-8"
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    >
                        A full-service digital agency for video production, media buying, premium
                        gear rental and social media management — from concept to execution.
                    </motion.p>

                    {/* Capability chips */}
                    <motion.div
                        className="flex flex-wrap gap-2.5 mb-10"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 1.05 }}
                    >
                        {capabilities.map((item) => (
                            <span
                                key={item}
                                className="rounded-full border border-white/20 bg-white/5 backdrop-blur-sm px-4 py-1.5 text-xs md:text-sm font-medium text-white/85"
                            >
                                {item}
                            </span>
                        ))}
                    </motion.div>

                    {/* CTAs */}
                    <motion.div
                        className="flex flex-wrap items-center gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 1.2 }}
                    >
                        <Button to="/services">Explore Services</Button>
                        <Button to="/contact" variant="secondary" withArrow={false}>
                            Get in Touch
                        </Button>
                    </motion.div>
                </div>
            </motion.div>

            {/* Scroll cue */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8, duration: 0.8 }}
            >
                <span className="text-[10px] uppercase tracking-[0.25em] text-white/60">Scroll</span>
                <span className="h-10 w-px bg-gradient-to-b from-pink-600 to-transparent overflow-hidden">
                    <span className="block h-full w-full bg-white/70 animate-scroll-cue" />
                </span>
            </motion.div>
        </header>
    );
};

export default React.memo(Landing);
