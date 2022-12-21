import { useEffect, useRef } from "react";
import useTimerParser from "./useTimerParser";

function Ref(){

    const text = useRef(null);

    useEffect(() => {
        console.log(text);
        text.current.classList = "center";
        console.log(text.current.innerText);
    }, []);

    const {parseSecondtoHMS} = useTimerParser();

    return (
        <>
            <p ref=  { text }>
                Hello
                <br/>
                {parseSecondtoHMS(5874)}
            </p>
        
        </>
    )
}
export default Ref;