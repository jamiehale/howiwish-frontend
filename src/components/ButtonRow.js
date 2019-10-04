import styled from 'styled-components';

const ButtonRow = styled.div`
  display: flex;

  > * + * {
    margin-left: 8px;
  }
`;

export default ButtonRow;
