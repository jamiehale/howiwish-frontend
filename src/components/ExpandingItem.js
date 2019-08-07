import React, { useState } from 'react';
import Button from './Button';
import FormattedItem from './FormattedItem';

const ExpandingItem = ({
  item,
  expanded,
  onItemExpanded,
}) => {
  return expanded ? (
    <div>
      <FormattedItem item={item} />
    </div>
  ) : (
    <Button onClick={onItemExpanded}>{item.name}</Button>
  );
};

export default ExpandingItem;
