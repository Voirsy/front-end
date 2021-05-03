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

const ViewWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 40rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ViewTitle = styled.h2`
  font-size: 2.4rem;
  text-align: center;
  margin: 3rem 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.tabletPortrait}) {
    font-size: 3rem;
  }
`;

const Styled = { Wrapper, NavigationContainer, ViewTitle, ViewWrapper, ContentWrapper };

export default Styled;
