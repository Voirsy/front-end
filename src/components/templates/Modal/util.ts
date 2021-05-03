import { ToggleModalFunc } from '../../../types/global';

export const outsideClick = (
  ref: React.RefObject<HTMLDivElement>,
  modalToggle: ToggleModalFunc,
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

export const handleEscape = (modalToggle: ToggleModalFunc, e: KeyboardEvent): void => {
  if (e.key === 'Escape') modalToggle(false);
};
