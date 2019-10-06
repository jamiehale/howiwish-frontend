import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const Container = styled.li`
  display: flex;
  flex-direction: column;
`;

const HeaderButton = styled(Button)`
`;

const InnerContainer = styled.div`
  opacity: ${props => (props.open ? "1" : "0")};
  max-height: ${props => (props.open ? "100%" : "0")};
  overflow: hidden;
  padding: ${props => (props.open ? "15px" : "0 15px")};
  transition: all 0.3s;
`;

const AccordionItem = ({
  children,
  open,
  label,
  onOpen,
  onClose,
}) => {
  return (
    <Container>
      <HeaderButton onClick={() => { open ? onClose() : onOpen(); }}>{label}</HeaderButton>
      <InnerContainer
        open={open}
      >
        {children}
      </InnerContainer>
    </Container>
  );
};

export default AccordionItem;
