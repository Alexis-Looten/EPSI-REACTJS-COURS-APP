import React from "react";

class Form extends React.Component{
    onClique(event){
        alert('Formulaire envoyé !')
        event.preventDefault();
    }

    render() {
        return(
            <>
            <form action="/" className="Form" onSubmit={this.onClique}>
                <label>Texte</label>
                <input type="text" defaultValue="" name="lastname"/>
                <input type="submit" value="Envoyer" />
            </form>
            <p>Bonjour à tous, <br/>
            Nous sommes le {new Date().toLocaleDateString()} et cliquez <span onClick={this.onClique}>ICI</span> </p>
            </>
        );
    }
}

export default Form;