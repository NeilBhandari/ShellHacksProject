import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';

function Navbar() {
  return (
    <nav className="navbar-container bg-purple-600 text-white p-4">
      <div className="containers mx-auto flex justify-between items-center">
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:text-gray-300">
              Overview
            </Link>
          </li>
          <li>
            <Link to="/searchPage" className="hover:text-gray-300">
              Patient Search
            </Link>
          </li>
          <li>
            <Link to="/create-patient" className="hover:text-gray-300">
              Add New Patient
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
