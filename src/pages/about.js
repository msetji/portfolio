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
            Hi! I'm Michael Setji, a Computer Science and Electrical & Computer Engineering major at Duke University. I have a passion for all sides of tech, including both software and hardware. During my internship with Setty & Associates, I worked on full-stack web development projects. This opportunity allowed me to combine my skills in electrical engineering and software engineering to contribute to many features on the company's final product.
          </p>
          <p>
            Apart from the academic side of my life, I love lifting, spending time with the people I love, and when it is in season, skiing. I’m also a huge fan of Duke basketball! I’m skilled in a range of programming languages and have experience in electrical engineering, making me versatile across multiple domains.
          </p>
          <p>
            Check out my work below and reach out if you'd like to collaborate!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
