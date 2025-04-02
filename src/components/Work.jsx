import React from 'react';
import './work.css';
import lifeOnLand from '../assets/lifeonland.png';
import studentProgression from '../assets/studentprogression.png';
import javaPlane from '../assets/javaplane.png';
import ticketBooking from '../assets/ticketbookingsystem.png';
import cleanWaves from '../assets/cleanwaves.png';
import legalxlk from '../assets/legalxlk.png';

const Work = () => {
  return (
    <div className="work-container">
      <header>
        <div className="logo">
          <a href="/">Shivanka Maddumarachchi.</a>
        </div>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/work" className="active">Work</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="work-content">
        <div className="project-item">
          <div className="project-info">
            <h2>Life on Land website</h2>
            <p className="technologies">Technologies: Javascript, HTML, CSS</p>
            <p className="description">
              Designed the home page, navigation bar, footer, feedback form and the profile page.
            </p>
            <a href="https://github.com/ShivankaVM/Life-on-Land-Frontend-website" className="project-link">
              Project Link
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          <div className="project-image">
            <img src={lifeOnLand || "/placeholder.svg"} alt="Life on Land website" />
          </div>
        </div>

        <div className="project-item">
          <div className="project-info">
            <h2>Program to predict progression outcomes of students</h2>
            <p className="technologies">Technologies: Python</p>
            <p className="description">
            Developed a Python program to predict university student progression outcomes based on academic credits. Implemented user-defined functions, error handling, and data storage using lists and text files. Enhanced the program with data visualization by integrating graphics.py to generate a histogram of progression categories for multiple students, providing clear insights into academic performance trends.
            </p>
            <a href="https://github.com/ShivankaVM/University-Progression-Outcome-Predictor-PYTHON" className="project-link">
              Project Link
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          <div className="project-image">
            <img src={studentProgression || "/placeholder.svg"} alt="Student progression program" />
          </div>
        </div>

        <div className="project-item">
          <div className="project-info">
            <h2>Java Plane booking system</h2>
            <p className="technologies">Technologies: Java</p>
            <p className="description">
            Developed a Java-based plane seat management system using arrays and menu-driven commands for purchasing, canceling, and displaying tickets. Implemented user input validation and tracking of available seats and total sales. Applied object-oriented principles by creating Person and Ticket classes to manage user and ticket data, including functions for searching, sorting, and reporting on bookings, ensuring an efficient and structured ticketing process.
            </p>
            <a href="https://github.com/ShivankaVM/Plane-Management-System-JAVA" className="project-link">
              Project Link
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          <div className="project-image">
            <img src={javaPlane || "/placeholder.svg"} alt="Java Plane booking system" />
          </div>
        </div>

        <div className="project-item">
          <div className="project-info">
            <h2>Real time Ticket Booking System</h2>
            <p className="technologies">Technologies: Java, Springboot, Angular</p>
            <p className="description">
            Developed a real-time concurrent ticketing system , leveraging multi-threading and the Producer-Consumer pattern for synchronized ticket releases and purchases. Implemented WebSockets for real-time updates, ensuring a responsive user experience. The system features thread-safe transactions, JSON-based data storage, and a CLI interface, enabling efficient ticket management for multiple vendors and customers. Designed to handle high concurrency while maintaining performance and reliability.
            </p>
            <a href="https://github.com/ShivankaVM/OOP-CW-20230684" className="project-link">
              Project Link
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          <div className="project-image">
            <img src={ticketBooking || "/placeholder.svg"} alt="Real time Ticket Booking System" />
          </div>
        </div>

        <div className="project-item">
          <div className="project-info">
            <h2>Clean Waves mobile App</h2>
            <p className="technologies">Technologies: Figma</p>
            <p className="description">
            Designed a Figma prototype for a marine conservation platform with intuitive navigation and engaging visuals. Key features include interactive dashboards, e-commerce integration, and real-time pollution tracking, creating an impactful and user-friendly experience for environmental awareness.
            </p>
            <a href="https://www.figma.com/design/5NpeWMEJAHPaaMqH4DUulI/Untitled?node-id=0-1&t=Ynwgu2UJF6wOg5G4-1" className="project-link">
              Prototype
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          <div className="project-image mobile-app">
            <img src={cleanWaves || "/placeholder.svg"} alt="Clean Waves mobile App" />
          </div>
        </div>

        <div className="project-item">
          <div className="project-info">
            <h2>LegalX LK an AI powered website for Lawyers</h2>
            <p className="technologies">Technologies: React, Python, Springboot, Firebase, Google cloud, Figma</p>
            <p className="description">
            Worked as a UI/UX designer and frontend developer for LegalX LK, a web-based legal management system. Designed Figma prototypes and developed key frontend components using React, including authentication pages, settings, and an AI chatbot interface. Contributed to AI-powered document summarization, task scheduling, real-time gazette updates, and RBAC for secure user management. Also assisted in building an Acts web scraper for automating legal document retrieval, ensuring usability, accessibility, and efficiency in legal workflows.
            </p>
            <a href="https://legalxlk.com" className="project-link">
              Go to the Website
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          <div className="project-image">
            <img src={legalxlk || "/placeholder.svg"} alt="LegalX LK website" />
          </div>
        </div>
      </main>

      <footer className="work--footer">
        <div className="back-button">
          <a href="/">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5" />
              <path d="M12 19l-7-7 7-7" />
            </svg>
          </a>
        </div>
        <div className="contact-button">
          <a href="/contact">Contact me</a>
        </div>
      </footer>
    </div>
  );
};

export default Work;
