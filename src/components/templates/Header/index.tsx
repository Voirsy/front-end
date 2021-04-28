import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useAuthContextState } from '../../../context/authContext';
import useModal from '../../../hooks/useModal';
import Header from '../../atoms/Header';
import MainTitle from '../../atoms/MainTitle';
import ProfileMenu from '../../molecules/ProfileMenu';
import Styled from './styles';
import { HeaderTemplateTypes } from './types';

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
              <button type="button" onClick={() => modalToggle(true)}>
                Menu
              </button>
            </Styled.MenuIconWrapper>
          ) : null}
          <MainTitle>Voirsy</MainTitle>
        </Styled.ContentWrapper>
        <Styled.ContentWrapper>
          {isAuthenticated() ? <p>{userInfo.name}</p> : <p>D U P A</p>}
        </Styled.ContentWrapper>
      </Header>
      {menuOptions.hasMenu && isModalOpen ? <ProfileMenu modalToggle={modalToggle} /> : null}
      {children}
    </>
  );
};

export default HeaderTemplate;
