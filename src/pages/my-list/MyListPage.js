import React from 'react';
import styled from 'styled-components';
import useMyList from '../../hooks/my-list';
import ItemList from './ItemList';
import QuickAddForm from './QuickAddForm';

const Container = styled.div`
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
`;

const MyListPage = () => {
  const [myList, { addItem, updateItem }] = useMyList();
  console.log(myList);

  const handleNewItem = (newItem) => {
    addItem(newItem);
  };

  return (
    <Container>
      <h1>My List</h1>
      <QuickAddForm
        onNewItem={handleNewItem}
      />
      <ItemList
        items={myList}
        onUpdateItem={updateItem}
      />
    </Container>
  );
};

export default MyListPage;
