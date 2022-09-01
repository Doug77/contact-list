/* eslint-disable react/jsx-no-constructed-context-values */
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Context from './context';

export default function Provider({ children }) {
  const myArrContacts = [
    {
      id: 1, nome: 'doug', numero: '999999', email: 'doug@email.com',
    },
    {
      id: 2, nome: 'gabi', numero: '888888', email: 'gabig@email.com',
    },
    {
      id: 3, nome: 'dani', numero: '777777', email: 'dani@email.com',
    },
    {
      id: 4, nome: 'tati', numero: '555555', email: 'tati@email.com',
    },
    {
      id: 5, nome: 'jane', numero: '666666', email: 'jane@email.com',
    },
  ];

  const [contacts, setContacts] = useState(myArrContacts);

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
