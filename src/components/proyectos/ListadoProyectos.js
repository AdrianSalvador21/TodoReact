import React, {useContext, useEffect} from 'react';
import Proyecto from "./Proyecto";
import proyectoContext from "../../context/proyectos/proyectoContext";

const ListadoProyectos = () => {

  // projects of initial state
  const proyectosContext = useContext(proyectoContext);
  const { proyectos, obtenerProyectos } = proyectosContext;

  useEffect(()=> {
    obtenerProyectos();
  }, []);

  // validate projects length
  if (proyectos.length === 0) return  <p>No hay proyectos, comienza agregando uno</p>;

  return (
    <ul className="listado-proyectos">
      {proyectos.map(proyecto => (
        <Proyecto proyecto={proyecto} key={proyecto.id} />
      ))}
    </ul>
  );
};

export default ListadoProyectos;
