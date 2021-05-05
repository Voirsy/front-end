import { Formik } from 'formik';
import Button from '../../components/atoms/Button';
import TextField from '../../components/molecules/textfield';
import { ChangePasswordSchema } from '../../validation/ProfileSchema';
import Styled from './styles';

const ChangePassword = () => (
  <>
    <Formik
      initialValues={{ currentPassword: '', newPassword: '' }}
      onSubmit={(values) => console.log(values)}
      validationSchema={ChangePasswordSchema}
    >
      {() => (
        <Styled.Form>
          <Styled.FormWrapper>
            <TextField
              name="currentPassword"
              label="Current password"
              placeholder="Current password"
              variant="placeholder"
              isPassword
              inputWidth={27}
              inputHeight={4}
            />
            <TextField
              name="newPassword"
              label="New password"
              placeholder="New password"
              variant="placeholder"
              isPassword
              inputWidth={27}
              inputHeight={4}
            />
          </Styled.FormWrapper>
          <Button
            color="primary"
            variant="contained"
            width={17}
            height={3.5}
            aria-label="Confirm changes"
            type="submit"
            borderRadius={0.5}
          >
            Save
          </Button>
        </Styled.Form>
      )}
    </Formik>
  </>
);

export default ChangePassword;
