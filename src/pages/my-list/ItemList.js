import React from 'react';
import * as R from 'ramda';
import ExpandableList from '../../components/ExpandableList';
import EditableItem from './EditableItem';

const ItemList = ({
  items,
  onUpdateItem,
}) => (
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

export default ItemList;
