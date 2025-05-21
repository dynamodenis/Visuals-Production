import React from 'react'
import { 
  Camera, 
  Video, 
  Mic, Headphones, 
  Monitor, 
  Settings, 
  Film, 
  Smartphone, 
  Radio, 
  Sliders, 
  Truck,
  Clock,
} from 'lucide-react'

function EquipmentRental() {
  return (
    <div className="cols-span-1 md:col-span-3 w-full flex flex-col items-start justify-start mt-4">
      <div className="w-full mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Professional Equipment Rental</h1>
        <p className="text-gray-600 text-sm text-justify mb-3">
          Access industry-standard production equipment without the high cost of ownership. 
          At Prism Media, we offer a comprehensive range of professional audio, video, 
          and lighting equipment for rent, whether you're working on a commercial project, 
          independent film, podcast, or special event.
        </p>
        
        <div className="flex justify-center my-6">
          <a 
            href="/equipments" 
            className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 inline-block text-md font-medium text-center"
          >
            View All Equipment
          </a>
        </div>
      </div>

      <div className="w-full mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Simple Rental Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-50 p-5 rounded-lg shadow-sm">
            <div className="flex justify-center mb-4">
              <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center">
                <span className="text-red-600 text-xl font-bold">1</span>
              </div>
            </div>
            <h3 className="text-center font-medium text-gray-800 mb-2">Browse & Reserve</h3>
            <p className="text-gray-600 text-sm text-center">
              Browse our equipment inventory online and reserve your desired items through our easy booking system.
            </p>
          </div>
          
          <div className="bg-gray-50 p-5 rounded-lg shadow-sm">
            <div className="flex justify-center mb-4">
              <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center">
                <span className="text-red-600 text-xl font-bold">2</span>
              </div>
            </div>
            <h3 className="text-center font-medium text-gray-800 mb-2">Pickup or Delivery</h3>
            <p className="text-gray-600 text-sm text-center">
              Choose between convenient pickup from our location or delivery service to your production site.
            </p>
          </div>
          
          <div className="bg-gray-50 p-5 rounded-lg shadow-sm">
            <div className="flex justify-center mb-4">
              <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center">
                <span className="text-red-600 text-xl font-bold">3</span>
              </div>
            </div>
            <h3 className="text-center font-medium text-gray-800 mb-2">Return</h3>
            <p className="text-gray-600 text-sm text-center">
              Return the equipment at the end of your rental period or arrange for pickup from your location.
            </p>
          </div>
        </div>
      </div>

      {/* <div className="w-full mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Flexible Rental Options</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border border-gray-200 rounded-lg p-5">
            <h3 className="text-center font-medium text-gray-800 mb-3">Daily Rentals</h3>
            <div className="flex justify-center mb-3">
              <Clock size={32} className="text-red-500" />
            </div>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-600 text-sm">
                <div className="text-green-500 text-lg">✓</div>
                <span>Perfect for short shoots</span>
              </li>
              <li className="flex items-center gap-2 text-gray-600 text-sm">
                <div className="text-green-500 text-lg">✓</div>
                <span>24-hour rental period</span>
              </li>
              <li className="flex items-center gap-2 text-gray-600 text-sm">
                <div className="text-green-500 text-lg">✓</div>
                <span>Weekend specials available</span>
              </li>
            </ul>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-5">
            <h3 className="text-center font-medium text-gray-800 mb-3">Weekly Rentals</h3>
            <div className="flex justify-center mb-3">
              <Film size={32} className="text-red-500" />
            </div>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-600 text-sm">
                <div className="text-green-500 text-lg">✓</div>
                <span>Ideal for multi-day productions</span>
              </li>
              <li className="flex items-center gap-2 text-gray-600 text-sm">
                <div className="text-green-500 text-lg">✓</div>
                <span>20% discount on daily rates</span>
              </li>
              <li className="flex items-center gap-2 text-gray-600 text-sm">
                <div className="text-green-500 text-lg">✓</div>
                <span>Free accessories included</span>
              </li>
            </ul>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-5">
            <h3 className="text-center font-medium text-gray-800 mb-3">Monthly Rentals</h3>
            <div className="flex justify-center mb-3">
              <Radio size={32} className="text-red-500" />
            </div>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-600 text-sm">
                <div className="text-green-500 text-lg">✓</div>
                <span>Best for long-term projects</span>
              </li>
              <li className="flex items-center gap-2 text-gray-600 text-sm">
                <div className="text-green-500 text-lg">✓</div>
                <span>35% discount on daily rates</span>
              </li>
              <li className="flex items-center gap-2 text-gray-600 text-sm">
                <div className="text-green-500 text-lg">✓</div>
                <span>Priority technical support</span>
              </li>
            </ul>
          </div>
        </div>
      </div> */}

      <div className="w-full mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold">
                JD
              </div>
              <div>
                <p className="font-medium text-gray-800">John Davis</p>
                <p className="text-gray-500 text-xs">Independent Filmmaker</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm italic">
              "The equipment rental process was seamless from start to finish. Great selection of cameras and lenses, all in perfect condition. Will definitely be coming back for my next project."
            </p>
          </div>
          
          <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold">
                SP
              </div>
              <div>
                <p className="font-medium text-gray-800">Sarah Parker</p>
                <p className="text-gray-500 text-xs">Podcast Producer</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm italic">
              "I've been renting their audio equipment for my podcast recordings. The quality is outstanding, and their team always provides helpful technical advice when I need it."
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* <div className="bg-gray-50 p-5 rounded-lg shadow-sm">
          <h3 className="font-medium text-gray-800 mb-3">Insurance Options</h3>
          <p className="text-gray-600 text-sm mb-3">
            Protect your rental with our flexible insurance options. We offer coverage plans for damage, loss, and liability to give you peace of mind during your production.
          </p>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 text-gray-600 text-sm">
              <div className="text-red-500 text-xs">■</div>
              <span>Daily equipment protection plans</span>
            </li>
            <li className="flex items-center gap-2 text-gray-600 text-sm">
              <div className="text-red-500 text-xs">■</div>
              <span>Use your own production insurance</span>
            </li>
            <li className="flex items-center gap-2 text-gray-600 text-sm">
              <div className="text-red-500 text-xs">■</div>
              <span>Proof of insurance required for high-value rentals</span>
            </li>
          </ul>
        </div> */}
        
        <div className="bg-gray-50 p-5 rounded-lg shadow-sm">
          <h3 className="font-medium text-gray-800 mb-3">Technical Support</h3>
          <p className="text-gray-600 text-sm mb-3">
            Our expert technicians are available to help you get the most out of your rented equipment, from setup assistance to troubleshooting.
          </p>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 text-gray-600 text-sm">
              <div className="text-red-500 text-xs">■</div>
              <span>Phone support during business hours</span>
            </li>
            <li className="flex items-center gap-2 text-gray-600 text-sm">
              <div className="text-red-500 text-xs">■</div>
              <span>Emergency support for active productions</span>
            </li>
            <li className="flex items-center gap-2 text-gray-600 text-sm">
              <div className="text-red-500 text-xs">■</div>
              <span>Equipment tutorials available</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full bg-red-50 p-6 rounded-lg shadow-sm mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">Ready to Rent Professional Equipment?</h2>
        <p className="text-gray-600 text-sm mb-4">Browse our complete inventory and book your equipment today for your next production.</p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a href="/equipments" className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 inline-block text-sm font-medium text-center">
            Browse Equipment Catalog
          </a>
          <a href="/contact" className="bg-white border border-red-600 text-red-600 px-4 py-2 rounded-md hover:bg-red-50 inline-block text-sm font-medium text-center">
            Contact Rental Department
          </a>
        </div>
      </div>
    </div>
  )
}

export default EquipmentRental