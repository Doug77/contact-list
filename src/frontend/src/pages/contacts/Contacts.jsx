import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

import context from '../../context/context';
import FormContact from '../components/formContact/FormContact';
import './contacts.css';
import ReadingLine from '../components/readingLine/readingLine';
import EditableLine from '../components/editableLine/EditableLine';

export default function Contacts() {
  const { contacts, setContacts } = useContext(context);
  const [showForm, setShowForm] = useState(false);
  const [editLine, setEditLine] = useState(null);
  const BASE_URL = process.env.REACT_APP_API_LINK;

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
      const headers = {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      };

      const result = await axios.get(`${BASE_URL}/contacts/${id}`, { headers });

      return setContacts(result.data);
    }

    const dataFilter = contacts.filter((element) => (
      element.name.includes(data) || element.number.toString().includes(data)
    ));

    return setContacts(dataFilter);
  };

  const deleteContact = async (id) => {
    const token = JSON.parse(localStorage.getItem('token'));
    const headers = {
      Authorization: token,
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    };

    await axios.delete(`${BASE_URL}/contacts/${id}`, { headers });

    await getContacts();
  };

  const editContact = async (updatedContact) => {
    const token = JSON.parse(localStorage.getItem('token'));
    const headers = {
      Authorization: token,
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    };

    try {
      await axios.put(`${BASE_URL}/contacts`, updatedContact, { headers });
      setTimeout(() => {
        getContacts();
        setEditLine(null);
      }, 1600);
      return Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Contato atualizado com sucesso!',
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Alguma coisa deu errado :(',
      });
    }
  };

  const showEditLine = (id) => {
    if (!id) return setEditLine(null);

    return setEditLine(id);
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
        showForm && <FormContact functionGetContact={getContacts} />
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
                  { editLine === el.id
                    ? (
                      <EditableLine
                        el={el}
                        showEditLine={showEditLine}
                        editContact={editContact}
                      />
                    )
                    : (
                      <ReadingLine
                        el={el}
                        deleteContact={deleteContact}
                        showEditLine={showEditLine}
                      />
                    )}

                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}
