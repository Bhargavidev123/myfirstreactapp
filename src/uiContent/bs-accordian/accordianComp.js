import React from "react";
import Accordion from 'react-bootstrap/Accordion';


function Accordian(props){
    return(
    // <div>
    //     <Accordian>
    //         <Accordian.Item>
    //             <Accordian.Header>{props.title}</Accordian.Header>
    //                 <Accordian.Body>
                       

    //                 </Accordian.Body>
               
    //         </Accordian.Item>
    //     </Accordian>
    //     <h1>hello</h1>
    // </div>
    <Accordion>
    <Accordion.Item>
        <Accordion.Header>{props.title}</Accordion.Header>
        <Accordion.Body>
            {<img src={props.img} style={{height:"100px"}}/>} 
            </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    )
}
export default Accordian; 