import styled from 'styled-components';

const FieldSet = styled.fieldset`
  margin: 0px;
  padding: 0px; 0px 16px 0px;
  border: none;

  > * + * {
    margin-top: 16px;
  }
`;

export default FieldSet;
