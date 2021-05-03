import { FiUser, FiShield, FiTrash2 } from 'react-icons/fi';
import { NavData } from '../components/templates/Profile/types';

const NavigationData: NavData[] = [
  {
    to: '/profile/account',
    icon: <FiTrash2 />,
    label: 'Account',
    viewTitle: 'Edit profile',
  },
  {
    to: '/profile/changepassword',
    icon: <FiUser />,
    label: 'Password',
    viewTitle: 'Change password',
  },
  {
    to: '/profile/deleteaccount',
    icon: <FiShield />,
    label: 'Delete',
    viewTitle: 'Delete account',
  },
];

export default NavigationData;
