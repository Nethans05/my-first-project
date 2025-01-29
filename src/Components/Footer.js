// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>
        &copy; {new Date().getFullYear()} My First React Project. Designed by <span style={styles.brand}>N</span>
      </p>
    </footer>
  );
};

const styles = {
  footer: {
    padding: '15px 20px',
    background: 'linear-gradient(90deg, #1E90FF, #4CAF50)',
    color: '#fff',
    textAlign: 'center',
    boxShadow: '0px -4px 8px rgba(0, 0, 0, 0.2)',
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
  text: {
    margin: 0,
    fontSize: '14px',
    fontWeight: 'bold',
  },
  brand: {
    color: '#FFD700',
    fontWeight: 'bold',
  },
};

export default Footer;
