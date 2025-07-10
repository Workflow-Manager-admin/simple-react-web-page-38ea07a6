import React, { useState, useEffect } from 'react';
import './App.css';

// Logo component (using SVG for better quality)
const Logo = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0284c7" />
        <stop offset="100%" stopColor="#38bdf8" />
      </linearGradient>
    </defs>
    <circle cx="50" cy="50" r="45" fill="url(#logoGradient)" />
    <path d="M30 40 L50 60 L70 40" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <circle cx="50" cy="30" r="8" fill="white" />
  </svg>
);

// Feature icon components
const FeatureIcon = ({ type, className }) => {
  const icons = {
    responsive: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
      </svg>
    ),
    modern: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
    fast: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M13 1L3 11h4l-1 8 10-10h-4l1-8z"/>
      </svg>
    )
  };
  
  return icons[type] || icons.responsive;
};

// Navigation component
const Navigation = ({ theme, toggleTheme }) => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#" className="nav-brand">
          <Logo className="nav-logo" />
          <span>React App</span>
        </a>
        
        <ul className="nav-links">
          <li><a href="#home" className="nav-link">Home</a></li>
          <li><a href="#features" className="nav-link">Features</a></li>
          <li><a href="#about" className="nav-link">About</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>
        </ul>
        
        <div className="nav-actions">
          <button 
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? '🌙' : '☀️'}
            <span>{theme === 'light' ? 'Dark' : 'Light'}</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

// Hero section component
const Hero = () => {
  return (
    <section className="hero">
      <Logo className="hero-logo" />
      <h1 className="hero-title">
        Welcome to React
      </h1>
      <p className="hero-subtitle">
        Build amazing user interfaces with the power of React
      </p>
      <p className="hero-description">
        A modern, responsive web application built with React and designed for performance, accessibility, and user experience.
      </p>
      <div className="hero-code">
        Edit <code>src/App.js</code> and save to reload
      </div>
      <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
        <a 
          href="https://reactjs.org" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn btn-primary btn-large"
        >
          Learn React
        </a>
        <a 
          href="https://create-react-app.dev" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn btn-secondary btn-large"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

// Features section component
const Features = () => {
  const features = [
    {
      icon: 'responsive',
      title: 'Responsive Design',
      description: 'Fully responsive layout that works perfectly on all devices, from mobile to desktop.'
    },
    {
      icon: 'modern',
      title: 'Modern UI',
      description: 'Clean, modern design with beautiful animations and smooth transitions.'
    },
    {
      icon: 'fast',
      title: 'Lightning Fast',
      description: 'Optimized for performance with fast loading times and smooth interactions.'
    }
  ];

  return (
    <section className="features" id="features">
      <h2 className="section-title">Features</h2>
      <p className="section-subtitle">
        Everything you need to build modern web applications
      </p>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card fade-in-up">
            <FeatureIcon type={feature.icon} className="feature-icon" />
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// Footer component
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          Built with React and modern web technologies
        </p>
        <div className="footer-links">
          <a href="https://reactjs.org" className="footer-link" target="_blank" rel="noopener noreferrer">
            React Docs
          </a>
          <a href="https://create-react-app.dev" className="footer-link" target="_blank" rel="noopener noreferrer">
            Create React App
          </a>
          <a href="https://github.com/facebook/react" className="footer-link" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

// PUBLIC_INTERFACE
function App() {
  /**
   * Main application component that renders the entire React web page
   * with modern UI design, responsive layout, and theme switching capability
   */
  const [theme, setTheme] = useState('light');

  // Effect to apply theme to document element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    /**
     * Toggles between light and dark themes
     */
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="App">
      <Navigation theme={theme} toggleTheme={toggleTheme} />
      
      <main className="main-content">
        <Hero />
        <Features />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
