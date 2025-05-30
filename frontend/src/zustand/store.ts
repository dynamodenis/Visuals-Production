import { create } from 'zustand';
import photography from '../assets/photography.jpg'
import gopro from '../assets/gopro.jpg'

import a7_iv from '../assets/sony_a7_iv.webp';
import sigma_35mm_14 from '../assets/sigma_35mm_14.jpg'
import dji_mic_mini from '../assets/dji_mic_mini.webp'
import dji_mic_m2 from '../assets/dji_mic_m2.webp'
import rs4_pro from '../assets/rs4_pro.webp'
import amaran_300c from '../assets/amaram_300c.jpg'
import softbox from '../assets/softbox.jpg'
import insta360 from '../assets/insta360.webp'


type Equipement = {
  title: string;
  category: string[];
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
          title: "Sony a7 IV",
          category: ["Camera"],
          price: 3000,
          image: a7_iv
        },
        {
          title: "Sigma 35mm f/1.4",
          category: ["Lens", "Camera"],
          price: 3000,
          image: sigma_35mm_14
        },
        {
          title: "DJI Mic Mini Wireless Microphone",
          category: ["Audio"],
          price: 1000,
          image: dji_mic_mini
        },
        {
          title: "DJI Mic M2 Wireless Microphone",
          category: ["Audio"],
          price: 1000,
          image: dji_mic_m2
        },
        {
          title: "RS4 Pro Gimbal",
          category: ["Stabilizer", "Camera"],
          price: 2000,
          image: rs4_pro
        },
        {
          title: "Aputure Amaran 300C RGB LED Light",
          category: ["Lighting"],
          price: 1000,
          image: amaran_300c
        },
        {
          title: "Softbox with Grid (85cm)",
          category: ["Lighting"],
          price: 500,
          image: softbox
        },
        {
          title: "Insta360 X4 Action Camera",
          category: ["Camera"],
          price: 1000,
          image: insta360
        }
      ];
      console.log('Fetched equipements:', data);
      set({ equipements: data }); // Update Zustand store with fetched data
    } catch (error) {
      console.error('Error fetching equipements:', error);
    }
  },
}));
