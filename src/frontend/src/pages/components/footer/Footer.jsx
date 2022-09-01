import React from 'react';

import './footer.css';

export default function Footer() {
  return (
    <footer className="footer-page">
      Desenvolvido por
      {' '}
      <a
        className="link-footer"
        href="https://www.linkedin.com/in/douglas-d-oliveira/"
        target="_blank"
        rel="noreferrer"
      >
        Douglas Oliveira
      </a>
    </footer>
  );
}
