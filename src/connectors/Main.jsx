import * as React from 'react';
import ReactDOM from 'react-dom';

import Toggle from '../components/Toggle';

// To get an idea about the Array Object in Javascript
// class Array extends Object {
//   // ...
//
//   function map( myFunction ) {
//     // ...
//     for (var i = 0; i < array.length; i++) {
//
//       myFunction(items[i], i, items)
//
//     }
//
//   }
// }

// We can create an instance of the Array object like this:
// const myArray = [];
// const myArray = new Array();

class Main extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      items: [
        { id: 1, active: true },
        { id: 2, active: true },
        { id: 3, active: false },
      ]
    }

    this.renderToggle = this.renderToggle.bind(this);
  }

  onToggleClick (clickedItem) {
    // let foundItem = this.state.items.find( item => item.id === clickedItem.id );
    // foundItem.active = !foundItem.active;

    const findAndModifyClickedItem = (...) => {
      if (...) {
        return ...
      }

      return ...
    };

    const newState = {
      items: this.state.items.map(findAndModifyClickedItem)
    };

    this.setState( newState );
  }

  renderToggle (item, index) {
    return (<Toggle
      checked={item.active}
      key={index}
      onToggle={ () => this.onToggleClick(item) }
    />);
  }

  render () {
    return (
      <React.Fragment>
        {
          this.state.items.map(this.renderToggle)
        }
      </React.Fragment>
    )
  }
}

export default Main;
