export type ModalToggle = (val: boolean) => void;

export interface StyledModalTemplateProps {
  isAdjustedToParent: boolean;
}

export interface ModalTemplateProps extends StyledModalTemplateProps {
  children: React.ReactNode;
  modalToggle: ModalToggle;
}
