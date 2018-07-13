import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from '../../logo.svg';

import NavBar from '../navbar/Navbar';

import '../../style-components/output/content.css';

const items = [
    {menu: 'Inicio'},
    {menu: 'Nosotros'}
  ];  

class Content extends Component {
    static propTypes = {
        positionContent: PropTypes.string,
        body: PropTypes.object.isRequired
    }
    render() {
        const { positionContent, body } = this.props;

        let classNamePosition = "";

        if (positionContent === 'vertical') {
            classNamePosition = 'vertical-content';
        } else if (positionContent === 'horizontal') {
            classNamePosition = 'horizontal-content';
        }

        return (
            <div className={'content ' + (classNamePosition)}>
                <NavBar items={items} align={'right'}/>
                <div className="main-content">{body}</div>
            </div>
        );
    }
}

export default Content;