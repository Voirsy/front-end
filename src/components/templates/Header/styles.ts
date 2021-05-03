import styled from 'styled-components';

const ContentWrapper = styled.div`
  height: 100%;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr auto;
  grid-gap: 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.tabletPortrait}) {
    grid-template-columns: 1fr;
  }
`;

const UserInfoContentWrapper = styled(ContentWrapper)`
  grid-template-columns: 1fr;
  grid-gap: 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.tabletPortrait}) {
    grid-template-columns: max-content 1fr;
  }
`;

const MenuIconWrapper = styled.div`
  height: ${({ theme }) => theme.sizes.header.mobileHeight - 1}rem;
  width: ${({ theme }) => theme.sizes.header.mobileHeight - 1}rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.tabletPortrait}) {
    display: none;
    height: ${({ theme }) => theme.sizes.header.desktopHeight - 1.5}rem;
    width: ${({ theme }) => theme.sizes.header.desktopHeight - 1.5}rem;
  }
`;

const AvatarWrapper = styled(MenuIconWrapper)`
  @media (min-width: ${({ theme }) => theme.breakpoints.tabletPortrait}) {
    margin-left: 1rem;
    display: block;
  }
`;

const UserInfo = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.userNameGray.normal};
  font-family: ${({ theme }) => theme.fonts.montserrat};
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.tabletPortrait}) {
    display: block;
  }
`;

const ButtonWrapper = styled.div`
  width: 9rem;
  height: 70%;

  @media (min-width: ${({ theme }) => theme.breakpoints.tabletPortrait}) {
    width: 11rem;
  }

  & .custom {
    font-size: 1.4rem;

    @media (min-width: ${({ theme }) => theme.breakpoints.tabletPortrait}) {
      font-size: 1.6rem;
    }
  }
`;

const Styled = {
  ContentWrapper,
  MenuIconWrapper,
  UserInfoContentWrapper,
  AvatarWrapper,
  UserInfo,
  ButtonWrapper,
};

export default Styled;
