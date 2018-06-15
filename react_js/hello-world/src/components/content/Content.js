// Dependencies
import React, { Component } from 'react';

// Assets
import '../App.css';

class Content extends Component {
    constructor() {
        super();

        this.state = {
          count: 0,
          number1: 0,
          number2: 0,
          result: 0
        };

        this.handleCountClick = this.handleCountClick.bind(this);
        this.handleResultClick = this.handleResultClick.bind(this);
        this.handleInputChanged = this.handleInputChanged.bind(this);
    }

    handleCountClick(e) {
        if (e.target.id === 'add') {
            this.setState({
                count: this.state.count + 1
            });
        } else if (e.target.id === 'delete' && this.state.count > 0) {
            this.setState({
                count: this.state.count - 1
            });
        } else {
            this.setState({
                count: this.state.count = 0
            });
        }
    }

    handleResultClick(e) {
        this.setState({
            result: this.state.number1 + this.state.number2
        });
    }

    handleInputChanged(e) {
        if (e.target.id === 'number1') {
            this.setState({
                number1: Number(e.target.value)
            });
        } else {
            this.setState({
                number2: Number(e.target.value)
            });
        }
    }

    componentDidMount() {
        this.setState({
            count: 5
        });
    }
     
    render() {
        return (
            <div className="App-Content">
                <p>{this.state.count}</p>
                <button id="add" onClick={this.handleCountClick}>+</button>
                <button id="delete" onClick={this.handleCountClick}>-</button>
                <button id="reset" onClick={this.handleCountClick}>Reset</button>

                <h2>Calculadora</h2>

                <input type="number" id="number1" value={this.state.number1} onChange={this.handleInputChanged} />
                <input type="number" id="number2" value={this.state.number2} onChange={this.handleInputChanged}  />

                <button id="result" onClick={this.handleResultClick}>=</button>

                <label>{this.state.result}</label>
            </div>
        );
  }
}

export default Content;
