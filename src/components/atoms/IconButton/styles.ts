import hexToRgba from 'hex-rgba';
import styled, { css } from 'styled-components';
import { Colors } from '../../../types/global';
import { StyledIconButtonProps } from './types';

const Button = styled.button.attrs<StyledIconButtonProps>(({ type }) => ({
  type: type || 'button',
}))<StyledIconButtonProps>`
  border-radius: 50%;
  cursor: pointer;
  border-style: solid;
  transition: background-color 150ms ease-in-out;
  outline: none;
  display: grid;
  place-items: center;

  ${({ theme, $size, color, variant, iconWidth = 2, isAvatar, avatarUrl, borderRadius }) => css`
    background-color: ${
      variant === 'contained' ? theme.colors[Colors[color]].normal : 'transparent'
    };
    border-radius: ${borderRadius ? `${borderRadius}rem` : '50%'};
    border-width: ${variant === 'default' ? 0 : 2}px;
    border-color: ${theme.colors[Colors[color]].normal};
    width: ${$size ? `${$size}rem` : '100%'};
    height: ${$size ? `${$size}rem` : '100%'};

    :hover:not(:disabled),
    :focus:not(:disabled) {
      background-color: ${
        variant === 'contained'
          ? hexToRgba(theme.colors[Colors[color]].normal, 90)
          : hexToRgba(theme.colors[Colors[color]].normal, 20)
      };
    }

    & svg {
      stroke-width: ${iconWidth}px;
    }

    ${
      isAvatar &&
      avatarUrl &&
      css`
        background: url(${avatarUrl}) center no-repeat;
        background-size: cover;
      `
    }};
  `}
`;

const Styled = { Button };

export default Styled;
