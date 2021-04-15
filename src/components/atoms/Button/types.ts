export type StyledButtonProps = {
  isPrimary?: boolean;
  isWarning?: boolean;
  size?: 'verysmall' | 'small' | 'medium' | 'large';
  borderRadius?: number;
  border?: boolean;
  isPrimaryColor?: boolean;
  isBold?: boolean;
  buttonWidth?: number;
  isLoading?: boolean;
  isSocial?: boolean;
  fontSize?: number;
};

export type Props = StyledButtonProps & {
  label: string;
  ariaLabel?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick: () => void;
};
