import styled from 'styled-components';

const Header = styled.header`
  height: ${({ theme }) => theme.sizes.header.mobileHeight}rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.tabletPortrait}) {
    height: ${({ theme }) => theme.sizes.header.desktopHeight}rem;
    padding: 0 2rem;
  }
`;

const Styled = { Header };

export default Styled;
