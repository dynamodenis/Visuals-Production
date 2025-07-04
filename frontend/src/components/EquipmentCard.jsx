import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


function EquipmentCard(props) {

    const { product, index } = props
    
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/equipment/${index}`); // Assuming each product has an id
    };


    return (
        <div
            key={index}
            onClick={handleClick}
            className="flex-none w-72 bg-white p-4 rounded-lg shadow-md hover:shadow-xl hover:shadow-red transition-shadow cursor-pointer"
        >
            <div className="aspect-square w-full bg-gray-50 rounded-lg mb-4 overflow-hidden">
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="text-center">
                <h3 className="text-md font-small text-gray-900 mb-2 text-sm">
                    {product.title}
                </h3>

                <p className="text-pink-600  font-semibold font-small text-sm">
                    KSh{product.price.toLocaleString()}.00
                </p>
            </div>
        </div>
    )
}

export default React.memo(EquipmentCard)