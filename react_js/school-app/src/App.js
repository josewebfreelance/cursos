import React, { Component } from 'react';
import './style-components/output/global.css';

import NavBar from './components/navbar/navbar';
import Content from './components/content/content';

const users = {
  user: 'José'
}

const itemsSide = [
  {menu: 'Dashboard'},
  {menu: ''}
];

const positionContent = 'horizontal'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar items={itemsSide} positionContent={positionContent} nameClass={' nav-bar-side'}/>
        <Content positionContent={positionContent}/>
      </div>
    );
  }
}

export default App;
