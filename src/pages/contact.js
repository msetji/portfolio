import React, { useEffect } from 'react';
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import './Contact.css';

const Experience = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          } else {
            entry.target.classList.remove('show');
          }
        });
      },
      { threshold: 0.2 } // Adjust threshold for when the animation triggers
    );

    const card = document.querySelector('.card');
    if (card) observer.observe(card);

    // Cleanup observer on component unmount
    return () => {
      if (card) observer.unobserve(card);
    };
  }, []);

  return (
    <div className="container">
      <div className="card hidden">
        <h1>Let’s talk</h1>
        <div className="contact-icons">
          {/* Phone */}
          <a href="tel:+1234567890" className="icon-link" aria-label="Phone">
            <FaPhoneAlt />
          </a>

          {/* Email */}
          <a href="mailto:your-email@example.com" className="icon-link" aria-label="Email">
            <FaEnvelope />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/your-profile/"
            className="icon-link"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/your-username/"
            className="icon-link"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/your-username"
            className="icon-link"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>
        <p>Feel free to reach out to me through any of the platforms above. I look forward to hearing from you!</p>
        <p>
          For business inquiries, please email me at{' '}
          <a href="mailto:mps69@duke.edu">mps69@duke.edu</a> or call me at{' '}
          <a href="tel:+1234567890">+1 (234) 567-890</a>.
        </p>
      </div>
    </div>
  );
};

export default Experience;
