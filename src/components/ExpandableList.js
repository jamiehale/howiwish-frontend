import React, { useState } from 'react';
import UnorderedList from './UnorderedList';
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
        onClose={() => { setExpandedItem(-1); }}
      >
        {renderItem(item)}
      </ExpandingItem>
    </ListItem>
  ));

  return (
    <UnorderedList>
      {listItems}
    </UnorderedList>
  )
};

export default ExpandableList;
