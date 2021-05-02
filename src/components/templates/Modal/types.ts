import { MotionProps } from 'framer-motion/types/motion/types';
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
  backgroundAnimation?: {
    [P in keyof MotionProps]?: MotionProps[P];
  };
  contentAnimation?: {
    [P in keyof MotionProps]?: MotionProps[P];
  };
}

export interface ModalTemplateProps extends StyledModalContainerProps {
  children: React.ReactNode;
  modalToggle: ToggleModalFunc;
  ariaIdentifier?: string;
  type?: ModalType;
}
