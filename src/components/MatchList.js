import React from "react";
import '../styles/MatchList.css';

function MatchList(props) {
    return(
        <div className="itemMatch">
            <p>{props.name}</p>
            <i>{props.content}</i>
        </div>
    );
}

export default MatchList;