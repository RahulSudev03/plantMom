import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/welcome.css';

interface User {
  id: number;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
}

const Welcome: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');

    if (!token || !userData) {
      navigate('/signin');
      return;
    }

    try {
      const parsedUser = JSON.parse(userData);
      setUser(parsedUser);
    } catch (error) {
      console.error('Error parsing user data:', error);
      navigate('/signin');
    } finally {
      setLoading(false);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/signin');
  };

  if (loading) {
    return (
      <div className="welcome-container">
        <div className="loading-spinner">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="welcome-container">
      <div className="welcome-content">
        <div className="welcome-header">
          <h1 className="welcome-title">
            Welcome, <span className="username">{user.username}</span>! 🌱
          </h1>
          <p className="welcome-subtitle">
            Ready to take care of your plants today?
          </p>
        </div>

        <div className="welcome-cards">
          <div className="welcome-card">
            <div className="card-icon">🌿</div>
            <h3>My Plants</h3>
            <p>View and manage your plant collection</p>
            <button className="card-button">View Plants</button>
          </div>

          <div className="welcome-card">
            <div className="card-icon">📝</div>
            <h3>Add Plant</h3>
            <p>Add a new plant to your collection</p>
            <button className="card-button">Add Plant</button>
          </div>

          <div className="welcome-card">
            <div className="card-icon">📊</div>
            <h3>Plant Stats</h3>
            <p>Track your plant care progress</p>
            <button className="card-button">View Stats</button>
          </div>
        </div>

        <div className="welcome-actions">
          <button className="logout-button" onClick={handleLogout}>
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome; 