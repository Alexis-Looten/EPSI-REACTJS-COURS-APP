import { useState, useEffect } from "react";

function Effect(){

    const [clock, setClock] = useState(new Date());

    const [toggle, setToggle] = useState(true);

    // useEffect( () => {
    //     setClock(new Date());
    // }, [toggle]);


    useEffect( () => {
        setInterval( () => {
            setClock(new Date());
        })
    }, [])

    const toggler = () => {
        console.log('Change !!');
        setToggle(!toggle);
    }

    return (
        <>
            <button onClick={toggler}>Update</button>
            {clock.toLocaleTimeString()}
        </>
    )
}
export default Effect;