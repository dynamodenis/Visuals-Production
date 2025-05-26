import React from 'react';
import { ChevronRight } from 'lucide-react';
import Landing from '../components/Landing';
import Services from '../components/Services';
import AnimateSection from '../components/AnimateSection';
import { Link } from 'react-router-dom';
import Equipment from '../components/Equipment';
import Achievements from '../components/Achievements';
import { useEquipementStore } from '../zustand/store';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

const fadeUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } },
};

const Home = () => {
  const { getEquipements, equipements } = useEquipementStore();


  useEffect(() => {
    // Fetch equipment data and then store in localStorage
    const fetchAndStoreEquipements = async () => {
      await getEquipements(); // Assumes this populates the store asynchronously
      const updatedEquipements = useEquipementStore.getState().equipements;
      if (updatedEquipements) {
        localStorage.setItem('equipements', JSON.stringify(updatedEquipements));
      }
    };

    fetchAndStoreEquipements();
  }, []);


  return (
    <div className="flex flex-col min-h-screen text-white ">
      {/* Landing takes up the first full viewport */}
      <section className="h-screen">
        <Landing />
      </section>

      {/* The remaining content follows after scrolling past the Landing */}
      <div className="flex-grow">
        {/* Service */}
        <AnimateSection>
          <Services />
        </AnimateSection>

        {/* Achievements */}
        <AnimateSection>
          <Achievements />
        </AnimateSection>

        {/* Equipment Categories */}
        <AnimateSection>
          <Equipment />
        </AnimateSection>

        {/* Contact Section */}
        <AnimateSection>
          <section id="contact" className="py-20 bg-gradient-to-b dark_blue_bg to-pink-600">
            <motion.div className="container mx-auto px-6 text-center" variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.2 }}>
              <h2 className="text-3xl font-bold mb-8">Ready to Start Your Project?</h2>
              <p className="text-xl mb-8">Contact us for consultation or related needs</p>
              <div className="flex justify-center items-center">
                <Link to="/contact" className="text-white dark_blue_bg  hover:bg-pink-600 px-8 py-3 rounded-lg font-semibold flex justify-center items-center cursor-pointer">
                  Get in Touch
                  <ChevronRight className="ml-2" />
                </Link>
              </div>
            </motion.div>
          </section>
        </AnimateSection>
      </div>
    </div>
  );
};

export default React.memo(Home);