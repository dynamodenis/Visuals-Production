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
        <div className="container mx-auto px-6 pt-8 md:py-16 max-w-6xl">
            <div className='flex flex-col items-center pt-10 md:py-10'>
                <h2 className="text-3xl font-medium font-bold mb-6 text-center flex flex-row justify-center items-center text-gray-900"><Video className="mr-3 text-red-400" /><span>{product.name} </span><Mic className="ml-2 text-red-400" /></h2>
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

                        <div className="mb-2">
                            <span className="text-md text-green-600 font-semibold font-small">
                                {product.currency}{product.price.toLocaleString()}
                            </span>
                        </div>
                    </div>

                    {/* Quantity and Add to Cart */}
                    <div className="flex gap-4 mb-4">
                        <div className="flex border rounded">
                            <input
                                type="number"
                                className="border rounded border-gray-300  focus:outline-none focus:ring-1 focus:ring-gray-600 focus:border-transparent w-10"
                                min="1"
                                defaultValue="1"
                            />
                        </div>
                        <button className="bg-green-500 text-sm  text-white px-2 py-2 rounded flex items-center gap-2 hover:bg-green-600">
                            <ShoppingCart size={15} />
                            Add to cart
                        </button>
                    </div>

                    {/* Categories */}
                    <div className="mb-2 text-sm">
                        <span className="text-gray-600">Categories: </span>
                        {product.categories.map((category, index) => (
                            <span key={category}>
                                <a href="#" className="text-blue-500 hover:underline">{category}</a>
                                {index < product.categories.length - 1 && ', '}
                            </span>
                        ))}
                    </div>

                    {/* Social Share */}
                    <div className="flex gap-2 mb-8 text-sm">
                        <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800">
                            <Share size={15} /> Share
                        </button>
                        <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800">
                            <Heart size={15} /> Wishlist
                        </button>
                    </div>
                </div>
            </div>

            {/* Product Details */}
            <div className="w-full ">
                {/* Key Features */}
                <div className='flex flex-col items-start pt-10'>
                    <div className="text-xl font-semibold text-gray-600 underline underline-offset-6 decoration-red-400 ">Description</div>
                    <div className="w-full border-t border-gray-300 mb-2"></div>
                    <div className='flex flex-col items-start justify-start font-small text-sm md:w-1/2'>
                        <div className="font-semibold mb-2 text-gray-400 ">Key Features</div>
                        <ul className="list-disc pl-4 ml-8">
                            {product.features.map((feature) => (
                                <li key={feature} className="text-gray-400">{feature}</li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>

            <div className='flex flex-col items-start md:py-10'>
                <div className="text-xl font-semibold mb-4 text-gray-600">Related Products</div>

            </div>
        </div>
    );
};

export default React.memo(EquipmentDetail);