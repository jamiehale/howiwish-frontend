import React from 'react';
import { withRouter } from 'react-router';
import useMyGroup from '../../hooks/my-group';

const MyGroupPage = ({
  match,
}) => {
  const { group } = useMyGroup(match.params.id);

  return (
    <h1>Group</h1>
  );
};

export default withRouter(MyGroupPage);
