import React, { useState } from 'react';

const Buscador = ({ colaboradores, setFiltroColaboradores }) => {
  const [busqueda, setBusqueda] = useState('');

  const handleBusqueda = (e) => {
    const valorBusqueda = e.target.value;
    setBusqueda(valorBusqueda);
    const resultados = colaboradores.filter(colaborador =>
      Object.values(colaborador).some(value =>
        value.toString().toLowerCase().includes(valorBusqueda.toLowerCase())
      )
    );
    setFiltroColaboradores(resultados);
  };

  return (
    <div className="mb-3 w-25">
      <input
        type="text"
        className="form-control"
        placeholder="Buscar colaborador..."
        value={busqueda}
        onChange={handleBusqueda}
      />
    </div>
  );
};

export default Buscador;
