import { ButtonType, ButtonVariant, Color } from '../../../types/global';

export interface SharedProps {
  iconWidth?: number;
  isAvatar?: boolean;
  avatarUrl?: string;
  borderRadius?: number;
  variant?: ButtonVariant;
}

export interface IconButtonProps extends SharedProps {
  children?: JSX.Element;
  type?: ButtonType;
  size?: number;
  color?: Color;
  borderRadius?: number;
  'aria-label': string;
  onClick?: () => void;
}

export interface StyledIconButtonProps extends SharedProps {
  $size?: number;
  $color: Color;
  $borderRadius?: number;
}
