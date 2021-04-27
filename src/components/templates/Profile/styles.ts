import styled from 'styled-components';

const Wrapper = styled.div`
  height: calc(100vh - ${({ theme }) => theme.sizes.header.mobileHeight}rem);
  display: grid;

  @media (min-width: ${({ theme }) => theme.breakpoints.tabletPortrait}) {
    height: calc(100vh - ${({ theme }) => theme.sizes.header.desktopHeight}rem);
    grid-template-columns: 300px 1fr;
  }
`;

const Navigation = styled.nav`
  height: 100%;
  justify-self: center;
  padding-top: 5rem;
`;

const Styled = { Wrapper, Navigation };

export default Styled;
