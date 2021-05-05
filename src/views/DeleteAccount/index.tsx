import Button from '../../components/atoms/Button';
import Styled from './styles';

const DeleteAccount = () => (
  <>
    <Styled.Notification>
      Are you sure to <strong>delete</strong> account? This process is irreversible.
    </Styled.Notification>
    <Button color="warning" variant="contained" width={17} height={3.5} borderRadius={0.5}>
      Delete
    </Button>
  </>
);

export default DeleteAccount;
