import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Hello,</h1>
      <h1 className="home-title">I'm <span className="highlight-text">Michael Setji</span></h1>
      <p className="home-subtitle">I am an ECE/CS major at <span className="highlight-text">Duke University</span></p>
    </div>
  );
};

export default Home;