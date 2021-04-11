import styled, { css } from 'styled-components';

type ButtonProps = {
  readonly isPrimary: boolean;
  readonly isWarning: boolean;
  readonly size: 'verysmall' | 'small' | 'medium' | 'large';
  readonly borderRadius: number;
  readonly border: boolean;
  readonly isPrimaryColor: boolean;
  readonly isBold: boolean;
  readonly buttonWidth: number;
  readonly isLoading: boolean;
  readonly isSocial: boolean;
};

const Button = styled.button<ButtonProps>`
  overflow: hidden;
  cursor: pointer;
  border-radius: ${({ borderRadius }) => `${borderRadius}rem`};
  border-style: solid;
  border-width: ${({ border }) => (border ? '1px' : '0px')};
  font-weight: ${({ isBold }) => (isBold ? '700' : '500')};
  outline: none;
  transition: background-color 150ms ease-in-out;

  ${({ size }) => {
    if (size === 'verysmall')
      return css`
        height: 2.2rem;
        width: 7rem;
        font-size: 1rem;

        @media (min-width: ${({ theme }) => theme.breakpoints.tabletPortrait}) {
          height: 2.8rem;
          width: 9rem;
          font-size: 1.1rem;
        }
      `;
    if (size === 'small')
      return css`
        height: 2.8rem;
        width: 9rem;
        font-size: 1.1rem;

        @media (min-width: ${({ theme }) => theme.breakpoints.tabletPortrait}) {
          height: 3.5rem;
          width: 12rem;
          font-size: 1.3rem;
        }
      `;
    if (size === 'medium')
      return css`
        height: 3.5rem;
        width: 20rem;
        font-size: 1.2rem;

        @media (min-width: ${({ theme }) => theme.breakpoints.tabletPortrait}) {
          height: 4rem;
          width: 25rem;
          font-size: 1.3rem;
        }
      `;
    return css`
      height: 4rem;
      width: 17rem;
      font-size: 1.4rem;

      @media (min-width: ${({ theme }) => theme.breakpoints.tabletPortrait}) {
        height: 4.5rem;
        width: 20rem;
        font-size: 1.5rem;
      }
    `;
  }}
  ${({ theme, isPrimary, isPrimaryColor }) => {
    if (!isPrimary)
      return css`
        border-color: ${isPrimaryColor ? theme.colors.purple.normal : theme.colors.grayColors.dark};
        background-color: transparent;
        color: ${isPrimaryColor ? theme.colors.purple.normal : theme.colors.grayColors.dark};

        &:hover,
        &:focus {
          background-color: ${isPrimaryColor
            ? theme.colors.purple._020
            : theme.colors.grayColors.dark020};
        }
      `;
    return css`
      border: ${theme.colors.purple.normal};
      background-color: ${theme.colors.purple.normal};
      color: ${theme.colors.white};

      &:hover,
      &:focus {
        background-color: ${theme.colors.purple._090};
      }
    `;
  }};

  ${({ theme, isWarning, isPrimary }) =>
    isWarning &&
    css`
      background-color: ${isPrimary ? theme.colors.red.normal : 'transparent'};
      border-color: ${theme.colors.red.normal};
      color: ${isPrimary ? theme.colors.white : theme.colors.red.normal};

      &:hover,
      &:focus {
        background-color: ${isPrimary ? theme.colors.red._080 : theme.colors.red._010};
      }
    `};

  ${({ theme, isLoading }) =>
    isLoading &&
    css`
      cursor: not-allowed;
      background-color: ${theme.colors.grayColors.dark035};
      border-color: ${theme.colors.grayColors.dark035};

      & > span {
        display: flex;
        justify-content: center;
      }

      &:hover,
      &:focus {
        background-color: ${theme.colors.grayColors.dark035};
        border-color: ${theme.colors.grayColors.dark035};
      }
    `};

  ${({ theme, isSocial }) =>
    isSocial &&
    css`
      background-color: ${theme.colors.social};
      border-color: ${theme.colors.social};
      position: relative;

      & > svg {
        background: ${theme.colors.white};
        height: 2.6rem;
        width: 2.6rem;
        position: absolute;
        top: 7px;
        left: 7px;
        border-radius: 50%;
      }

      &:hover,
      &:focus {
        background-color: ${theme.colors.social};
        border-color: ${theme.colors.social};
      }
    `};

  width: ${({ buttonWidth }) => buttonWidth !== 0 && `${buttonWidth}px`};
`;

const Styled = {
  Button,
};

export default Styled;
