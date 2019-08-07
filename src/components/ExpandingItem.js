import React from 'react';
import Button from './Button';

const ExpandingItem = ({
  children,
  text,
  expanded,
  onExpand,
}) => {
  return expanded ? (
    <>
      {children}
    </>
  ) : (
    <Button onClick={onExpand}>{text}</Button>
  );
};

export default ExpandingItem;
