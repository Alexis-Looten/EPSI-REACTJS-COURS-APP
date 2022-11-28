import React from "react";
import { useParams } from "react-router-dom";

const Reference = () => {
    const { id } = useParams();
    if (id > 0) {
        return (
            <div className="Reference">
                ZA WARUDOOOO ! Toki wo tomare {id} Byōkan !!
            </div>
        );
    } else {
        return (
            <div className="Reference">
               Kono dio da !
            </div>
        );
    }
    
}

export default Reference