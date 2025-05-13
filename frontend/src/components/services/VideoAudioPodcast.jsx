import React from 'react'
import { Video, Mic, Headphones, Camera, Monitor, Wifi, Music, Radio, FileAudio, Layers, Film, Edit } from 'lucide-react'

function VideoAudioPodcast() {
  return (
    <div className="cols-span-1 md:col-span-3 w-full flex flex-col items-start justify-start mt-4">
      {/* Header Section */}
      <div className="w-full mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Video, Audio and Podcast Production</h1>
        <p className="text-gray-600 text-sm text-justify mb-3">
          At Visuals Production, we transform your ideas into compelling visual and audio content 
          that resonates with your target audience. Our professional production team combines creative 
          storytelling with technical expertise to deliver high-quality videos, audio productions, 
          and podcasts that elevate your brand's message.
        </p>
      </div>
      
      {/* Featured Video Section */}
      <div className="w-full bg-gray-50 mb-6 overflow-hidden rounded-lg shadow-sm">
        <iframe
          className="w-full h-64 sm:h-80 md:h-96"
          src="https://www.youtube.com/embed/featured-video-id"
          title="Featured Production"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      
      {/* Video Production Section */}
      <div className="flex flex-col mb-6 w-full">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Video Production</h2>
        <p className="text-gray-600 text-sm text-justify mb-3">
          Our professional video production services capture your brand story with precision and creativity.
          From corporate videos to event coverage, our expert team delivers high-quality visual content.
        </p>
        
        {/* Video Services List */}
        <h3 className="text-md font-medium text-gray-700 mb-3">Our Video Services Include:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <Monitor size={18} className="text-red-500" />
            <span>Corporate Videos & Promotional Content</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <Film size={18} className="text-red-500" />
            <span>Brand Stories & Testimonials</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <Video size={18} className="text-red-500" />
            <span>Social Media & Digital Marketing Videos</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <Wifi size={18} className="text-red-500" />
            <span>Event Coverage & Live Streaming</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <Layers size={18} className="text-red-500" />
            <span>Product Demonstrations & Tutorials</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <Edit size={18} className="text-red-500" />
            <span>Full-Service Video Production</span>
          </div>
        </div>
      </div>
      
      {/* Audio Production Section */}
      <div className="flex flex-col mb-6 w-full">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Audio Production</h2>
        <p className="text-gray-600 text-sm text-justify mb-3">
          Our audio production team creates professional sound experiences for various applications,
          from voice-overs to complete sound design for your visual content.
        </p>
        
        {/* Audio Services List */}
        <h3 className="text-md font-medium text-gray-700 mb-3">Our Audio Services Include:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <Mic size={18} className="text-red-500" />
            <span>Professional Voice-Over Recording</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <Headphones size={18} className="text-red-500" />
            <span>Sound Design & Audio Mixing</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <Music size={18} className="text-red-500" />
            <span>Music Production & Licensing</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <Edit size={18} className="text-red-500" />
            <span>Audio Editing & Enhancement</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <Radio size={18} className="text-red-500" />
            <span>Commercial Radio Spots</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <FileAudio size={18} className="text-red-500" />
            <span>Audio Branding Elements</span>
          </div>
        </div>
      </div>
      
      {/* Podcast Production Section */}
      <div className="flex flex-col mb-6 w-full">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Podcast Production</h2>
        <p className="text-gray-600 text-sm text-justify mb-3">
          Launch your podcast with our end-to-end production services, from concept development to 
          distribution strategy, ensuring professional quality audio content for your audience.
        </p>
        
        {/* Podcast Services List */}
        <h3 className="text-md font-medium text-gray-700 mb-3">Our Podcast Services Include:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <Layers size={18} className="text-red-500" />
            <span>Podcast Series Development & Planning</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <Mic size={18} className="text-red-500" />
            <span>Professional Recording Sessions</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <Headphones size={18} className="text-red-500" />
            <span>Editing, Mixing & Mastering</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <Camera size={18} className="text-red-500" />
            <span>Cover Art & Visual Assets Creation</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <Wifi size={18} className="text-red-500" />
            <span>Distribution Strategy & Platform Setup</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <Headphones size={18} className="text-red-500" />
            <span>Ongoing Production Support</span>
          </div>
        </div>
      </div>
      
      {/* Production Process Section */}
      <div className="w-full mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Our Production Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <h4 className="font-medium text-gray-800 mb-2">1. Discovery & Planning</h4>
            <p className="text-gray-600 text-sm">We begin by understanding your goals, target audience, and creative vision.</p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <h4 className="font-medium text-gray-800 mb-2">2. Pre-Production</h4>
            <p className="text-gray-600 text-sm">Our team handles scriptwriting, storyboarding, location scouting, and scheduling.</p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <h4 className="font-medium text-gray-800 mb-2">3. Production</h4>
            <p className="text-gray-600 text-sm">Using state-of-the-art equipment, we capture high-quality footage and audio.</p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <h4 className="font-medium text-gray-800 mb-2">4. Post-Production</h4>
            <p className="text-gray-600 text-sm">Professional editing, color grading, sound design, and graphics integration.</p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <h4 className="font-medium text-gray-800 mb-2">5. Delivery & Distribution</h4>
            <p className="text-gray-600 text-sm">We provide your content in optimal formats and assist with distribution strategies.</p>
          </div>
        </div>
      </div>
      
      {/* Equipment Section */}
      <div className="w-full bg-gray-50 p-4 rounded-lg shadow-sm mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">Professional Equipment</h2>
        <p className="text-gray-600 text-sm mb-4">
          We utilize industry-leading cameras, lighting, audio recording equipment, and post-production 
          software to ensure the highest quality results for every project. Our rental services also 
          allow clients to access professional equipment for their own productions.
        </p>
        <a href="/equipments" className="text-red-600 hover:text-red-800 text-sm font-medium flex items-center">
          View Our Equipment
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
      
      {/* CTA Section */}
      <div className="w-full bg-red-50 p-6 rounded-lg shadow-sm mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">Ready to Start Your Next Production?</h2>
        <p className="text-gray-600 text-sm mb-4">Contact our team today to discuss your project needs and receive a customized quote.</p>
        <a href="/contact" className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 inline-block text-sm font-medium">
          Get In Touch
        </a>
      </div>
    </div>
  )
}

export default React.memo(VideoAudioPodcast)