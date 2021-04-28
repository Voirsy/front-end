import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import Styled from './styles';
import { ModalTemplateProps, ModalToggle } from './types';

const modalContainer = document.getElementById('modal-container') as HTMLDivElement;
const wrapper = document.createElement('div');

const outsideClick = (
  ref: React.RefObject<HTMLDivElement>,
  modalToggle: ModalToggle,
  e: MouseEvent | TouchEvent
) => {
  if (!ref.current || ref.current.contains(e.target as Node)) return;
  modalToggle(false);
};

const handleEscape = (modalToggle: ModalToggle, e: KeyboardEvent): void => {
  if (e.key === 'Escape') modalToggle(false);
};

const ModalTemplate = ({
  children,
  isAdjustedToParent = false,
  modalToggle,
}: ModalTemplateProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    modalContainer.appendChild(wrapper);
    document.addEventListener('keydown', (e) => handleEscape(modalToggle, e));
    document.addEventListener('mousedown', (e) => outsideClick(modalRef, modalToggle, e));
    document.addEventListener('touchstart', (e) => outsideClick(modalRef, modalToggle, e));
    return () => {
      modalContainer.removeChild(wrapper);
      document.removeEventListener('keydown', (e) => handleEscape(modalToggle, e));
      document.removeEventListener('mousedown', (e) => outsideClick(modalRef, modalToggle, e));
      document.addEventListener('touchstart', (e) => outsideClick(modalRef, modalToggle, e));
    };
  }, []);

  return createPortal(
    <Styled.ModalBackground>
      <Styled.ModalContent ref={modalRef} isAdjustedToParent={isAdjustedToParent}>
        {children}
      </Styled.ModalContent>
    </Styled.ModalBackground>,
    wrapper
  );
};

export default ModalTemplate;
