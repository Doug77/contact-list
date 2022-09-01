import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './login.css';

export default function Login() {
  const navigate = useNavigate();
  const [emailUser, setEmailUser] = useState('');
  const [passUser, setPassUser] = useState('');

  // verifica se e-mail e senha estão no formato correto.
  const checkDataUser = () => {
    const regexEmail = /^[a-z0-9._]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    const MIN_NUMBER = 6;

    return !(regexEmail.test(emailUser) && passUser.length >= MIN_NUMBER);
  };

  // aqui será feito request para API, para realizar login.
  const loginUser = (email, pass) => {
    console.log(email, pass);
    navigate('/contacts');
  };

  return (
    <div className="login-page">
      <div className="login-form">
        <h4>Bem vindo!</h4>
        <div className="div-email-login">
          <input
            className="input-login"
            type="text"
            placeholder="Email..."
            onChange={({ target }) => setEmailUser(target.value)}
          />
        </div>
        <div className="div-password-login">
          <input
            className="input-login"
            type="password"
            placeholder="Senha..."
            onChange={({ target }) => setPassUser(target.value)}
          />
        </div>
        <div className="div-button-login">
          <button
            className="button-login"
            type="button"
            disabled={checkDataUser()}
            onClick={() => loginUser(emailUser, passUser)}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
