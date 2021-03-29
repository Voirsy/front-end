import styled, { css } from 'styled-components';

interface ButtonProps {
  readonly isPrimary: boolean;
  readonly isDanger: boolean;
}

const Button = styled.button<ButtonProps>`
  width: 15rem;
  height: 4rem;
  border-radius: 1rem;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.grayColors.dark};
  border: 1px solid ${({ theme }) => theme.colors.grayColors.dark};
  background: transparent;
  cursor: pointer;

  ${({ theme, isPrimary }) =>
    isPrimary &&
    css`
      border: 0;
      background-color: ${() => theme.colors.purple.normal};
      color: ${() => theme.colors.white};
    `};

  ${({ theme, isDanger }) =>
    isDanger &&
    css`
      border: 0;
      background-color: ${() => theme.colors.red};
      color: ${() => theme.colors.white};
    `};
`;

export const Styled = {
  Button,
};
