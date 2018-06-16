// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Assets
import '../App.css';

class Content extends Component {
    static propTypes = {
        body: PropTypes.object.isRequired
    };

    hello() {
        const elemento = <h1>hello</h1>;
        return elemento;
    }
     
    render() {
        const {body} = this.props;
        return (
            <div className="App-Content">
                {body}
                <div>{this.hello()}</div>
            </div>
        );
  }
}

export default Content;
