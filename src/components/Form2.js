import React from "react";

class Form2 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            pizza : ""
        }
    }

    onClique(event){
        event.preventDefault();
        var data = new FormData(event.target);
        let formObject = Object.fromEntries(data.entries())
        console.log(formObject);
    }

    render() {
        return(
            <>
            <form onSubmit={this.onClique}>
                <label>Texte</label>
                <input type="text" defaultValue="" name="lastname" placeholder="Prénom" required/>

                <div>
                    <label htmlFor="pizza">Choix de la pizza</label>
                    <select name="pizza" id="pizza" value={this.state.pizza} onChange={ 
                        (event) => {
                            this.setState({pizza:event.target.value});
                            console.log(event.target.value)
                        }
                    }>
                        <option value="">Choix ?</option>
                        <option value="fromage">Fromage</option>
                        <option value="veggie">Veggie</option>
                        <option value="reine">Reine</option>
                    </select>
                </div>

                <div>
                    { this.state.pizza === "fromage" && (
                        <label htmlFor="supp">
                            <input type="checkbox" name="supp" id ="supp"/>
                            Avec la Fromage, vous pouvez ajouter un supplément de Kebab, en désirez-vous ?
                        </label>
                    )}
                    
                </div>


                <input type="submit" value="Envoyer" />
            </form>
            </>
        );
    }
}


export default Form2;