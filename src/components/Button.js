import styled from 'styled-components';

const Button = styled.button.attrs({
  type: 'button',
})`
  display: block;
  padding: var(--s-2) var(--s1);
  border-radius: 3px;
  font-size: var(--s0);
`;

export default Button;
