export type Props = {
  icon: JSX.Element;
  ariaLabel: string;
  buttonSize?: number;
  iconWidth?: number;
  primaryColor?: string;
  type?: 'button' | 'submit' | 'reset';
  isBorder?: boolean;
  isPrimary?: boolean;
};
