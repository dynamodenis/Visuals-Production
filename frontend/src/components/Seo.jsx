import { useEffect } from 'react';

const SITE_URL = 'https://prismmedia.co.ke';
const DEFAULT_TITLE = 'Prism Media Kenya | Video Production, Photography & Equipment Rental in Nairobi';

const setMeta = (attr, key, content) => {
    let tag = document.head.querySelector(`meta[${attr}="${key}"]`);
    if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attr, key);
        document.head.appendChild(tag);
    }
    tag.setAttribute('content', content);
};

/**
 * Per-route SEO: updates title, description, canonical and OG/Twitter tags on navigation.
 * Renders nothing — drop one at the top of each page.
 */
const Seo = ({ title, description, path = '/' }) => {
    useEffect(() => {
        const fullTitle = title ? `${title} | Prism Media Kenya` : DEFAULT_TITLE;
        const url = `${SITE_URL}${path}`;

        document.title = fullTitle;
        if (description) {
            setMeta('name', 'description', description);
            setMeta('property', 'og:description', description);
            setMeta('name', 'twitter:description', description);
        }
        setMeta('property', 'og:title', fullTitle);
        setMeta('name', 'twitter:title', fullTitle);
        setMeta('property', 'og:url', url);

        let canonical = document.head.querySelector('link[rel="canonical"]');
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.setAttribute('rel', 'canonical');
            document.head.appendChild(canonical);
        }
        canonical.setAttribute('href', url);
    }, [title, description, path]);

    return null;
};

export default Seo;
