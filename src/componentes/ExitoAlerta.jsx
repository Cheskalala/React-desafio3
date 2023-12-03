import React from "react";

const ExitoAlerta = ({ mensaje }) => {
  return (
    <div className="alert alert-success mt-3" role="alert">
        {mensaje}
    </div>
  );
};

export default ExitoAlerta;