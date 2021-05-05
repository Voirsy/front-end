import { Formik } from 'formik';
import Button from '../../components/atoms/Button';
import TextField from '../../components/molecules/textfield';
import useInputFormatter from '../../hooks/useInputFormatter';
import Styled from './styles';

const EditAccount = () => {
  const birthdateFormat = useInputFormatter([2, 2, 4], 'birthdate');
  const phoneNumberFormat = useInputFormatter([3, 3, 3], 'phonenumber');

  return (
    <>
      <Formik
        initialValues={{ fullname: '', email: '', birthdate: '', phonenumber: '' }}
        onSubmit={(values) => console.log(values)}
      >
        {({ setFieldValue, values }) => (
          <Styled.Form>
            <Styled.FormWrapper>
              <TextField
                name="fullname"
                label="Fullname"
                variant="animate"
                inputWidth={27}
                inputHeight={4}
              />
              <TextField
                name="email"
                label="Email"
                variant="animate"
                type="email"
                inputWidth={27}
                inputHeight={4}
              />
              <TextField
                name="birthdate"
                label="Birth date"
                variant="animate"
                inputWidth={27}
                inputHeight={4}
                handleChange={(e) => birthdateFormat.formatOnChange(e, setFieldValue)}
                handleKeyDown={(e) =>
                  birthdateFormat.formatOnKeyDown(e, setFieldValue, values.birthdate)
                }
              />
              <TextField
                name="phonenumber"
                label="Phone number"
                variant="animate"
                type="tel"
                inputWidth={27}
                inputHeight={4}
                handleChange={(e) => phoneNumberFormat.formatOnChange(e, setFieldValue)}
                handleKeyDown={(e) =>
                  phoneNumberFormat.formatOnKeyDown(e, setFieldValue, values.phonenumber)
                }
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
};

export default EditAccount;
