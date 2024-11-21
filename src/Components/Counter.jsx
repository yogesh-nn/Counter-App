import { Component } from "react";

class Counter extends Component{
    constructor(props){
        super(props);
        this.state = {
            count: this.props.initialCount,
        }
    }

    increment(){
        this.setState({
            count: this.state.count + this.props.diff,
        });
    }

    decrement(){
        this.setState({
            count: this.state.count - this.props.diff,
        });
    }

    render(){
        return <div>
            <h1>Count: {this.state.count}</h1>
            <button onClick={() => this.increment()}><h3>Increment ( +{this.props.diff} )</h3></button>
            <button onClick={() => this.decrement()}><h3>Decrement ( -{this.props.diff} )</h3></button>
        </div>
    }
}

export default Counter;