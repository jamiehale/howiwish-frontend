import React from 'react';
import { Link } from 'react-router-dom';
import List from '../../../components/List';
import ListItem from '../../../components/ListItem';

const AdminNavPage = () => (
  <>
    <h1>Admin Nav</h1>
    <nav>
      <List>
        <ListItem>
          <Link to="/admin/users">Users</Link>
        </ListItem>
        <ListItem>
          <Link to="/admin/groups">Groups</Link>
        </ListItem>
      </List>
    </nav>
  </>
);

export default AdminNavPage;
