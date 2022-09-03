import PropTypes from 'prop-types';
import React from 'react';

import Header from '../header/Header';
import Footer from '../footer/Footer';

export default function Main({ main }) {
  return (
    <>
      <Header />
      <main>
        {main}
      </main>
      <Footer />
    </>
  );
}

Main.propTypes = {
  main: PropTypes.element.isRequired,
};
