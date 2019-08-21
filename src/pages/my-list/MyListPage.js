import React, { useState } from 'react';
import styled from 'styled-components';
import useMyList from '../../hooks/my-list';
import Button from '../../components/Button';
import NewItemForm from './NewItemForm';
import ItemList from './ItemList';

const Container = styled.div`
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
`;

const MyListPage = () => {
  const [myList, { addItem, updateItem }] = useMyList();
  const [showForm, setShowForm] = useState(false);

  const handleNewItem = (newItem) => {
    setShowForm(false);
    addItem(newItem);
  };

  const handleShowForm = () => {
    setShowForm(true);
  };

  return (
    <Container>
      <h1>My List</h1>
      <ItemList
        items={myList}
        onUpdateItem={updateItem}
      />
      {showForm ? (
        <NewItemForm
          onNewItem={handleNewItem}
          onCancel={() => { setShowForm(false); }}
        />
      ) : (
        <Button onClick={handleShowForm}>Add</Button>
      )}
    </Container>
  );
};

export default MyListPage;
