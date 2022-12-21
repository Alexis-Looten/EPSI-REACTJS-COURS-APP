import React from "react";
// import MatchExo from "../components/MatchExo";
import CycleDeVie from "../components/CycleDeVie";
import State from "../components/Hook/State";
import Effect from "../components/Hook/Effect";
import Memo from "../components/Hook/Memo";

function Home(props){
    const divStyle = {
        color : props.color,
        fontSize:props.sizeText + 'px',
    };
    return(
        <>
        <div className="Home">
            Kono {props.name} da !
            He is {props.age} years old !
            <p style={divStyle}><i>{props.children}</i></p>
            <br/>
            <CycleDeVie/>
            <br/><br/>
            <State/>
            <br/><br/>
            <Effect/>
            <br/><br/>
            <Memo/>
        </div>
        {/* <MatchExo></MatchExo> */}
        </>
    );
}

export default Home;