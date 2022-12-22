import { Component } from "react";

class CycleDeVie extends Component{
    constructor(props){
        super(props);
        this.state = {
            date : new Date()
        }
    }

    componentDidMount(){
        // Viens de se lancer et j'exécute cette fonction
        console.log('Mount');
        this.timer = setInterval(() => {
            this.setState({
                date : new Date()
            });
        }, 1000)
    };

    componentDidUpdate(){
        // Dès qu'il y a une mise à jour du component
        console.log('Update');
        // this.setState({
        //     date : new Date()
        // });
    };

    componentWillUnmount(){
        console.log('Unmount');
        clearInterval(this.timer);
    };

    render() {
        return(
            <p>
                Heure : {this.state.date.toLocaleTimeString()}
            </p>
        )
    }
}
export default CycleDeVie