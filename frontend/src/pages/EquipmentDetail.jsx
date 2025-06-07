import React, {useEffect, useState} from 'react';
import { Share, Heart, ShoppingCart, Video, Mic, ChevronLeft, ChevronRight } from 'lucide-react';
import { useParams } from 'react-router-dom';
import EquipmentCard from '../components/EquipmentCard';
import { motion } from 'framer-motion';

const fadeUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } },
};

const EquipmentDetail = () => {
    const { id } = useParams();

    const [product, setProduct] = useState({})
    const [relatedProducts, setRelatedProducts] = useState([]);
    useEffect(() => {
            const stored = localStorage.getItem('equipements');
            if (stored) {
                const equipements = JSON.parse(stored);
                const item = equipements[id]
                if (item){
                    setProduct(item)
                    const related = equipements.filter((equip) => equip.category.some(cat => item.category.includes(cat)));
                    setRelatedProducts(related); // Exclude current product and limit to 5
                }
            }
        }, [id]);

    const scrollLeft = () => {
        const container = document.getElementById('equipment-container');
        container.scrollLeft -= 300;
    };

    const scrollRight = () => {
        const container = document.getElementById('equipment-container');
        container.scrollLeft += 300;
    };

    return (
        <div className="container mx-auto px-6 pt-8 mt-12 md:mt-5 md:py-16 bg-white max-w-sreen">
            <div className='flex flex-col items-center pt-10 md:py-10'>
                <h2 className="text-3xl font-medium font-bold mb-6 text-center flex flex-row justify-center items-center text-gray-900"><Video className="mr-3 text-red-400 animate-bounce" /><span>{product?.title} </span><Mic className="ml-2 text-red-400 animate-bounce" /></h2>
            </div>
            {/* Product Image */}
            <div className="flex flex-col md:flex-row w-full gap-4 md:gap-10">
                <div className="rounded-lg md:w-1/2">
                    <img
                        src={product?.image}
                        alt={product?.title}
                        className="w-3/4 h-auto"
                    />
                </div>

                <div>
                    <div className="flex flex-col items-start">
                        <div className="text-xl font-bold text-red-400">{product?.title}</div>

                        <div className="mb-2">
                            {product?.price != null ? (
                                <span className="text-md text-green-600 font-semibold font-small">
                                    {product?.currency} {product.price.toLocaleString()}
                                </span>
                            ) : (
                                <span className="text-gray-400">Price not available</span>
                            )}

                        </div>
                    </div>

                    {/* Quantity and Add to Cart */}
                    <div className="flex gap-4 mb-4">
                        <div className="flex border rounded">
                            <input
                                type="number"
                                className="border rounded border-gray-300 text-gray-600  focus:outline-none focus:ring-1 focus:ring-gray-600 focus:border-transparent w-10 px-1"
                                min="1"
                                defaultValue={product?.quantity || 1}
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
                        {product?.category?.map((cat, index) => (
                            <span key={index}>
                                <a href="#" className="text-blue-500 hover:underline">{cat}</a>
                                {index < product?.category.length - 1 && ', '}
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
                            {product?.features?.map((feature, index) => (
                                <li key={index} className="text-gray-400">{feature}</li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>

            <div className='flex flex-col items-start md:py-10'>
                <div className="text-xl font-semibold mb-4 text-gray-600">Related Products</div>
                <div className="relative">
                    {/* Scroll Buttons */}
                    { relatedProducts.length > 0 && <motion.button
                        onClick={scrollLeft}
                        variants={fadeUpVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.2 }}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-pink-600  p-2 rounded-full shadow-lg hover:bg-pink-400 transition-colors cursor-pointer"
                    >
                        <ChevronLeft className="w-6 h-6 text-white" />
                    </motion.button>}

                    { relatedProducts.length > 0 && <motion.button
                        onClick={scrollRight}
                        variants={fadeUpVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.2 }}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-pink-600  p-2 rounded-full shadow-lg hover:bg-pink-400 transition-colors cursor-pointer"
                    >
                        <ChevronRight className="w-6 h-6 text-white" />
                    </motion.button>}

                    {relatedProducts.length === 0 && (
                        <div className="text-gray-500 text-center py-4">
                            No related products found.
                        </div>
                    )}

                    {/* Scrollable Container */}
                    <motion.div
                        id="equipment-container"
                        className="flex overflow-x-auto gap-6 scroll-smooth scrollbar-hide pb-4 w-full max-w-full"
                        variants={fadeUpVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.2 }}
                        style={{
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none'
                        }}
                    >
                        {relatedProducts?.map((product, index) => (
                            <EquipmentCard key={index} index={index} product={product} />
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default React.memo(EquipmentDetail);