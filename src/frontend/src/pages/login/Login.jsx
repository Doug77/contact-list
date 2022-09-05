import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

import './login.css';

export default function Login() {
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
  const loginUser = async (email, password) => {
    try {
      const { data } = await axios.post(`${BASE_URL}/user/login`, { email, password });

      localStorage.setItem('token', JSON.stringify(data));
      localStorage.setItem('email', JSON.stringify(email));

      return navigate('/contacts');
    } catch (error) {
      return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Alguma coisa deu errado :(',
      });
    }
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
        <Link
          className="link-to-register"
          to="/register"
          onClick={() => localStorage.clear()}
        >
          Criar conta
        </Link>
      </div>
    </div>
  );
}
