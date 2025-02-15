import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className='container mx-auto px-4 py-10 md:w-5xl'>
      <div className='flex flex-col items-center py-10'> 
        <h2 className="text-3xl font-bold mb-6 text-center flex flex-row justify-center items-center text-gray-900"><Phone className="mr-3 text-red-500" /><span>Contact Us </span><Mail className="ml-2 text-red-500" /></h2>
        <div className='italic text-gray-600 text-center md:w-3xl'>
          <p>We’d love to hear from you! Whether you have a question, a project idea, or just want to say hello, we’re here to help. Fill out the form below, and we’ll get back to you as soon as possible!</p>
        </div>
      </div>
    <div className=" flex flex-col md:flex-row gap-8">
      {/* Left Side - Contact Information */}
      <div className="w-full md:w-1/3 space-y-8">
        {/* Office Location */}
        {/* <div className="bg-gray-50 p-6 rounded-lg">
          <div className="flex items-start gap-4">
            <MapPin className="text-indigo-600 w-8 h-8" />
            <div>
              <h3 className="text-lg font-semibold mb-2">Office Location</h3>
              <p className="text-gray-600">
                Mombasa Road, SAT Centre Building (Off- Parkside Towers) 3rd floor, Suite 312, Nairobi, Kenya
              </p>
            </div>
          </div>
        </div> */}

        {/* Telephone Numbers */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="flex items-start gap-4">
            <Phone className="text-red-400 w-8 h-8" />
            <div>
              <h3 className="text-lg text-gray-600 font-semibold mb-2">Telephone number</h3>
              <p className="text-gray-600">(+254) 0768173480</p>
              <p className="text-gray-600">(+254) 0737055737</p>
            </div>
          </div>
        </div>

        {/* Mail Address */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="flex flex-row items-start gap-4">
            <Mail className="text-red-400 w-8 h-8" />
            <div>
              <h3 className="text-lg text-gray-600 font-semibold mb-2 md:float-left">Mail address</h3>
              <p className="text-gray-600 md:float-left">dmbugua66@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Contact Form */}
      <div className="w-full md:w-2/3">
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First Name */}
            <div>
              <label className="block text-gray-600 text-sm font-medium mb-2 float-left">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-red-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                placeholder="First Name"
              />
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-gray-600 text-sm font-medium mb-2 float-left">
                Last Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-red-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                placeholder="Last Name"
              />
            </div>

            {/* Phone/Mobile */}
            <div className='flex flex-col justify-start items-start'>
              <label className="block text-gray-600 text-sm font-medium mb-2">
                Phone/Mobile <span className="text-red-500">*</span>
              </label>
              <div className="flex">
                <select className="px-2 py-2 border border-r-0 border-red-400 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-red-400">
                  <option value="ke">🇰🇪 +254</option>
                </select>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border border-red-400 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                  placeholder="Mobile Number"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-600 text-sm font-medium mb-2 float-left">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-red-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                placeholder="Email Address"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-600 text-sm font-medium mb-2 float-left">
              Tell us a bit more about your request or business needs <span className="text-red-500">*</span>
            </label>
            <textarea
              rows={6}
              className="w-full px-4 py-2 border border-red-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>

          {/* Consent Checkbox */}
          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              className="mt-1"
            />
            <label className="text-sm text-gray-600 ">
              I consent to have this website store my submitted information so they can respond to my inquiry
            </label>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-2 bg-red-400 text-white rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 cursor-pointer"
            >
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default React.memo(Contact);