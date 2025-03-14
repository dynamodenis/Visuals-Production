import React, { useState, useRef } from 'react'
import events from '../../assets/events.jpg'
import photography from '../../assets/photography.jpg'

import { Camera, Video, Monitor, Wifi, Plane, ChevronLeft, ChevronRight } from 'lucide-react'

function ExpertPhotography() {
  const videos_url = [
    {id: 1, url: "https://www.youtube.com/embed/LXb3EKWsInQ", title: "Corporate Event Highlight"},
    {id: 2, url: "https://www.youtube.com/embed/Qs2-klYtq5Y", title: "Wedding Ceremony"},
    {id: 3, url: "https://www.youtube.com/embed/DppVAQqaNE4", title: "Documentary Feature"},
    {id: 4, url: "https://www.youtube.com/embed/aO0F_OttMJQ", title: "Live Concert"},
  ]

  // Sample photos for the photography section
  const photos = [
    {id: 1, src: events, title: "Wedding Portrait"},
    {id: 2, src: photography, title: "Corporate Headshot"},
    {id: 3, src: events, title: "Product Photography"},
    {id: 4, src: photography, title: "Real Estate"},
    {id: 5, src: events, title: "Event Photography"},
  ]

  const [activeVideo, setActiveVideo] = useState(videos_url[0])
  
  // Using separate refs for videos and photos scrolling
  const videoScrollRef = useRef(null)
  const photoScrollRef = useRef(null)

  const scrollLeft = (scrollRef) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' })
    }
  }

  const scrollRight = (scrollRef) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' })
    }
  }

  const handleVideoSelect = (video) => {
    setActiveVideo(video)
  }

  return (
    <div className='cols-span-1 md:col-span-3 w-full flex flex-col items-start justify-start mt-4'>
      {/* Featured Video - Now uses activeVideo */}
      <div className="w-full bg-gray-50 mb-4 overflow-hidden">
        <iframe
          className="md:w-full h-64 sm:h-80 md:h-96 "
          src={activeVideo.url}
          title={activeVideo.title || "Featured Video"}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Horizontal Scrolling Videos with Active State */}
      <div className="relative w-full mb-6">
        <h3 className="text-lg font-medium text-gray-800 mb-3">Our Work</h3>
        <div className="absolute top-1/2 left-0 -translate-y-1/2 z-10">
          <button 
            onClick={() => scrollLeft(videoScrollRef)} 
            className="bg-red-600 p-1 rounded-full shadow-md hover:bg-red-700 cursor-pointer"
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} className="text-white" />
          </button>
        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 z-10">
          <button 
            onClick={() => scrollRight(videoScrollRef)} 
            className="bg-red-600 p-1 rounded-full shadow-md hover:bg-red-700 cursor-pointer"
            aria-label="Scroll right"
          >
            <ChevronRight size={24} className="text-white" />
          </button>
        </div>
        <div 
          ref={videoScrollRef}
          className="flex overflow-x-auto pb-4 hide-scrollbar" 
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {videos_url.map((video) => (
            <div 
              key={video.id} 
              className={`flex-none md:w-72 md:mr-2 cursor-pointer transition-all duration-200 ${activeVideo.id === video.id ? 'scale-105 shadow-lg' : 'opacity-80 hover:opacity-100'}`}
              onClick={() => handleVideoSelect(video)}
            >
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
                <div className="relative">
                  <img 
                    src={`https://img.youtube.com/vi/${video.url.split('/').pop()}/mqdefault.jpg`} 
                    alt={video.title} 
                    className="w-full h-40 object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`w-12 h-12 flex items-center justify-center rounded-full ${activeVideo.id === video.id ? 'bg-red-800' : 'bg-gray-700 bg-opacity-70'}`}>
                      <Video size={24} className="text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-2">
                  <p className={`text-sm font-medium ${activeVideo.id === video.id ? 'text-red-800' : 'text-gray-700'}`}>
                    {video.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      

      <div className='flex flex-col mb-6'>
        <h2 className='text-xl font-semibold text-gray-800 mb-4'>Expert Videography</h2>
        <p className='text-gray-600 text-sm text-justify mb-3'>
          We specialize in professional videography services, capturing every moment with precision and creativity.
          Whether it's a corporate event, a wedding, or a live show, our expert team ensures top-notch video coverage.
        </p>

        {/* Services List */}
        <h3 className='text-md font-medium text-gray-700 mb-3'>Our Videography Include:</h3>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
          <div className='flex items-center gap-2 text-gray-600 text-sm'>
            <Video size={18} className="text-red-500" />
            <span>Corporate Events Video Coverage</span>
          </div>
          <div className='flex items-center gap-2 text-gray-600 text-sm'>
            <Camera size={18} className="text-red-500" />
            <span>Wedding Video Coverage</span>
          </div>
          <div className='flex items-center gap-2 text-gray-600 text-sm'>
            <Monitor size={18} className="text-red-500" />
            <span>Documentary Production</span>
          </div>
          <div className='flex items-center gap-2 text-gray-600 text-sm'>
            <Wifi size={18} className="text-red-500" />
            <span>Livestreaming & Live Show Coverage</span>
          </div>
          <div className='flex items-center gap-2 text-gray-600 text-sm'>
            <Plane size={18} className="text-red-500" />
            <span>Drone & Aerial Videography</span>
          </div>
        </div>
      </div>

      {/* Horizontal Scrolling Photos Gallery */}
      <div className="relative w-full mb-6">
          <div className="absolute top-1/2 left-0 -translate-y-1/2 z-10">
            <button 
              onClick={() => scrollLeft(photoScrollRef)} 
              className="bg-red-600 p-1 rounded-full shadow-md hover:bg-red-800 cursor-pointer"
              aria-label="Scroll left"
            >
              <ChevronLeft size={24} className="text-white" />
            </button>
          </div>
          <div className="absolute top-1/2 right-0 -translate-y-1/2 z-10 ">
            <button 
              onClick={() => scrollRight(photoScrollRef)} 
              className="bg-red-600 p-1 rounded-full shadow-md hover:bg-red-700 cursor-pointer"
              aria-label="Scroll right"
            >
              <ChevronRight size={24} className="text-white" />
            </button>
          </div>
          <div 
            ref={photoScrollRef}
            className="flex overflow-x-auto pb-4 hide-scrollbar" 
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {photos.map((photo) => (
              <div 
                key={photo.id} 
                className="flex-none w-3/4 mr-4 cursor-pointer transition-all duration-200 hover:scale-105"
              >
                <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
                  <div className="relative">
                    <img 
                      src={photo.src} 
                      alt={photo.title} 
                      className="w-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-2">
                      <p className="text-sm font-medium">{photo.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      {/* Expert Photography Section with Horizontal Scrolling */}
      <div className='flex-1 w-full mb-6'>
        <h2 className='text-xl font-semibold text-gray-800 mb-4'>Expert Photography</h2>
        <p className='text-gray-600 text-sm text-justify mb-4'>
          Our team of expert photographers are ready to capture your special moments and create stunning visuals for your brand. 
          We offer a wide range of photography services for various occasions and purposes.
        </p>
        
        
        
        {/* Photography Services */}
        <h3 className='text-md font-medium text-gray-700 mb-3'>Our Photography Services Include:</h3>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
          <div className='flex items-center gap-2 text-gray-600 text-sm'>
            <Camera size={18} className="text-red-500" />
            <span>Wedding Photography</span>
          </div>
          <div className='flex items-center gap-2 text-gray-600 text-sm'>
            <Camera size={18} className="text-red-500" />
            <span>Corporate Headshots</span>
          </div>
          <div className='flex items-center gap-2 text-gray-600 text-sm'>
            <Camera size={18} className="text-red-500" />
            <span>Product Photography</span>
          </div>
          <div className='flex items-center gap-2 text-gray-600 text-sm'>
            <Camera size={18} className="text-red-500" />
            <span>Real Estate Photography</span>
          </div>
          <div className='flex items-center gap-2 text-gray-600 text-sm'>
            <Camera size={18} className="text-red-500" />
            <span>Event Photography</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(ExpertPhotography)