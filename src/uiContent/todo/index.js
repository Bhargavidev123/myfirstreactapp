import React, { Component } from "react";
class Todo extends Component {
  constructor(){
    super();
    this.state={
      todo:"",
      list:[],
    };
  }
  handleChange=()=>{

  }
  

  render() {
    return (
      <>
        <div>
            <form>
                <input type='text'name='todo'id='todo' onChange={this.handleChange}/>
            </form>
        </div>
      </>
    );
  }
}
export default Todo;


