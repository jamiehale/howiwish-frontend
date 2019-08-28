import React from 'react';
import { Link } from 'react-router-dom';

const FormattedItem = ({
  item,
}) => {
  const descriptionText = item.description ? item.description.split(/[\r\n]+/).map((p, i) => <p key={i}>{p}</p>) : undefined;

  return (
    <>
      <Link to={`/my-list/${item.id}`}><h1>{item.name}</h1></Link>
      {descriptionText}
    </>
  );
};

export default FormattedItem;
