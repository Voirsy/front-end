import styled from 'styled-components';

const ContentWrapper = styled.div`
  height: 100%;
  display: grid;
  align-items: center;
  grid-template-columns: ${({ theme }) => theme.sizes.header.desktopHeight}rem 1fr;

  @media (min-width: ${({ theme }) => theme.breakpoints.tabletPortrait}) {
    grid-template-columns: 1fr;
  }
`;

const MenuIconWrapper = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.tabletPortrait}) {
    display: none;
  }
`;

const Styled = {
  ContentWrapper,
  MenuIconWrapper,
};

export default Styled;
