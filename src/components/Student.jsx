import React from "react";
import Score from './Score';


const Student=(props)=>{
    return(
        <div>  
            <h1>{props.studentInfo.name}</h1>
            <p>{props.studentInfo.bio}</p>
                <Score scores={props.studentInfo.scores}/>

        </div>
    )
}

export default Student