import React from 'react'
import LandingServicePanel from './animations/LandingServicePanel';
import SectionHeading from './ui/SectionHeading';
import Button from './ui/Button';

function Services() {
    return (
        <section id="services" className="py-24 md:py-32 dark_blue_bg overflow-hidden">
            <div className="container mx-auto px-6 md:px-10">
                <SectionHeading
                    eyebrow="What we do"
                    title="Our Services"
                    subtitle="We are a full-service digital agency specializing in media buying, creative content development, professional video production and data-driven marketing. From concept to execution, we help brands tell their stories and connect with their audience."
                    variant="dark"
                />

                <div className="max-w-5xl mx-auto">
                    <LandingServicePanel
                        title="Expert Photography & Videography"
                        text="We turn your vision into captivating digital stories through expert videography and photography. We blend creative storytelling with technical expertise to produce content that resonates."
                        image="/photos/expert_videography.jpg"
                        index={1}
                    />
                    <LandingServicePanel
                        title="Media Buying Strategies"
                        text="Unlock the power of digital advertising with our expert media buying solutions, designed to maximize visibility and impact. From targeted ad campaigns to performance analytics, we craft winning strategies that drive engagement and conversions."
                        image="/photos/media_buying.png"
                        index={2}
                    />
                    <LandingServicePanel
                        title="Content Creation Equipments Rental"
                        text="From DSLR cameras to studio lighting and sound equipment, we offer premium rentals for filmmakers, vloggers, and creatives looking to produce high-quality content."
                        image="/photos/content_equipments.png"
                        index={3}
                    />
                </div>

                <div className="flex justify-center mt-14">
                    <Button to="/services">See All Services</Button>
                </div>
            </div>
        </section>
    )
}

export default React.memo(Services)
