import React, {Fragment, useContext} from 'react';
import Tarea from "./Tarea";
import proyectoContext from "../../context/proyectos/proyectoContext";

const ListadoTareas = () => {

  // extraemos el context - extraemos las funciones y variables que contiene
  const proyectosContext = useContext(proyectoContext);
  const { proyecto, eliminarProyecto } = proyectosContext;

  // extrar proyecto actual
  if (!proyecto) {
    return <h2>Selecciona un proyecto</h2>
  }

  // extraemos el primer elemento, ya que el proyecto es un array y no un objeto
  const [ proyectoActual ] = proyecto;

  const tareas = [
    {nombre: 'Tarea 1', estado: true},
    {nombre: 'Tarea 2', estado: false},
    {nombre: 'Tarea 3', estado: false},
    {nombre: 'Tarea 4', estado: true},
  ];

  // eliminar proyecto
  const onClickEliminar = () => {
    eliminarProyecto(proyectoActual.id);
  };

  return (
    <Fragment>
      <h2>Proyecto: {proyectoActual.nombre}</h2>
      <ul className="listado-tareas">
        {tareas.length === 0
        ?
          <li className="tarea">No hay tareas</li>
        :
          (
            tareas.map((tarea) => (
              <Tarea tarea={tarea}/>
            ))
          )
        }
      </ul>

      <button type="button" className="btn btn-eliminar" onClick={onClickEliminar}>
        Eliminar Proyecto &times;
      </button>
    </Fragment>
  );
};

export default ListadoTareas;
