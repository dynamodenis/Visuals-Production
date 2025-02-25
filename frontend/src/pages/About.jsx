import React from 'react'
import { Eye, AudioWaveform, InboxIcon, HandCoinsIcon } from 'lucide-react';

const About = () => {
  return (
    <div className='container mx-auto px-4 py-10 md:w-5xl'>
      <div className='flex flex-col items-center py-10'>
        <h2 className="text-3xl font-bold text-center flex flex-row justify-center items-center text-gray-900"><Eye className="mr-3 text-red-900" /><span>About Us </span><AudioWaveform className="ml-2 text-red-900" /></h2>
      </div>

      <div className=" flex flex-col gap-8">
        <div className='flex flex-col justify-center items-center gap-2'>
          <div className='text-lg font-semibold text-red-900'>Our Mission</div>
          <div className='italic text-gray-600'> Founded on the vision of transforming how brands connect with audiences, Visuals Production delivers innovative content that makes a difference. We offer cutting-edge creative solutions that empower businesses, everywhere to imagine, create, and bring every digital story to life.
          </div>
        </div>

        <div className='flex flex-col justify-center items-center gap-2'>
          <div className='text-lg font-semibold text-red-900'>Our Vision</div>
          <div className='italic text-gray-600'> We am passionate about changing the world through impactful digital storytelling. By crafting compelling narratives, we aim to inspire, educate, and drive meaningful change. Through innovative digital media, we strive to connect with audiences and make a lasting impact.
          </div>
        </div>

        <div className='flex flex-col justify-center items-center gap-2'>
          <div className='text-lg font-semibold text-red-900'>Our Values</div>
          <div className='italic text-gray-600'>
            We prioritize our clients' needs, ensuring that every solution we create is tailored to their goals. Integrity and accountability guide us, and we readily offer support when mistakes happen, always striving to make things right. Our commitment to impactful digital storytelling is driven by trust, collaboration, and delivering real value.
          </div>
        </div>

        <div className='flex flex-col items-center py-10'>
          <h2 className="text-3xl font-bold text-center flex flex-row justify-center items-center text-gray-900"><InboxIcon className="mr-3 text-red-900" /><span>Customer Stories and Testimonials </span><HandCoinsIcon className="ml-2 text-red-900" /></h2>
        </div>
      </div>
    </div>
  )
}

export default React.memo(About)