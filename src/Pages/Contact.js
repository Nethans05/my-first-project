// src/Pages/Contact.js
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Contact Us</h1>
      
      <section style={styles.contactDetails}>
        <p style={styles.text}>
          <strong>Email:</strong> <a href="Nethanvin05@gmail.com" style={styles.link}>Nethanvin05@gmail.com</a>
        </p>
        <p style={styles.text}>
          <strong>Phone:</strong> <a href="tel:0777345690" style={styles.link}>0777345690</a>
        </p>
      </section>

      <section style={styles.socialMedia}>
        <h2 style={styles.subHeading}>Follow Us</h2>
        <div style={styles.icons}>
          <a href="https://www.facebook.com/vinson.nethans?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" style={styles.icon}>
            <FaFacebook size={30} />
          </a>
          <a href="https://x.com/vinsonclout?s=21&t=jAxkBuLDPUD3QJH4MnO-ag" target="_blank" rel="noopener noreferrer" style={styles.icon}>
            <FaTwitter size={30} />
          </a>
          <a href="https://www.instagram.com/__june__baby__" target="_blank" rel="noopener noreferrer" style={styles.icon}>
            <FaInstagram size={30} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>
            <FaLinkedin size={30} />
          </a>
        </div>
      </section>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center',
    maxWidth: '600px',
    margin: '0 auto',
  },
  heading: {
    fontSize: '32px',
    color: '#4CAF50',
    marginBottom: '20px',
  },
  contactDetails: {
    marginBottom: '30px',
  },
  text: {
    fontSize: '18px',
    margin: '10px 0',
  },
  link: {
    color: '#1E90FF',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  socialMedia: {
    marginTop: '20px',
  },
  subHeading: {
    fontSize: '24px',
    color: '#4CAF50',
    marginBottom: '10px',
  },
  icons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
  },
  icon: {
    color: '#1E90FF',
    textDecoration: 'none',
    transition: 'transform 0.3s ease',
  },
  iconHover: {
    transform: 'scale(1.2)',
  },
};

export default Contact;
