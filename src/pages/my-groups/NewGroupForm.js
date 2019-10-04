import React from 'react';
import useForm from '../../hooks/form';
import useAutofocus from '../../hooks/autofocus';
import TextInput from '../../components/TextInput';
import TextArea from '../../components/TextArea';
import Form from '../../components/Form';
import Label from '../../components/Label';
import PrimaryButton from '../../components/PrimaryButton';
import Button from '../../components/Button';
import ButtonRow from '../../components/ButtonRow';
import FieldSet from '../../components/FieldSet';
import Field from '../../components/Field';

const formConfig = (onNewGroup) => ({
  validateOnBlur: false,
  onSubmit: (values) => {
    onNewGroup(values.name, values.description);
  },
  fields: {
    name: {
      isRequired: 'Provide a name for your group',
    },
    description: {
    },
  },
});

const NewGroupForm = ({
  onNewGroup,
  onCancel,
}) => {
  const {
    propsForForm,
    propsForField,
    errorForField,
  } = useForm(formConfig(onNewGroup));
  const ref = useAutofocus();

  return (
    <Form
      {...propsForForm()}
    >
      <FieldSet>
        <Field>
          <Label htmlFor="name">Name</Label>
          <TextInput
            ref={ref}
            {...propsForField('name')}
          />
          {errorForField('name') && (
            <p>{errorForField('name')}</p>
          )}
        </Field>
        <Field>
          <Label htmlFor="description">Description</Label>
          <TextArea {...propsForField('description')} />
          {errorForField('description') && (
            <p>{errorForField('description')}</p>
          )}
        </Field>
      </FieldSet>
      <ButtonRow>
        <PrimaryButton>Add</PrimaryButton>
        <Button onClick={onCancel}>Cancel</Button>
      </ButtonRow>
    </Form>
  );
};

export default NewGroupForm;
