import React, { useEffect } from 'react';
import './Home.css';

const Home = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show'); // Reapply animation when it comes back into view
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="home-container">
      <h1 className="home-title hidden">Hello,</h1>
      <h1 className="home-title hidden">I'm <span className="highlight-text">Michael Setji</span></h1>
      <p className="home-subtitle hidden">I am an ECE/CS major at <span className="highlight-text">Duke University</span></p>
    </div>
  );
};

export default Home;
