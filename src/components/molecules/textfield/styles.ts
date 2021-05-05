import styled, { css } from 'styled-components';

const Wrapper = styled.div<{ variant: string }>`
  display: grid;
  width: fit-content;
  position: relative;

  ${({ variant }) =>
    variant === 'animate' &&
    css`
      &:focus-within > label {
        transform: scale(0.8) translateY(-60%);
        z-index: 2;
      }
    `}
`;

const ErrorMessage = styled.p`
  text-align: right;
  margin-top: 0.5rem;
  color: ${({ theme }) => theme.colors.red.normal};
  font-size: 1.2rem;
  height: 1.5rem;
`;

const Styled = { Wrapper, ErrorMessage };

export default Styled;
