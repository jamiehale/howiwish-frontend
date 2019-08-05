import React, { useState } from 'react';
import List from '../../components/List';
import ListItem from '../../components/ListItem';
import useMyList from '../../hooks/my-list';
import NewItemForm from '../../components/NewItemForm';
import Button from '../../components/Button';

const ExpandingItem = ({
  item,
}) => {
  const [isOpen, setOpen] = useState(false);

  return isOpen ? (
    <div>
      <Button onClick={() => { setOpen(false); }}>Close</Button>
      <h1>{item.name}</h1>
      <p>Some other stuff...</p>
    </div>
  ) : (
    <Button onClick={() => { setOpen(true); }}>{item.name}</Button>
  );
};

const MyListPage = () => {
  const [myList, { addItem }] = useMyList();
  const [showForm, setShowForm] = useState(false);

  const handleNewItem = (newItem) => {
    setShowForm(false);
    addItem(newItem);
  };

  const items = myList.map((item, i) => (
    <ListItem key={i}>
      <ExpandingItem item={item} />
    </ListItem>
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
