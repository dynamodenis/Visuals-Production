import React from 'react';
import { ChevronRight } from 'lucide-react';
import Landing from '../components/Landing';
import Services from '../components/Services';
import AnimateSection from '../components/AnimateSection';
import { Link } from 'react-router-dom';
import Equipment from '../components/Equipment';
import { useEquipementStore } from '../zustand/store';
import { useEffect } from 'react';


const Home = () => {
  const { getEquipements } = useEquipementStore();

  useEffect(() => {
    getEquipements();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">

      <Landing />

      {/* Service */}
      <AnimateSection>
        <Services />
      </AnimateSection>

      {/* Equipment Categories */}
      <AnimateSection>
        <Equipment />
      </AnimateSection>

      {/* Contact Section */}
      <AnimateSection>
        <section id="contact" className="py-20 bg-gradient-to-b from-black to-red-900">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to Start Your Project?</h2>
            <p className="text-xl mb-8">Contact us to for consultation or related needs</p>
            <div className='flex justify-center items-center'>
              <Link to="/contact" className="text-white bg-red-600 hover:bg-red-700 px-8 py-3 rounded-lg font-semibold flex justify-center items-center cursor-pointer">
                Get in Touch
                <ChevronRight className="ml-2" />
              </Link>
            </div>
          </div>
        </section>
      </AnimateSection>
    </div>
  );
};

export default React.memo(Home);