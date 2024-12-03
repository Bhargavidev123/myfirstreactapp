// import { Button } from "bootstrap";
import React,{Component} from "react"


class Counter extends Component{
    constructor(){
        super();
        this.state={counter:2,color:"red"}
    }     
    handleEvent=()=>{
        this.setState({counter:this.state.counter+1,color:"orange"})
    }   
    handleEvent1=()=>{
        this.setState({counter:this.state.counter-1,color:"green"})
    }   
    handleEvent2=()=>{
        this.setState({counter:this.state.counter+2,color:"pink"})
    } 
    handleEvent3=()=>{
        this.setState({counter:this.state.counter-2,color:"black"})
    } 
    handleEvent4=()=>{
        this.setState({counter:this.state.counter+5,color:"violet"})
    } 
    handleEvent5=()=>{
        this.setState({counter:this.state.counter-5,color:"aqua"})
    }         
    render(){

        return(<>
         <button onClick={this.handleEvent}>+1</button>
         <button onClick={this.handleEvent1}>-1</button>
         <button onClick={this.handleEvent2}>+2</button>
        <h1 style={{color:this.state.color}}> {this.state.counter}</h1>
         <button onClick={this.handleEvent3}>-2</button>
        <button onClick={this.handleEvent4}>+5</button>
        <button onClick={this.handleEvent5}>-5</button></> 
        )

       
    }
}

export default Counter;