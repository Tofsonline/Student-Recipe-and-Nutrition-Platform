import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark shadow-sm sticky-top" 
         style={{ backgroundColor: '#3E2723', borderBottom: '2px solid #5D4037' }}>
      <div className="container">
        <Link className="navbar-brand fw-bold fs-3" to="/">
          <span style={{ color: '#FFF9F2' }}>BELLS</span> 
          <span style={{ color: '#D7CCC8', marginLeft: '5px' }}>NUTRITION</span>
        </Link>

        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
          style={{ borderColor: '#5D4037' }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto text-center">
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => isActive ? "nav-link fw-bold active" : "nav-link"} 
                to="/"
                style={({ isActive }) => ({ color: isActive ? '#FFF9F2' : '#D7CCC8' })}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => isActive ? "nav-link fw-bold active" : "nav-link"} 
                to="/recipes"
                style={({ isActive }) => ({ color: isActive ? '#FFF9F2' : '#D7CCC8' })}
              >
                Recipes
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => isActive ? "nav-link fw-bold active" : "nav-link"} 
                to="/calculator"
                style={({ isActive }) => ({ color: isActive ? '#FFF9F2' : '#D7CCC8' })}
              >
                Calculator
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;