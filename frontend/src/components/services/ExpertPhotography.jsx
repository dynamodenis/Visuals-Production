import React from 'react'
import events from '../../assets/events.jpg'


function ExpertPhotography() {
  return (
    <div className='col-span-3 w-full flex flex-col items-start justify-start'>
      <div className="w-full bg-gray-50 mb-4 overflow-hidden">
        <img
          src={events}
          alt="Events"
          className="w-full object-cover"
        />
      </div>

      <div className='flex-1'>
      <h2 className='text-xl font-semibold text-gray-800 text-justify mb-4-2'>Expert Photography & Videography</h2>
      <div className='text-gray-600 text-sm text-justify'>
        Our team of expert photographers and videographers are ready to capture your special moments and create stunning visuals for your brand. We offer a wide range of photography and videography services, including product photography, event coverage, portrait photography, and more. Whether you need professional headshots for your team, high-quality images for your website, or engaging video content for your social media channels, we’ve got you covered.
      </div>
      </div>
    </div>
  )
}

export default React.memo(ExpertPhotography)