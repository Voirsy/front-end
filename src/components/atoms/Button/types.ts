export type Props = {
  label: string;
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
  // eslint-disable-next-line no-unused-vars
  onClick: (...args: any[]) => any;
};