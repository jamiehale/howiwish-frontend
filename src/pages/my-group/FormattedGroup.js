import React from 'react';
import * as R from 'ramda';
import ListItem from '../../components/ListItem';
import UnorderedList from '../../components/UnorderedList';
import { paragraphethize } from '../../utils/format';

const FormattedGroup = ({
  group,
}) => {
  const descriptionText = paragraphethize(group.description);

  const hasMembers = !R.isEmpty(group.members);

  const memberItems = group.members.map(member => (
    <ListItem
      key={member.id}
    >
      {member.name}
    </ListItem>
  ));

  return (
    <>
      <h1>{group.name}</h1>
      {descriptionText}
      {hasMembers ? (
        <>
          <h2>Members:</h2>
          <UnorderedList>
            {memberItems}
          </UnorderedList>
        </>
      ) : (
        <p>No members!</p>
      )}
    </>
  );
};

export default FormattedGroup;
