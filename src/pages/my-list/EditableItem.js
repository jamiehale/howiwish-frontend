import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
    <div>
      <Link to={`my-list/${item.id}/edit`}>Edit</Link>
      <FormattedItem
        item={item}
      />
    </div>
  );
};

export default EditableItem;
