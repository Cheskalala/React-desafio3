import React, { useState } from 'react';
import { BaseColaboradores } from './componentes/BaseColaboradores'; 
import Listado from './componentes/Listado';
import Formulario from './componentes/Formulario';
import 'bootstrap/dist/css/bootstrap.min.css';
import Buscador from './componentes/Buscador';

const App = () => {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [filtroColaboradores, setFiltroColaboradores] = useState([]);

  const eliminarColaborador = (id) => {
    const nuevosColaboradores = colaboradores.filter(colaborador => colaborador.id !== id);
    setColaboradores(nuevosColaboradores);
  };

  const agregarNuevoColaborador = (nuevoColaborador) => {
    setColaboradores([...colaboradores, nuevoColaborador]);
  };

  return (
    <div className='m-5'>
    <h1>Lista de Colaboradores </h1>
    <Buscador colaboradores={colaboradores} setFiltroColaboradores={setFiltroColaboradores} />
    <div className='d-flex flex-column flex-md-column flex-lg-row'>
      <Listado colaboradores={filtroColaboradores.length > 0 ? filtroColaboradores : colaboradores} eliminarColaborador={eliminarColaborador} />
      <Formulario agregarNuevoColaborador={agregarNuevoColaborador} />
    </div>
    </div>
  );
};

export default App;
