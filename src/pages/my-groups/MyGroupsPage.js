import React, { useState } from 'react';
import styled from 'styled-components';
import useMyGroups from '../../hooks/my-groups';
import Button from '../../components/Button';
import GroupList from './GroupList';
import NewGroupForm from './NewGroupForm';

const Container = styled.div`
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
`;

const MyGroupsPage = () => {
  const [myGroups, { createGroup }] = useMyGroups();
  const [showForm, setShowForm] = useState(false);

  const handleNewGroup = (name, description) => {
    setShowForm(false);
    createGroup(name, description);
  };

  const handleShowForm = () => {
    setShowForm(true);
  };

  return (
    <Container>
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
    </Container>
  );
};

export default MyGroupsPage;
