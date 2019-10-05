import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import useSession from '../../hooks/session';
import Button from '../../components/Button';
import UnorderedList from '../../components/UnorderedList';
import ListItem from '../../components/ListItem';
import { theSidebar, theCenter, theStack, theBox } from '../../every-layout';
import ButtonRow from '../../components/ButtonRow';
import Nav from '../../components/Nav';

const Container = styled.div`
  ${theCenter('800px')}
  ${theStack('var(--s1)')}
`;

const Header = styled.div``;

const Body = styled.div`
  ${theSidebar('200px', '50%', 'var(--s1)')}
`;

const InnerContainer = styled.div``;

const Sidebar = styled.div`
  ${theBox('var(--s1)', 'var(--border-thin)')}
  ${theStack('var(--s1)')}
  background: ${props => props.theme.primaryBackgroundColour};
`;

const Content = styled.div``;

const PrivateLayout = ({
  component: Component
}) => {
  const { signOut } = useSession();

  const handleClickSignOut = () => {
    signOut();
  };

  return (
    <Container>
      <Header>
        <h1>How I Wish...</h1>
      </Header>
      <Body>
        <InnerContainer>
          <Sidebar>
            <Nav>
              <UnorderedList>
                <ListItem>
                  <Link to="/my-list">My List</Link>
                </ListItem>
                <ListItem>
                  <Link to="/my-groups">My Groups</Link>
                </ListItem>
                <ListItem>
                </ListItem>
              </UnorderedList>
            </Nav>
            <ButtonRow>
              <Button onClick={handleClickSignOut}>Sign Out</Button>
            </ButtonRow>
          </Sidebar>
          <Content>
            <Component />
          </Content>
        </InnerContainer>
      </Body>
    </Container>
  );
};

export default PrivateLayout;
