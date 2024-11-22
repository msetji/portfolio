import React, { useState, useEffect } from 'react';
import './Projects.css';

const projectData = [
  {
    title: "RoboSub 2025 Competition",
    date: "August 2024 - Ongoing",
    description:
      "Collaborated with a team of engineers to integrate sensors, cameras, and sonar systems for real-time data processing and obstacle detection using computer vision and algorithms for fully autonomous task completion. Optimized vehicle performance by testing and fine-tuning hardware components and software systems for enhanced stability, speed, and accuracy during trials.",
    skills: "Computer Vision, Hardware Optimization, Algorithm Development",
    details: [
      "Integrated sensors, cameras, and sonar systems for real-time data processing",
      "Optimized stability and accuracy through testing and tuning",
      "Developed computer vision algorithms for task automation",
    ],
  },
  {
    title: "Stripe Integration Web App",
    date: "June 2024 - August 2024",
    description:
      "Built a full-stack application using Next.js, React, and TypeScript, integrating Stripe APIs for subscription and usage-based billing. Implemented user authentication and data management with Supabase, ensuring secure registration and login. Designed a responsive UI with Tailwind CSS, showcasing my original photography for a cohesive visual experience.",
    skills: "React, Next.js, Tailwind CSS, Stripe APIs, Supabase",
    details: [
      "Integrated Stripe APIs for real-time billing and subscription services",
      "Implemented secure user authentication with Supabase",
      "Designed a responsive UI with Tailwind CSS",
    ],
  },
  {
    title: "Autoclavable Testing Stand",
    date: "January 2024 - May 2024",
    description:
      "Created an autoclavable stand to increase efficiency in loading and testing for UL Solutions. Reduced loading time from 15 to 5 minutes while enhancing safety and stability. Applied metalworking techniques, including CNC milling, and utilized both metal and PLA 3D printing.",
    skills: "CNC Milling, Metalworking, 3D Printing",
    details: [
      "Designed and manufactured an autoclavable biological testing stand",
      "Decreased loading time from 15 to 5 minutes",
      "Increased stability and safety during testing",
    ],
  },
  {
    title: "Personal Portfolio Website",
    date: "November 2024 - Ongoing",
    description:
      "Currently developing a personal portfolio website to showcase my projects, skills, and experiences. Built using React for the frontend and Tailwind CSS for styling. The portfolio includes interactive project cards with dynamic popups for detailed information.",
    skills: "React, Tailwind CSS, JavaScript",
    details: [
      "Designed a clean and responsive layout using Tailwind CSS",
      "Implemented dynamic project cards with popup details",
      "Showcased a variety of skills and experiences in an engaging format",
    ],
  },
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    // Cleanup observer on component unmount
    return () => observer.disconnect();
  }, []);

  const openPopup = (project) => {
    setActiveProject(project);
  };

  const closePopup = () => {
    setActiveProject(null);
  };

  return (
    <div className="projects-container">
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div className="project-card hidden" key={index}>
            <div className="project-content">
              <h2>{project.title}</h2>
              <p>{project.date}</p>
              <ul>
                {project.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
            <button
              className="more-info-btn"
              onClick={() => openPopup(project)}
            >
              More Info
            </button>
          </div>
        ))}
      </div>

      {activeProject && (
        <>
          <div className="popup-overlay active" onClick={closePopup}></div>
          <div className="popup active">
            <div className="popup-header">
              <h2>{activeProject.title}</h2>
              <button className="popup-close" onClick={closePopup}>
                &times;
              </button>
            </div>
            <div className="popup-body">
              <p>{activeProject.description}</p>
              <p>
                <strong>Skills:</strong> {activeProject.skills}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Projects;
