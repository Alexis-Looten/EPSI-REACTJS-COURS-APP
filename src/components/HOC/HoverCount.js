import React from "react";
import Counter from "./Counter";

class OverCount extends React.Component {

    render() {
        return(
            <p onMouseOver={this.props.increment}>Survolé {this.props.count} fois</p>
        )
    }
}

export default Counter(OverCount);