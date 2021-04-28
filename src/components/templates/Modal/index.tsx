import { createPortal } from 'react-dom';
import Styled from './styles';

const ModalTemplate = ({
  children,
  ...props
}: {
  children: React.ReactNode;
  width?: string;
  height?: string;
}) =>
  createPortal(
    <Styled.ModalBackground>
      <Styled.ModalContent {...props}>{children}</Styled.ModalContent>
    </Styled.ModalBackground>,
    document.getElementById('modal-container') as HTMLDivElement
  );

export default ModalTemplate;
