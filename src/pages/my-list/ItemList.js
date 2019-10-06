import React from 'react';
import * as R from 'ramda';
import Accordion from '../../components/Accordion';
import EditableItem from './EditableItem';

const ItemList = ({
  items,
  onUpdateItem,
}) => {
  
  return (
    <Accordion
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

export default ItemList;
