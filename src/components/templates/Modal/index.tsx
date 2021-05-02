import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import Styled from './styles';
import { ModalTemplateProps } from './types';
import { handleEscape, outsideClick } from './util';

const modalContainer = document.getElementById('modal-container') as HTMLDivElement;
const wrapper = document.createElement('div');

const ModalTemplate = ({
  children,
  modalToggle,
  type = 'mixed',
  isBackground = true,
  position = {},
  borderRadius = 0.5,
  ariaIdentifier = '',
  ...props
}: ModalTemplateProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    modalContainer.appendChild(wrapper);
    const keydown = (e: KeyboardEvent) => handleEscape(modalToggle, e);
    const mousedown = (e: MouseEvent) => outsideClick(modalRef, modalToggle, e, ariaIdentifier);
    const touchstart = (e: TouchEvent) => outsideClick(modalRef, modalToggle, e, ariaIdentifier);

    document.addEventListener('keydown', keydown);
    document.addEventListener('mousedown', mousedown);
    document.addEventListener('touchstart', touchstart);
    return () => {
      modalContainer.removeChild(wrapper);
      document.removeEventListener('keydown', keydown);
      document.removeEventListener('mousedown', mousedown);
      document.removeEventListener('touchstart', touchstart);
    };
  }, []);

  return createPortal(
    <Styled.ModalContainer
      role="dialog"
      aria-modal
      isBackground={isBackground}
      $type={type}
      position={position}
      borderRadius={borderRadius}
      {...props.backgroundAnimation}
    >
      <Styled.ModalContent ref={modalRef} $type={type} {...props.contentAnimation}>
        {children}
      </Styled.ModalContent>
    </Styled.ModalContainer>,
    wrapper
  );
};

export default ModalTemplate;
