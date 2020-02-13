import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const NuevaCuenta = () => {

  // state para iniciar sesión
  const [usuario, guardarUsuario] = useState({
    nombre: '',
    email: '',
    password: '',
    confirmar: ''
  });

  // extrar de usuario
  const { nombre, email, password, confirmar} = usuario;

  const onchange = (e) => {
    guardarUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    });
  };

  // cuando el usuario inicia sesion
  const onSubmit = e => {
    e.preventDefault();

    // validar campos

    // password minimo de 6 caracteres

    // passwords iguales

    // pasar al action
  };

  return (
    <div>
      <div className="form-usuario">
        <div className="contenedor-form sombra-dark">
          <h1>Obtener una cuenta</h1>

          <form
            onSubmit={onSubmit}
          >
            <div className="campo-form">
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Tu nombre"
                value={nombre}
                onChange={onchange}
              />
            </div>

            <div className="campo-form">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Tu email"
                value={email}
                onChange={onchange}
              />
            </div>

            <div className="campo-form">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Tu password"
                value={password}
                onChange={onchange}
              />
            </div>

            <div className="campo-form">
              <label htmlFor="confirmar">Confirmar Password</label>
              <input
                type="password"
                id="confirmar"
                name="confirmar"
                placeholder="Repite tu password"
                value={confirmar}
                onChange={onchange}
              />
            </div>

            <div className="campo-form">
              <input
                type="submit"
                className="btn btn-primario btn-block"
                value="Registrarme"
              />
            </div>
          </form>

          <Link to={'/'} className="enlace-cuenta">
            Iniciar Sesión
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NuevaCuenta;
