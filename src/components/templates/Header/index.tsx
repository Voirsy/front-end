import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiAlignJustify } from 'react-icons/fi';
import { AnimatePresence } from 'framer-motion';
import useModal from '../../../hooks/useModal';
import Header from '../../atoms/Header';
import IconButton from '../../atoms/IconButton';
import MainTitle from '../../atoms/MainTitle';
import ProfileMenu from '../../molecules/ProfileMenu';
import Styled from './styles';
import { HeaderTemplateTypes } from './types';
import MainNavigation from '../../molecules/MainNavigation';
import UserInfo from './userInfo';

const menuPaths = ['/profile', '/saloons'];

const initialState = { hasMenu: false, route: '' };

const HeaderTemplate = ({ children }: HeaderTemplateTypes) => {
  const viewNavigation = useModal();
  const mainNavigation = useModal();
  const [menuOptions, setMenuOptions] = useState(initialState);
  const { pathname } = useLocation();

  useEffect(() => {
    const routeIndex = menuPaths.findIndex((el) => pathname.includes(el));
    if (routeIndex !== -1) {
      setMenuOptions({ hasMenu: true, route: menuPaths[routeIndex] });
    } else {
      setMenuOptions(initialState);
    }
    if (viewNavigation.isModalOpen) viewNavigation.modalToggle(false);
    if (mainNavigation.isModalOpen) mainNavigation.modalToggle(false);
  }, [pathname]);

  return (
    <>
      <Header>
        <Styled.ContentWrapper>
          {menuOptions.hasMenu ? (
            <Styled.MenuIconWrapper>
              <IconButton
                onClick={() => viewNavigation.modalToggle(true)}
                aria-label="Open profile navigation"
                color="black"
              >
                <FiAlignJustify size="70%" />
              </IconButton>
            </Styled.MenuIconWrapper>
          ) : null}
          <MainTitle>
            <Link to="/">Voirsy</Link>
          </MainTitle>
        </Styled.ContentWrapper>
        <UserInfo
          modalToggle={mainNavigation.modalToggle}
          isModalOpen={mainNavigation.isModalOpen}
        />
      </Header>
      <AnimatePresence initial={false}>
        {menuOptions.hasMenu && viewNavigation.isModalOpen ? (
          <ProfileMenu modalToggle={viewNavigation.modalToggle} />
        ) : null}
      </AnimatePresence>
      {mainNavigation.isModalOpen && <MainNavigation modalToggle={mainNavigation.modalToggle} />}
      {children}
    </>
  );
};

export default HeaderTemplate;
