import styled from 'styled-components';
import { theStack } from '../every-layout';

const UnorderedList = styled.ul`
  list-style-type: none;
  padding: 0px;
  ${theStack('var(--s1)')}
`;

export default UnorderedList;
