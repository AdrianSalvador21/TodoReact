import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

  // state para iniciar sesión
  const [usuario, guardarUsuario] = useState({
    email: '',
    password: ''
  });

  // extrar de usuario
  const { email, password } = usuario;

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

    // pasar al action
  };

  return (
    <div>
      <div className="form-usuario">
        <div className="contenedor-form sombra-dark">
          <h1>Inicias Sesión</h1>

          <form
            onSubmit={onSubmit}
          >
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
              <input
                type="submit"
                className="btn btn-primario btn-block"
                value="Iniciar sesión"
              />
            </div>
          </form>

          <Link to={'/nueva-cuenta'} className="enlace-cuenta">
            Obtener Cuenta
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
