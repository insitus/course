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
        { id: 1, active: true, label: 'Damian' },   // list the toggles with the labels on the left
        { id: 2, active: true, label: 'Frans' },
        { id: 3, active: false, label: 'Pizza' },
      ]
    }

    this.renderToggle = this.renderToggle.bind(this);
  }

  onToggle(clickedItem) {
    this.setState({
      // items: [...this.state.items.map(changeItem)],
      items: [...this.state.items.map(changeItem)],
    });

    function changeItem(item) {
      if (item.id === clickedItem.id) {
        return {...item, active: !item.active};
        //item.active = !item.active;
        //return item;
      }
      else {
        return item;
      }
    } //changeItem
  } //onToggle

  renderToggle (item, index) {
    return (<Toggle
      checked={item.active}
      key={index}
      onToggle={() => this.onToggle(item) }
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
