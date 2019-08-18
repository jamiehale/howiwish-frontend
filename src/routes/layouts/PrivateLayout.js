import React from 'react';
import { Link } from 'react-router-dom';
import useSession from '../../hooks/session';
import Button from '../../components/Button';

const PrivateLayout = ({
  component: Component
}) => {
  const { isAdmin, logout } = useSession();

  const handleClickLogout = () => {
    logout();
  };

  return (
    <div>
      <h1>Private Layout</h1>
      <nav>
        <Button onClick={handleClickLogout}>Logout</Button>
        {isAdmin && (
          <Link to="/admin">Admin</Link>
        )}
      </nav>
      <Component />
    </div>
  );
};

export default PrivateLayout;
