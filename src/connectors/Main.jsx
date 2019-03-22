import * as React from 'react';
import ReactDOM from 'react-dom';

import Toggle from '../components/Toggle';

const items = [
  { active: true }, 
  { active: true }, 
  { active: false }
];

const Main = () => {

  
  return(
    <>
    {
      items.map(
        item => <Toggle checked={item.active}/> 
      )
    }
    </>
  )
}

export default Main;
