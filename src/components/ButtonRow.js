import styled from 'styled-components';

const ButtonRow = styled.div`
  display: flex;

  > * + * {
    margin-left: var(--s-2);
  }
`;

export default ButtonRow;
