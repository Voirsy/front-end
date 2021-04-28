import styled, { css } from 'styled-components';

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  display: grid;
  place-items: center;
`;

const ModalContent = styled.div<{ width?: string; height?: string }>`
  background-color: ${({ theme }) => theme.colors.white};

  ${({ height, width }) => css`
    height: ${height || 'fit-content'};
    width: ${width || 'fit-content'};
  `}
`;

const Styled = { ModalBackground, ModalContent };

export default Styled;
