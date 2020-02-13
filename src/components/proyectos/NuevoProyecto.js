import React, {Fragment, useContext, useState} from 'react';
import proyectoContext from "../../context/proyectos/proyectoContext";

const NuevoProyecto = () => {

  // obtener el state del formulario
  const proyectosContext = useContext(proyectoContext);
  const { formulario, mostrarFormulario, agregarProyecto, errorFormulario, mostrarError } = proyectosContext;

  // project state
  const [proyecto, guardarProyecto] = useState({
    nombre: ''
  });

  const {nombre} = proyecto;

  // input read
  const onChanceProyecto = (e) => {
    guardarProyecto({
      ...proyecto,
      [e.target.name]: e.target.value
    });
  };

  // form submit
  const onSubmitProyecto = (e) => {
    e.preventDefault();

    // project validation
    if (nombre === '') {
      mostrarError();
      return;
    }

    // add to state
    agregarProyecto(proyecto);

    // reset form
    guardarProyecto({
      nombre: ''
    });
  };

  return (

    <Fragment>
      <button
        type="button"
        className="btn btn-block btn-primario"
        onClick={() => mostrarFormulario()}
      >
        Nuevo Proyecto
      </button>
      {
        formulario
        ? (
            <form
              onSubmit={onSubmitProyecto}
              className="formulario-nuevo-proyecto"
            >
              <input
                type="text"
                className="input-text"
                placeholder="Nombre proyecto"
                name="nombre"
                value={nombre}
                onChange={onChanceProyecto}
              />

              <input
                type="submit"
                className="btn btn-primario btn-block"
                value="Agregar proyecto"
              />
            </form>
          )
          : null
      }

      {
        errorFormulario
          ?
            (
            <p className="mensaje error">El nombre del proyecto es obligatorio</p>
            )
          : null
      }
    </Fragment>

  );
};

export default NuevoProyecto;
