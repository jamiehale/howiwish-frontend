import React from 'react';

const FormattedGroup = ({
  group,
}) => {
  const descriptionText = group.description.split(/[\r\n]+/).map((p, i) => <p key={i}>{p}</p>);

  return (
    <>
      <h1>{group.name}</h1>
      {descriptionText}
    </>
  );
};

export default FormattedGroup;
