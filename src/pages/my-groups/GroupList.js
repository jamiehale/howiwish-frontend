import React from 'react';
import { Link } from 'react-router-dom';
import * as R from 'ramda';
import ExpandableList from '../../components/ExpandableList';

const GroupList = ({
  groups,
}) => {

  return (
    <ExpandableList
      items={groups}
      renderName={R.prop('name')}
      renderItem={(group) => (
        <Link to={`/my-groups/${group.id}`}><h3>{group.name}</h3></Link>
      )}
    />
  );
};

export default GroupList;
