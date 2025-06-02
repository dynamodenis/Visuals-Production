
import React, { useState } from 'react';

const LoadableImage = ({ src, alt, className, ...props }) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const handleLoad = () => {
        setLoading(false);
        setError(false);
    };

    const handleError = () => {
        setLoading(false);
        setError(true);
        console.error(`Failed to load image: ${src}`);
    };

    return (
        <div className="relative inline-block">
            {/* Always render the image, but control its visibility */}
            <img
                src={src}
                alt={alt}
                className={`${className} ${loading ? 'opacity-0 absolute' : 'opacity-100'} transition-opacity duration-300`}
                onLoad={handleLoad}
                onError={handleError}
                loading="eager"
                {...props}
            />
            
            {/* Show loading placeholder while loading */}
            {loading && !error && (
                <div className="animate-pulse bg-pink-200 w-15 h-15 mr-2 object-cover rounded-full"></div>
            )}
            
            {/* Show error state if image fails to load */}
            {error && (
                <div className="flex items-center justify-center w-15 h-15 mr-2 bg-red-100 rounded-full text-red-500 text-xs">
                    ❌
                </div>
            )}
        </div>
    );
};

export default LoadableImage;