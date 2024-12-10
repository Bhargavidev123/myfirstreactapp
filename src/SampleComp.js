import React from "react";




function Sample(){
    return(
       <table  style={{border:"2px solid black"}}>
        <tr style={{border:"2px solid black"}}>
        <th rowspan="7">11R time table</th>
        <th>S.NO</th>
        <th>Days</th>
        <th>TECHNICAL CLASS TIMINGS</th>
        <th rowspan="7" colspan="1">Break</th>
        <th>COMMUNICATION AND APPTITUDE CLASS TIMINGS</th>
    </tr >
    <tr  style={{border:"2px solid black"}}>
        
        <td>1.</td>
        <td>MONDAY</td>
        <td>8:30 AM to 10:00 AM (Harish)</td>
        <td>12:15 PM to 1:15 PM (Swathi)</td>
    </tr >
    <tr style={{border:"2px solid black"}}>
        
        <td>2.</td>
        <td>TUESDAY</td>
        <td>8:30 AM to 10:00 AM (Harish)</td>   
        <td>12:15 PM to 1:15 PM (Swathi)</td>
    </tr>
    <tr style={{border:"2px solid black"}}>
       
        <td>3.</td>
        <td>WEDNESDAY</td>
        <td>8:30 AM to 10:00 AM (Harish)</td>
        <td>12:15 PM to 1:15 PM (Swathi)</td>
    </tr>
    <tr style={{border:"2px solid black"}}>
        
        <td>4.</td>
        <td>THURSDAY</td>
        <td>8:30 AM to 10:00 AM (Harish)</td>
        <td>12:15 PM to 1:15 PM (Swathi)</td>
    </tr>
    <tr style={{border:"2px solid black"}}>
        <td>5.</td>
        <td>FRIDAY</td>
        <td>8:30 AM to 10:00 AM (Harish)</td>
        <td>12:15 PM to 1:15 PM (Swathi)</td>
    </tr>
    <tr style={{border:"2px solid black"}}>
        <td>6.</td>
        <td>SATURDAY</td>
        <td>8:30 AM to 10:00 AM (Harish)</td>
        <td>12:15 PM to 1:15 PM (Swathi)</td>
    </tr>

       </table>
    )
}

export default Sample;