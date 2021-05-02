import { ModalType, ToggleModalFunc } from '../../../types/global';

export interface StyledModalContentProps {
  $type?: ModalType;
}

export interface StyledModalContainerProps extends StyledModalContentProps {
  isBackground?: boolean;
  borderRadius?: number;
  position?: {
    bottom?: number;
    left?: number;
    top?: number;
    right?: number;
  };
}

export interface ModalTemplateProps extends StyledModalContainerProps {
  children: React.ReactNode;
  modalToggle: ToggleModalFunc;
  ariaIdentifier?: string;
  type?: ModalType;
}
