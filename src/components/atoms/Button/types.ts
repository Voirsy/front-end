import React from 'react';
import { ButtonType, ButtonVariant, Color } from '../../../types/global';

export interface SharedProps {
  isLoading?: boolean;
  isSocial?: boolean;
  iconColor?: Color;
  variant?: ButtonVariant;
  as?: React.ElementType;
  to?: string;
}

export interface StyledButtonProps extends SharedProps {
  $width?: number;
  $height?: number;
  $color: Color;
  $fontSize?: number;
  $borderRadius?: number;
}

export interface ButtonProps extends SharedProps {
  borderRadius?: number;
  className: string;
  children: string;
  type?: ButtonType;
  width?: number;
  height?: number;
  color?: Color;
  fontSize?: number;
  'aria-label'?: string;
  onClick?: () => void;
}
