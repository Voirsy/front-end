import styled from 'styled-components';

const Wrapper = styled.div`
  height: calc(100vh - ${({ theme }) => theme.sizes.header.mobileHeight}rem);
  display: grid;

  @media (min-width: ${({ theme }) => theme.breakpoints.tabletPortrait}) {
    height: calc(100vh - ${({ theme }) => theme.sizes.header.desktopHeight}rem);
    grid-template-columns: 300px 1fr;
  }
`;

const NavigationContainer = styled.div`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.tabletPortrait}) {
    display: flex;
    justify-content: center;
  }
`;

const Styled = { Wrapper, NavigationContainer };

export default Styled;
