import React from "react"
import Child1 from "../child1/childOne";
// import CondRend from "../conditionalrendering/condRend";
import AdminComp from "../admincomp/adminComp";
import UserComp from "../usercomp/userComp";

function Parent(props){
    // return props.login==="user"?<UserComp/>:<AdminComp/>
   return <Child1 c1="im childone" c2="i am child2"/>
} 
export default Parent;