import styled from 'styled-components';

const TextInput = styled.input.attrs(({
  type = 'text',
}) => ({
  type,
}))`
  display: block;
  margin: 0px;
  padding: var(--s-3) 0px;
  width: 100%;
  font-size: var(--s0);
`;

export default TextInput;
