import React, { useState } from 'react';
import List from '../../components/List';
import ListItem from '../../components/ListItem';
import useMyList from '../../hooks/my-list';
import NewItemForm from '../../components/NewItemForm';
import Button from '../../components/Button';

const FormattedItem = ({
  item,
}) => {
  const descriptionText = item.description.split(/[\r\n]+/).map((p, i) => <p key={i}>{p}</p>);

  return (
    <>
      <h1>{item.name}</h1>
      {descriptionText}
    </>
  );
};

const ExpandingItem = ({
  item,
}) => {
  const [isOpen, setOpen] = useState(false);


  return isOpen ? (
    <div>
      <Button onClick={() => { setOpen(false); }}>Close</Button>
      <FormattedItem item={item} />
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
