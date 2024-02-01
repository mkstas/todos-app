import { Ref, ref } from 'vue';

export const useModal = () => {
  const isOpenModal: Ref<boolean> = ref(false);

  const openModal = () => {
    isOpenModal.value = true;
    document.body.classList.add('overflow-hidden');
  };

  const closeModal = () => {
    isOpenModal.value = false;
    document.body.classList.remove('overflow-hidden');
  };

  return { isOpenModal, openModal, closeModal };
};
