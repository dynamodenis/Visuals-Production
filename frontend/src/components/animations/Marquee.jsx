import React from 'react';

/**
 * Infinite scrolling text strip — the classic agency-site divider.
 * Content is duplicated so the loop is seamless; pauses on hover.
 */
const Marquee = ({ items, className = '', dark = true }) => {
    const row = items.map((item, i) => (
        <span key={i} className="flex items-center gap-6 md:gap-10 shrink-0">
            <span className={`text-2xl md:text-4xl font-extrabold uppercase tracking-tight ${dark ? 'text-white/90' : 'text-gray-900'}`}>
                {item}
            </span>
            <span className="text-pink-600 text-2xl md:text-4xl">✦</span>
        </span>
    ));

    return (
        <div className={`overflow-hidden py-6 md:py-8 select-none ${dark ? 'dark_blue_bg' : 'bg-white'} ${className}`}>
            <div className="marquee-track flex items-center gap-6 md:gap-10 w-max">
                {row}
                {items.map((item, i) => (
                    <span key={`dup-${i}`} aria-hidden="true" className="flex items-center gap-6 md:gap-10 shrink-0">
                        <span className={`text-2xl md:text-4xl font-extrabold uppercase tracking-tight ${dark ? 'text-white/90' : 'text-gray-900'}`}>
                            {item}
                        </span>
                        <span className="text-pink-600 text-2xl md:text-4xl">✦</span>
                    </span>
                ))}
            </div>
        </div>
    );
};

export default React.memo(Marquee);
