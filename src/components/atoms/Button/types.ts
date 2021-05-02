import React from 'react';
import { ButtonType, ButtonVariant, Color } from '../../../types/global';

export interface SharedProps {
  $borderRadius?: number;
  isLoading?: boolean;
  isSocial?: boolean;
  fontSize?: number;
  iconColor?: Color;
  variant?: ButtonVariant;
  as?: React.ElementType;
  to?: string;
}

export interface StyledButtonProps extends SharedProps {
  $width?: number;
  $height?: number;
  color: Color;
}

export interface ButtonProps extends SharedProps {
  borderRadius?: number;
  className: string;
  children: string;
  type?: ButtonType;
  width?: number;
  height?: number;
  color?: Color;
  'aria-label'?: string;
  onClick?: () => void;
}
