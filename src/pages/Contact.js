import React from "react";
import Form from "../components/Form";

function ListItem(props) {
    return (<li className={props.key}>{props.value}</li>)
}

class Contact extends React.Component {
    constructor(props){
        super(props);
        const number = [1,3,5,2,7];
        this.listItem = number.map( 
            (number) => <ListItem key={number.toString()} value={number}></ListItem> 
            );
    }

    render() {
        return(
            <div className="Contact">
                36.30.36.30 allo père noel !!!
                <Form/>
                <div>
                    <ul>{this.listItem}</ul>
                </div>
            </div>
        )
    }
}

export default Contact