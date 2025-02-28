import React, {useState} from 'react';
import { Camera, Video, Mic, Laptop, Search, ChevronRight } from 'lucide-react';
import { useEquipementStore } from '../zustand/store';
import EquipmentCard from '../components/EquipmentCard';
import photography from '../assets/photography.jpg'
import gopro from '../assets/gopro.jpg'

const Equipments = () => {
    const { equipements } = useEquipementStore();
    const [searchQuery, setSearchQuery] = useState('');
    const categories = ["Camera Equipment", "Video Gear", "Audio Equipment", "Production Tech"];

    return (
        <div className='container mx-auto px-6 py-10'>
            <div className='flex flex-col items-center py-10'>
                <h2 className="text-3xl font-bold mb-6 text-center flex flex-row justify-center items-center text-gray-900"><Video className="mr-3 text-red-500" /><span>Equipment List </span><Mic className="ml-2 text-red-500" /></h2>
                <div className='italic text-gray-600 text-center md:w-3xl'>
                    <p>From DSLR cameras to studio lighting and sound equipment, we offer premium rentals for filmmakers, vloggers, and creatives looking to produce high-quality content.</p>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-4 pb-4'>
                {/* Left Sidebar */}
                <div className='space-y-2'>
                    {/* Search Section */}
                    <div className='space-y-2 flex flex-col justify-start items-start'> 
                        <h3 className='text-sm font-semibold text-gray-600'>Search Products</h3>
                        <div className='flex'>
                            <input
                                type="text"
                                placeholder="Search products..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className='flex-1 border border-gray-300 rounded-l focus:outline-none focus:ring-1 focus:ring-red-400 focus:border-transparent'
                            />
                            <button className='px-2 py-2 bg-red-400 text-white rounded-r hover:bg-red-600 transition-colors'>
                                <Search className='w-5 h-5' />
                            </button>
                        </div>
                    </div>

                    {/* Categories Section */}
                    <div className='space-y-2 flex flex-col justify-start items-start'>
                        <h3 className='text-sm font-semibold text-gray-600'>Product Categories</h3>
                        <ul className='space-y-2'>
                            {categories.map((category, index) => (
                                <li key={index} className='text-gray-600 hover:text-red-500 cursor-pointer'>
                                    <a href="#" className='flex items-center text-sm'>
                                        <ChevronRight className='w-4 h-4 mr-2' />
                                        {category}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div
                    className="grid md:grid-cols-3 col-span-3 justify-center items-center pb-4 gap-4"
                >
                    {equipements.map((product, index) => (
                        <EquipmentCard key={index} product={product} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default React.memo(Equipments)