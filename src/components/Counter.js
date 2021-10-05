import React from "react";


class Counter extends React.Component{
    constructor(props){
        super(props)
        this.state={
           counter:0
        }
    }

    increment = () => this.setState({counter:parseInt(this.state.counter)+1})
    decrement = () => this.setState({counter:this.state.counter-1})

    // updateInputValue=(evt)=>{
    //     this.setState({
    //       counter: evt.target.value
    //     });
    // };


    render(){
        const btn={
            margin:10,
            borderRadius : 5,
            shadow : 5
            
        };
        return(
          <div>
                <h1>Counter Component using setState</h1>
                <h2>Counter current state : {this.state.counter}</h2>
                <input type="number" value={this.state.counter} onChange={evt => this.setState({counter : evt.target.value})} /><br/>
                <button className="buttonInc" style={btn} onClick={this.increment}>Increment</button>
                <button className="buttonDec" style={btn} onClick={this.decrement}>Decrement</button>
          </div>  
        );
    }
}

export default Counter;