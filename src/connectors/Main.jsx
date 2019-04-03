import * as React from 'react';
import ReactDOM from 'react-dom';

import Toggle from '../components/Toggle';
import ImageBox from '../components/ImageBox';


class Main extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      items: [
        { id: 1, active: false, label: 'Barcelona', image: '/media/bynder-barcelona.jpg' },   // list the toggles with the labels on the left
        { id: 2, active: false, label: 'San Mateo', image: '/media/bynder-san-mateo.jpg' },
        { id: 3, active: false, label: 'Boston', image: '/media/bynder-boston.jpg' },
      ]
    }

    this.renderToggle = this.renderToggle.bind(this);
  }

  onToggle = (clickedItem) => {
    this.setState({
      items: [this.state.items.map()]
    });

<<<<<<< HEAD
    const newState = {
      items: this.state.items.map(item => item.id === clickedItem.id
        ? { 
            ...item, // id: 1, active: true, 
            active: !item.active 
          } 
        : item
      )
    };
    
    this.setState( newState, () => console.log(this.state) );
  }

  renderToggle (item, index) {
    return (
      <React.Fragment>
        <Toggle
          checked={item.active}
          key={index}
          labelValue={item.label}
          onToggle={ () => this.onToggleClick(item) }
        />
        {
          item.active ? (<ImageBox image={item.image}/>) : null
        }
      </React.Fragment>
    );
=======
  changeItem = (item) => {
    for (var i = 0; i < array.length; i++) {
    if (clickedItem) {
       return checked = {false};
    }
    else {
      retrun (this.items) 
    }
  }
  
  }//changeItem

  }//onToggle

 

  renderToggle (item, index) {
    return (<Toggle
      checked={item.active}
      key={index}
      onToggle={ this.onToggle(item) }
    />);
>>>>>>> 2ad8b6ceaf3ed97a7d094a76329a0264a9811b1a
  }

  render () {
    return (
      <React.Fragment>
        {this.state.items.map(this.renderToggle)}        
      </React.Fragment>
    )
  }
}

export default Main;
