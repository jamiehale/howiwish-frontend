import React from 'react';
import Button from './Button';

const AccordionItem = ({
  children,
  text,
  expanded,
  onExpand,
  onClose,
}) => {
  return expanded ? (
    <>
      <Button onClick={onClose}>Close</Button>
      {children}
    </>
  ) : (
    <Button onClick={onExpand}>{text}</Button>
  );
};

export default AccordionItem;
