import * as React from 'react';
import styled from 'styled-components';

const Check = styled.input``;
const ToggleSpan = styled.span``;
const Container = styled.label``;

const Toggle = (props) => {
  return (
    <Container className="toggle-wrapper">
      <Check type="checkbox" checked={props.checked}/>
      <ToggleSpan className="toggle"/>
    </Container>
  );
};

export default Toggle;
