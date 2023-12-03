import React from "react";

const Alerta = ({ mensaje }) => {
    return (
        <div className="alert alert-danger mt-3" role="alert">
            {mensaje}
        </div>
    );
};

export default Alerta;