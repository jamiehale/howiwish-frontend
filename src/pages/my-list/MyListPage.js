import React, { useState } from 'react';
import List from '../../components/List';
import ListItem from '../../components/ListItem';
import useMyList from '../../hooks/my-list';
import NewItemForm from '../../components/NewItemForm';
import Button from '../../components/Button';
import ExpandingItem from '../../components/ExpandingItem';

const MyListPage = () => {
  const [myList, { addItem }] = useMyList();
  const [showForm, setShowForm] = useState(false);
  const [expandedItem, setExpandedItem] = useState(-1);

  const handleNewItem = (newItem) => {
    setShowForm(false);
    addItem(newItem);
  };

  const handleItemExpanded = (item) => () => {
    setExpandedItem(item);
  }

  const handleShowForm = () => {
    setExpandedItem(-1);
    setShowForm(true);
  };

  const items = myList.map((item, i) => (
    <ListItem key={i}>
      <ExpandingItem
        item={item}
        expanded={i === expandedItem}
        onItemExpanded={handleItemExpanded(i)}
      />
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
        <Button onClick={handleShowForm}>Add</Button>
      )}
    </>
  );
};

export default MyListPage;
