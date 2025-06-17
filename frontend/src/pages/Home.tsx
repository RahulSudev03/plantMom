import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/home.css';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to PlantMom</h1>
          <p>Your personal plant care companion</p>
          <div className="cta-buttons">
            <button 
              className="btn btn-primary"
              onClick={() => navigate('/signin')}
            >
              Sign In
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => navigate('/signup')}
            >
              Sign Up
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Why Choose PlantMom?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Smart Plant Care</h3>
            <p>Get personalized care reminders for your plants</p>
          </div>
          <div className="feature-card">
            <h3>Plant Identification</h3>
            <p>Identify plants and get care instructions</p>
          </div>
          <div className="feature-card">
            <h3>Community</h3>
            <p>Connect with other plant enthusiasts</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 