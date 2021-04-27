import { FiUser, FiShield, FiTrash2 } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';
import Styled from './styles';

const NavigationData = [
  {
    to: '/profile/account',
    icon: <FiTrash2 />,
    label: 'Account',
  },
  {
    to: '/profile/changepassword',
    icon: <FiUser />,
    label: 'Password',
  },
  {
    to: '/profile/deleteaccount',
    icon: <FiShield />,
    label: 'Delete',
  },
];

const ProfileNavigation = () => {
  const { pathname } = useLocation();

  return (
    <>
      {NavigationData.map(({ icon, label, to }) => (
        <Link to={to} key={to}>
          <Styled.ListItem isActive={pathname === to}>
            <Styled.IconWrapper>{icon}</Styled.IconWrapper>
            <p>{label}</p>
          </Styled.ListItem>
        </Link>
      ))}
    </>
  );
};

export default ProfileNavigation;
