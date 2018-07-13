import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from '../../logo.svg';

import '../../style-components/output/content.css';

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
                <div className="main-content">{body}</div>
            </div>
        );
    }
}

export default Content;