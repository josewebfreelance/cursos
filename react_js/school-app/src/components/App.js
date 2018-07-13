import React, { Component } from 'react';
import '../style-components/output/global.css';
import PropTypes from 'prop-types';

import NavBar from './navbar/Navbar';
import Content from './content/Content';

const users = {
  user: 'José'
}

const itemsSide = [
  {menu: 'Dashboard'},
  {menu: ''}
];

const positionContent = 'horizontal'

class App extends Component {

  static propTypes = {
    children: PropTypes.object.isRequired
  }

  render() {
    const { children } = this.props;
    return (
      <div className="App">
        <NavBar items={itemsSide} positionContent={positionContent} nameClass={' nav-bar-side'}/>
        <Content positionContent={positionContent} body={children}/>
      </div>
    );
  }
}

export default App;
