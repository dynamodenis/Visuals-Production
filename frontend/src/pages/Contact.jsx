import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import Seo from '../components/Seo';

const inputClass =
  'w-full text-gray-800 text-sm px-3.5 py-2 rounded-lg border border-gray-300 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-600/60 focus:border-pink-600 transition-all duration-300';

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
    <div className='bg-white'>
      <Seo
        title="Contact Us"
        description="Get in touch with Prism Media in Nairobi, Kenya — call (+254) 0768 173 480 or email info@prismmedia.co.ke. We reply within 24 hours."
        path="/contact"
      />
      {/* Page header */}
      <section className="dark_blue_bg relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-pink-600/15 blur-3xl animate-float-slow" />
        <div className="container mx-auto px-6 md:px-10 pt-28 md:pt-32 pb-10 md:pb-12 relative">
          <motion.p className="eyebrow mb-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <span className="h-px w-8 bg-pink-600 inline-block" />
            Let's talk
          </motion.p>
          <h1 className="display-hero text-white overflow-hidden">
            <motion.span className="block" initial={{ y: '110%' }} animate={{ y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}>
              Contact Us
            </motion.span>
          </h1>
          <motion.p
            className="mt-5 text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            Whether you have a question, a project idea, or just want to say hello — we're here to help and we reply within 24 hours.
          </motion.p>
        </div>
      </section>

      <div className='container mx-auto px-6 md:px-10 py-12 md:py-14'>
        <div className="flex flex-col md:flex-row gap-8 lg:gap-10">
          {/* Left — contact info */}
          <motion.div
            className="w-full md:w-1/3 space-y-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="rounded-2xl border border-gray-200 bg-gray-50/60 p-5 text-left hover:border-pink-600/40 transition-colors duration-300">
              <div className="w-10 h-10 rounded-xl bg-pink-600/10 flex items-center justify-center mb-3">
                <Phone className="text-pink-600 w-5 h-5" />
              </div>
              <h3 className="text-base text-gray-900 font-bold mb-1.5">Telephone</h3>
              <a href="tel:+254768173480" className="text-gray-600 hover:text-pink-600 block transition-colors text-sm">(+254) 0768 173 480</a>
              <a href="tel:+254704851232" className="text-gray-600 hover:text-pink-600 block transition-colors text-sm">(+254) 0704 851 232</a>
              <a href="tel:+254740863889" className="text-gray-600 hover:text-pink-600 block transition-colors text-sm">(+254) 0740 863 889</a>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-gray-50/60 p-5 text-left hover:border-pink-600/40 transition-colors duration-300">
              <div className="w-10 h-10 rounded-xl bg-pink-600/10 flex items-center justify-center mb-3">
                <Mail className="text-pink-600 w-5 h-5" />
              </div>
              <h3 className="text-base text-gray-900 font-bold mb-1.5">Email</h3>
              <a href="mailto:info@prismmedia.co.ke" className="text-gray-600 hover:text-pink-600 transition-colors text-sm">
                info@prismmedia.co.ke
              </a>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-gray-50/60 p-5 text-left hover:border-pink-600/40 transition-colors duration-300">
              <div className="w-10 h-10 rounded-xl bg-pink-600/10 flex items-center justify-center mb-3">
                <MapPin className="text-pink-600 w-5 h-5" />
              </div>
              <h3 className="text-base text-gray-900 font-bold mb-1.5">Location</h3>
              <p className="text-gray-600 text-sm">Nairobi, Kenya</p>
              <p className="text-gray-400 text-sm mt-1 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" /> Mon – Sat, 8am – 6pm EAT
              </p>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            className="w-full md:w-2/3"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <form className="space-y-4 text-left" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-1.5">
                    Full Name <span className="text-pink-600">*</span>
                  </label>
                  <input
                    type="text"
                    className={inputClass}
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-1.5">
                    Email <span className="text-pink-600">*</span>
                  </label>
                  <input
                    type="email"
                    className={inputClass}
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-semibold mb-1.5">
                  Subject <span className="text-pink-600">*</span>
                </label>
                <input
                  type="text"
                  className={inputClass}
                  placeholder="What's this about?"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-semibold mb-1.5">
                  Tell us a bit more about your request or business needs <span className="text-pink-600">*</span>
                </label>
                <textarea
                  rows={4}
                  className={inputClass}
                  placeholder="Your message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              {/* Error / Success Message */}
              {error && <div className="text-red-500 text-sm font-medium">{error}</div>}
              {success && <div className="text-green-600 text-sm font-medium">Message sent successfully! We'll get back to you shortly.</div>}

              <div className="flex justify-end">
                <button
                  type="submit"
                  className={`inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-pink-600 hover:bg-pink-700 shadow-lg shadow-pink-600/25 hover:shadow-pink-600/40 cursor-pointer'
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
                    'Send Message'
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Contact);
