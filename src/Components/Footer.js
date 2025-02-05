import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-500 to-green-500 text-white p-4 shadow-md">
      <p className="text-center text-sm font-bold">
        &copy; {new Date().getFullYear()} My First React Project. Designed by{' '}
        <span className="text-yellow-400 font-bold">N</span>
      </p>
    </footer>
  );
};

export default Footer;
