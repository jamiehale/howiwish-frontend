import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import useSession from '../../hooks/session';
import Button from '../../components/Button';
import List from '../../components/List';
import ListItem from '../../components/ListItem';

const Container = styled.div`
  max-width: 700px;
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
  const { logout } = useSession();

  const handleClickLogout = () => {
    logout();
  };

  return (
    <Container>
      <IntermediaryContainer>
        <Sidebar>
          <h1>A Thing</h1>
          <nav>
            <List>
              <ListItem>
                <Link to="/my-list">My List</Link>
              </ListItem>
              <ListItem>
                <Button onClick={handleClickLogout}>Logout</Button>
              </ListItem>
            </List>
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
