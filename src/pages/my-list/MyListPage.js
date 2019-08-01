import React from 'react';
import List from '../../components/List';
import ListItem from '../../components/ListItem';

const myListItems = [
  'A thing',
  'Another thing',
  'A third thing',
];

const MyListPage = () => {
  const items = myListItems.map((item, i) => (
    <ListItem key={i}>{item}</ListItem>
  ));

  return (
    <>
      <h1>My List</h1>
      <List>
        {items}
      </List>
    </>
  );
};

export default MyListPage;
