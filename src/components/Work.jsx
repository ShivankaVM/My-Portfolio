import React, { useEffect, useRef } from 'react';
import './Work.css';
import lifeOnLand from '../assets/lifeonland.png';
import studentProgression from '../assets/studentprogression.png';
import javaPlane from '../assets/javaplane.png';
import ticketBooking from '../assets/ticketbookingsystem.png';
import cleanWaves from '../assets/cleanwaves.png';
import legalxlk from '../assets/legalxlk.png';
import cinnamonLegends from '../assets/cinnamonLegends.png';
import EventBooking from '../assets/EventBooking.png';
import vivee from "../assets/vivee.png"
import eventura from "../assets/eventura.png"
import napco from "../assets/napco.png"
import dashboard from "../assets/dashboard.png"
import { Link } from "react-router-dom";

const Work = () => {
  // Refs for intersection observer animations
  const projectRefs = useRef([]);

  useEffect(() => {
    window.scrollTo(0, 0)
   },[])

  useEffect(() => {
    // Animation on load for header
    const headerElement = document.querySelector('header');
    if (headerElement) {
      headerElement.classList.add('animate-slide-down');
    }

    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in-view');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe project elements
    const projectElements = document.querySelectorAll('.project-item');
    projectElements.forEach(project => observer.observe(project));

    // Animate footer
    const footerElement = document.querySelector('footer');
    if (footerElement) {
      setTimeout(() => {
        footerElement.classList.add('animate-fade-in');
      }, 800);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="work-container">
      <header>
        <div className="logo">
          <Link to="/">Shivanka Maddumarachchi.</Link>
        </div>
        <nav>
        <ul>
          <li>
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li>
            <Link to="/work" className="active nav-link">Work</Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link">Contact</Link>
          </li>
        </ul>
      </nav>
      </header>

      <main className="work-content">
        <div className="project-item" ref={(el) => projectRefs.current[0] = el}>
          <div className="project-info">
            <h2 className="project-title">Life on Land website</h2>
            <p className="technologies">Technologies: Javascript, HTML, CSS</p>
            <p className="description">
              Designed the home page, navigation bar, footer, feedback form and the profile page.
            </p>
            <a href="https://github.com/ShivankaVM/Life-on-Land-Frontend-website" className="project-link">
              Project Link
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="arrow-icon">
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          <div className="project-image">
            <img src={lifeOnLand || "/placeholder.svg"} alt="Life on Land website" className="project-img-hover" />
          </div>
        </div>

        <div className="project-item" ref={(el) => projectRefs.current[1] = el}>
          <div className="project-info">
            <h2 className="project-title">Program to predict progression outcomes of students</h2>
            <p className="technologies">Technologies: Python</p>
            <p className="description">
            Developed a Python program to predict university student progression outcomes based on academic credits. Implemented user-defined functions, error handling, and data storage using lists and text files. Enhanced the program with data visualization by integrating graphics.py to generate a histogram of progression categories for multiple students, providing clear insights into academic performance trends.
            </p>
            <a href="https://github.com/ShivankaVM/University-Progression-Outcome-Predictor-PYTHON" className="project-link">
              Project Link
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="arrow-icon">
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          <div className="project-image">
            <img src={studentProgression || "/placeholder.svg"} alt="Student progression program" className="project-img-hover" />
          </div>
        </div>

        <div className="project-item" ref={(el) => projectRefs.current[2] = el}>
          <div className="project-info">
            <h2 className="project-title">Java Plane booking system</h2>
            <p className="technologies">Technologies: Java</p>
            <p className="description">
            Developed a Java-based plane seat management system using arrays and menu-driven commands for purchasing, canceling, and displaying tickets. Implemented user input validation and tracking of available seats and total sales. Applied object-oriented principles by creating Person and Ticket classes to manage user and ticket data, including functions for searching, sorting, and reporting on bookings, ensuring an efficient and structured ticketing process.
            </p>
            <a href="https://github.com/ShivankaVM/Plane-Management-System-JAVA" className="project-link">
              Project Link
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="arrow-icon">
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          <div className="project-image">
            <img src={javaPlane || "/placeholder.svg"} alt="Java Plane booking system" className="project-img-hover" />
          </div>
        </div>

        <div className="project-item" ref={(el) => projectRefs.current[3] = el}>
          <div className="project-info">
            <h2 className="project-title">Real time Ticket Booking System</h2>
            <p className="technologies">Technologies: Java, Springboot, Angular</p>
            <p className="description">
            Developed a real-time concurrent ticketing system , leveraging multi-threading and the Producer-Consumer pattern for synchronized ticket releases and purchases. Implemented WebSockets for real-time updates, ensuring a responsive user experience. The system features thread-safe transactions, JSON-based data storage, and a CLI interface, enabling efficient ticket management for multiple vendors and customers. Designed to handle high concurrency while maintaining performance and reliability.
            </p>
            <a href="https://github.com/ShivankaVM/OOP-CW-20230684" className="project-link">
              Project Link
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="arrow-icon">
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          <div className="project-image">
            <img src={ticketBooking || "/placeholder.svg"} alt="Real time Ticket Booking System" className="project-img-hover" />
          </div>
        </div>

        <div className="project-item" ref={(el) => projectRefs.current[4] = el}>
          <div className="project-info">
            <h2 className="project-title">Clean Waves mobile App</h2>
            <p className="technologies">Technologies: Figma</p>
            <p className="description">
            Designed a Figma prototype for a marine conservation platform with intuitive navigation and engaging visuals. Key features include interactive dashboards, e-commerce integration, and real-time pollution tracking, creating an impactful and user-friendly experience for environmental awareness.
            </p>
            <a href="https://www.figma.com/design/5NpeWMEJAHPaaMqH4DUulI/Untitled?node-id=0-1&t=Ynwgu2UJF6wOg5G4-1" className="project-link">
              Prototype
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="arrow-icon">
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          <div className="project-image mobile-app">
            <img src={cleanWaves || "/placeholder.svg"} alt="Clean Waves mobile App" className="project-img-hover" />
          </div>
        </div>

        <div className="project-item" ref={(el) => projectRefs.current[5] = el}>
          <div className="project-info">
            <h2 className="project-title">LegalX LK an AI powered website for Lawyers</h2>
            <p className="technologies">Technologies: React, Python, Springboot, Firebase, Google cloud, Figma</p>
            <p className="description">
            Worked as a UI/UX designer and frontend developer for LegalX LK, a web-based legal management system. Designed Figma prototypes and developed key frontend components using React, including authentication pages, settings, and an AI chatbot interface. Contributed to AI-powered document summarization, task scheduling, real-time gazette updates, and RBAC for secure user management. Also assisted in building an Acts web scraper for automating legal document retrieval, ensuring usability, accessibility, and efficiency in legal workflows.
            </p>
            <a href="https://legalxlk.com" className="project-link">
              Go to the Website
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="arrow-icon">
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          <div className="project-image">
            <img src={legalxlk || "/placeholder.svg"} alt="LegalX LK website" className="project-img-hover" />
          </div>
        </div>

        <div className="project-item" ref={(el) => projectRefs.current[5] = el}>
          <div className="project-info">
            <h2 className="project-title">Cinnamon Legends Website</h2>
            <p className="technologies">Technologies: Figma</p>
            <p className="description">
            Crafted a Figma prototype for Cinnamon Legends, a business platform showcasing premium cinnamon products. The design emphasizes smooth navigation, visually rich layouts, and a seamless user journey. Key features include a dynamic product catalog, integrated e-commerce functionality, and a storytelling-driven interface to enhance brand identity and customer engagement.
            </p>
            <a href="https://www.figma.com/proto/q3ZOYRYsUslSy7xskZXVZP/Cinnamon-Legends?page-id=0%3A1&node-id=10-3&p=f&viewport=303%2C321%2C0.36&t=lWAiOpyQNtuOgXdz-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=10%3A3" className="project-link">
              Prototype
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="arrow-icon">
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          <div className="project-image">
            <img src={cinnamonLegends || "/placeholder.svg"} alt="Cinnamon Legends website" className="project-img-hover" />
          </div>
        </div>

        <div className="project-item" ref={(el) => projectRefs.current[5] = el}>
          <div className="project-info">
            <h2 className="project-title">Modern eCommerce Website for a Female Fashion Brand</h2>
            <p className="technologies">Technologies: Figma</p>
            <p className="description">
            Designed a modern eCommerce website for a women’s fashion brand using Figma, focusing on clean aesthetics and user-centric navigation. Applied a mobile-first responsive layout with structured grids, enhancing product discovery and browsing. Incorporated soft neutral color schemes and elegant typography to reflect the brand’s feminine and minimal identity. UX features include intuitive filters, quick-add interactions, and a seamless checkout flow. The design ensures clarity, elegance, and ease of use across all devices, offering a refined shopping experience from homepage to checkout.
            </p>
            <a href="https://www.figma.com/proto/euiPJOjhXdQomwEijFjkdl/Vive%C3%A9?page-id=0%3A1&node-id=2003-2&viewport=280%2C229%2C0.08&t=oMFafte4EnE6IvP7-1&scaling=min-zoom&content-scaling=fixed" className="project-link">
              Prototype
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="arrow-icon">
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          <div className="project-image">
            <img src={vivee || "/placeholder.svg"} alt="E commerce website" className="project-img-hover" />
          </div>
        </div>

        <div className="project-item" ref={(el) => projectRefs.current[4] = el}>
          <div className="project-info">
            <h2 className="project-title"> Event booking and Management App</h2>
            <p className="technologies">Technologies: Figma</p>
            <p className="description">
            Designed a Figma prototype for an event booking and management app that offers a seamless and intuitive user experience. The Overview Page provides a clear summary of upcoming events, total bookings, and performance analytics through interactive visuals. Users can explore events on the Browse Events Page using filters for type, date, location, and popularity. Each event has a dedicated Event Details Page highlighting key information like date, location, attendee count, and ticket sales. The Attendee Insights Page showcases demographic data and engagement trends using charts and graphs, enabling organizers to make informed decisions and optimize future events.
            </p>
            <a href="https://www.figma.com/proto/VLRRxPilgRpWeAe8F4kS9K/Zyner-Assessment?page-id=0%3A1&node-id=60-78&p=f&viewport=68%2C896%2C0.34&t=yoHjWmobfBQZZYTz-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=60%3A78" className="project-link">
              Prototype
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="arrow-icon">
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          <div className="project-image"> 
            <img src={EventBooking || "/placeholder.svg"} alt="Event booking and Management App" className="project-img-hover" />
          </div>
        </div>

        <div className="project-item" ref={(el) => projectRefs.current[4] = el}>
          <div className="project-info">
            <h2 className="project-title"> Eventura Weddings</h2>
            <p className="technologies">Technologies: Figma</p>
            <p className="description">
           Crafted a Figma prototype for Eventura, a wedding showcase platform designed to highlight beautifully curated celebrations. The design focuses on a smooth, visually elegant user experience with pages dedicated to past weddings, company background, and seamless contact options. Key features include a gallery-style weddings page, an inviting About Us section, and a user-friendly contact form—offering a refined digital presence that reflects the brand’s dedication to memorable moments.
            </p>
            <a href="https://www.figma.com/proto/W311v45B61NNWe4WKL2z37/Eventura?page-id=0%3A1&node-id=34-18&viewport=25%2C206%2C0.16&t=weTqeWZFXrdX5Qlx-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=34%3A18" className="project-link">
              Prototype
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="arrow-icon">
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          <div className="project-image">
            <img src={eventura || "/placeholder.svg"} alt="Eventura" className="project-img-hover" />
          </div>
        </div> 

        <div className="project-item" ref={(el) => projectRefs.current[4] = el}>
          <div className="project-info">
            <h2 className="project-title"> Lab-Oriented Dashboard Design</h2>
            <p className="technologies">Technologies: Figma</p>
            <p className="description">
           Crafted a Figma prototype for the XRF Spectrometer Application, a lab-oriented dashboard designed for technical precision and usability. The interface includes a streamlined login experience, a modular main dashboard with real-time device status and quick actions, and an intuitive Sample Analysis screen with input forms, charts, and progress indicators. The design emphasizes visual clarity, efficient navigation, and a professional aesthetic—ensuring that lab technicians can interact with the system confidently and efficiently in high-focus environments.
           </p>
            <a href="https://www.figma.com/proto/u8gOp12GEtsvNaOOFUdOu5/Napco?page-id=0%3A1&node-id=3-68&viewport=38%2C312%2C0.25&t=V1S0yBSyhd4QOAWm-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=3%3A2" className="project-link">
              Prototype
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="arrow-icon">
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" /> 
              </svg>
            </a>
          </div>
          <div className="project-image">
            <img src={napco || "/placeholder.svg"} alt="Napco" className="project-img-hover" />
          </div>
        </div> 

        <div className="project-item" ref={(el) => projectRefs.current[4] = el}>
          <div className="project-info">
            <h2 className="project-title"> Modern SaaS Admin Dashboard</h2>
            <p className="technologies">Technologies: Figma</p>
            <p className="description">
           Crafted a Figma prototype for a modern SaaS admin dashboard focused on clarity, usability, and efficient user workflows. The design features a clean login experience, a modular dashboard home with key metrics and charts, a user management interface with actionable tables, and intuitive settings and analytics pages. Prioritizing visual hierarchy and minimal UI components, the layout ensures a seamless experience for administrators managing users, settings, and data insights within a streamlined, professional environment.
           </p>
            <a href="https://www.figma.com/proto/xRf05hOFv0Eg8pMXZkeqJS/NoLoopTech?page-id=0%3A1&node-id=1-4&p=f&viewport=-933%2C90%2C0.37&t=spaSl3TLBIdOfjCA-1&scaling=scale-down&content-scaling=fixed" className="project-link">
              Prototype
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="arrow-icon">
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" /> 
              </svg>
            </a>
          </div>
          <div className="project-image">
            <img src={dashboard || "/placeholder.svg"} alt="dashboard" className="project-img-hover" />
          </div>
        </div> 
      </main>

      <footer className="work--footer">
        <div className="back-button">
          <Link to="/" className="back-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="back-icon">
              <path d="M19 12H5" />
              <path d="M12 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
        </div>
        <div className="contact-button">
          <Link to="/contact" className="contact-link">Contact me</Link>
        </div>
      </footer>
    </div>
  );
};

export default Work;
