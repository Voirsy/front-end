import styled, { css } from 'styled-components';
import { StyledModalTemplateProps } from './types';

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  display: grid;
  place-items: center;
  backdrop-filter: blur(3px);
  background-color: ${({ theme }) => theme.colors.black._010};
`;

const ModalContent = styled.div<StyledModalTemplateProps>`
  background-color: ${({ theme }) => theme.colors.white};

  ${({ isAdjustedToParent }) => css`
    height: ${isAdjustedToParent ? '100%' : 'fit-content'};
    width: ${isAdjustedToParent ? '100%' : 'fit-content'};
    border-radius: ${isAdjustedToParent ? '0' : '0.5rem'};
  `}
`;

const Styled = { ModalBackground, ModalContent };

export default Styled;
