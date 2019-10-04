import React from 'react';
import useForm from '../../hooks/form';
import useAutofocus from '../../hooks/autofocus';
import TextInput from '../../components/TextInput';
import Form from '../../components/Form';
import Label from '../../components/Label';
import PrimaryButton from '../../components/PrimaryButton';
import ButtonRow from '../../components/ButtonRow';
import FieldSet from '../../components/FieldSet';

const formConfig = onSignUp => ({
  validateOnBlur: false,
  onSubmit: (values) => {
    onSignUp(values.email, values.password);
  },
  fields: {
    email: {
      isRequired: 'Your email is required to sign up',
    },
    password: {
      isRequired: 'A password is required to sign up',
    },
  },
});

const SignUpForm = ({
  onSignUp
}) => {
  const {
    propsForForm,
    propsForField,
    errorForField,
  } = useForm(formConfig(onSignUp));
  const ref = useAutofocus();

  return (
    <Form
      {...propsForForm()}
    >
      <div>
        <Label htmlFor="email">
          <FieldSet>Email</FieldSet>
          <TextInput
            ref={ref}
            {...propsForField('email')}
            autocorrect="off"
          />
          {errorForField('email') && (
            <p>{errorForField('email')}</p>
          )}
        </Label>
      </div>
      <div>
        <Label htmlFor="password">
          <FieldSet>Password</FieldSet>
          <TextInput
            type="password"
            {...propsForField('password')}
          />
          {errorForField('password') && (
            <p>{errorForField('password')}</p>
          )}
        </Label>
      </div>
      <ButtonRow>
        <PrimaryButton>Sign up</PrimaryButton>
      </ButtonRow>
    </Form>
  );
};

export default SignUpForm;
