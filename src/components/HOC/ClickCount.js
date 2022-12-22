import React from "react";
import Counter from "./Counter";

class ClickCount extends React.Component {

    render() {
        return(
            <button onClick={this.props.increment}>Cliqué {this.props.count} fois</button>
        )
    }
    
}

export default Counter(ClickCount);