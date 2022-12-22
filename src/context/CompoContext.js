import React from "react";

const ContextEx = React.createContext(); // return Provider and Consumer

const ProviderEx = (props) => {
    return(
        <ContextEx.Provider value={{ theme : 'light' }}>
            {props.children}
        </ContextEx.Provider>
    )
}

const Composant = () => {
    return (
        <ContextEx.Consumer>
            {context => (
                <div>Hello {context.theme}</div>
            )}
        </ContextEx.Consumer>
    );
}

const CompoContext = () => {
    return (
        <ProviderEx>
            <Composant/>
        </ProviderEx>
    );
}

export default CompoContext;