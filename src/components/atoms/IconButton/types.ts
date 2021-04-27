import { ButtonType, Color } from '../../../types/global';

export interface SharedProps {
  iconWidth?: number;
  isAvatar?: boolean;
  avatarUrl?: string;
  color: Color;
  borderRadius: number;
  variant: 'default' | 'outlined' | 'contained';
}

export interface IconButtonProps extends SharedProps {
  children: JSX.Element;
  type?: ButtonType;
  size: number;
  'aria-label': string;
  onClick?: () => void;
}

export interface StyledIconButtonProps extends SharedProps {
  $size: number;
}
