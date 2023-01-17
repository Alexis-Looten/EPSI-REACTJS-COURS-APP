import React, {lazy, Suspense} from "react";

// const MyCompo = lazy( () => import('./CycleDeVie.js'));

const MyCompo = lazy( () => {
    let promesse = new Promise( (resolve) => {
        return setTimeout( () => {
            resolve()
        }, 3000);
    });
    return promesse.then( ()=> { return import('./CycleDeVie.js')} );
});

function Loader () {
    return (
        <Suspense fallback={<p>Chargement...</p>}>
            <MyCompo/>
        </Suspense>
    );
}

export default Loader;