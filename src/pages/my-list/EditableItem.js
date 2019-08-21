import React, { useState } from 'react';
import Button from '../../components/Button';
import FormattedItem from './FormattedItem';
import EditItemForm from './EditItemForm';

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

export default EditableItem;
