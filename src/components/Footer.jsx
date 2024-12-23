import React from 'react';

const Footer = () => {
  return (
    <footer style={{ background: '#666', color: 'white', padding: '1rem', textAlign: 'center' }}>
      <p>&copy; {new Date().getFullYear()} Sistema del Hospital. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
