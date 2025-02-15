import React from 'react';
import { Camera, Video, Mic, Laptop, ChevronRight } from 'lucide-react';
import Landing from '../components/Landing';
import Services from '../components/Services';
import { Link } from 'react-router-dom';
import Equipment from '../components/Equipment';


const Home = () => {


  return (
    <div className="min-h-screen bg-black text-white">

      <Landing />
      
      {/* Service */}
      <Services />

      {/* Equipment Categories */}
      <Equipment />
      {/* <section id="equipment" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-black">Rent Equipment</h2>
          <div className="flex overflow-x-auto space-x-6 pb-4">
            {equipmentCategories.map((category, index) => (
              <div key={index} className="flex-shrink-0 bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-colors w-64">
                <div className="text-red-500 mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-white">{category.title}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="text-gray-400">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
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
    </div>
  );
};

export default Home;