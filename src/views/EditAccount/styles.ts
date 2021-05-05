import styled, { css } from 'styled-components';
import { Form as FormikFork } from 'formik';

const Form = styled(FormikFork)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-gap: 1.5rem;
  margin-bottom: 3rem;
`;

const AvatarWrapper = styled.div<{ hasBorder: boolean }>`
  width: 20rem;
  height: 20rem;
  display: grid;
  place-items: center;
  position: relative;
  border-radius: 50%;
  margin-bottom: 1rem;
  ${({ hasBorder }) =>
    hasBorder &&
    css`
      border: 1px solid black;
    `}
`;

const Avatar = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;

const UploadIcon = styled.div`
  bottom: 1rem;
  right: 1rem;
  width: 4rem;
  height: 4rem;
  position: absolute;
  overflow: hidden;
  border-radius: 50%;
`;

const FileInput = styled.input`
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 3;
  height: 100%;
  opacity: 0;
`;

const FileError = styled.p`
  color: ${({ theme }) => theme.colors.red.normal};
  font-size: 1.3rem;
  margin-bottom: 5rem;
`;

const Styled = { FormWrapper, Form, AvatarWrapper, Avatar, UploadIcon, FileInput, FileError };

export default Styled;
