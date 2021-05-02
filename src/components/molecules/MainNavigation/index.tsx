import { FiUser, FiHeart, FiCalendar, FiLogOut } from 'react-icons/fi';
import Styled from './styles';
import Modal from '../../templates/Modal/index';
import theme from '../../../theme/theme';
import useWindowSize from '../../../hooks/useWindowSize';

const data = [
  {
    label: 'Profile',
    icon: <FiUser />,
    to: '/profile',
  },
  {
    label: 'Favorites',
    icon: <FiHeart />,
    to: '/favorites',
  },
  {
    label: 'Schedule',
    icon: <FiCalendar />,
    to: '/schedule',
  },
  {
    label: 'Sign out',
    icon: <FiLogOut />,
    to: '/home',
  },
];

const MainNavigation = ({ modalToggle }: { modalToggle: (val: boolean) => void }) => {
  const { windowSize } = useWindowSize();

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
            <Styled.MenuPosition key={el.label}>
              <Styled.Link activeClassName="selected" to={el.to}>
                {el.icon}
                <span>{el.label}</span>
              </Styled.Link>
            </Styled.MenuPosition>
          ))}
        </ul>
      </Styled.Wrapper>
    </Modal>
  );
};

export default MainNavigation;
