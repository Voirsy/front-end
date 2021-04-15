import React from 'react';
import { Props } from './types';
import { IconButtonProps } from './types';
import Styled from './styles';

const iconDefaultSize = '80%';

const IconButton = ({
  isPrimary = true,
  buttonSize = 5,
  isBorder = true,
  type = 'button',
  iconWidth = 2,
  primaryColor,
  icon,
  ariaLabel,
}: Props) => (
}: IconButtonProps) => (
  <Styled.Button
    isPrimary={isPrimary}
    type={type}
    buttonSize={buttonSize}
    isBorder={isBorder}
    iconWidth={iconWidth}
    primaryColor={primaryColor}
    iconColor={icon.props.color}
    aria-label={ariaLabel}
  >
    {React.cloneElement(icon, {
      size: icon.props.size ? icon.props.size : iconDefaultSize,
      ...icon.props,
    })}
  </Styled.Button>
);
export default IconButton;
