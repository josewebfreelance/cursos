import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from '../../logo.svg';

import '../../style-components/output/content.css';

class Content extends Component {
    static propTypes = {
        positionContent: PropTypes.string
    }
    render() {
        const { positionContent } = this.props;

        let classNamePosition = "";

        if (positionContent === 'vertical') {
            classNamePosition = 'vertical-content';
        } else if (positionContent === 'horizontal') {
            classNamePosition = 'horizontal-content';
        }

        return (
            <div className={'content ' + (classNamePosition)}>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                    <label></label>
                </header>
                <p className="App-intro">To get started, edit <code>src/App.js</code> and save to reload.</p>
            </div>
        );
    }
}

export default Content;