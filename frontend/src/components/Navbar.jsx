import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import prism_logo from '../assets/prism_logo.svg'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header className="fixed top-0 left-0 w-full z-50 dark_blue_bg  shadow-md">
            <nav className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold flex flex-row items-center">
                        <div>
                            <img src={prism_logo} alt="Prism Media Logo" className="w-15 h-15 mr-2 object-cover rounded-full" />
                        </div>

                        <Link to="/" className="hover:text-gray-300">Prism Media</Link>
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
                        <Link to="/equipments" className="hover:text-pink-600">Equipments</Link>
                        <Link to="/about" className="hover:text-pink-600">About</Link>
                        <Link to="/services" className="hover:text-pink-600">Services</Link>
                        <Link to="/contact" className="hover:text-pink-600">Contact</Link>
                    </div>
                </div>

                {/* Mobile menu */}
                {isOpen && (
                    <div className="md:hidden pt-4">
                        <div className="flex flex-col space-y-4 font-semibold">
                            <Link to="/equipments" className="hover:text-pink-600" onClick={toggleMenu}>Equipments</Link>
                            <Link to="/about" className="hover:text-pink-600" onClick={toggleMenu}>About</Link>
                            <Link to="/services" className="hover:text-pink-600" onClick={toggleMenu}>Services</Link>
                            <Link to="/contact" className="hover:text-pink-600" onClick={toggleMenu}>Contact</Link>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default React.memo(Navbar);