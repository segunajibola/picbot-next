import { create } from 'zustand';

const useModal = create((set) => ({
  isOpen: false,
  openModal: (imageId) => set({ isOpen: true, imageId }),
  closeModal: () => set({ isOpen: false, imageId: undefined }),
}));

export default useModal;