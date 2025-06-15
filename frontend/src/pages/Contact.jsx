import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import AnimateSection from '../components/AnimateSection';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const service_id = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const template_id = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const user_id = import.meta.env.VITE_EMAILJS_USER_ID;

    setIsSubmitting(true);
    setError(null);
    setSuccess(false);

    // Validate form fields
    if (!name || !email || !title || !message) {
      setError('Please fill in all required fields.');
      setIsSubmitting(false);
      return;
    }

    // Send email using EmailJS
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Prism Media',
      subject: title,
      message: message,
    };

    emailjs.send(service_id, template_id, templateParams, user_id)
      .then((response) => {
        console.log('Email sent successfully:', response);
        setSuccess(true);
        setName('');
        setEmail('');
        setTitle('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        setError('Failed to send message. Please try again later.');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  }
  return (
    <div className='container mx-auto px-4 py-16 md:w-5xl bg-white'>
      <AnimateSection>
        <div className='flex flex-col items-center py-10'>
          <h2 className="text-3xl font-bold mb-6 text-center flex flex-row justify-center items-center text-gray-900"><Phone className="mr-3 text-pink-600" /><span>Contact Us </span><Mail className="ml-2 text-pink-600" /></h2>
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
                  <a href="tel:+254768173480" className="text-gray-600 hover:text-red-600 block">(+254) 0768173480</a>
                  <a href="tel:+254704851232" className="text-gray-600 hover:text-red-600 block">(+254) 0704851232</a>
                  <a href="tel:+254740863889" className="text-gray-600 hover:text-red-600 block">(+254) 0740863889</a>
                </div>
              </div>
            </div>

            {/* Mail Address */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex flex-row items-start gap-4">
                <Mail className="text-red-400 w-8 h-8" />
                <div>
                  <h3 className="text-lg text-gray-600 font-semibold mb-2 md:float-left">Mail address</h3>
                  <p className="text-gray-600 md:float-left"><a href="mailto:dmbugua66@gmail.com" className="text-gray-600 hover:text-red-600 underline-none">
                    dmbugua66@gmail.com
                  </a></p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="w-full md:w-2/3">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* First Name */}
                <div>
                  <label className="block text-gray-600 text-sm font-medium mb-2 float-left">
                    Full Name <span className="text-pink-600">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full text-gray-600 px-4 py-2 border border-red-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-red-600"
                    placeholder="First Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-gray-600 text-sm font-medium mb-2 float-left">
                    Email <span className="text-pink-600">*</span>
                  </label>
                  <input
                    type="email"
                    className="w-full text-gray-600 px-4 py-2 border border-red-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-red-600"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>


              </div>

              {/* Subject */}
              <div>
                <label className="block text-gray-600 text-sm font-medium mb-2 float-left">
                  Subject <span className="text-pink-600">*</span>
                </label>
                <input
                  type="text"
                  className="w-full text-gray-600 px-4 py-2 border border-red-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-red-600"
                  placeholder="Subject"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-gray-600 text-sm font-medium mb-2 float-left">
                  Tell us a bit more about your request or business needs <span className="text-pink-600">*</span>
                </label>
                <textarea
                  rows={6}
                  className="w-full text-gray-600 px-4 py-2 border border-red-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-red-600"
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              {/* Consent */}
              {/* <div className="flex items-start gap-2">
                <input type="checkbox" className="mt-1 text-red-400 focus:ring-red-400 rounded" required />
                <label className="text-sm text-gray-600">
                  I consent to have this website store my submitted information to respond to my inquiry
                </label>
              </div> */}

              {/* Error / Success Message */}
              {error && <div className="text-red-500">{error}</div>}
              {success && <div className="text-green-600">Message sent successfully!</div>}

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className={`px-6 py-2 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-400 cursor-pointer ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-red-400 hover:bg-red-700'
                    }`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        ></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Submit Request'
                  )}
                </button>
              </div>

            </form>
          </div>
        </div>
      </AnimateSection>
    </div>
  );
};

export default React.memo(Contact);