import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import '../../style-components/output/navbar.css';

class NavBar extends Component {

    static propTypes = {
        items: PropTypes.array.isRequired,
        align: PropTypes.string,
        positionContent: PropTypes.string,
        nameClass: PropTypes.string,
    }

    render() {
        const {items, align, positionContent, nameClass} = this.props;

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
            <div className={"nav-bar " + (classNamePosition + nameClass)}>
                <ul className={classNameAlign}>
                    { 
                        items.map((item, key) =>
                            <li key={key}><Link to={`${item.url}`}>{item.menu}</Link></li>
                        )
                    }
                </ul>
            </div>
        );
    }
}

export default NavBar;