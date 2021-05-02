import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiAlignJustify } from 'react-icons/fi';
import { useAuthContextState } from '../../../context/authContext';
import useModal from '../../../hooks/useModal';
import Header from '../../atoms/Header';
import IconButton from '../../atoms/IconButton';
import MainTitle from '../../atoms/MainTitle';
import ProfileMenu from '../../molecules/ProfileMenu';
import Styled from './styles';
import { HeaderTemplateTypes } from './types';
import Button from '../../atoms/Button';

const menuPaths = ['/profile', '/saloons'];

const HeaderTemplate = ({ children }: HeaderTemplateTypes) => {
  const { isAuthenticated, userInfo } = useAuthContextState();
  const { isModalOpen, modalToggle } = useModal();
  const [menuOptions, setMenuOptions] = useState({
    hasMenu: false,
    route: '',
  });
  const { pathname } = useLocation();

  useEffect(() => {
    menuPaths.forEach((el) => {
      if (pathname.includes(el)) setMenuOptions({ hasMenu: true, route: el });
    });
    if (isModalOpen) modalToggle(false);
  }, [pathname]);

  return (
    <>
      <Header>
        <Styled.ContentWrapper>
          {menuOptions.hasMenu ? (
            <Styled.MenuIconWrapper>
              <IconButton onClick={() => modalToggle(true)} aria-label="Open menu" color="black">
                <FiAlignJustify size="70%" />
              </IconButton>
            </Styled.MenuIconWrapper>
          ) : null}
          <MainTitle>Voirsy</MainTitle>
        </Styled.ContentWrapper>
        <Styled.UserInfoContentWrapper>
          {isAuthenticated() ? (
            <>
              <Styled.UserInfo>{userInfo.name}</Styled.UserInfo>
              <Styled.AvatarWrapper>
                <IconButton
                  isAvatar
                  aria-label="Open menu"
                  avatarUrl={userInfo.avatarUrl ?? undefined}
                />
              </Styled.AvatarWrapper>
            </>
          ) : (
            <Styled.ButtonWrapper>
              <Button
                variant="contained"
                borderRadius={20}
                as={Link}
                to="/signin"
                className="custom"
              >
                Sign in
              </Button>
            </Styled.ButtonWrapper>
          )}
        </Styled.UserInfoContentWrapper>
      </Header>
      {menuOptions.hasMenu && isModalOpen ? <ProfileMenu modalToggle={modalToggle} /> : null}
      {children}
    </>
  );
};

export default HeaderTemplate;
