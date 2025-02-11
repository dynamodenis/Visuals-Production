import React from 'react';
import { Camera, Video, Mic, Laptop, Handshake } from 'lucide-react';
import Landing from '../components/Landing';
import Services from '../components/Services';


const Home = () => {
  const equipmentCategories = [
    {
      title: "Camera Equipment",
      icon: <Camera className="w-8 h-8" />,
      items: ["DSLR Cameras", "Mirrorless Cameras", "Lenses", "Stabilizers"]
    },
    {
      title: "Video Gear",
      icon: <Video className="w-8 h-8" />,
      items: ["Professional Camcorders", "Drones", "Lighting Kits", "Green Screens"]
    },
    {
      title: "Audio Equipment",
      icon: <Mic className="w-8 h-8" />,
      items: ["Microphones", "Audio Interfaces", "Mixers", "Studio Monitors"]
    },
    {
      title: "Production Tech",
      icon: <Laptop className="w-8 h-8" />,
      items: ["Editing Workstations", "Storage Solutions", "Monitors", "Streaming Gear"]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">

      <Landing />
      
      {/* Service */}
      <Services />

      {/* Equipment Categories */}
      {/* <section id="equipment" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center flex flex-row justify-center items-center"><Handshake className="mr-3 text-red-500"/><span>Our Services </span><Handshake className="ml-2 text-red-500"/></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {equipmentCategories.map((category, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-colors">
                <div className="text-red-500 mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
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
          <p className="text-xl mb-8">Contact us to discuss your equipment needs</p>
          <button className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-lg font-semibold">
            Get in Touch
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>© 2025 Visual Productions. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;