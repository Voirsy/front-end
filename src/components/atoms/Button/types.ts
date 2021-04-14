export type Props = {
  label: string;
  ariaLabel?: string;
  borderRadius?: number;
  type?: 'button' | 'submit' | 'reset';
  size?: 'verysmall' | 'small' | 'medium' | 'large';
  isPrimary?: boolean;
  isWarning?: boolean;
  border?: boolean;
  isPrimaryColor?: boolean;
  isBold?: boolean;
  buttonWidth?: number;
  isLoading?: boolean;
  isSocial?: boolean;
  onClick: () => void;
};
