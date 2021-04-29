import React from 'react';
import { FiUser } from 'react-icons/fi';
import { IconButtonProps } from './types';
import Styled from './styles';
import { Colors } from '../../../types/global';
import theme from '../../../theme/theme';

const iconDefaultSize = '80%';

const IconButton = ({
  children = <FiUser size="65%" />,
  isAvatar = false,
  avatarUrl,
  color = 'primary',
  variant = 'default',
  size,
  ...rest
}: IconButtonProps) => (
  <Styled.Button
    isAvatar={isAvatar}
    avatarUrl={avatarUrl}
    color={color}
    variant={variant}
    $size={size}
    {...rest}
  >
    {((isAvatar && !avatarUrl) || !isAvatar) &&
      React.cloneElement(children, {
        size: children.props.size ? children.props.size : iconDefaultSize,
        color:
          children.props.color || variant === 'contained'
            ? theme.colors.white
            : theme.colors[Colors[color]].normal,
        ...children.props,
      })}
  </Styled.Button>
);
export default IconButton;
