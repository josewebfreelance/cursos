// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Assets
import logo from '../../assets/img/logo.svg';
import '../App.css';
import './header.css';

class Header extends Component {
    
    static propTypes = {
        title: PropTypes.string.isRequired,
        items: PropTypes.array.isRequired
    };

    render() {
        const {title, items} = this.props;

        return (
            <div className="App-Header">
                <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">{title}</h1>

                <ul className="menu">
                    {items && items.map((item, key) => <li key="{key}">{item.title}</li>)}
                </ul>
                </header>
            </div>
        );
  }
}

export default Header;