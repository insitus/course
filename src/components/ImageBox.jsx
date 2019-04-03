import * as React from 'react';
import styled from 'styled-components';

const Imagecontainer = styled.div`
  text-align: center;
  width: 500px;
  max-width: 480px;
  max-height: auto;
`;

const ImageBox = props => (
  <Imagecontainer>
    <img src={props.image} />
  </Imagecontainer>
);

export default ImageBox;
