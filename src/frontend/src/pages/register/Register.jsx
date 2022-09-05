import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import './register.css';

export default function Register() {
  const navigate = useNavigate();
  const [emailUser, setEmailUser] = useState('');
  const [passUser, setPassUser] = useState('');
  const BASE_URL = process.env.REACT_APP_API_LINK;

  // verifica se e-mail e senha estão no formato correto.
  const checkDataUser = () => {
    const regexEmail = /^[a-z0-9._]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    const MIN_NUMBER = 6;

    return !(regexEmail.test(emailUser) && passUser.length >= MIN_NUMBER);
  };

  // aqui será feito request para API, para realizar login.
  const registerUser = async (email, password) => {
    const { data } = await axios.post(`${BASE_URL}/user/register`, { email, password });

    console.log('meu data', data);
    navigate('/contacts');
  };

  return (
    <div className="register-page">
      <div className="register-form">
        <h4>Crie sua conta!</h4>
        <div className="div-email-register">
          <input
            className="input-register"
            type="text"
            placeholder="Email..."
            onChange={({ target }) => setEmailUser(target.value)}
          />
        </div>
        <div className="div-password-register">
          <input
            className="input-register"
            type="password"
            placeholder="Senha..."
            onChange={({ target }) => setPassUser(target.value)}
          />
        </div>
        <div className="div-button-register">
          <button
            className="button-register"
            type="button"
            disabled={checkDataUser()}
            onClick={() => registerUser(emailUser, passUser)}
          >
            Criar Conta
          </button>
        </div>
      </div>
    </div>
  );
}
