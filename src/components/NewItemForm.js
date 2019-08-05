import React from 'react';
import useForm from '../hooks/form';
import TextInput from './TextInput';
import Form from './Form';
import Label from './Label';
import SubmitButton from './SubmitButton';
import Button from './Button';
import ButtonRow from './ButtonRow';
import { URL_REGEX } from '../utils/constants';

const formConfig = (onNewItem) => ({
  onSubmit: (values) => {
    onNewItem(values.name);
  },
  fields: {
    name: {
      isRequired: 'Provide a name for your wish list item',
    },
    url: {
      matchesRegex: {
        pattern: URL_REGEX,
        message: 'Provide a valid URL',
      },
    },
  },
});

const NewItemForm = ({
  onNewItem,
  onCancel,
}) => {
  const {
    propsForForm,
    propsForField,
    errorForField,
  } = useForm(formConfig(onNewItem));

  return (
    <Form
      {...propsForForm()}
    >
      <div>
        <Label htmlFor="name">
          Name:
          <TextInput {...propsForField('name')} />
          {errorForField('name') && (
            <p>{errorForField('name')}</p>
          )}
        </Label>
      </div>
      <div>
        <Label htmlFor="url">
          URL:
          <TextInput {...propsForField('url')} />
          {errorForField('url') && (
            <p>{errorForField('url')}</p>
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

export default NewItemForm;
