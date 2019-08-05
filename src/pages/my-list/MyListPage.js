import React, { useState } from 'react';
import List from '../../components/List';
import ListItem from '../../components/ListItem';
import useMyList from '../../hooks/my-list';
import NewItemForm from '../../components/NewItemForm';
import Button from '../../components/Button';

const MyListPage = () => {
  const [myList, { addItem }] = useMyList();
  const [showForm, setShowForm] = useState(false);

  const handleNewItem = (newItem) => {
    setShowForm(false);
    addItem(newItem);
  };

  const items = myList.map((item, i) => (
    <ListItem key={i}>{item}</ListItem>
  ));

  return (
    <>
      <h1>My List</h1>
      <List>
        {items}
      </List>
      {showForm ? (
        <NewItemForm
          onNewItem={handleNewItem}
          onCancel={() => { setShowForm(false); }}
        />
      ) : (
        <Button onClick={() => { setShowForm(true); }}>Add</Button>
      )}
    </>
  );
};

export default MyListPage;
