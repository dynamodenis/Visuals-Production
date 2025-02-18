import React from 'react';
import { Share, Heart, ShoppingCart, Video, Mic } from 'lucide-react';
import photography from '../assets/photography.jpg'

const EquipmentDetail = () => {
    const product = {
        name: 'GoPro HERO11',
        price: 2500.00,
        currency: 'KSh',
        categories: ['Cameras', 'GoPro'],
        features: [
            '27MP with Improved Performance',
            '5.3K60/2.7K240 Video, 27MP Photos',
            'HyperSmooth 5.0 Image Stabilization',
            'Front & Rear LCD Screens',
            'Wi-Fi & Bluetooth Connectivity',
            '33\' Waterproof without Housing',
            '8x Slow-Motion Video'
        ]
    };

    return (
        <div className="container mx-auto px-6 pt-8 md:py-12 max-w-6xl">
            <div className='flex flex-col items-center pt-10 md:py-10'>
                <h2 className="text-3xl font-medium font-bold mb-6 text-center flex flex-row justify-center items-center text-gray-900"><Video className="mr-3 text-red-500" /><span>{product.name} </span><Mic className="ml-2 text-red-500" /></h2>
            </div>
            {/* Product Image */}
            <div className="flex flex-col md:flex-row w-full gap-4 md:gap-10">
                <div className="rounded-lg md:w-1/2">
                    <img
                        src={photography}
                        alt="GoPro HERO11"
                        className="w-full h-auto"
                    />
                </div>

                <div>
                    <div className="flex flex-col items-start">
                        <div className="text-xl font-bold text-red-400">{product.name}</div>

                        <div className="mb-4">
                            <span className="text-md text-green-600 font-semibold font-small">
                                {product.currency}{product.price.toLocaleString()}
                            </span>
                        </div>
                    </div>

                    {/* Quantity and Add to Cart */}
                    <div className="flex gap-4 mb-6">
                        <div className="flex border rounded">
                            <button className="px-4 py-2 border-r hover:bg-gray-100">-</button>
                            <input
                                type="number"
                                className="w-16 text-center"
                                min="1"
                                defaultValue="1"
                            />
                            <button className="px-4 py-2 border-l hover:bg-gray-100">+</button>
                        </div>
                        <button className="bg-green-500 text-white px-6 py-2 rounded flex items-center gap-2 hover:bg-green-600">
                            <ShoppingCart size={20} />
                            Add to cart
                        </button>
                    </div>

                    {/* Categories */}
                    <div className="mb-6">
                        <span className="text-gray-600">Categories: </span>
                        {product.categories.map((category, index) => (
                            <span key={category}>
                                <a href="#" className="text-blue-500 hover:underline">{category}</a>
                                {index < product.categories.length - 1 && ', '}
                            </span>
                        ))}
                    </div>

                    {/* Social Share */}
                    <div className="flex gap-4 mb-8">
                        <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800">
                            <Share size={20} /> Share
                        </button>
                        <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800">
                            <Heart size={20} /> Wishlist
                        </button>
                    </div>
                </div>
            </div>

            {/* Product Details */}
            <div className="w-full md:w-1/2 p-4">


                {/* Key Features */}
                <div>
                    <h2 className="text-xl font-semibold mb-4">Key Features</h2>
                    <ul className="list-disc pl-5 space-y-2">
                        {product.features.map((feature) => (
                            <li key={feature} className="text-gray-700">{feature}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default React.memo(EquipmentDetail);