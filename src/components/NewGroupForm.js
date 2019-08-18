import React from 'react';
import useForm from '../hooks/form';
import useAutofocus from '../hooks/autofocus';
import TextInput from './TextInput';
import TextArea from './TextArea';
import Form from './Form';
import Label from './Label';
import SubmitButton from './SubmitButton';
import Button from './Button';
import ButtonRow from './ButtonRow';

const formConfig = (onNewGroup) => ({
  validateOnBlur: false,
  onSubmit: (values) => {
    onNewGroup(values);
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
      <div>
        <Label htmlFor="name">
          Name:
          <TextInput
            ref={ref}
            {...propsForField('name')}
          />
          {errorForField('name') && (
            <p>{errorForField('name')}</p>
          )}
        </Label>
      </div>
      <div>
        <Label htmlFor="description">
          Description:
          <TextArea {...propsForField('description')} />
          {errorForField('description') && (
            <p>{errorForField('description')}</p>
          )}
        </Label>
      </div>
      <ButtonRow>
        <SubmitButton>Add</SubmitButton>
        <Button onClick={onCancel}>Cancel</Button>
      </ButtonRow>
    </Form>
  );
};

export default NewGroupForm;
