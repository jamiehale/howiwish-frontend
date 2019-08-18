import React, { useState } from 'react';
import * as R from 'ramda';
import useMyGroups from '../../hooks/my-groups';
import NewGroupForm from '../../components/NewGroupForm';
import EditItemForm from '../../components/EditItemForm';
import Button from '../../components/Button';
import FormattedItem from '../../components/FormattedItem';
import ExpandableList from '../../components/ExpandableList';

const EditableItem = ({
  item,
  onUpdateItem,
}) => {
  const [editing, setEditing] = useState(false);

  const handleUpdateItem = (id, updatedItem) => {
    setEditing(false);
    onUpdateItem(id, updatedItem);
  };

  return editing ? (
    <EditItemForm
      item={item}
      onUpdateItem={handleUpdateItem}
      onCancel={() => { setEditing(false); }}
    />
  ) : (
    <>
      <Button onClick={() => { setEditing(true); }}>Edit</Button>
      <FormattedItem
        item={item}
      />
    </>
  );
};

const GroupList = ({
  groups,
}) => {

  return (
    <ExpandableList
      items={groups}
      renderName={R.prop('name')}
      renderItem={(group) => (
        <h3>{group.name}</h3>
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
