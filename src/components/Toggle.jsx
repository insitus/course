import * as React from 'react';
import styled from 'styled-components';

const Check = styled.input``;
const ToggleSpan = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.2s;
  border-radius: 34px;

  :before {
    position: absolute;
    content: '';
    height: 20px;
    width: 20px;
    left: 1px;
    bottom: 1px;
    background-color: white;
    transition: 0.2s;
    border-radius: 50%;
    box-shadow: 0 2px 5px 0 rgba(0, 34, 51, 0.25);
  }
`;
const Container = styled.label`
  position: relative;
  display: inline-block;
  width: 35px;
  height: 22px;

  > input {
    display: none;
  }

  > input:checked + span {
    background-color: #00aaff;
  }

  > input:checked + span:before {
    transform: translateX(13px);
  }

  > input:focus + span {
    box-shadow: 0 0 1px #2196f3;
  }
`;

const Listitems = styled.ul`
  width: 400px;
  display: flex; 
  justify-content: space-between;
`;

const Paragraph = styled.p`
  font-family: arial;
`;

const Listitem = styled.li`
  list-style-type: none;
  padding-right: 20px;
  float: left;
`;

const Toggle = (props) => {
  return (
    <Listitems>
      <Listitem>
        <Paragraph>{props.labelValue}</Paragraph>
        <Container>
          <Check type="checkbox" checked={props.checked} onChange={props.onToggle}/>
          <ToggleSpan/>
        </Container>
      </Listitem>
    </Listitems>
  );
};

export default Toggle;
