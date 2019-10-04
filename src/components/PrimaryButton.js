import styled from 'styled-components';
import Button from './Button';

const PrimaryButton = styled(Button)`
  color: ${props => props.theme.primaryColour};
  background: ${props => props.theme.primaryBackgroundColour};
`;

export default PrimaryButton;
