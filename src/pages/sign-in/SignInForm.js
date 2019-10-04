import React from 'react';
import styled from 'styled-components';
import useForm from '../../hooks/form';
import useAutofocus from '../../hooks/autofocus';
import Form from '../../components/Form';
import FieldSet from '../../components/FieldSet';
import Field from '../../components/Field';
import Label from '../../components/Label';
import TextInput from '../../components/TextInput';
import ButtonRow from '../../components/ButtonRow';
import PrimaryButton from '../../components/PrimaryButton';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 60ch;
`;

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
    <Container>
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
          <PrimaryButton type="submit">Sign in</PrimaryButton>
        </ButtonRow>
      </Form>
    </Container>
  );
};

export default SignInForm;
