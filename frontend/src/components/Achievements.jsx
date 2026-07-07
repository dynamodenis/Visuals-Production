import React from 'react'
import { Award } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeading from './ui/SectionHeading';
import CountUp from './animations/CountUp';

const statsData = [
    { label: 'Projects Delivered', end: '27', suffix: '+' },
    { label: 'Happy Clients', end: '13', suffix: '' },
    { label: 'Marketing Impressions', end: '5.4', suffix: 'M' },
    { label: 'Conversions Driven', end: '50.5', suffix: 'K' },
];

const achievementData = [
    {
        id: 1,
        title: 'Tourism Reporting Award 2025 at AJEA',
        description:
            "Charles Muthoni, our co-founder, director, and videographer, won the prestigious Tourism Reporting Award at the Annual Journalism Excellence Awards (AJEA) 2025 in Kenya. His creative storytelling and dedication to impactful visual journalism earned national recognition. This award is a proud milestone reflecting our team's commitment to excellence and innovation.",
        image: '/photos/charles_award.jpeg',
    },
];

function Achievements() {
    return (
        <section className="relative py-14 md:py-16 overflow-hidden">
            {/* Background image with navy wash for readability */}
            <div
                className="absolute inset-0 w-full h-full z-0 bg-cover bg-center bg-fixed"
                style={{ backgroundImage: 'url(/photos/achievements_background1.jpg)' }}
            />
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0a0a21]/90 via-[#0a0a21]/75 to-[#0a0a21]/90" />

            <div className="relative z-10 container mx-auto px-6 md:px-10">
                <SectionHeading
                    eyebrow="Recognition"
                    title="Achievements"
                    subtitle="Milestones and awards that reflect our commitment to excellence in visual storytelling."
                    variant="dark"
                />

                {/* Award spotlight cards */}
                <div className="max-w-3xl mx-auto mb-10">
                    {achievementData.map((item) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-10%' }}
                            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                            className="group grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md"
                        >
                            <div className="overflow-hidden flex items-center justify-center">
                                <img
                                    src={item.image ? item.image : '/photos/achievements_background1.jpg'}
                                    alt={item.title}
                                    className="w-full h-52 md:h-72 object-contain transition-transform duration-700 ease-out group-hover:scale-105"
                                />
                            </div>
                            <div className="p-5 md:p-6 flex flex-col justify-center text-left">
                                <span className="inline-flex items-center gap-2 text-pink-500 text-xs font-bold uppercase tracking-[0.2em] mb-2">
                                    <Award className="w-4 h-4" /> Award Winner
                                </span>
                                <h3 className="text-lg md:text-xl font-extrabold tracking-tight text-white mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Count-up stat band */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-10%' }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="grid grid-cols-2 md:grid-cols-4 max-w-5xl mx-auto border-t border-white/15"
                >
                    {statsData.map((stat, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center px-4 py-4 md:py-5 border-white/15 [&:nth-child(even)]:border-l md:[&:not(:first-child)]:border-l"
                        >
                            <div className="text-2xl md:text-3xl font-extrabold tracking-tight text-white mb-1">
                                <CountUp end={stat.end} suffix={stat.suffix} />
                            </div>
                            <div className="text-xs md:text-sm uppercase tracking-[0.15em] text-gray-400">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default React.memo(Achievements)
