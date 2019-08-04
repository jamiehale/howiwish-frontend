import React from 'react';
import useMyList from '../../hooks/my-list';
import useForm from '../../hooks/form';
import TextInput from '../../components/TextInput';
import Form from '../../components/Form';
import Label from '../../components/Label';
import SubmitButton from '../../components/SubmitButton';
import Button from '../../components/Button';
import ButtonRow from '../../components/ButtonRow';
import { URL_REGEX } from '../../utils/constants';

const formConfig = (addItem) => ({
  onSubmit: (values) => {
    addItem(values.name);
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

const NewMyListItemPage = () => {
  const [nothing, { addItem }] = useMyList(false);
  const {
    propsForForm,
    propsForField,
    errorForField,
  } = useForm(formConfig(addItem));

  const handleCancel = (e) => {
    // ?
  };

  return (
    <>
      <h1>New Item</h1>
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
          <Button onClick={handleCancel}>Cancel</Button>
        </ButtonRow>
      </Form>
    </>
  )
};

export default NewMyListItemPage;
