import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import LoadableImage from './animations/LoadableImage';

const navLinks = [
    { label: 'Services', to: '/services' },
    { label: 'Equipments', to: '/equipments' },
    { label: 'About', to: '/about' },
    { label: 'Contact', to: '/contact' },
];

const overlayVariants = {
    hidden: { opacity: 0, y: '-4%' },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.07, delayChildren: 0.1 } },
    exit: { opacity: 0, y: '-4%', transition: { duration: 0.3 } },
};

const overlayItemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, 'change', (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        setHidden(latest > previous && latest > 140 && !isOpen);
        setScrolled(latest > 40);
    });

    const linkClass = ({ isActive }) =>
        `relative py-1 text-sm font-medium tracking-wide transition-colors duration-300 ${
            isActive ? 'text-pink-500' : 'text-white/80 hover:text-white'
        } after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-pink-600 after:transition-transform after:duration-300 hover:after:scale-x-100 ${
            isActive ? 'after:scale-x-100' : ''
        }`;

    return (
        <motion.header
            className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
                scrolled ? 'bg-[#0a0a21]/85 backdrop-blur-md border-b border-white/10' : 'dark_blue_bg border-b border-transparent'
            }`}
            animate={{ y: hidden ? '-100%' : '0%' }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
        >
            <nav className="container mx-auto px-6 md:px-10">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 group" onClick={() => setIsOpen(false)}>
                        <LoadableImage
                            src="/photos/prism_logo.svg"
                            alt="Prism Media Logo"
                            className="w-11 h-11 object-cover rounded-full transition-transform duration-500 group-hover:rotate-[15deg]"
                            loaderClassName="w-11 h-11 rounded-full"
                        />
                        <span className="text-xl md:text-2xl font-extrabold tracking-tight text-white">
                            Prism<span className="text-pink-500"> Media</span>
                        </span>
                    </Link>

                    {/* Desktop menu */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <NavLink key={link.to} to={link.to} className={linkClass}>
                                {link.label}
                            </NavLink>
                        ))}
                        <Link
                            to="/contact"
                            className="group inline-flex items-center gap-1.5 rounded-full bg-pink-600 hover:bg-pink-700 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 shadow-lg shadow-pink-600/25 hover:shadow-pink-600/40"
                        >
                            Start a Project
                            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        className="md:hidden text-white p-2 -mr-2"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label={isOpen ? 'Close menu' : 'Open menu'}
                    >
                        {isOpen ? <X size={26} /> : <Menu size={26} />}
                    </button>
                </div>
            </nav>

            {/* Fullscreen mobile overlay menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="md:hidden fixed inset-0 top-16 dark_blue_bg z-40 flex flex-col justify-between px-8 pb-10 pt-12"
                        variants={overlayVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <div className="flex flex-col gap-6">
                            {navLinks.map((link, index) => (
                                <motion.div key={link.to} variants={overlayItemVariants} className="overflow-hidden">
                                    <NavLink
                                        to={link.to}
                                        onClick={() => setIsOpen(false)}
                                        className={({ isActive }) =>
                                            `flex items-baseline gap-4 text-4xl font-extrabold tracking-tight ${
                                                isActive ? 'text-pink-500' : 'text-white'
                                            }`
                                        }
                                    >
                                        <span className="text-xs font-mono text-pink-600">0{index + 1}</span>
                                        {link.label}
                                    </NavLink>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div variants={overlayItemVariants} className="flex flex-col gap-4">
                            <Link
                                to="/contact"
                                onClick={() => setIsOpen(false)}
                                className="inline-flex items-center justify-center gap-2 rounded-full bg-pink-600 px-6 py-3.5 text-base font-semibold text-white"
                            >
                                Start a Project <ArrowUpRight className="w-4 h-4" />
                            </Link>
                            <a href="mailto:info@prismmedia.co.ke" className="text-white/60 text-sm text-center">
                                info@prismmedia.co.ke · Nairobi, Kenya
                            </a>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default React.memo(Navbar);
