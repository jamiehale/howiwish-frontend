import React from 'react';
import useForm from '../../hooks/form';
import useAutofocus from '../../hooks/autofocus';
import TextInput from '../../components/TextInput';
import Form from '../../components/Form';
import Label from '../../components/Label';
import PrimaryButton from '../../components/PrimaryButton';
import Button from '../../components/Button';
import ButtonRow from '../../components/ButtonRow';

const formConfig = (onNewItem) => ({
  validateOnBlur: false,
  onSubmit: (values) => {
    onNewItem(values);
  },
  fields: {
    name: {
      isRequired: 'Provide a name for your wish list item',
    },
  },
});

const QuickAddForm = ({
  onNewItem,
}) => {
  const {
    propsForForm,
    propsForField,
    errorForField,
    reset,
  } = useForm(formConfig(onNewItem));
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
      <ButtonRow>
        <PrimaryButton>Add</PrimaryButton>
        <Button onClick={() => { reset(); }}>Cancel</Button>
      </ButtonRow>
    </Form>
  );
};

export default QuickAddForm;
