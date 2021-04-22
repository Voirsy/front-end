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

const Styled = { Wrapper };

export default Styled;
