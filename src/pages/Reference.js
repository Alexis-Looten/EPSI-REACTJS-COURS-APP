import React from "react";
import { useParams } from "react-router-dom";

const Reference = () => {
    const { id } = useParams();
    return (
        <div className="Reference">
            Nos references : {id}
        </div>
    );
}

export default Reference