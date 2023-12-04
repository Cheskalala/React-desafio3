import { useState } from "react";
import Alerta from "./Alerta";
import ExitoAlerta from "./ExitoAlerta";

const Formulario = ({ agregarNuevoColaborador }) =>{
  //Estados del formulario
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [edad, setEdad] = useState("");
  const [cargo, setCargo] = useState("");
  const [telefono, setTelefono] = useState("");
  //Estado para los errores
  const [error, setError] = useState(false);
  const [exito, setExito] = useState(false);
  //Función antes de enviar el formulario

  const validarDatos = (e) => {
    e.preventDefault();
    if (nombre && correo && edad && cargo && telefono) {
      // Crear un objeto para el nuevo colaborador
      const nuevoColaborador = {
        id: Date.now().toString(), // Generar un ID único para el nuevo colaborador
        nombre,
        correo,
        edad,
        cargo,
        telefono
      };
      // Llamar a la función para agregar el nuevo colaborador
      agregarNuevoColaborador(nuevoColaborador);
      // Limpiar los campos después de agregar el nuevo colaborador
      setNombre('');
      setCorreo('');
      setEdad('');
      setCargo('');
      setTelefono('');

      setExito(true)
      setError(false)
    } else {

      setError(true)
      setExito (false)
    }
  };
  return (
    <>
    
      <form className="formulario text-center p-5" onSubmit={validarDatos}>
        <div className="form-group">
          <label>Nombre</label>
          <input type="text" name="nombre" className="form-control" onChange={(e) => setNombre(e.target.value)} value={nombre} />
        </div>
        <div className="form-group">
          <label>Correo</label>
          <input
            type="email"
            name="email"
            className="form-control"
            onChange={(e) => setCorreo(e.target.value)}
            value={correo}
            />
        </div>
        <div className="form-group">
          <label>Edad</label>
          <input
            type="edad"
            name="edad"
            className="form-control"
            onChange={(e) => setEdad(e.target.value)}
            value={edad}
            />
        </div>
        <div className="form-group">
          <label>Cargo</label>
          <input
            type="cargo"
            name="cargo"
            className="form-control"
            onChange={(e) => setCargo(e.target.value)}
            value={cargo}
            />
        </div>
        <div className="form-group">
          <label>Teléfono</label>
          <input
            type="telefono"
            name="telefono"
            className="form-control"
            onChange={(e) => setTelefono(e.target.value)}
            value={telefono}
            />
        </div>
        <button type="submit" className="btn btn-warning py-3 px-5 mt-5 text-white fw-bold">
          Agregar colaborador
        </button>
        {error && <Alerta mensaje="Todos los campos son obligatorios" />}
        {exito && <ExitoAlerta mensaje="Formulario enviado exitosamente" />}
      </form>
      


    </>
  );
};
export default Formulario;