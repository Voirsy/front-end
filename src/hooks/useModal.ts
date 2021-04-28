import { useState } from 'react';

const useModal = (initialValues = false) => {
  const [isModalOpen, setIsModalOpen] = useState(initialValues);

  const modalToggle = (val: boolean) => {
    setIsModalOpen(val);
  };

  return { isModalOpen, modalToggle };
};

export default useModal;
