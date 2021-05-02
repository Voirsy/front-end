export type ModalToggle = (val: boolean) => void;

export interface StyledModalContentProps {
  $type?: 'centered' | 'mixed' | 'adjusted' | 'positioned';
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
  modalToggle: ModalToggle;
  ariaIdentifier?: string;
  type?: 'centered' | 'mixed' | 'adjusted' | 'positioned';
}
