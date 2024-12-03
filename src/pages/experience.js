import React, { useState } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa'; // Import the link icon from React Icons
import './Experience.css';

const Experience = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskDescription, setTaskDescription] = useState('');

  const handleCardClick = (description) => {
    setTaskDescription(description);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="experience-container">
      {/* Introduction Section */}
      <h2 className="experience-title">Setty & Associates (MEP Firm)</h2>
      <h3 className="experience-subtitle">
        Full-Stack Software Developer Intern | Washington, DC
      </h3>
      <p className="experience-dates">June 2024 - August 2024</p>
      <p className="experience-description">
      As a full-stack software engineering intern at Setty & Associates, I contributed to the development of SYYCLOPS, 
      a digital twin platform for building management. Working full-stack, I developed many web development skills. 
      I utilized technologies such as JavaScript, TypeScript, React, and HTML/CSS on the frontend, and Python, RESTful 
      APIs, PostgreSQL, and Neo4j on the backend. Here are the three major projects I worked on:
      </p>

      {/* Major Tasks Section - Horizontal Cards */}
      <div className="tasks-container">
      <div
          className="task-card"
          onClick={() =>
            handleCardClick(
              `
              <h2>Project Walkthrough:</h2>
              <ol>
                <li>Completed full setup of an air quality sensor, programming it to send JSON messages to an MQTT broker at 5-minute intervals.</li>
                <li>Developed a script to continuously retrieve data from the MQTT broker, translating it into time-series data and storing it in a PostgreSQL database.</li>
                <li>Designed a script to integrate the sensor into the Neo4j database as a node, linking it to the time-series data ID in PostgreSQL.</li>
                <li>Created a RESTful API to query the Neo4j database for the latest data trends.</li>
                <li>Designed and implemented a custom graphic to display these trends on the front end, integrating the API for real-time updates.</li>
                <li>Added a "Refresh Data" button to trigger the device via the MQTT server, prompting new readings to be sent back immediately.</li>
                <li>Built a trends graph to display both current and historical data, enabling long-term observations and insights.</li>
              </ol>
              <p>This project initially felt overwhelming due to the high-level requirements, leaving me to figure out many details independently. By breaking the problem into manageable steps and seeking clarification when needed, I successfully completed the task. This system lays the groundwork for future AI integration, paving the way for energy optimization and smarter component management.</p>
              `
            )
          }
        >
  <h4 className="task-title">IoT Integration</h4>
</div>
        <div className="task-card" onClick={() => handleCardClick(
          'This project was much shorter, but remained important to the functionality of the application. I developed a script to integrate OpenAI’s embeddings into various building components, enabling them to be searched relationally. By applying embeddings to all component types, we unlocked advanced search capabilities that could retrieve results not only based on similar spellings but also related meanings. This was key in enhancing the system’s semantic search performance. This implementation laid the groundwork for more intuitive and intelligent search algorithms, significantly improving user experience.')}>
          <h4 className="task-title">OpenAI Embeddings</h4>
        </div>
        <div className="task-card" onClick={() => handleCardClick('This was the first task given to me when I arrived at the company. It allowed me to explore the repository and develop a sense of what was going on in SYYCLOPS. This consisted of learning the agile development process, finding bugs, creating tasks, and fixing frontend bugs as they came. I developed a strong understanding of TypeScript, React, as well as many of the packages that were imported within this project. ')}>
          <h4 className="task-title">Frontend Development</h4>
        </div>
      </div>

      {/* Large-Scale Accomplishments and Personal Growth Section */}
      <p className="experience-description">
        During my time here, the contributions I made to SYYCLOPS led to significant energy cost savings in DC public schools, totaling millions annually.
        The enhancements that I made to the website led to decreased carbon emissions through more efficient use of HVAC systems. IoT integration allowed
        for advanced data points about the building's energy usage, which led to more informed decisions about energy consumption. I also grew as a developer
        by learning to work in a professional environment. Learning to work with a team of developers and engineers was a valuable experience that I will carry
        to any future job. Workflows and agile development were important skills that I picked up during my time at Setty & Associates.
      </p>

      {/* Link to Company Website */}
      <a
        href="https://www.setty.com"
        target="_blank"
        rel="noopener noreferrer"
        className="experience-link"
      >
        <FaExternalLinkAlt style={{ marginRight: '8px' }} /> {/* Link icon */}
        Visit Company Website
      </a>

      {/* Modal for Task Descriptions */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3 className="modal-title">Task Description</h3>
            <p
                className="modal-description"
                dangerouslySetInnerHTML={{ __html: taskDescription }}
              ></p>
            <button className="modal-close" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Experience;
