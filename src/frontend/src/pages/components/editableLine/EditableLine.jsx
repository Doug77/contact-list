/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import PropTypes from 'prop-types';
import React, { useState } from 'react';

export default function EditableLine({ el, showEditLine, editContact }) {
  const [editedContactName, setEditedContactName] = useState('');
  const [editedContactNumber, setEditedContactNumber] = useState('');
  const [editedContactEmail, setEditedContactEmail] = useState('');

  const myEditedContact = {
    id: el.id,
    name: editedContactName || el.name,
    number: editedContactNumber || el.number,
    email: editedContactEmail || el.email,
  };

  return (
    <>
      <td>
        <input
          type="text"
          defaultValue={el.name}
          onChange={({ target }) => setEditedContactName(target.value)}
        />
      </td>
      <td>
        <input
          type="text"
          defaultValue={el.number}
          onChange={({ target }) => setEditedContactNumber(target.value)}

        />
      </td>
      <td>
        <input
          type="text"
          defaultValue={el.email}
          onChange={({ target }) => setEditedContactEmail(target.value)}

        />
      </td>
      <td>
        <button
          type="button"
          className="btn-action btn-edit"
          onClick={() => editContact(myEditedContact)}
        >
          Salvar
        </button>
        <button
          type="button"
          className="btn-action btn-delete"
          onClick={() => showEditLine(null)}
        >
          Cancelar
        </button>
      </td>
    </>
  );
}

EditableLine.propTypes = {
  editContact: PropTypes.any,
  el: PropTypes.shape({
    email: PropTypes.string,
    id: PropTypes.number,
    name: PropTypes.string, // eslint-disable-next-line react/forbid-prop-types
    number: PropTypes.any,
  }).isRequired,
  showEditLine: PropTypes.func,
};
