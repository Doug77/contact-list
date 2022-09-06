import PropTypes from 'prop-types';
import axios from 'axios';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import './formContact.css';

export default function FormContact({ getMyContacts }) {
  const [newContactName, setNewContactName] = useState('');
  const [newContactNumber, setNewContactNumber] = useState('');
  const [newContactEmail, setNewContactEmail] = useState('');

  const checkInputData = () => {
    if (!newContactName || !newContactEmail || !newContactNumber) {
      return Swal.fire({
        title: 'Campos inválidos',
        icon: 'info',
        html:
          '<b>Nome</b>, <b>WhatsApp</b> e <b>E-mail</b>'
          + ' não podem está em branco ',
        showCloseButton: true,
      });
    }

    return true;
  };

  const createNewContact = async () => {
    const BASE_URL = process.env.REACT_APP_API_LINK;
    const token = JSON.parse(localStorage.getItem('token'));
    const id = JSON.parse(localStorage.getItem('id'));
    const headers = {
      Authorization: token,
    };

    checkInputData();
    const regexEmail = /^[a-z0-9._]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    const MIN_NUMBER = 11;

    if (!(regexEmail.test(newContactEmail) && newContactNumber.length >= MIN_NUMBER)) {
      return Swal.fire({
        title: 'Número ou E-mail inválidos',
        icon: 'info',
        html:
          'O <b>número</b> deve ter 11 caracteres e <b>e-mail</b>,'
          + ' deve ter o formato "meu@email.com" ',
        showCloseButton: true,
      });
    }

    const newContactUser = {
      name: newContactName,
      number: newContactNumber,
      email: newContactEmail,
      userId: id,
    };

    try {
      const myNewContact = await axios.post(`${BASE_URL}/contacts`, newContactUser, { headers });

      if (myNewContact) {
        setNewContactEmail('');
        setNewContactNumber('');
        setNewContactName('');
        return Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Contato criado com sucesso!',
          showConfirmButton: false,
          timer: 1500,
        });
      }

      getMyContacts();
      return myNewContact;
    } catch (error) {
      return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Alguma coisa deu errado :(',
      });
    }
  };

  return (
    <div className="form-container">
      <div className="div-form-contact">
        <form>
          <label
            htmlFor="input-name"
          >
            Nome:
            {' '}
            <input
              id="input-name"
              placeholder="Ex.: José Silva"
              value={newContactName}
              onChange={({ target }) => setNewContactName(target.value)}
            />
          </label>
          <label
            htmlFor="input-numero"
          >
            WhatsApp:
            {' '}
            <input
              id="input-numero"
              type="tel"
              pattern="[0-9]{2}-[0-9]{4}-[0-9]{4}"
              placeholder="Ex.: 99-9999-9999"
              value={newContactNumber}
              onChange={({ target }) => setNewContactNumber(target.value)}
            />
          </label>
          <label
            htmlFor="input-email"
          >
            E-mail:
            {' '}
            <input
              id="input-email"
              placeholder="Ex.: meu@email.com"
              value={newContactEmail}
              onChange={({ target }) => setNewContactEmail(target.value)}
            />
          </label>
        </form>
        <button
          type="button"
          className="btn-add-contact-form"
          onClick={() => createNewContact()}
        >
          SALVAR
        </button>
      </div>
    </div>
  );
}

FormContact.propTypes = {
  // eslint-disable-next-line react/require-default-props
  getMyContacts: PropTypes.func,
};
