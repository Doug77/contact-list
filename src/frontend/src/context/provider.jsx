/* eslint-disable react/jsx-no-constructed-context-values */
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Context from './context';

export default function Provider({ children }) {
  const [contacts, setContacts] = useState([]);

  const myContext = {
    contacts,
    setContacts,
  };

  return (
    <Context.Provider value={myContext}>
      {children}
    </Context.Provider>
  );
}
Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
