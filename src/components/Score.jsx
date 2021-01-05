import React from "react";

const Score=(props)=>{
    return(
        <ul>
           { console.log(props.scores)}
            {props.scores.map((score)=>
            <li>
                Scored: {score.score} on {score.date}
            </li>
            )}
        </ul>
    )
}

export default Score