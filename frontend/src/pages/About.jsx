import React from 'react'
import { Rocket, Lightbulb, Heart, Users, Award, Zap, Target, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import PageHero from '../components/ui/PageHero';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import Seo from '../components/Seo';

const About = () => {
  const values = [
    {
      icon: Rocket,
      title: "Our Mission",
      description: "Founded on the vision of transforming how brands connect with audiences, Prism Media delivers innovative content that makes a difference. We offer cutting-edge creative solutions that empower businesses, everywhere to imagine, create, and bring every digital story to life.",
      gradient: "from-pink-400 to-pink-700/80",
    },
    {
      icon: Lightbulb,
      title: "Our Vision",
      description: "We are passionate about changing the world through impactful digital storytelling. By crafting compelling narratives, we aim to inspire, educate, and drive meaningful change. Through innovative digital media, we strive to connect with audiences and make a lasting impact.",
      gradient: "from-gray-400 to-gray-800/80",
    },
    {
      icon: Heart,
      title: "Our Values",
      description: "We prioritize our clients' needs, ensuring that every solution we create is tailored to their goals. Integrity and accountability guide us, and we readily offer support when mistakes happen, always striving to make things right. Our commitment to impactful digital storytelling is driven by trust, collaboration, and delivering real value.",
      gradient: "from-green-500 to-green-600",
    }
  ];

  const teamHighlights = [
    {
      icon: Users,
      title: "Expert Team",
      description: "Creative professionals with diverse backgrounds",
      color: "text-blue-500"
    },
    {
      icon: Award,
      title: "Award Winning",
      description: "Recognized for excellence in digital storytelling",
      color: "text-yellow-500"
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Quick turnaround without compromising quality",
      color: "text-purple-500"
    },
    {
      icon: Target,
      title: "Goal Focused",
      description: "Every project aligned with your business objectives",
      color: "text-red-500"
    }
  ];

  const testimonials = [
    {
      name: "Wanjiku Kamau",
      position: "Marketing Director, Safi Foods",
      initials: "WK",
      bgColor: "bg-purple-600",
      rating: 5,
      text: "Prism Media transformed our digital presence completely. Their strategic approach and creative excellence helped us achieve a 300% increase in online engagement. Truly exceptional work!"
    },
    {
      name: "Michael Thompson",
      position: "Founder, EcoVentures",
      initials: "MT",
      bgColor: "bg-teal-600",
      rating: 5,
      text: "The team's attention to detail and innovative thinking exceeded our expectations. They delivered a brand identity that perfectly captures our mission and values."
    },
    {
      name: "Achieng Odhiambo",
      position: "CEO, Zuri Beauty",
      initials: "AO",
      bgColor: "bg-pink-600",
      rating: 5,
      text: "Working with Prism Media was a game-changer for our e-commerce platform. The UX improvements they implemented resulted in a 200% boost in conversions."
    },
    {
      name: "David Wilson",
      position: "CMO, HealthTech Pro",
      initials: "DW",
      bgColor: "bg-orange-600",
      rating: 5,
      text: "The digital marketing campaign they created for us was phenomenal. We saw immediate results and sustained growth throughout the entire engagement period."
    },
    {
      name: "Brian Kiprotich",
      position: "Producer, Milele Events",
      initials: "BK",
      bgColor: "bg-teal-600",
      rating: 5,
      text: "From gear rental to full event coverage, everything was seamless. The footage they delivered for our live shows was broadcast-quality and on time, every time."
    },
    {
      name: "Emily Johnson",
      position: "Product Manager, FitnessPro",
      initials: "EJ",
      bgColor: "bg-purple-600",
      rating: 5,
      text: "Their production expertise is unmatched. The campaign videos they created for our launch drove record engagement within the first month."
    }
  ];

  const partners = [
    {
      name: "TV47",
      logo: "/photos/tv47.jpeg",
      href: "https://tv47.digital",
    },
    {
      name: "Black Samurai",
      logo: "/photos/black_samurai.jpg",
    },
    {
      name: "Lekker",
      logo: "/photos/Lekker.avif",
      href: "https://www.lekker.co.ke",
    },
    {
      name: "NCBA",
      logo: "/photos/ncba-logo.svg",
      href: "https://ncbagroup.com/ke",
    },
    {
      name: "EABL",
      logo: "/photos/eabl.png",
      href: "https://www.eabl.com/",
    },
    {
      name: "Guinness",
      logo: "/photos/guinness.svg",
      href: "https://www.guinness.com/",
    },
    {
      name: "Premier League",
      logo: "/photos/epl.png",
      href: "https://www.premierleague.com/",
    },
  ];

  const StarRating = ({ rating }) => {
    return (
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className='bg-white'>
      <Seo
        title="About Us"
        description="Meet Prism Media — an award-winning digital agency in Nairobi, Kenya trusted by TV47, NCBA, EABL and more for video production, photography and digital storytelling."
        path="/about"
      />
      <PageHero
        eyebrow="Who we are"
        title="About Us"
        subtitle="Transforming how brands connect with audiences through innovative digital storytelling and cutting-edge creative solutions."
      />

      <div className='container mx-auto px-6 md:px-10 py-20 md:py-24'>
        {/* Mission / Vision / Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-24 md:mb-32">
          {values.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: '-10%' }}
              className={`group rounded-2xl border border-gray-200 bg-gray-50/60 p-8 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-gray-900/10 transition-all duration-300 text-left ${index === 1 ? 'md:translate-y-8' : ''}`}
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center shadow-lg mb-6 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110`}>
                <item.icon className="text-white w-7 h-7" />
              </div>
              <h3 className="text-xl font-extrabold tracking-tight text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Why choose us */}
        <div className="mb-24 md:mb-32">
          <SectionHeading
            eyebrow="Why us"
            title="Why Choose Prism Media"
            subtitle="We bring together creativity, strategy, and technology to deliver exceptional results for your brand."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamHighlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true, margin: '-10%' }}
                className="group text-center p-8 rounded-2xl border border-gray-200 hover:border-pink-600/40 hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300"
              >
                <div className={`inline-flex p-4 rounded-full bg-gray-50 mb-4 ${highlight.color} transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                  <highlight.icon className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{highlight.title}</h4>
                <p className="text-sm text-gray-600">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Digital storytelling */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-24 md:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: '-10%' }}
            className="group overflow-hidden rounded-2xl"
          >
            <img
              src="/photos/govstack1.jpeg"
              alt="Digital storytelling and creative process"
              className="w-full h-auto object-cover shadow-2xl transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: '-10%' }}
            className="text-left"
          >
            <p className="eyebrow mb-3">
              <span className="h-px w-8 bg-pink-600 inline-block" />
              Our craft
            </p>
            <h3 className="display-section text-gray-900 mb-5">
              Digital Storytelling Mastery
            </h3>
            <p className="text-gray-600 leading-relaxed mb-8">
              We craft compelling narratives that resonate with your audience across all digital platforms. Our approach combines data-driven insights with creative excellence to deliver stories that inspire action.
            </p>
            <div className="group overflow-hidden rounded-2xl">
              <img
                src="/photos/govstack2.jpeg"
                alt="Creative process and digital innovation"
                className="w-full h-auto object-cover shadow-xl transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          </motion.div>
        </div>

        {/* Testimonials */}
        <div className="mb-24 md:mb-32">
          <SectionHeading
            eyebrow="Testimonials"
            title="Customer Stories"
            subtitle="Hear from our clients about their transformative experiences working with Prism Media."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true, margin: '-10%' }}
                className="bg-white rounded-2xl border border-gray-200 p-8 text-left hover:-translate-y-1.5 hover:shadow-xl hover:shadow-gray-900/10 transition-all duration-300"
              >
                <StarRating rating={testimonial.rating} />
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 ${testimonial.bgColor} rounded-full flex items-center justify-center text-white font-bold text-sm`}>
                    {testimonial.initials}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.position}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Partners */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: '-10%' }}
        >
          <p className="eyebrow justify-center mb-8">
            <span className="h-px w-8 bg-pink-600 inline-block" />
            Trusted by industry leaders
            <span className="h-px w-8 bg-pink-600 inline-block" />
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-14">
            {partners.map((partner, index) => {
              const logo = (
                <img
                  src={partner.logo}
                  title={partner.name}
                  alt={partner.name}
                  className="w-28 h-20 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:scale-105 transition-all duration-500"
                />
              );
              return partner.href ? (
                <a
                  key={index}
                  href={partner.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${partner.name}`}
                >
                  {logo}
                </a>
              ) : (
                <span key={index}>{logo}</span>
              );
            })}
          </div>
        </motion.div>

        {/* CTA */}
        <div className="flex justify-center pt-8">
          <Button to="/contact" variant="dark">Work With Us</Button>
        </div>
      </div>
    </div>
  )
}

export default React.memo(About)
