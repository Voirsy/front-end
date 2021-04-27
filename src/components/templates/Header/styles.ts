import styled from 'styled-components';

const Header = styled.header`
  height: ${({ theme }) => theme.sizes.header.mobileHeight}rem;
  display: flex;
  justify-content: center;
  padding: 0 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.tabletPortrait}) {
    height: ${({ theme }) => theme.sizes.header.desktopHeight}rem;
    padding: 0 2rem;
  }
`;

const HeaderContainer = styled.div`
  width: 100%;
  max-width: 120rem;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.montserrat};
  font-size: 2.2rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.tabletPortrait}) {
    font-size: 2.8rem;
  }
`;

const ActionWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const Styled = {
  Header,
  HeaderContainer,
  Title,
  ActionWrapper,
};

export default Styled;
