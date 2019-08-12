import React, { useState } from 'react';
import List from './List';
import ListItem from './ListItem';
import ExpandingItem from './ExpandingItem';

const ExpandableList = ({
  items,
  renderName,
  renderItem,
}) => {
  const [expandedItem, setExpandedItem] = useState(-1);

  const handleExpandItem = (item) => () => {
    setExpandedItem(item);
  };

  const listItems = items.map((item, i) => (
    <ListItem key={i}>
      <ExpandingItem
        text={renderName(item)}
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

export default ExpandableList;
