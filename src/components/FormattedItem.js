import React from 'react';

const FormattedItem = ({
  item,
}) => {
  const descriptionText = item.description.split(/[\r\n]+/).map((p, i) => <p key={i}>{p}</p>);

  return (
    <>
      <h1>{item.name}</h1>
      {descriptionText}
    </>
  );
};

export default FormattedItem;
