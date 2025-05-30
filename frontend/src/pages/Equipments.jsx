import React, { useState, useEffect } from 'react';
import { Camera, Video, Mic, Laptop, Search, ChevronRight } from 'lucide-react';
import { useEquipementStore } from '../zustand/store';
import EquipmentCard from '../components/EquipmentCard';
import AnimateSection from '../components/AnimateSection';

const Equipments = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');

    const categories = [
        {
            name: "All Products",
            keywords: [],
            value: "all"
        },
        {
            name: "Camera Equipment",
            keywords: ["Camera"],
            value: "camera"
        },
        {
            name: "Lighting Equipment",
            keywords: ["Lighting", "Light"],
            value: "lighting"
        },
        {
            name: "Audio Equipment",
            keywords: ["Audio", "Sound"],
            value: "audio"
        },
        {
            name: "Others",
            keywords: ["Miscellaneous", "Accessories"],
            value: "others"
        }
    ];

    const [allEquipements, setAllEquipements] = useState([]); // Store original data
    const [filteredEquipements, setFilteredEquipements] = useState([]); // Store filtered data

    useEffect(() => {
        const stored = localStorage.getItem('equipements');
        if (stored) {
            const equipements = JSON.parse(stored);
            setAllEquipements(equipements);
            setFilteredEquipements(equipements);
        }
    }, []);

    // Filter by category
    const filterByCategory = (category) => {
        setSelectedCategory(category.value);

        let filtered = allEquipements;

        // Filter by category (if not "all")
        if (category.value !== 'all') {
            filtered = filtered.filter(product =>
                product.category?.some(productCategory =>
                    category.keywords.some(keyword =>
                        productCategory.toLowerCase() === keyword.toLowerCase()
                    )
                )
            );
        }

        // Apply search filter if there's a search query
        if (searchQuery.trim()) {
            filtered = filtered.filter(product => {
                const searchTerm = searchQuery.toLowerCase();

                // Search in title
                const titleMatch = product.title?.toLowerCase().includes(searchTerm);

                // Search in categories array
                const categoryMatch = product.category?.some(cat =>
                    cat.toLowerCase().includes(searchTerm)
                );

                // Search in description (if it exists)
                const descriptionMatch = product.description?.toLowerCase().includes(searchTerm);

                return titleMatch || categoryMatch || descriptionMatch;
            });
        }

        setFilteredEquipements(filtered);
    };

    // Filter by search
    const handleSearch = () => {
        let filtered = allEquipements;

        // Apply category filter first (if not "all")
        const currentCategory = categories.find(cat => cat.value === selectedCategory);
        if (currentCategory && currentCategory.value !== 'all') {
            filtered = filtered.filter(product =>
                product.category?.some(productCategory =>
                    category.keywords.some(keyword =>
                        productCategory.toLowerCase() === keyword.toLowerCase()
                    )
                )
            );
        }

        // Apply search filter
        if (searchQuery.trim()) {
            filtered = filtered.filter(product => {
                const searchTerm = searchQuery.toLowerCase();

                // Search in title
                const titleMatch = product.title?.toLowerCase().includes(searchTerm);

                // Search in categories array
                const categoryMatch = product.category?.some(cat =>
                    cat.toLowerCase().includes(searchTerm)
                );

                // Search in description (if it exists)
                const descriptionMatch = product.description?.toLowerCase().includes(searchTerm);

                return titleMatch || categoryMatch || descriptionMatch;
            });
        }

        setFilteredEquipements(filtered);
    };

    // Handle search input change
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
        // Optional: Real-time search (uncomment if you want instant search)
        // handleSearch();
    };

    return (
        <div className='container mx-auto px-6 py-16'>
            <AnimateSection>
                <div className='flex flex-col items-center py-10'>
                    <h2 className="text-3xl font-bold mb-6 text-center flex flex-row justify-center items-center text-gray-900">
                        <Video className="mr-3 text-pink-600" />
                        <span>Equipment List </span>
                        <Mic className="ml-2 text-pink-600" />
                    </h2>
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
                                    onChange={handleSearchChange}
                                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                                    className='flex-1 border border-gray-300 rounded-l focus:outline-none focus:ring-1 focus:ring-red-400 focus:border-transparent px-2 py-2 text-gray-700'
                                />
                                <button
                                    onClick={handleSearch}
                                    className='px-2 py-2 bg-pink-600 text-white rounded-r hover:bg-pink-700 transition-colors cursor-pointer'
                                >
                                    <Search className='w-5 h-5' />
                                </button>
                            </div>
                        </div>

                        {/* Categories Section */}
                        <div className='space-y-2 flex flex-col justify-start items-start'>
                            <h3 className='text-sm font-semibold text-gray-600'>Product Categories</h3>
                            <ul className='space-y-2'>
                                {categories.map((category, index) => (
                                    <li
                                        key={index}
                                        className={`cursor-pointer ${selectedCategory === category.value
                                            ? 'text-pink-600 font-medium'
                                            : 'text-gray-600 hover:text-pink-600'
                                            }`}
                                        onClick={() => filterByCategory(category)}
                                    >
                                        <p className='flex items-center text-sm'>
                                            <ChevronRight className='w-4 h-4 mr-2' />
                                            {category.name}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 col-span-3 justify-center items-center pb-4 gap-4">
                        {filteredEquipements?.length > 0 ? (
                            filteredEquipements.map((product, index) => (
                                <EquipmentCard key={index} product={product} />
                            ))
                        ) : (
                            <div className="col-span-3 text-center py-8">
                                <p className="text-gray-500">No equipment found matching your criteria.</p>
                            </div>
                        )}
                    </div>
                </div>
            </AnimateSection>
        </div>
    );
};

export default React.memo(Equipments);