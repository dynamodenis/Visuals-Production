import {create} from 'zustand';

type EquipementStore = {
  equipements: string[];
  addEquipement: (equipement: string) => void;
  removeEquipement: (equipement: string) => void;
  getEquipements: () => string[];
};

export const useEquipementStore = create<EquipementStore>((set) => ({
    equipements: [],
    addEquipement: (equipement) => set((state) => ({equipements: [...state.equipements, equipement]})),
    removeEquipement: (equipement) => set((state) => ({equipements: state.equipements.filter((e) => e !== equipement)})),
    getEquipements: () => equipements,
}));