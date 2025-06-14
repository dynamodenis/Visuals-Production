import React, {useRef} from 'react'
import { Handshake } from 'lucide-react';
import LandingServicePanel from './animations/LandingServicePanel';
import { motion } from 'framer-motion';

const fadeUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } },
};

function Services() {

    return (
        <div><section id="equipment" className="py-20 dark_blue_bg overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.h2
                    className="text-3xl font-bold mb-6 flex flex-row justify-center items-center"
                    variants={fadeUpVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.3 }}
                >
                    <Handshake className="mr-3 text-pink-600" />
                    <span>Our Services</span>
                    <Handshake className="ml-2 text-pink-600" />
                </motion.h2>
                <div className="flex flex-col items-center justify-center h-full text-center">

                    <motion.div
                        className='md:w-3xl mb-10 italic'
                        variants={fadeUpVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.5 }}
                    >
                        We are a full-service digital agency specializing in media buying strategies, creative content development, professional video production, and data-driven digital marketing strategies.
                        From concept to execution, we help brands tell their stories and connect with their audience.
                    </motion.div>

                    <LandingServicePanel
                        title="Expert Photography & Videography"
                        text="We turn your vision into captivating digital stories through expert videography and photography. We blend creative storytelling with technical expertise to produce content that resonates.
"
                        image="/photos/expert_videography.jpg"
                        delay={0}
                        index={1}
                    />
                    <LandingServicePanel
                        title="Media Buying Strategies"
                        text="Unlock the power of digital advertising with our expert media buying solutions, designed to maximize visibility and impact.
                                From targeted ad campaigns to performance analytics, we craft winning media buying strategies that drive engagement and conversions."
                        image="/photos/media_buying.png"
                        delay={0.2}
                        index={2}
                    />
                    <LandingServicePanel
                        title="Content Creation Equipments Rental"
                        text="From DSLR cameras to studio lighting and sound equipment, we offer premium rentals for filmmakers, vloggers, and creatives looking to produce high-quality content.
"
                        image="/photos/content_equipments.png"
                        delay={0.6}
                        index={3}
                    />
                </div>
            </div>
        </section></div>
    )
}

export default React.memo(Services)