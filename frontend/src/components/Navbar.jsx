import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-red-900 to-black shadow-md">
            <nav className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold">
                        <Link to="/" className="hover:text-gray-300">Visuals Production</Link>
                    </h1>
                    
                    {/* Mobile menu button */}
                    <button 
                        className="md:hidden text-white"
                        onClick={toggleMenu}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    {/* Desktop menu */}
                    <div className="hidden md:flex space-x-6 font-semibold">
                        <Link to="/equipments" className="hover:text-red-500">Equipments</Link>
                        <Link to="/about" className="hover:text-red-500">About</Link>
                        <Link to="/services" className="hover:text-red-500">Services</Link>
                        <Link to="/contact" className="hover:text-red-500">Contact</Link>
                    </div>
                </div>

                {/* Mobile menu */}
                {isOpen && (
                    <div className="md:hidden pt-4">
                        <div className="flex flex-col space-y-4 font-semibold">
                            <Link to="/equipments" className="hover:text-red-500" onClick={toggleMenu}>Equipments</Link>
                            <Link to="/about" className="hover:text-red-500" onClick={toggleMenu}>About</Link>
                            <Link to="/services" className="hover:text-red-500" onClick={toggleMenu}>Services</Link>
                            <Link to="/contact" className="hover:text-red-500" onClick={toggleMenu}>Contact</Link>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default React.memo(Navbar);