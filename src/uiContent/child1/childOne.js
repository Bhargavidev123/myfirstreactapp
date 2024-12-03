import React from "react";
import Child2 from "./childTwo";
function Child1(props){
    return(<>
    <h1>i am child one</h1>
    <h1>{props.c1}</h1>

    {/* <Child2 bhargavi={props.c2}/> */}
    </>)
}
export default Child1;


