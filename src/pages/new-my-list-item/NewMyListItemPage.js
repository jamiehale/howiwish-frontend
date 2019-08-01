import React, { useState } from 'react';
import styled from 'styled-components';
import useMyList from '../../hooks/my-list';

const Form = styled.form``;

const TextInput = styled.input.attrs({
  type: 'text',
})``;

const NewMyListItemPage = () => {
  const [nothing, { addItem }] = useMyList(false);
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(name);
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <h1>New Item</h1>
      <Form
        onSubmit={handleSubmit}
      >
        <TextInput
          name="name"
          value={name}
          onChange={handleChangeName}
        />
      </Form>
    </>
  )
};

export default NewMyListItemPage;
