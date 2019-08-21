import React, { useState } from 'react';
import * as R from 'ramda';
import { Link } from 'react-router-dom';
import useMyGroups from '../../hooks/my-groups';
import NewGroupForm from '../../components/NewGroupForm';
import Button from '../../components/Button';
import ExpandableList from '../../components/ExpandableList';

const GroupList = ({
  groups,
}) => {

  return (
    <ExpandableList
      items={groups}
      renderName={R.prop('name')}
      renderItem={(group) => (
        <Link to={`/groups/${group.id}`}><h3>{group.name}</h3></Link>
      )}
    />
  );
};

const MyGroupsPage = () => {
  const [myGroups, { createGroup }] = useMyGroups();
  const [showForm, setShowForm] = useState(false);

  const handleNewGroup = (newGroup) => {
    setShowForm(false);
    createGroup(newGroup);
  };

  const handleShowForm = () => {
    setShowForm(true);
  };

  return (
    <>
      <h1>My Groups</h1>
      <GroupList
        groups={myGroups}
      />
      {showForm ? (
        <NewGroupForm
          onNewGroup={handleNewGroup}
          onCancel={() => { setShowForm(false); }}
        />
      ) : (
        <Button onClick={handleShowForm}>Add</Button>
      )}
    </>
  );
};

export default MyGroupsPage;
