import { useMemo, useCallback } from "react";

function Callback(){

    const values = [7,6,4,8,50,42,9];
    const values2 = [7,6,4,8,50,42,9];


    const memoRize = useMemo( () => values.sort(), [values]);

    const memoRizeFunct = useCallback( () => values.sort(), [values]);

    return (
        <>
            {console.log('MEMO >>',memoRize, values)}
            {console.log('CALL >>',memoRize, values2)}
        </>
    )
}
export default Callback;