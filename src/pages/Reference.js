import React, { useState } from "react";
import { useParams } from "react-router-dom";
import MatchList from "../components/MatchList";

const DEFAULT_MATCH = [
    {
        id    : 1,
        name  : "France - Japon",
        score : "1 - 1"
    },
    {
        id    : 2,
        name  : "Tunisie - France",
        score : "2 - 1"
    },
    {
        id    : 3,
        name  : "France - Qatar",
        score : "0 - 3"
    }
]

const Reference = () => {
    const [score, setScore] = useState(0);

    const newScore = () => {
        // console.log("Render", score);
        setScore((curr) => curr + 2);
        // setScore(score + 1);
    };

    const [info, setInfo] = useState(DEFAULT_MATCH);

    const onDelete = (infoId) => {
        setInfo( (curr) => curr.filter((info) => info.id !== infoId ));
    };

    const matchList = info.map( (info) => {
        return(
            <>
            <button className="delete" onClick={()=>onDelete(info.id)}>
                ❌
            </button>
            <MatchList name={info.name} content={info.score}/>
            </>
            
        );
    });

    const { id } = useParams();
    return (
        <div className="Reference">
            ZA WARUDOOOO ! Toki wo tomare {id} Byōkan !!
            <br/>
            {score}
            <br/>
            <button onClick={newScore}>But !!</button>
            {matchList}
        </div>
    );
    
}

export default Reference