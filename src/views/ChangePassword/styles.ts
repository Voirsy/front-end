import styled from 'styled-components';
import { Form as FormikFork } from 'formik';

const Form = styled(FormikFork)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-gap: 1rem;
  margin-bottom: 3rem;
`;

const Styled = { FormWrapper, Form };

export default Styled;
