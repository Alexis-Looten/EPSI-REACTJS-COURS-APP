import { useState, useMemo } from "react";

function Memo(){

    const [isVisibleClock, setIsVisibleClock] = useState(true);

    const ToggleClock = () => {
        setIsVisibleClock(!isVisibleClock);
        console.log(isVisibleClock)
    };

    const display = useMemo( () => {
        return(
            <>
                {console.log('MEMO >>>>', isVisibleClock)}
                {isVisibleClock? 'Visible' : 'Non visible'}
            </>
        )
    }, [isVisibleClock])

    return (
        <>
            <button onClick={ToggleClock}>Change visible</button>
            {display}
            
        </>
    )
}
export default Memo;