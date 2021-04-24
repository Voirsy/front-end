import { ButtonType, Size } from '../../../types/typeAliases';

export interface StyledButtonProps {
  isPrimary?: boolean;
  isWarning?: boolean;
  size?: Size;
  borderRadius?: number;
  border?: boolean;
  isPrimaryColor?: boolean;
  isBold?: boolean;
  buttonWidth?: number;
  isLoading?: boolean;
  isSocial?: boolean;
  fontSize?: number;
}

export interface ButtonProps extends StyledButtonProps {
  label: string;
  ariaLabel?: string;
  type?: ButtonType;
  onClick: () => void;
}
