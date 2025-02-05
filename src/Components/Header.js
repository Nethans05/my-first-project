import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = (path) => {
    if (location.pathname !== path) {
      navigate(path);
    }
  };

  return (
    <header className="bg-gradient-to-r from-green-400 to-blue-500 p-5 shadow-lg flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center cursor-pointer" onClick={() => handleClick("/")}>
        <div className="bg-white text-green-600 font-bold text-xl rounded-full w-12 h-12 flex justify-center items-center">
          N
        </div>
      </div>

      {/* Navigation for Desktop */}
      <nav className="hidden md:flex gap-8">
        {["/", "/about", "/projects", "/contact"].map((path, index) => (
          <button
            key={index}
            onClick={() => handleClick(path)}
            className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-base px-6 py-3 text-center"
          >
            {path.replace("/", "") || "Home"}
          </button>
        ))}
      </nav>

      {/* Hamburger Button */}
      <button
        className="md:hidden text-white focus:outline-none text-2xl"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? "✖" : "☰"}
      </button>

      {/* Popup Menu */}
      {isMenuOpen && (
        <nav className="absolute right-4 top-16 bg-white shadow-lg rounded-lg p-3 w-48 z-50">
          <ul className="flex flex-col gap-2">
            {["/", "/about", "/projects", "/contact"].map((path, index) => (
              <li key={index}>
                <button
                  onClick={() => {
                    handleClick(path);
                    setIsMenuOpen(false);
                  }}
                  className="text-black w-full text-left hover:bg-gray-100 p-3 rounded text-base"
                >
                  {path.replace("/", "") || "Home"}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
