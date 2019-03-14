import * as React from 'react';
import ReactDOM from 'react-dom';

import Main from '../src/connectors/Main';

const App = () => {
  return <Main/>;
  
}

ReactDOM.render(
  App(),
  document.getElementById('root')
);
