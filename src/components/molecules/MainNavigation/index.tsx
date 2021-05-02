import { FiUser, FiHeart, FiCalendar, FiLogOut, FiBox } from 'react-icons/fi';
import React from 'react';
import Styled from './styles';
import Modal from '../../templates/Modal/index';
import theme from '../../../theme/theme';
import useWindowSize from '../../../hooks/useWindowSize';
import { useAuthContextState } from '../../../context/authContext';

const data = [
  {
    label: 'Profile',
    icon: <FiUser />,
    to: '/profile',
    role: ['normal', 'business'],
  },
  {
    label: 'Favorites',
    icon: <FiHeart />,
    to: '/favorites',
    role: ['normal'],
  },
  {
    label: 'Salons',
    icon: <FiBox />,
    to: '/salons',
    role: ['business'],
  },
  {
    label: 'Schedule',
    icon: <FiCalendar />,
    to: '/schedule',
    role: ['normal', 'business'],
  },
  {
    label: 'Sign out',
    icon: <FiLogOut />,
    to: '/home',
    role: ['normal', 'business'],
  },
];

const MainNavigation = ({ modalToggle }: { modalToggle: (val: boolean) => void }) => {
  const { windowSize } = useWindowSize();
  const {
    userInfo: { type: userType },
  } = useAuthContextState();

  const positionTop =
    windowSize.width < parseInt(theme.breakpoints.tabletPortrait.replace('px', ''), 10)
      ? theme.sizes.header.mobileHeight
      : theme.sizes.header.desktopHeight;

  return (
    <Modal
      type="positioned"
      modalToggle={modalToggle}
      position={{ top: positionTop, right: 1 }}
      borderRadius={2}
      ariaIdentifier="Open main navigation"
      backgroundAnimation={{
        initial: { y: 30, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { ease: 'easeOut', duration: 0.15 },
      }}
    >
      <Styled.Wrapper>
        <ul>
          {data.map((el) => (
            <React.Fragment key={el.label}>
              {el.role.includes(userType || '') ? (
                <Styled.MenuPosition>
                  <Styled.Link activeClassName="selected" to={el.to}>
                    {el.icon}
                    <span>{el.label}</span>
                  </Styled.Link>
                </Styled.MenuPosition>
              ) : null}
            </React.Fragment>
          ))}
        </ul>
      </Styled.Wrapper>
    </Modal>
  );
};

export default MainNavigation;
