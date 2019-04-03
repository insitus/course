import * as React from 'react';
import ReactDOM from 'react-dom';

import Toggle from '../components/Toggle';
import ImageBox from '../components/ImageBox';
import styled from 'styled-components';

const Listitems = styled.ul`
  width: 400px;
`;

const Listitem = styled.li`
  list-style-type: none;
  padding-right: 20px;
  float: left;
  width: 400px;
`;


class Main extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      items: [
        { id: 1, active: true, label: 'Barcelona', image: '/media/bynder-barcelona.jpg' },   // list the toggles with the labels on the left
        { id: 2, active: true, label: 'San Mateo', image: '/media/bynder-san-mateo.jpg' },
        { id: 3, active: true, label: 'Boston', image: '/media/bynder-boston.jpg' },
      ]
    }

    this.renderToggle = this.renderToggle.bind(this);
  }

  onToggle(clickedItem) {
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
      <Listitem>
        <Toggle
          checked={item.active}
          key={index}
          labelValue={item.label}
          onToggle={ () => this.onToggle(item) }
        />
        {
          item.active ? (<ImageBox image={item.image}/>) : null
        }
      </Listitem>
    );
  }

  render () {
    return (
      <React.Fragment>
        <Listitems>
          {this.state.items.map(this.renderToggle)}  
        </Listitems>
      </React.Fragment>
    )
  }
}

export default Main;
