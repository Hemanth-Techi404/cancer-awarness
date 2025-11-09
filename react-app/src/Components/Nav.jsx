import React from 'react';

const Nav = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-gray-800 text-white py-4 px-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Cancer Awareness</h1>
        <ul className="flex space-x-6">
          <li>
            <button
              onClick={() => scrollToSection('home')}
              className="hover:text-gray-300 transition-colors"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('contact')}
              className="hover:text-gray-300 transition-colors"
            >
              Contact
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('quotes')}
              className="hover:text-gray-300 transition-colors"
            >
              Quotes
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
