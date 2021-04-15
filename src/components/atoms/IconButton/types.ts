export type SharedProps = {
  buttonSize: number;
  iconWidth: number;
  isBorder: boolean;
  isPrimary: boolean;
  primaryColor?: string;
  isAvatar: boolean;
  avatarUrl?: string;
};

export type IconButtonProps = SharedProps & {
  ariaLabel: string;
  icon: JSX.Element;
  type: 'button' | 'submit' | 'reset';
};

export type StyledIconButtonProps = SharedProps & {
  iconColor: string;
};
