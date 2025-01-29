// src/components/HeroSection.js
import React from 'react';

const HeroSection = ({ title, description }) => {
  return (
    <div style={styles.hero}>
      <h1>{title}</h1>
      <p>{description}</p>
      <button style={styles.button}>Get Started</button>
    </div>
  );
};

const styles = {
  hero: {
    textAlign: 'center',
    padding: '50px 20px',
    backgroundColor: '#f4f4f4',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '20px',
  },
};

export default HeroSection;
