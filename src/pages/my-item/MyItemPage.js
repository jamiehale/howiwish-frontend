import React from 'react';
import { withRouter } from 'react-router';
import useMyItem from '../../hooks/my-item';
import FormattedItem from './FormattedItem';

const MyItemPage = ({
  match,
}) => {
  const { item } = useMyItem(match.params.id);

  return (
    <>
      {item && (
        <FormattedItem
          item={item}
        />
      )}
    </>
  );
};

export default withRouter(MyItemPage);
