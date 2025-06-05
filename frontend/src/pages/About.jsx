import React from 'react'
import AnimateSection from '../components/AnimateSection';
import { Eye, Rocket, Lightbulb, Heart, TrendingUp, Users, Award, Zap, Target, Quote, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const values = [
    {
      icon: Rocket,
      title: "Our Mission",
      description: "Founded on the vision of transforming how brands connect with audiences, Prism Media delivers innovative content that makes a difference. We offer cutting-edge creative solutions that empower businesses, everywhere to imagine, create, and bring every digital story to life.",
      gradient: "from-pink-400 to-pink-700/80",
      delay: 0.2
    },
    {
      icon: Lightbulb,
      title: "Our Vision",
      description: "We are passionate about changing the world through impactful digital storytelling. By crafting compelling narratives, we aim to inspire, educate, and drive meaningful change. Through innovative digital media, we strive to connect with audiences and make a lasting impact.",
      gradient: "from-gray-400 to-gray-800/80",
      delay: 0.4
    },
    {
      icon: Heart,
      title: "Our Values",
      description: "We prioritize our clients' needs, ensuring that every solution we create is tailored to their goals. Integrity and accountability guide us, and we readily offer support when mistakes happen, always striving to make things right. Our commitment to impactful digital storytelling is driven by trust, collaboration, and delivering real value.",
      gradient: "from-green-500 to-green-600",
      delay: 0.6
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
      name: "Sarah Martinez",
      position: "CEO, TechFlow Solutions",
      initials: "SM",
      bgColor: "bg-purple-600",
      rating: 5,
      text: "Prism Media transformed our digital presence completely. Their strategic approach and creative excellence helped us achieve a 300% increase in online engagement. Truly exceptional work!"
    },
    {
      name: "Michael Chen",
      position: "Founder, EcoVentures",
      initials: "MC",
      bgColor: "bg-teal-600",
      rating: 5,
      text: "The team's attention to detail and innovative thinking exceeded our expectations. They delivered a brand identity that perfectly captures our mission and values."
    },
    {
      name: "Emily Johnson",
      position: "Director, RetailMax",
      initials: "EJ",
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
      name: "Lisa Thompson",
      position: "Product Manager, FitnessPro",
      initials: "LT",
      bgColor: "bg-teal-600",
      rating: 5,
      text: "Their mobile app development expertise is unmatched. The app they built for us reached #1 in our category within the first month of launch."
    },
    {
      name: "Robert Kim",
      position: "CTO, GlobalCorp",
      initials: "RK",
      bgColor: "bg-purple-600",
      rating: 5,
      text: "Prism Media's enterprise solutions transformed our entire digital infrastructure. The efficiency gains we've experienced are remarkable and measurable."
    }
  ];

  const partners = [
    {
      name: "TV47",
      logo: "/photos/tv47.jpeg",
    },
    {
      name: "Black Samurai",
      logo: "/photos/black_samurai.jpg",
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
    <div className='container mx-auto px-4 py-16 md:w-5xl bg-white'>
      <AnimateSection>
        <motion.div className='flex flex-col items-center py-10' initial={{ scale: 0.8 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center flex flex-row justify-center items-center text-gray-900"><Eye className="mr-3 text-pink-600" /><span>About Us </span><TrendingUp className="ml-2 text-pink-600 animate-bounce" /></h2>

          <motion.p
            className="text-muted-foreground max-w-2xl mx-auto text-md italic text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Transforming how brands connect with audiences through innovative digital storytelling and cutting-edge creative solutions.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {values.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: item.delay }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden h-full shadow-lg hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-background/90 to-background/70 backdrop-blur-sm">
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <div className="relative p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div
                      className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <item.icon className="text-white text-2xl w-8 h-8" />
                    </motion.div>
                    <h3 className="text-md font-bold text-gray-600 group-hover:text-primary transition-colors duration-300">{item.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Team Highlights Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-xl font-bold mb-4 text-gray-600 bg-clip-text animate-bounce">
              Why Choose Prism Media
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto italic text-gray-600">
              We bring together creativity, strategy, and technology to deliver exceptional results for your brand.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamHighlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-sm border hover:shadow-lg transition-all duration-300"
              >
                <motion.div
                  className={`inline-flex p-4 rounded-full bg-gradient-to-br from-white/10 to-white/5 mb-4 ${highlight.color}`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <highlight.icon className="w-6 h-6" />
                </motion.div>
                <h4 className="font-semibold mb-2 text-gray-600">{highlight.title}</h4>
                <p className="text-sm text-muted-foreground text-gray-600">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Digital Storytelling Section */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute inset-0 text-gray-600 rounded-2xl blur-xl"></div>
              <img
                src="/photos/govstack1.jpeg"
                alt="Digital storytelling and creative process"
                className="relative w-full h-auto rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 text-gray-600 animate-bounce">
              Digital Storytelling Mastery
            </h3>
            <p className="text-muted-foreground mb-8  text-md text-gray-600 italic">
              We craft compelling narratives that resonate with your audience across all digital platforms. Our approach combines data-driven insights with creative excellence to deliver stories that inspire action.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-yellow-500/20 rounded-xl blur-lg"></div>
              <img
                src="/photos/govstack2.jpeg"
                alt="Creative process and digital innovation"
                className="relative w-full h-auto rounded-xl shadow-xl hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Testimonials Section */}
        <motion.div className="mb-20 mt-10 md:mt-20" initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}>
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-6 flex items-center justify-center gap-3">
              <Quote className="text-pink-600" />
              <span className="text-gray-900">Customer Stories and Testimonials</span>
              <Quote className="text-pink-600 scale-x-[-1]" />
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from our clients about their transformative experiences working with Prism Media.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:scale-105"
              >
                <StarRating rating={testimonial.rating} />
                <p className="text-gray-600 italic mb-6 leading-relaxed">
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
              </div>
            ))}
          </div>
        </motion.div>

        {/* Partners Section */}
        <motion.div className="text-center" initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}>
          <p className="text-xl text-gray-500 mb-8 font-medium">Trusted by industry leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex flex-row gap-1 "
              >
                {/* <div className='text-2xl font-bold text-gray-400 hover:text-gray-600 transition-colors duration-300'>{partner.name}</div> */}
                <div><img src={partner.logo} title={partner.name} className='w-35 h-25 object-fit'/></div>
              </div>
            ))}
          </div>
        </motion.div>
      </AnimateSection>
    </div>
  )
}

export default React.memo(About)
