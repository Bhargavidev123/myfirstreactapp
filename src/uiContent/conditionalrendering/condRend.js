// import React from "react"
// function CondRend(props){
//     const user="user"
//     if (user==="admin"){
//          return(<>
//          <h1>welcome admin</h1>
//          </>)

//     }
//     else{
// return(<>
// <h1>welcome user</h1>
// </>)
//     }


// if(isLoggedin) {
//     return(
//         <>
//         <h1>login successful</h1>
//         </>
//     )
// }
//     else{
//         return(
//             <>
//             <h1>login unsuccessful</h1>
//             </>
//         )
//     }

// return.props.isLoggedin?<h1>login successful</h1>:<h1>login unsuccessful</h1>
    
   
// }

function CondRend(props){
    return props.isLoggedIn?<h1>login successful</h1>:<h1>login unsuccessful</h1>  

}
export default CondRend;