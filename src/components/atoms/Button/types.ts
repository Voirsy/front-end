import { ButtonType, Color } from '../../../types/global';

export interface SharedProps {
  borderRadius?: number;
  isLoading?: boolean;
  isSocial?: boolean;
  fontSize?: number;
  color: Color;
  iconColor?: Color;
  variant: 'default' | 'outlined' | 'contained';
}

export interface StyledButtonProps extends SharedProps {
  $width?: number;
  $height?: number;
}

export interface ButtonProps extends SharedProps {
  children: string;
  type?: ButtonType;
  width?: number;
  height?: number;
  'aria-label'?: string;
  onClick?: () => void;
}
