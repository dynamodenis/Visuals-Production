import React from 'react'

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <div><footer className="bg-black py-8">
            <div className="container mx-auto px-6 text-center text-gray-400">
                <p>© {currentYear} Visuals Production. All rights reserved.</p>
            </div>
        </footer></div>
    )
}

export default Footer