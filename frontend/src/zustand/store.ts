import { create } from 'zustand';
import photography from '../assets/photography.jpg'
import gopro from '../assets/gopro.jpg'

type Equipement = {
  title: string;
  items: string[];
  price: number;
  image: string;
};

type EquipementStore = {
  equipements: Equipement[];
  addEquipement: (equipement: Equipement) => void;
  removeEquipement: (equipement: Equipement) => void;
  getEquipements: () => Promise<void>;
};

export const useEquipementStore = create<EquipementStore>((set) => ({
  equipements: [],
  addEquipement: (equipement) => set((state) => ({ equipements: [...state.equipements, equipement] })),
  removeEquipement: (equipement) => set((state) => ({ equipements: state.equipements.filter((e) => e !== equipement) })),
  getEquipements: async () => {
    try {
      // const response = await fetch('https://your-lambda-endpoint.com/equipements');
      // const data = await response.json();
      const data = [
        {
          title: "Camera Equipment",
          items: ["DSLR Cameras", "Mirrorless Cameras", "Lenses", "Stabilizers"],
          price: 3000,
          image: photography
        },
        {
          title: "Video Gear",
          items: ["Professional Camcorders", "Drones", "Lighting Kits", "Green Screens"],
          price: 3000,
          image: gopro
        },
        {
          title: "Audio Equipment",
          items: ["Microphones", "Audio Interfaces", "Mixers", "Studio Monitors"],
          price: 3000,
          image: photography
        },
        {
          title: "Production Tech",
          items: ["Editing Workstations", "Storage Solutions", "Monitors", "Streaming Gear"],
          price: 3000,
          image: gopro
        },
        {
          title: "Camera Equipment",
          items: ["DSLR Cameras", "Mirrorless Cameras", "Lenses", "Stabilizers"],
          price: 3000,
          image: photography
        },
        {
          title: "Video Gear",
          items: ["Professional Camcorders", "Drones", "Lighting Kits", "Green Screens"],
          price: 3000,
          image: photography
        },
        {
          title: "Audio Equipment",
          items: ["Microphones", "Audio Interfaces", "Mixers", "Studio Monitors"],
          price: 3000,
          image: photography
        },
        {
          title: "Production Tech",
          items: ["Editing Workstations", "Storage Solutions", "Monitors", "Streaming Gear"],
          price: 3000,
          image: photography
        }
      ];
      console.log('Fetched equipements:', data);
      set({ equipements: data }); // Update Zustand store with fetched data
    } catch (error) {
      console.error('Error fetching equipements:', error);
    }
  },
}));
