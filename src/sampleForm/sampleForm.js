import React,{Component} from "react";

class Sampleform extends Component{
   
        constructor(){
            super();
            this.state={fname:"",fullname:"",sname:"",mob:""};
        }
        handleChange=(event)=>{
            // console.log(event.target.value);
            
            // console.log(event.target.value);
            const {name,value}=event.target;
            this.setState({[name]:value});
// if(event.target.name =="fname"){
//             this.setState({fname:value});
// }  
// else if(event.target.name=="sname"){
//     this.setState({sname:value})
// }     
    };
    handleSubmit=(event)=>{
       event.preventDefault(); 
      this.setState({fullname: this.state.fname+this.state.sname+this.state.mob});
    };
    render(){
        return(
        <div>
          <form onSubmit={this.handleSubmit}>
            <input type="text" name="fname" onChange={this.handleChange}/>
            <input type="text" name="sname" onChange={this.handleChange}/>
            <input type="text" name="mob" onChange={this.handleChange}/>
            <input type="submit"/>
            </form> 
            <h1>{this.state.fullname}</h1> 


        </div>)
    }
}
export default Sampleform;