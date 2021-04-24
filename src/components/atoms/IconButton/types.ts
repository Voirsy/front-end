import { ButtonType } from '../../../types/typeAliases';

export interface SharedProps {
  buttonSize?: number;
  iconWidth?: number;
  borderWidth?: number;
  isPrimary?: boolean;
  primaryColor?: string;
  isAvatar?: boolean;
  avatarUrl?: string;
  isAdjustedToParent?: boolean;
}

export interface IconButtonProps extends SharedProps {
  icon: JSX.Element;
  type?: ButtonType;
  onClick?: () => void;
}

export interface StyledIconButtonProps extends SharedProps {
  iconColor?: string;
}
