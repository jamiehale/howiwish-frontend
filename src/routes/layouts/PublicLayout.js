import React from 'react';
import { Link } from 'react-router-dom';

const PublicLayout = ({
  component: Component
}) => (
  <div>
    <h1>Public Layout</h1>
    <nav>
      <Link to="/login">Login</Link>
    </nav>
    <Component />
  </div>
);

export default PublicLayout;
