// src/components/About.js
import React from 'react';
import './About.css'; // Make sure to style this component

const About = () => {
  return (
    <section id="about" className="section">
      <div className="about-container">
        <div className="about-image">
          <img src="/images/IMG_9819.jpg" alt="Michael Setji" className="profile-pic" />
        </div>
        <div className="about-bio">
          <p>
            Hello! My name is Michael Setji. I am a passionate ECE and Computer Science major with a
            love for building innovative solutions. I enjoy creating applications, solving
            technical challenges, and learning about emerging technologies. Outside of tech, I
            spend time exploring new hobbies and connecting with others who share my enthusiasm for
            discovery and creativity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;