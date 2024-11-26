import React from "react";

function ProfileCard(props){


    return(<div>
        <h3>hello {props.name} from {props.city} - {props.role}</h3>

    </div>)

}

export default ProfileCard;