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
import { URL_REGEX } from '../../utils/constants';
import FieldSet from '../../components/FieldSet';
import Field from '../../components/Field';

const formConfig = (item, onUpdateItem) => ({
  validateOnBlur: false,
  onSubmit: (values) => {
    onUpdateItem(item.id, values);
  },
  fields: {
    name: {
      isRequired: 'Provide a name for your wish list item',
    },
    description: {
    },
    url: {
      matchesRegex: {
        pattern: URL_REGEX,
        message: 'Provide a valid URL',
      },
    },
  },
});

const EditItemForm = ({
  item,
  onUpdateItem,
  onCancel,
}) => {
  const {
    propsForForm,
    propsForField,
    errorForField,
  } = useForm(formConfig(item, onUpdateItem), item);
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
        <Field>
          <Label htmlFor="url">URL</Label>
          <TextInput {...propsForField('url')} />
          {errorForField('url') && (
            <p>{errorForField('url')}</p>
          )}
        </Field>
      </FieldSet>
      <ButtonRow>
        <PrimaryButton>Update</PrimaryButton>
        <Button onClick={onCancel}>Cancel</Button>
      </ButtonRow>
    </Form>
  );
};

export default EditItemForm;
