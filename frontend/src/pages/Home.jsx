import React, { useEffect } from 'react';
import Landing from '../components/Landing';
import Services from '../components/Services';
import Equipment from '../components/Equipment';
import Achievements from '../components/Achievements';
import Marquee from '../components/animations/Marquee';
import Button from '../components/ui/Button';
import Seo from '../components/Seo';
import { useEquipementStore } from '../zustand/store';
import { motion } from 'framer-motion';

const Home = () => {
  const { getEquipements } = useEquipementStore();

  useEffect(() => {
    getEquipements()
  }, []);

  return (
    <div className="flex flex-col min-h-screen text-white bg-white">
      <Seo
        description="Prism Media is a full-service digital agency in Nairobi, Kenya offering professional video production, photography, media buying, podcast production and camera equipment rental."
        path="/"
      />
      {/* Hero */}
      <Landing />

      {/* Services */}
      <Services />

      {/* Marquee divider — single signature strip */}
      <Marquee items={['Videography', 'Photography', 'Media Buying', 'Equipment Rental', 'Podcasts']} />

      {/* Achievements + stats */}
      <Achievements />

      {/* Equipment rail */}
      <Equipment />

      {/* Pre-footer CTA banner */}
      <section id="contact" className="relative py-12 md:py-14 bg-gradient-to-b dark_blue_bg to-pink-600 overflow-hidden">
        <div className="absolute -top-16 left-1/4 w-56 h-56 rounded-full bg-pink-600/20 blur-3xl animate-float-slow" />
        <motion.div
          className="relative container mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div>
            <p className="eyebrow justify-center md:justify-start mb-2">
              <span className="h-px w-8 bg-pink-400 inline-block" />
              Let's work together
            </p>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white mb-1">
              Ready to start your project?
            </h2>
            <p className="text-sm md:text-base text-white/80">
              Tell us about your idea — we reply within 24 hours.
            </p>
          </div>
          <div className="shrink-0">
            <Button to="/contact" variant="primary" className="bg-white !text-[#0a0a21] hover:bg-gray-100 !shadow-white/20">
              Get in Touch
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default React.memo(Home);
