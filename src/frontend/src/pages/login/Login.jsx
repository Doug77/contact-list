import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
    <div>
      <div>
        <input
          type="text"
          placeholder="digite seu email..."
          onChange={({ target }) => setEmailUser(target.value)}
        />
        <input
          type="password"
          placeholder="digite sua senha..."
          onChange={({ target }) => setPassUser(target.value)}
        />
      </div>
      <div>
        <button
          type="button"
          disabled={checkDataUser()}
          onClick={() => loginUser(emailUser, passUser)}
        >
          Login
        </button>
      </div>
    </div>
  );
}
