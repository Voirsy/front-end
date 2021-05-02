import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';
import { StyledModalContentProps, StyledModalContainerProps } from './types';

const ModalContainer = styled(motion.div)<StyledModalContainerProps>`
  position: fixed;
  z-index: 20;
  background-color: green;
  display: grid;
  place-items: center;
  backdrop-filter: blur(3px);
  overflow: hidden;

  ${({ $type, position, isBackground, theme, borderRadius }) => css`
    height: ${isBackground && $type !== 'positioned' ? '100vh' : 'fit-content'};
    width: ${isBackground && $type !== 'positioned' ? '100%' : 'fit-content'};
    background-color: ${theme.colors.black._010};
    top: ${isBackground ? '0' : '50%'};
    left: ${isBackground ? '0' : '50%'};
    border-radius: ${borderRadius}rem;

    ${!isBackground &&
    $type !== 'positioned' &&
    css`
      display: block;
      transform: translate(-50%, -50%);
    `}

    ${($type === 'positioned' || $type === 'centered') &&
    css`
      box-shadow: 2px 2px 10px 0px ${theme.colors.black._010};
    `}

    @media (min-width: ${theme.breakpoints.tabletPortrait}) {
      ${$type === 'mixed' &&
      css`
        box-shadow: 2px 2px 10px 0px ${theme.colors.black._010};
      `}
    }

    ${$type === 'positioned' &&
    css`
      display: block;
      ${position?.top ? `top: ${position.top}rem` : 'top: auto'};
      ${position?.left ? `left: ${position.left}rem` : 'left: auto'};
      ${position?.bottom ? `bottom: ${position.bottom}rem` : 'bottom: auto'};
      ${position?.right ? `right: ${position.right}rem` : 'right: auto'};
    `}
  `};
`;

const ModalContent = styled(motion.div)<StyledModalContentProps>`
  background-color: ${({ theme }) => theme.colors.white};

  ${({ $type, theme }) => css`
    height: ${$type === 'adjusted' || $type === 'mixed' ? '100%' : 'fit-content'};
    width: ${$type === 'adjusted' || $type === 'mixed' ? '100%' : 'fit-content'};

    @media (min-width: ${theme.breakpoints.tabletPortrait}) {
      height: ${$type === 'adjusted' ? '100%' : 'fit-content'};
      width: ${$type === 'adjusted' ? '100%' : 'fit-content'};
    }
  `}
`;

const Styled = { ModalContainer, ModalContent };

export default Styled;
