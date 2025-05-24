import React from 'react'

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <div><footer className="dark_blue_bg py-8">
            <div className="container mx-auto px-6 text-center text-gray-400">
                <p>© {currentYear} Prism Media. All rights reserved.</p>
            </div>
        </footer></div>
    )
}

export default Footer