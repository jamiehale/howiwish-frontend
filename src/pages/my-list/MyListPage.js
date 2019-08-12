import React, { useState } from 'react';
import * as R from 'ramda';
import useMyList from '../../hooks/my-list';
import NewItemForm from '../../components/NewItemForm';
import EditItemForm from '../../components/EditItemForm';
import Button from '../../components/Button';
import FormattedItem from '../../components/FormattedItem';
import ExpandableList from '../../components/ExpandableList';

const EditableItem = ({
  item,
  onUpdateItem,
}) => {
  const [editing, setEditing] = useState(false);

  const handleUpdateItem = (id, updatedItem) => {
    setEditing(false);
    onUpdateItem(id, updatedItem);
  };

  return editing ? (
    <EditItemForm
      item={item}
      onUpdateItem={handleUpdateItem}
      onCancel={() => { setEditing(false); }}
    />
  ) : (
    <>
      <Button onClick={() => { setEditing(true); }}>Edit</Button>
      <FormattedItem
        item={item}
      />
    </>
  );
};

const ItemList = ({
  items,
  onUpdateItem,
}) => {

  return (
    <ExpandableList
      items={items}
      renderName={R.prop('name')}
      renderItem={(item) => (
        <EditableItem
          item={item}
          onUpdateItem={onUpdateItem}
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
