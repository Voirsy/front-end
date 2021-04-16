import React from 'react';
import { FiUser } from 'react-icons/fi';
import { IconButtonProps } from './types';
import Styled from './styles';

const iconDefaultSize = '80%';

const IconButton = ({
  isPrimary = true,
  buttonSize = 5,
  borderWidth = 2,
  type = 'button',
  iconWidth = 2,
  primaryColor,
  icon = <FiUser size="65%" />,
  ariaLabel,
  isAvatar = false,
  avatarUrl,
}: IconButtonProps) => (
  <Styled.Button
    isPrimary={isPrimary}
    buttonSize={buttonSize}
    borderWidth={borderWidth}
    iconWidth={iconWidth}
    primaryColor={primaryColor}
    iconColor={icon.props.color}
    isAvatar={isAvatar}
    avatarUrl={avatarUrl}
    aria-label={ariaLabel}
    type={type}
  >
    {((isAvatar && !avatarUrl) || !isAvatar) &&
      React.cloneElement(icon, {
        size: icon.props.size ? icon.props.size : iconDefaultSize,
        ...icon.props,
      })}
  </Styled.Button>
);
export default IconButton;
