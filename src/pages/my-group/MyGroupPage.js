import React from 'react';
import { withRouter } from 'react-router';
import useMyGroup from '../../hooks/my-group';
import FormattedGroup from './FormattedGroup';

const MyGroupPage = ({
  match,
}) => {
  const { group } = useMyGroup(match.params.id);

  console.log(group);
  return (
    <>
      {group && (
        <FormattedGroup
          group={group}
        />
      )}
    </>
  );
};

export default withRouter(MyGroupPage);
