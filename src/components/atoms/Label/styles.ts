import styled, { css } from 'styled-components';
import { StyledLabelProps } from './types';

const Label = styled.label.attrs<StyledLabelProps>(({ type, inputHeight }) => ({
  percentages: type === 'textarea' ? 0 : 50,
  positionFromTop: type === 'textarea' ? 1.2 : inputHeight / 2,
}))<StyledLabelProps>`
  font-weight: 400;
  font-family: ${({ theme, variant }) =>
    variant !== 'withDisable' ? theme.fonts.montserrat : theme.fonts.roboto};
  color: ${({ theme }) => theme.colors.grayColors.dark};
  font-size: 1.5rem;
  padding-bottom: 0.5rem;

  &.visually-hidden {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }

  ${({ inputValue, theme, variant, percentages, positionFromTop }) =>
    variant === 'animate' &&
    css`
      cursor: auto;
      padding: 0 0.2rem;
      z-index: 2;
      position: absolute;
      top: 0;
      left: 1.2rem;
      background: ${theme.colors.white};
      transform: scale(${inputValue ? '0.8' : '1'})
        translateY(${inputValue ? '-60%' : `calc(${positionFromTop}rem - ${percentages}%)`});
      transform-origin: 0;
      transition: transform 0.2s ease;
    `}
`;
const Styled = { Label };

export default Styled;
