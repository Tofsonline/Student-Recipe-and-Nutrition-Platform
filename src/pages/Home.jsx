import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; 

const Home = () => {
  return (
    <div className="home-container">
      <header className="bg-dark text-white py-5 mb-4 shadow-lg" 
              style={{ background: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1350&q=80")', 
                       backgroundSize: 'cover', 
                       backgroundPosition: 'center',
                       minHeight: '60vh',
                       display: 'flex',
                       alignItems: 'center' }}>
        <div className="container text-center">
          <h1 className="display-3 fw-bold mb-3" style={{ color: '#f8f9fa' }}>Bells Student Recipe & Nutrition Platform</h1>
          <p className="lead mb-4 fs-3">Fuel your body with healthy recipes and track your goals.</p>
          <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
            <Link to="/recipes" className="btn btn-warning btn-lg px-4 gap-3 fw-bold text-dark">Explore Recipes</Link>
            <Link to="/calculator" className="btn btn-outline-light btn-lg px-4">Calorie Calculator</Link>
          </div>
        </div>
      </header>

      <div className="container py-5">
        <div className="row g-4 text-center">
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm p-3">
              <div className="fs-1 text-warning mb-3">🥗</div>
              <h3>20+ Healthy Recipes</h3>
              <p className="text-muted">Discover meals designed for a balanced lifestyle and better energy.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm p-3">
              <div className="fs-1 text-primary mb-3">🔢</div>
              <h3>Smart Calculator</h3>
              <p className="text-muted">Use the Mifflin-St Jeor equation to find your perfect daily intake.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm p-3">
              <div className="fs-1 text-success mb-3">⚡</div>
              <h3>Peak Performance</h3>
              <p className="text-muted">Stay active and maintain your health goals with ease.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;