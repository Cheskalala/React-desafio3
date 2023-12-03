
import React, { useState } from 'react';
import { BaseColaboradores } from './componentes/BaseColaboradores'; 
import Listado from './componentes/Listado';
import Formulario from './componentes/Formulario';

const App = () => {
 
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);


  const eliminarColaborador = (id) => {
    const nuevosColaboradores = colaboradores.filter(colaborador => colaborador.id !== id);
    setColaboradores(nuevosColaboradores);
  };

  return (
    <div>
      
      <Listado colaboradores={colaboradores} eliminarColaborador={eliminarColaborador} />
      <Formulario/>
    </div>
  );
};

export default App;