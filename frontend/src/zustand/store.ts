import { create } from 'zustand';
import { persist } from 'zustand/middleware';

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

export const useEquipementStore = create<EquipementStore>()(
  persist(
    (set) => ({
      equipements: [],
      addEquipement: (equipement) =>
        set((state) => ({
          equipements: [...state.equipements, equipement],
        })),
      removeEquipement: (equipement) =>
        set((state) => ({
          equipements: state.equipements.filter((e) => e.title !== equipement.title),
        })),
      getEquipements: async () => {
        try {
          const data = [
            {
              title: "Sony a7 IV",
              category: ["Camera"],
              price: 3000,
              currency: "KSH",
              quantity: 1,
              image: '/photos/sony_a7_iv.webp'
            },
            {
              title: "Sigma 35mm f/1.4",
              category: ["Lens", "Camera"],
              price: 3000,
              currency: "KSH",
              quantity: 1,
              image: '/photos/sigma_35mm_14.jpg'
            },
            {
              title: "DJI Mic Mini Wireless Microphone",
              category: ["Audio"],
              price: 1000,
              currency: "KSH",
              quantity: 1,
              image: '/photos/dji_mic_mini.webp'
            },
            {
              title: "DJI Mic M2 Wireless Microphone",
              category: ["Audio"],
              price: 1000,
              currency: "KSH",
              quantity: 1,
              image: '/photos/dji_mic_m2.webp'
            },
            {
              title: "RS4 Pro Gimbal",
              category: ["Stabilizer", "Camera"],
              price: 2000,
              currency: "KSH",
              quantity: 1,
              image: '/photos/rs4_pro.webp'
            },
            {
              title: "Aputure Amaran 300C RGB LED Light",
              category: ["Lighting"],
              price: 1000,
              currency: "KSH",
              quantity: 1,
              image: '/photos/amaram_300c.jpg'
            },
            {
              title: "Softbox with Grid (85cm)",
              category: ["Lighting"],
              price: 500,
              currency: "KSH",
              quantity: 1,
              image: '/photos/softbox.jpg'
            },
            {
              title: "Insta360 X4 Action Camera",
              category: ["Camera"],
              price: 1000,
              currency: "KSH",
              quantity: 1,
              image: '/photos/insta360.webp'
            }
          ];
          console.log('Fetched equipements:', data);
          set({ equipements: data });
        } catch (error) {
          console.error('Error fetching equipements:', error);
        }
      },
    }),
    {
      name: 'equipement-storage', // Key in localStorage
    }
  )
);
