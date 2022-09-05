import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

import context from '../../context/context';
import FormContact from '../components/formContact/FormContact';
import './contacts.css';

export default function Contacts() {
  const { contacts, setContacts } = useContext(context);
  const [showForm, setShowForm] = useState(false);
  const BASE_URL = process.env.REACT_APP_API_LINK;

  // Deve buscar do db todos os contatos salvos
  // no momento estamos usando dados mockados
  const getContacts = async () => {
    const id = localStorage.getItem('id');
    try {
      const { data } = await axios.get(`${BASE_URL}/contacts/${id}`);

      return setContacts(data);
    } catch (error) {
      return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Alguma coisa deu errado :(',
      });
    }
  };

  useEffect(() => {
    getContacts();
  }, []);

  const filterData = async (data) => {
    if (!data) {
      const id = localStorage.getItem('id');

      const result = await axios.get(`${BASE_URL}/contacts/${id}`);

      console.log('já que não tem nada peguei os dados de novo', result.data);
      return setContacts(result.data);
    }

    const dataFilter = contacts.filter((element) => (
      element.name.includes(data) || element.number.toString().includes(data)
    ));

    return setContacts(dataFilter);
  };

  return (
    <div>
      <div className="div-title-page">
        <h3>Meus Contatos</h3>
        <div className="div-input-search">
          <img src="https://img.icons8.com/ios-filled/25/737373/search--v1.png" alt="search-icon" />
          <input
            className="input-text-search"
            onChange={({ target }) => filterData(target.value)}
          />
        </div>
        <button
          className="btn-add-contact"
          type="button"
          onClick={() => setShowForm(!showForm)}
        >
          {
            showForm ? 'CANCELAR' : 'Adicionar Contato'
          }
        </button>
      </div>
      <div className="div-button-add">
        {
        showForm && <FormContact />
        }
      </div>
      <div className="div-table">
        <table>
          <tbody>
            <tr>
              <th>Nome</th>
              <th>WhatsApp</th>
              <th>E-mail</th>
              <th>Ações</th>
            </tr>
          </tbody>
          <tbody>
            {
              contacts.map((el) => (
                <tr key={el.id}>
                  <td>{el.name}</td>
                  <td>{el.number}</td>
                  <td>{el.email}</td>
                  <td>
                    <button
                      type="button"
                      className="btn-action btn-whatsapp"
                    >
                      <img src="https://img.icons8.com/ios-glyphs/35/1A1A1A/whatsapp.png" alt="whatsapp-icon" />
                    </button>
                    <button
                      type="button"
                      className="btn-action btn-edit"
                    >
                      <img src="https://img.icons8.com/glyph-neue/25/1A1A1A/pencil.png" alt="edit-icon" />
                    </button>
                    <button
                      type="button"
                      className="btn-action btn-delete"
                    >
                      <img src="https://img.icons8.com/sf-regular/25/1A1A1A/trash.png" alt="delet-icon" />
                    </button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}
