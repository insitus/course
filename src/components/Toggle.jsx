import * as React from 'react';
import styled from 'styled-components';

const Check = styled.input``;
const ToggleSpan = styled.span``;
const Container = styled.label`
  background-color: red;
`;

const Toggle = (props) => {
  return (
    <Container className="toggle-wrapper">
      <Check type="checkbox" checked={props.checked} onClick={props.onToggle}/>
      <ToggleSpan className="toggle"/>
    </Container>
  );
};

export default Toggle;
