import styled, { css, keyframes } from 'styled-components';
import { Colors } from '../../../types/global';
import { SpinnerProps } from './types';

const spinning = keyframes`
    0% {
        stroke-dashoffset: 0;
        stroke-dasharray: 150.6 100.4;
    }
    50% {
        stroke-dasharray: 1 250;
    }
    100% {
        stroke-dashoffset: 502;
        stroke-dasharray: 150.6 100.4;
    }`;

const Wrapper = styled.div<SpinnerProps>`
  ${({ size }) => css`
    width: ${size || '3rem'};
    height: ${size || '3rem'};
  `}

  & .spinner {
    width: 100%;
    height: 100%;
  }

  & .spinner__circle {
    stroke-width: 10px;
    animation: 2s linear ${spinning} infinite;
    stroke: ${({ color = 'primary', theme }) => theme.colors[Colors[color]].normal};
  }
`;

const Styled = { Wrapper };

export default Styled;
