import React from 'react';
import { withRouter } from 'react-router';
import useGroup from '../../hooks/my-group';

const GroupPage = ({
  match,
}) => {
  const { group } = useGroup(match.params.id);

  return (
    <h1>Group</h1>
  );
};

export default withRouter(GroupPage);
