import React from 'react';
import useForm from '../../hooks/form';
import useAutofocus from '../../hooks/autofocus';
import Form from '../../components/Form';
import FieldSet from '../../components/FieldSet';
import Field from '../../components/Field';
import Label from '../../components/Label';
import TextInput from '../../components/TextInput';
import ButtonRow from '../../components/ButtonRow';
import PrimaryButton from '../../components/PrimaryButton';

const formConfig = onSignIn => ({
  validateOnBlur: false,
  onSubmit: (values) => {
    onSignIn(values.email, values.password);
  },
  fields: {
    email: {
      isRequired: 'Your email is required to sign in',
    },
    password: {
      isRequired: 'Your password is required to sign in',
    },
  },
});

const SignInForm = ({
  onSignIn
}) => {
  const {
    propsForForm,
    propsForField,
    errorForField,
  } = useForm(formConfig(onSignIn));
  const ref = useAutofocus();

  return (
    <Form
      {...propsForForm()}
    >
      <FieldSet>
        <Field>
          <Label htmlFor="email">Email</Label>
          <TextInput
            ref={ref}
            {...propsForField('email')}
            autocorrect="off"
          />
          {errorForField('email') && (
            <p>{errorForField('email')}</p>
          )}
        </Field>
        <Field>
          <Label htmlFor="password">Password</Label>
          <TextInput
            type="password"
            {...propsForField('password')}
          />
          {errorForField('password') && (
            <p>{errorForField('password')}</p>
          )}
        </Field>
      </FieldSet>
      <ButtonRow>
        <PrimaryButton type="submit">Sign In</PrimaryButton>
      </ButtonRow>
    </Form>
  );
};

export default SignInForm;
