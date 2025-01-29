import React from 'react';
import { Camera, Video, Mic, Laptop, ChevronRight } from 'lucide-react';

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
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-red-900 to-black">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Visual Productions</h1>
            <div className="space-x-6">
              <a href="#equipment" className="hover:text-red-500">Equipment</a>
              <a href="#services" className="hover:text-red-500">Services</a>
              <a href="#contact" className="hover:text-red-500">Contact</a>
            </div>
          </div>
        </nav>
        
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <h2 className="text-5xl font-bold mb-6">Professional Equipment for Content Creators</h2>
            <p className="text-xl mb-8">High-end production gear rental for your creative projects</p>
            <button className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-lg font-semibold flex items-center">
              Browse Equipment
              <ChevronRight className="ml-2" />
            </button>
          </div>
        </div>
      </header>

      {/* Equipment Categories */}
      <section id="equipment" className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Equipment Categories</h2>
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
      </section>

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