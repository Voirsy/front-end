import styled, { css } from 'styled-components';
import { StyledIconButtonProps } from './types';

const Button = styled.button.attrs<StyledIconButtonProps>(
  ({ theme, primaryColor, isAvatar, isBorder, isPrimary }) => ({
    primaryColor: primaryColor || theme.colors.purple.normal,
    isBorder: isAvatar ? false : isBorder,
    isPrimary: isAvatar ? true : isPrimary,
  })
)<StyledIconButtonProps>`
  border-style: solid;
  border-width: ${({ isBorder }) => (isBorder ? '2px' : '0px')};
  width: ${({ buttonSize }) => `${buttonSize * 0.75}rem`};
  height: ${({ buttonSize }) => `${buttonSize * 0.75}rem`};
  @media (min-width: ${({ theme }) => theme.breakpoints.tabletPortrait}) {
    width: ${({ buttonSize }) => `${buttonSize}rem`};
    height: ${({ buttonSize }) => `${buttonSize}rem`};
  }
  border-radius: 50%;
  cursor: pointer;
  display: grid;
  place-items: center;

  & svg {
    stroke-width: ${({ iconWidth }) => `${iconWidth}px`};
    vertical-align: middle;
  }

  ${({ theme, isPrimary, primaryColor, iconColor }) => {
    if (!isPrimary) {
      return css`
        background: transparent;
        border-color: ${theme.colors.grayColors.dark};

        & svg {
          stroke: ${iconColor || theme.colors.grayColors.dark};
        }
      `;
    }
    return css`
      background-color: ${primaryColor};
      border-color: ${primaryColor};

      & svg {
        stroke: ${iconColor || theme.colors.white};
      }
    `;
  }}

  ${({ isAvatar, avatarUrl }) =>
    isAvatar &&
    avatarUrl &&
    css`
      background: url(${avatarUrl}) center;
      background-size: cover;
    `}
`;

const Styled = { Button };

export default Styled;
