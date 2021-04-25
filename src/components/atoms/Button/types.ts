import { ButtonType, Size } from '../../../types/typeAliases';

export interface StyledButtonProps {
  isPrimary?: boolean;
  isWarning?: boolean;
  size?: Size;
  borderRadius?: number;
  borderWidth?: number;
  isPrimaryColor?: boolean;
  isBold?: boolean;
  buttonWidth?: number;
  isLoading?: boolean;
  isSocial?: boolean;
  fontSize?: number;
}

export interface ButtonProps extends StyledButtonProps {
  label: string;
  type?: ButtonType;
  'aria-label'?: string;
  onClick: () => void;
}
