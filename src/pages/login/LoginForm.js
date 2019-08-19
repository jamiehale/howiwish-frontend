import React from 'react';
import useForm from '../../hooks/form';
import useAutofocus from '../../hooks/autofocus';
import TextInput from '../../components/TextInput';
import PasswordInput from '../../components/PasswordInput';
import Form from '../../components/Form';
import Label from '../../components/Label';
import SubmitButton from '../../components/SubmitButton';
import ButtonRow from '../../components/ButtonRow';

const formConfig = onLogin => ({
  validateOnBlur: false,
  onSubmit: (values) => {
    onLogin(values.email, values.password);
  },
  fields: {
    email: {
      isRequired: 'Your email is required to login',
    },
    password: {
      isRequired: 'Your password is required to login',
    },
  },
});

const LoginForm = ({
  onLogin
}) => {
  const {
    propsForForm,
    propsForField,
    errorForField,
  } = useForm(formConfig(onLogin));
  const ref = useAutofocus();

  return (
    <Form
      {...propsForForm()}
    >
      <div>
        <Label htmlFor="email">
          Email:
          <TextInput
            ref={ref}
            {...propsForField('email')}
          />
          {errorForField('email') && (
            <p>{errorForField('email')}</p>
          )}
        </Label>
      </div>
      <div>
        <Label htmlFor="password">
          Password:
          <PasswordInput
            ref={ref}
            {...propsForField('password')}
          />
          {errorForField('password') && (
            <p>{errorForField('password')}</p>
          )}
        </Label>
      </div>
      <ButtonRow>
        <SubmitButton>Login</SubmitButton>
      </ButtonRow>
    </Form>
  );
};

export default LoginForm;
