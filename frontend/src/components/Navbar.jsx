import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-red-900 to-black shadow-md">
            <nav className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold"><Link to="/" className="hover:text-gray-300">Visuals Production</Link></h1>
                    <div className="space-x-6">
                        <Link to="/about" className="hover:text-red-500">About</Link>
                        <Link to="/services" className="hover:text-red-500">Services</Link>
                        <Link to="/contact" className="hover:text-red-500">Contact</Link>
                    </div>
                </div>
            </nav>
            {/* <div className="absolute left-0 w-full h-2 bg-gradient-to-b from-gray-400/50 to-transparent"></div> */}

        </header>
    )
}

export default React.memo(Navbar)