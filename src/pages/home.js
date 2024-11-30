import React, { useEffect } from 'react';
import './Home.css';

const Home = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('home-show');
          entry.target.classList.remove('home-hidden');
        } else {
          entry.target.classList.add('home-hidden');
          entry.target.classList.remove('home-show');
        }
      });
    });

    const elements = document.querySelectorAll('.home-title, .home-subtitle');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="home-container">
      <h1 className="home-title home-hidden">Hello,</h1>
      <h1 className="home-title home-hidden">
        I'm <span className="highlight-text">Michael Setji</span>
      </h1>
      <p className="home-subtitle home-hidden">
        I am an ECE/CS major at <span className="highlight-text">Duke University</span>
      </p>
    </div>
  );
};

export default Home;
