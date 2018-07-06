// Dependencies
import React, { Component } from 'react';

// Assets
import '../App.css';

class Header extends Component { 
    render() {
        const {copyRight = '&copy; TestApp 2018'} = this.props;

        return (
            <div className="App-Footer">
                <p>{copyRight}</p>
            </div>
        );
  }
}

export default Header;
