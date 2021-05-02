import { FiX } from 'react-icons/fi';
import Header from '../../atoms/Header';
import Styled from './styles';
import MainTitle from '../../atoms/MainTitle';
import ModalTemplate from '../../templates/Modal';
import ProfileNavigation from '../ProfileNavigation';
import IconButton from '../../atoms/IconButton';
import theme from '../../../theme/theme';

const ProfileMenu = ({ modalToggle }: { modalToggle: (val: boolean) => void }) => (
  <ModalTemplate isAdjustedToParent modalToggle={modalToggle}>
    <Header>
      <MainTitle>Voirsy</MainTitle>
      <IconButton
        onClick={() => modalToggle(false)}
        aria-label="Close menu"
        color="black"
        size={theme.sizes.header.mobileHeight - 0.5}
      >
        <FiX />
      </IconButton>
    </Header>
    <Styled.ModalContent>
      <ProfileNavigation />
    </Styled.ModalContent>
  </ModalTemplate>
);

export default ProfileMenu;
