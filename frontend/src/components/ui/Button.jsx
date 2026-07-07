import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const styles = {
    primary:
        'bg-pink-600 text-white hover:bg-pink-700 shadow-lg shadow-pink-600/25 hover:shadow-pink-600/40',
    secondary:
        'bg-transparent text-white border border-white/30 hover:border-white hover:bg-white/10',
    dark:
        'bg-[#0a0a21] text-white hover:bg-[#1a1a3e] shadow-lg shadow-[#0a0a21]/20',
    outline:
        'bg-transparent text-pink-600 border border-pink-600 hover:bg-pink-600 hover:text-white',
};

/**
 * Brand button / link. Pass `to` for internal routes, `href` for external, neither for a <button>.
 */
const Button = ({ children, to, href, variant = 'primary', withArrow = true, className = '', ...props }) => {
    const base = `group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm md:text-base font-semibold transition-all duration-300 cursor-pointer ${styles[variant]} ${className}`;

    const content = (
        <>
            <span>{children}</span>
            {withArrow && (
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            )}
        </>
    );

    if (to) return <Link to={to} className={base} {...props}>{content}</Link>;
    if (href) return <a href={href} className={base} {...props}>{content}</a>;
    return <button className={base} {...props}>{content}</button>;
};

export default React.memo(Button);
