import React, { Component } from 'react';
import './style-components/output/global.css';

import NavBar from './components/navbar/navbar';
import Content from './components/content/content';

const users = {
  user: 'José'
}

const items = [
  {menu: 'Inicio'},
  {menu: 'Nosotros'}
]

const positionContent = 'horizontal'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar items={items} align={'right'} positionContent={positionContent}/>
        <Content positionContent={positionContent}/>
      </div>
    );
  }
}

export default App;
