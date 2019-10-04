import styled from 'styled-components';

const TextInput = styled.input.attrs(({
  type = 'text',
}) => ({
  type,
}))`
  display: block;
  margin: 0px;
  width: 100%;
  height: 2rem;
  font-size: 1rem;
`;

export default TextInput;
