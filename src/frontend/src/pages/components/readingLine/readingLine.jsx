import PropTypes from 'prop-types';
import React from 'react';

export default function ReadingLine({ el, showEditLine, deleteContact }) {
  return (
    <>
      <td>{el.name}</td>
      <td>{el.number}</td>
      <td>{el.email}</td>
      <td>
        <a
          href={`https://web.whatsapp.com/send?phone=${el.number}`}
          target="_blank"
          rel="noreferrer"
          className="btn-action btn-whatsapp"
        >
          <img src="https://img.icons8.com/ios-glyphs/35/1A1A1A/whatsapp.png" alt="whatsapp-icon" />
        </a>
        <button
          type="button"
          className="btn-action btn-edit"
          onClick={() => showEditLine(el.id)}
        >
          <img src="https://img.icons8.com/glyph-neue/25/1A1A1A/pencil.png" alt="edit-icon" />
        </button>
        <button
          type="button"
          className="btn-action btn-delete"
          onClick={() => deleteContact(el.id)}
        >
          <img src="https://img.icons8.com/sf-regular/25/1A1A1A/trash.png" alt="delet-icon" />
        </button>
      </td>
    </>
  );
}

ReadingLine.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  showEditLine: PropTypes.func.isRequired,
  el: PropTypes.shape({
    email: PropTypes.string,
    id: PropTypes.number,
    name: PropTypes.string,
    // eslint-disable-next-line react/forbid-prop-types
    number: PropTypes.any,
  }).isRequired,
};
