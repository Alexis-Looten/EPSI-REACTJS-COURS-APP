import React from "react";

function Home(props){
    const divStyle = {
        color : props.color,
        fontSize:props.sizeText + 'px',
    };
    return(
        <div className="Home">
            Kono {props.name} da !
            He is {props.age} years old !
            <p style={divStyle}><i>{props.children}</i></p>
        </div>
    );
}

export default Home;