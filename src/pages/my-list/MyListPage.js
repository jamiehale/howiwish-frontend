import React, { useState } from 'react';
import * as R from 'ramda';
import List from '../../components/List';
import ListItem from '../../components/ListItem';
import useMyList from '../../hooks/my-list';
import NewItemForm from '../../components/NewItemForm';
import Button from '../../components/Button';
import ExpandingItem from '../../components/ExpandingItem';
import FormattedItem from '../../components/FormattedItem';

const ExpandableList = ({
  items,
  itemToName,
  renderItem,
}) => {
  const [expandedItem, setExpandedItem] = useState(-1);

  const handleExpandItem = (item) => () => {
    setExpandedItem(item);
  };

  const listItems = items.map((item, i) => (
    <ListItem key={i}>
      <ExpandingItem
        text={itemToName(item)}
        expanded={i === expandedItem}
        onExpand={handleExpandItem(i)}
      >
        {renderItem(item)}
      </ExpandingItem>
    </ListItem>
  ));

  return (
    <List>
      {listItems}
    </List>
  )
};

const ItemList = ({
  items,
  onUpdateItem,
}) => {
  const handleUpdateItem = (newItem) => {
    onUpdateItem(newItem);
  };

  return (
    <ExpandableList
      items={items}
      itemToName={R.prop('name')}
      renderItem={(item) => (
        <FormattedItem
          item={item}
          onUpdateItem={handleUpdateItem}
        />
      )}
    />
  );
};

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
    <>
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
    </>
  );
};

export default MyListPage;
