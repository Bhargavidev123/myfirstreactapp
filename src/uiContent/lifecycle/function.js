import React, { useState } from "react";
export default function FunLifeCycle() {

  const [text, setText] = useState(1); //it is an initialise stage

  const handleButton1 = () => {
    setText(text =>text+1);
  }
  const handleButton2 = () => {
    setText(text =>text+2);
  }
  const handleButton3 = () => {
    setText(text =>text-1);
  }
  const handleButton4 = () => {
    setText(text =>text-2);
  }
  
  
  

  return (
    
    <div style={{
     
      display:"flex",
      flexDirection:"column",
      gap:"20px",
        border:"2px solid black",
        height:"50px",
        width:"50px",
        color:"black",
        backgroundColor:"red"
       


    }}>
     
      <h1>{text}</h1>
      <button onClick={handleButton1}>+1</button>
      <button onClick={handleButton2}>+2</button>
      <button onClick={handleButton3}>-1</button>
      <button onClick={handleButton4}>-2</button>
    </div>
  );
}
