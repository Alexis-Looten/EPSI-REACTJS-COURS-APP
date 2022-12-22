import React from "react";

const Counter = Wapper => {
    class CounterW extends React.Component {
        constructor(props){
            super(props)
            this.state = {
                count : 0,
            };
        }

        increment = () => {
            this.setState( (curr) => {
                return { count : curr.count + 1};
            });
        };

        render() {
            return <Wapper {... this.props} count={this.state.count} increment={this.increment}/>
        }
    }
    return CounterW
}

export default Counter;