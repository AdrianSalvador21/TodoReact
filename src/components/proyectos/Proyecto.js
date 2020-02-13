import React, {useContext} from 'react';
import proyectoContext from "../../context/proyectos/proyectoContext";


const Proyecto = ({proyecto}) => {
  // obtener el state de proyetos
  const proyectosContext = useContext(proyectoContext);
  const {proyectoActual} = proyectosContext;

  return (
    <li>
      <button type="button"
              onClick={() => proyectoActual(proyecto.id)}
              className="btn btn-blank">
        {proyecto.nombre}
      </button>
    </li>
  );
};

export default Proyecto;
