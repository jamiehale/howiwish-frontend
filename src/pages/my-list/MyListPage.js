import React from 'react';
import { Link } from 'react-router-dom';
import List from '../../components/List';
import ListItem from '../../components/ListItem';
import useMyList from '../../hooks/my-list';

const MyListPage = () => {
  const [myList] = useMyList();

  const items = myList.map((item, i) => (
    <ListItem key={i}>{item}</ListItem>
  ));

  return (
    <>
      <h1>My List</h1>
      <List>
        {items}
      </List>
      <Link to="/my-list/new">Add</Link>
    </>
  );
};

export default MyListPage;
