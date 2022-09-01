import React from 'react';

export default function Contacts() {
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
            <tr>
              <td>doug</td>
              <td>999999</td>
              <td>doug@email.com</td>
              <td>WDE</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
