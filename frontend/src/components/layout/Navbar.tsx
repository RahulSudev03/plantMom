import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  // You can add authentication state here later
  const isAuthenticated = false;

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          PlantMom
        </Link>

        {/* Mobile menu button */}
        <button 
          className="mobile-menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="hamburger"></span>
        </button>

        {/* Navigation links */}
        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/plants" className="nav-link">Plants</Link>
          <Link to="/care-guide" className="nav-link">Care Guide</Link>
          
          {isAuthenticated ? (
            <>
              <Link to="/dashboard" className="nav-link">Dashboard</Link>
              <button 
                className="btn btn-outline"
                onClick={() => {/* Add logout logic */}}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <button 
                className="btn btn-outline"
                onClick={() => navigate('/signin')}
              >
                Sign In
              </button>
              <button 
                className="btn btn-primary"
                onClick={() => navigate('/signup')}
              >
                Sign Up
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 