import React from "react";
// import MatchExo from "../components/MatchExo";
import CycleDeVie from "../components/CycleDeVie";
import State from "../components/Hook/State";
import Effect from "../components/Hook/Effect";
import Memo from "../components/Hook/Memo";
import Ref from "../components/Hook/Ref";
import Compo from "../components/HOC/Compo";
import ClickCount from "../components/HOC/ClickCount";
import OverCount from "../components/HOC/HoverCount";
import Form2 from "../components/Form2";

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
            <ClickCount/>
            <OverCount/>
            <Form2/>
        </div>
        {/* <MatchExo></MatchExo> */}
        </>
    );
}

export default Home;