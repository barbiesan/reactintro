import React, { Component } from 'react'
import Button from '../components/Button';


export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
    }

    handleButtonClick = (step) => {
        this.setState({count: this.state.count + step})
    }

    render() {
        const myButtonSteps = [1, 10, 100, 1000]
        return (
            <>
                <h1>Hello World</h1>
                <h4>Current Value: {this.state.count}</h4>
                {myButtonSteps.map((step, i) => <Button step={step} handleClick={this.handleButtonClick} key={i} />)}
                
            </>
        )
    }
}