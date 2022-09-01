import React, { useContext } from 'react';

import context from '../../context/context';

export default function Contacts() {
  const { contacts } = useContext(context);

  return (
    <div>
      <div>
        <h3>Meus Contatos</h3>
        <input placeholder="filtrar contato" />
        <button type="button">Adicionar Contato</button>
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
              contacts.map((el) => (
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
