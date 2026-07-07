import React from 'react'
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

function EquipmentCard(props) {
    const { product, index, className = 'flex-none w-52' } = props

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/equipment/${index}`);
    };

    return (
        <div
            onClick={handleClick}
            className={`group ${className} bg-white rounded-2xl border border-gray-200 hover:border-pink-600/40 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-gray-900/10 transition-all duration-300 cursor-pointer overflow-hidden`}
        >
            <div className="aspect-square w-full bg-gray-50 overflow-hidden relative">
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <span className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur flex items-center justify-center opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4 text-gray-900" />
                </span>
            </div>

            <div className="p-3 text-left">
                <h3 className="text-sm font-semibold text-gray-900 mb-1 line-clamp-1 group-hover:text-pink-600 transition-colors duration-300">
                    {product.title}
                </h3>
                <p className="text-pink-600 font-bold text-sm">
                    KSh {product.price.toLocaleString()}
                    <span className="text-gray-400 font-medium text-xs"> / day</span>
                </p>
            </div>
        </div>
    )
}

export default React.memo(EquipmentCard)
