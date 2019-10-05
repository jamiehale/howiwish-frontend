import React from 'react';
import styled from 'styled-components';
import useForm from '../../hooks/form';
import useAutofocus from '../../hooks/autofocus';
import TextInput from '../../components/TextInput';
import Form from '../../components/Form';
import Label from '../../components/Label';
import PrimaryButton from '../../components/PrimaryButton';
import Button from '../../components/Button';
import ButtonRow from '../../components/ButtonRow';
import FieldSet from '../../components/FieldSet';
import Field from '../../components/Field';

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

const HorizontalForm = styled(Form)`
  display: flex;
  align-items: center;

  ${FieldSet} {
    flex-grow: 1;
    margin-bottom: 0px;
  }

  ${Label} {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }

  ${PrimaryButton} {
    margin-left: var(--s0);
  }
`;

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
    <HorizontalForm
      {...propsForForm()}
    >
      {errorForField('name') && (
        <p>{errorForField('name')}</p>
      )}
      <FieldSet>
        <Field>
          <Label htmlFor="name">Name</Label>
          <TextInput
            ref={ref}
            placeholder="Add something to your list!"
            {...propsForField('name')}
          />
        </Field>
      </FieldSet>
      <PrimaryButton type="submit">Add</PrimaryButton>
    </HorizontalForm>
  );
};

export default QuickAddForm;
