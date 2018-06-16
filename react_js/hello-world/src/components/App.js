import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import Header from './header/Header';
import Footer from './footer/Footer';
import Content from './content/Content';

// Data
import items from '../data/menu';

class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };

  render() {
    const {children} = this.props;

    return (
      <div className="App">
        <Header title="Test app" items={items} />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
