import { ModalToggle } from './types';

export const outsideClick = (
  ref: React.RefObject<HTMLDivElement>,
  modalToggle: ModalToggle,
  e: MouseEvent | TouchEvent,
  ariaIdentifier: string
) => {
  if (
    !ref.current ||
    ref.current.contains(e.target as Node) ||
    (e.target as HTMLButtonElement).getAttribute('aria-label') === ariaIdentifier
  )
    return;
  modalToggle(false);
};

export const handleEscape = (modalToggle: ModalToggle, e: KeyboardEvent): void => {
  if (e.key === 'Escape') modalToggle(false);
};
