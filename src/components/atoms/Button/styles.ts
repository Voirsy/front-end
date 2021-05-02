import hexToRgba from 'hex-rgba';
import styled, { css } from 'styled-components';
import { Colors } from '../../../types/global';
import { StyledButtonProps } from './types';

const Button = styled.button.attrs<StyledButtonProps>(({ $height, type }) => ({
  $updatedHeight: $height ? `${$height}rem` : '100%',
  type: type || 'button',
}))<StyledButtonProps & { $updatedHeight?: string }>`
  overflow: hidden;
  cursor: pointer;
  border-style: solid;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 150ms ease-in-out;

  ${({ theme, color, variant, $width, $updatedHeight, $borderRadius, fontSize }) => css`
    background-color: ${variant === 'contained'
      ? theme.colors[Colors[color]].normal
      : 'transparent'};
    font-size: ${$updatedHeight?.includes('%') ? '1.8rem' : `calc(${$updatedHeight} * 0.4)`};
    border-radius: ${$borderRadius ? `${$borderRadius}` : '1'}rem;
    border-width: ${variant === 'default' ? 0 : 1}px;
    border-color: ${theme.colors[Colors[color]].normal};
    color: ${variant === 'contained' ? theme.colors.white : theme.colors[Colors[color]].normal};
    width: ${$width ? `${$width}rem` : '100%'};
    height: ${$updatedHeight};

    ${fontSize &&
    css`
      font-size: ${fontSize}rem;
    `}

    :hover:not(:disabled),
    :focus:not(:disabled) {
      background-color: ${variant === 'contained'
        ? hexToRgba(theme.colors[Colors[color]].normal, 90)
        : hexToRgba(theme.colors[Colors[color]].normal, 20)};
    }
  `};

  :disabled {
    cursor: no-drop;
  }

  ${({ theme, isSocial, $updatedHeight }) =>
    isSocial &&
    css`
      position: relative;

      > svg {
        width: calc(${$updatedHeight!} * 0.7);
        height: calc(${$updatedHeight!} * 0.7);
        background: ${theme.colors.white};
        transform: translate(20%, -50%);
        position: absolute;
        top: 50%;
        left: 0;
        border-radius: 50%;
      }
    `}
`;

const Styled = {
  Button,
};

export default Styled;
