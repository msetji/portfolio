// pages/projects.js
import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <div className="projects-container">
      <div className="projects-grid">
        <div className="project-card">
          <div className="project-content">
            <h2>Project 1</h2>
            <p>2020-2023</p>
            <ul>
              <li>Blablablabla</li>
              <li>hjkshdk</li>
              <li>hgdiekbwk</li>
              <li>hkdnw...,khyjkghfg</li>
            </ul>
          </div>
          <div className="project-hover">
            <h3>Skills Used</h3>
            <p>React, CSS, JavaScript</p>
            <button>More Info</button>
          </div>
        </div>
        {/* Repeat similar project-card for more projects */}
      </div>
    </div>
  );
};

export default Projects;