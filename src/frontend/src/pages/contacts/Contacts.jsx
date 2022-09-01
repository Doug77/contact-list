import React, { useContext, useEffect, useState } from 'react';

import context from '../../context/context';
import FormContact from '../components/formContact/FormContact';
import './contacts.css';

export default function Contacts() {
  const { contacts } = useContext(context);
  const [myContatcs, setMycontacts] = useState([]);
  const [showForm, setShowForm] = useState(false);

  // Deve buscar do db todos os contatos salvos
  // no momento estamos usando dados mockados
  useEffect(() => {
    setMycontacts(contacts);
  }, []);

  const filterData = (data) => {
    if (!data) return setMycontacts(contacts);

    const dataFilter = myContatcs.filter((element) => (
      element.nome.includes(data) || element.numero.includes(data)
    ));

    return setMycontacts(dataFilter);
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
            showForm ? 'Cancelar' : 'Adicionar Contato'
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
              myContatcs.map((el) => (
                <tr key={el.id}>
                  <td>{el.nome}</td>
                  <td>{el.numero}</td>
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
