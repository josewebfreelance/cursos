import React, {Component} from 'react';
import PropTypes from 'prop-types';

import '../../style-components/output/navbar.css';

class NavBar extends Component {

    static propTypes = {
        items: PropTypes.array.isRequired,
        align: PropTypes.string,
        positionContent: PropTypes.string
    }

    render() {
        const {items, align, positionContent} = this.props;

        let classNameAlign = "";
        let classNamePosition = "";

        if (align === 'left') {
            classNameAlign = 'navbar-left'; 
        } else if (align === 'center') {
            classNameAlign = 'navbar-center';
        } else if (align === 'right') {
            classNameAlign = 'navbar-right';
        }

        if (positionContent === 'vertical') {
            classNamePosition = 'vertical-content';
        } else if (positionContent === 'horizontal') {
            classNamePosition = 'horizontal-content';
        }

        return (
            <div className={"nav-bar " + (classNamePosition)}>
                <ul className={classNameAlign}>
                    { items.map((item, key) => 
                    <li key={key}><a>{item.menu}</a></li>
                    )}
                </ul>
            </div>
        );
    }
}

export default NavBar;