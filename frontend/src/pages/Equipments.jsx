import React from 'react';
import { Camera, Video, Mic, Laptop, ChevronLeft, ChevronRight } from 'lucide-react';
import EquipmentCard from '../components/EquipmentCard';
import photography from '../assets/photography.jpg'
import gopro from '../assets/gopro.jpg'

const Equipments = () => {
    const equipmentCategories = [
        {
            title: "Camera Equipment",
            icon: <Camera className="w-8 h-8" />,
            items: ["DSLR Cameras", "Mirrorless Cameras", "Lenses", "Stabilizers"],
            price: 3000,
            image: photography
        },
        {
            title: "Video Gear",
            icon: <Video className="w-8 h-8" />,
            items: ["Professional Camcorders", "Drones", "Lighting Kits", "Green Screens"],
            price: 3000,
            image: gopro
        },
        {
            title: "Audio Equipment",
            icon: <Mic className="w-8 h-8" />,
            items: ["Microphones", "Audio Interfaces", "Mixers", "Studio Monitors"],
            price: 3000,
            image: photography
        },
        {
            title: "Production Tech",
            icon: <Laptop className="w-8 h-8" />,
            items: ["Editing Workstations", "Storage Solutions", "Monitors", "Streaming Gear"],
            price: 3000,
            image: gopro
        },
        {
            title: "Camera Equipment",
            icon: <Camera className="w-8 h-8" />,
            items: ["DSLR Cameras", "Mirrorless Cameras", "Lenses", "Stabilizers"],
            price: 3000,
            image: photography
        },
        {
            title: "Video Gear",
            icon: <Video className="w-8 h-8" />,
            items: ["Professional Camcorders", "Drones", "Lighting Kits", "Green Screens"],
            price: 3000,
            image: photography
        },
        {
            title: "Audio Equipment",
            icon: <Mic className="w-8 h-8" />,
            items: ["Microphones", "Audio Interfaces", "Mixers", "Studio Monitors"],
            price: 3000,
            image: photography
        },
        {
            title: "Production Tech",
            icon: <Laptop className="w-8 h-8" />,
            items: ["Editing Workstations", "Storage Solutions", "Monitors", "Streaming Gear"],
            price: 3000,
            image: photography
        }
    ];

  return (
    <div
        id="container"
        className="grid md:grid-cols-3 justify-center items-center pb-4"
    >
        {equipmentCategories.map((product, index) => (
            <EquipmentCard key={index} product={product} />
        ))}
    </div>
  )
}

export default Equipments