// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects'; // Projects page
import Header from './Components/Header';
import Footer from './Components/Footer';

const App = () => {
  return (
    <Router>
      <div id="root">
        {/* Header is displayed on all pages */}
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>

        {/* Footer is displayed on all pages */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
