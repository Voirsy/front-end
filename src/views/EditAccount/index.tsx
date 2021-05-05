import { Formik, FormikErrors } from 'formik';
import { useState } from 'react';
import { FiCamera, FiUser } from 'react-icons/fi';
import Button from '../../components/atoms/Button';
import TextField from '../../components/molecules/textfield';
import useInputFormatter from '../../hooks/useInputFormatter';
import Styled from './styles';
import IconButton from '../../components/atoms/IconButton';
import { useAuthContextState } from '../../context/authContext';
import { EditAccountForm } from './types';
import { EditProfileSchema } from '../../validation/ProfileSchema';

const EditAccount = () => {
  const birthdateFormat = useInputFormatter([2, 2, 4], 'birthdate');
  const phoneNumberFormat = useInputFormatter([3, 3, 3], 'phonenumber');
  const [fileObject, setFile] = useState({ file: '' });
  const { userInfo } = useAuthContextState();

  const handleFileUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    setFieldValue: (field: string, value: unknown) => void,
    setErrors: (errors: FormikErrors<EditAccountForm>) => void
  ) => {
    const reader = new FileReader();
    if (e?.target?.files) {
      const file = e.target.files[0];
      if (file.size > 2097152) {
        setErrors({ avatar: 'Max size of image is 2MB!' });
        return;
      }
      const currentFile = file;
      reader.onloadend = () => {
        setFieldValue('avatar', reader.result);
        setFile({
          file: reader.result as string,
        });
      };
      reader.onerror = () => {
        setErrors({ avatar: 'Unknown error occured!' });
      };
      if (currentFile instanceof Blob) reader.readAsDataURL(currentFile);
    }
  };

  return (
    <>
      <Formik
        initialValues={{
          avatar: '',
          fullname: userInfo.name,
          email: userInfo.email,
          birthdate: userInfo.birthdate,
          phonenumber: userInfo.phoneNumber,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={EditProfileSchema}
      >
        {({ setFieldValue, values, setErrors, errors }) => (
          <Styled.Form>
            <Styled.AvatarWrapper hasBorder={!(fileObject?.file || userInfo.avatarUrl)}>
              {fileObject?.file || userInfo.avatarUrl !== '' ? (
                <Styled.Avatar src={fileObject.file || userInfo.avatarUrl} alt="" width="150px" />
              ) : (
                <FiUser size="55%" />
              )}
              <Styled.UploadIcon>
                <IconButton aria-label="" color="secondary" variant="contained" iconWidth={1}>
                  <FiCamera size="70%" />
                </IconButton>
                <Styled.FileInput
                  id="avatar"
                  name="avatar"
                  type="file"
                  accept="image/x-png,image/jpeg"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleFileUpload(e, setFieldValue, setErrors)
                  }
                />
              </Styled.UploadIcon>
            </Styled.AvatarWrapper>
            <Styled.FileError>{errors.avatar}</Styled.FileError>
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
