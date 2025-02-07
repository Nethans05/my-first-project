import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Contact Us</h1>
      <div style={styles.content}>
        {/* Left Section - Contact Form */}
        <div style={styles.leftSection}>
          <h2 style={styles.subHeading}>Send Us a Message</h2>
          <form style={styles.form}>
            <input
              type="text"
              placeholder="Your Name"
              style={styles.input}
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              style={styles.input}
              required
            />
            <textarea
              placeholder="Your Message"
              style={styles.textarea}
              required
            ></textarea>
            <button type="submit" style={styles.button}>
              Submit
            </button>
          </form>
        </div>

        {/* Right Section - Map and Details */}
        <div style={styles.rightSection}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3934.1303332530735!2d80.20687651478522!3d9.671736293066257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afe52265b8309cd%3A0xa7fa35d0cf69d64a!2sJaffna%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1696438805741!5m2!1sen!2sus"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Location Map"
          ></iframe>

          <section style={styles.contactDetails}>
            <p style={styles.text}>
              <strong>Email:</strong>{' '}
              <a href="mailto:Nethanvin05@gmail.com" style={styles.link}>
                Nethanvin05@gmail.com
              </a>
            </p>
            <p style={styles.text}>
              <strong>Phone:</strong>{' '}
              <a href="tel:0777345690" style={styles.link}>
                0777345690
              </a>
            </p>
          </section>

          <section style={styles.socialMedia}>
            <h2 style={styles.subHeading}>Follow Us</h2>
            <div style={styles.iconContainer}>
              <a
                href="https://www.facebook.com/vinson.nethans?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.icon}
              >
                <FaFacebook size={30} />
              </a>
              <a
                href="https://x.com/vinsonclout?s=21&t=jAxkBuLDPUD3QJH4MnO-ag"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.icon}
              >
                <FaTwitter size={30} />
              </a>
              <a
                href="https://www.instagram.com/__june__baby__"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.icon}
              >
                <FaInstagram size={30} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.icon}
              >
                <FaLinkedin size={30} />
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  content: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '30px',
    justifyContent: 'space-between',
  },
  leftSection: {
    flex: 1,
    minWidth: '300px',
    background: '#f9f9f9',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
  },
  rightSection: {
    flex: 1,
    minWidth: '300px',
  },
  heading: {
    fontSize: '36px',
    color: '#4CAF50',
    marginBottom: '20px',
  },
  contactDetails: {
    marginBottom: '20px',
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
  iconContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '10px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  input: {
    padding: '15px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  textarea: {
    padding: '15px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    resize: 'none',
    minHeight: '120px',
  },
  button: {
    background: '#4CAF50',
    color: 'white',
    padding: '15px',
    fontSize: '18px',
    borderRadius: '4px',
    cursor: 'pointer',
    border: 'none',
  },
  icon: {
    color: '#1E90FF',
    textDecoration: 'none',
  },
};

export default Contact;
