import React from "react";

const Alert = (Composant) => {
    return class AlertComposant extends React.Component {
        componentDidMount() {
            alert('Composant a été monté');
        }

        render() {
            return <Composant {...this.props}/>
        }
    }
}

export default Alert;