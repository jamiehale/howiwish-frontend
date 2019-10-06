import React, { useState } from 'react';
import Accordion from '../../components/Accordion';
import EditableItem from './EditableItem';
import AccordionItem from '../../components/AccordionItem';

/*
*/

const ItemList = ({
  items,
  onUpdateItem,
}) => {
  const [openId, setOpenId] = useState(null);

  const accordionItems = items.map(item => (
    <AccordionItem
      open={item.id === openId}
      label={item.name}
      onOpen={() => { setOpenId(item.id); }}
      onClose={() => { setOpenId(null); }}
    >
      <EditableItem
        item={item}
        onUpdateItem={onUpdateItem}
      />
    </AccordionItem>
  ));

  return (
    <Accordion>
      {accordionItems}
    </Accordion>
  );
};

export default ItemList;
