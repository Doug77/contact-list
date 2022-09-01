// import axios from 'axios';
import React, { useState } from 'react';

export default function FormContact() {
  const [newContactName, setNewContactName] = useState('');
  const [newContactNumber, setNewContactNumber] = useState('');
  const [newContactEmail, setNewContactEmail] = useState('');
  const [errorData, setErrorData] = useState(false);

  const createNewContact = async () => {
    const regexEmail = /^[a-z0-9._]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    const MIN_NUMBER = 11;

    if (!(regexEmail.test(newContactEmail) && newContactNumber.length >= MIN_NUMBER)) {
      return setErrorData(true);
    }

    setErrorData(false);
    const newContactUser = {
      nome: newContactName,
      numero: newContactNumber,
      email: newContactEmail,
    };

    return console.log(newContactUser);

    // request to api
    // const myNewContact = await axios.post('/link-to-api', createNewContact);
  };

  return (
    <div>
      <form>
        <label
          htmlFor="input-name"
        >
          Nome:
          <input
            id="input-name"
            placeholder="Ex.: José Silva"
            onChange={({ target }) => setNewContactName(target.value)}
          />
        </label>
        <label
          htmlFor="input-numero"
        >
          WhatsApp:
          <input
            id="input-numero"
            type="tel"
            pattern="[0-9]{2}-[0-9]{4}-[0-9]{4}"
            placeholder="Ex.: 99-9999-9999"
            onChange={({ target }) => setNewContactNumber(target.value)}
          />
        </label>
        <label
          htmlFor="input-email"
        >
          E-mail:
          <input
            id="input-email"
            placeholder="Ex.: meu@email.com"
            onChange={({ target }) => setNewContactEmail(target.value)}
          />
        </label>
        {
          errorData && <p>Número ou e-mail invalido</p>
        }
      </form>
      <button
        type="button"
        onClick={() => createNewContact()}
      >
        Adicionar
      </button>
    </div>
  );
}
