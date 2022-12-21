import { useState } from "react";

function State(){

    const [name, setName] = useState('Charles'); // Convention de nommage
    // const [toto, truc] = useState('Melvin');
    // 1 valeur du state, 2 fonction de mise à jour du state

    const Func1 = () => {
        setName('Guillaume');
    }
    
    const Func2 = () => {
        setName(name + ' L.');
    }

    const Func3 = (curr) => {
        setName(
            (curr) => curr + ' P.'
        );
    }

    return (
        <>
            <button onClick={Func1}>Fn1</button>
            <button onClick={Func2}>Fn2</button>
            <button onClick={Func3}>Fn3</button>
            {name}
        </>
    )
}
export default State