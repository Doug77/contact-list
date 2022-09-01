import React, { useContext, useEffect, useState } from 'react';

import context from '../../context/context';
import FormContact from '../components/formContact/FormContact';

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
      <div>
        <h3>Meus Contatos</h3>
        <input
          placeholder="filtrar contato"
          onChange={({ target }) => filterData(target.value)}
        />
      </div>
      <div>
        {
        showForm && <FormContact />
        }
        <button
          type="button"
          onClick={() => setShowForm(!showForm)}
        >
          {
            showForm ? 'Cancelar' : 'Adicionar Contato'
          }
        </button>
      </div>
      <div>
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
                  <td>WDE</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}
