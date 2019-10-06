import React, { useState } from 'react';
import UnorderedList from './UnorderedList';
import ListItem from './ListItem';
import AccordionItem from './AccordionItem';

const Accordion = ({
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
      <AccordionItem
        text={renderName(item)}
        expanded={i === expandedItem}
        onExpand={handleExpandItem(i)}
        onClose={() => { setExpandedItem(-1); }}
      >
        {renderItem(item)}
      </AccordionItem>
    </ListItem>
  ));

  return (
    <UnorderedList>
      {listItems}
    </UnorderedList>
  )
};

export default Accordion;
