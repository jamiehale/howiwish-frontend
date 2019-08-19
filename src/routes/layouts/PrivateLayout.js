import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import useSession from '../../hooks/session';
import Button from '../../components/Button';

const Container = styled.div`
  max-width: 60ch;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  border: 1px solid red;
`;

const IntermediaryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Sidebar = styled.div`
  flex-grow: 1;
  border: 1px solid green;
`;

const Body = styled.div`
  flex-basis: 0;
  flex-grow: 999;
  min-width: 50%;
`;

const PrivateLayout = ({
  component: Component
}) => {
  const { isAdmin, logout } = useSession();

  const handleClickLogout = () => {
    logout();
  };

  return (
    <Container>
      <IntermediaryContainer>
        <Sidebar>
          <h1>A Thing</h1>
          <nav>
            <ul>
              <li>
                <Link to="/my-list">My List</Link>
              </li>
              <li>
                <Button onClick={handleClickLogout}>Logout</Button>
              </li>
              {isAdmin && (
                <li>
                  <Link to="/admin">Admin</Link>
                </li>
              )}
            </ul>
          </nav>
        </Sidebar>
        <Body>
          <Component />
        </Body>
      </IntermediaryContainer>
    </Container>
  );
};

export default PrivateLayout;
