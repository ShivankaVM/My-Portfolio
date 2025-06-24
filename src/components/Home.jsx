"use client"

import { useEffect, useRef } from "react"
import "./Home.css"
import profileBlob from "../assets/profile-blob.png"
import contactBlob from "../assets/contact-blob.png"
import legalxlk from "../assets/legalxlk.png"
import java from "../assets/java.png"
import python from "../assets/python.png"
import javascript from "../assets/javascript.png"
import html from "../assets/html.png"
import css from "../assets/css.png"
import react from "../assets/react.png"
import git from "../assets/git.png"
import figma from "../assets/figma.png"
import axure from "../assets/axure.png"
import postman from "../assets/postman.png"
import springboot from "../assets/springboot.png"
import mysql from "../assets/mysql.png"
import eventura from "../assets/eventura.png" 
import vivee from "../assets/vivee.png" 
import { Link } from "react-router-dom"

const Home = () => {
  // Refs for intersection observer animations
  const heroRef = useRef(null)
  const skillsRef = useRef(null)
  const projectRefs = useRef([])
  const contactRef = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)
   },[])

  useEffect(() => {
    // Animation on load for hero section
    const heroElement = document.querySelector(".hero")
    if (heroElement) {
      heroElement.classList.add("animate-fade-in")
    }

    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.2,
      rootMargin: "0px 0px -100px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in-view")
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    // Observe elements
    const skillsSection = document.querySelector(".skills")
    const projectElements = document.querySelectorAll(".project")
    const contactSection = document.querySelector(".contact-section")

    if (skillsSection) observer.observe(skillsSection)
    projectElements.forEach((project) => observer.observe(project))
    if (contactSection) observer.observe(contactSection)

    // Animate skill icons with delay
    const animateSkillIcons = () => {
      const icons = document.querySelectorAll(".skill-icon")
      icons.forEach((icon, index) => {
        setTimeout(() => {
          icon.classList.add("animate-pop")
        }, 100 * index)
      })
    }

    // Trigger skill icons animation when skills section is in view
    const skillsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateSkillIcons()
            skillsObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.5 },
    )

    if (skillsSection) skillsObserver.observe(skillsSection)

    // Animate footer
    const footerElement = document.querySelector("footer")
    if (footerElement) {
      setTimeout(() => {
        footerElement.classList.add("animate-fade-in")
      }, 800)
    }

    return () => {
      observer.disconnect()
      skillsObserver.disconnect()
    }
  }, [])

  return (
    <div className="portfolio">
      <header className="animate-slide-down">
        <div className="logo">
          <Link to="/">Shivanka Maddumarachchi.</Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/" className="active nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/work" className="nav-link">
                Work
              </Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="hero" ref={heroRef}>
          <div className="hero-content">
            <h1 className="animate-title">
              <span className="front">FRONT</span> <span className="and">end</span>
              <br />
              DESIGNER AND
              <br />
              DEVELOPER
            </h1>
            <p className="intro animate-fade-up delay-1">Hello, I'm Shivanka.</p>
            <p className="description animate-fade-up delay-2">
              I am an Undergraduate Computer science student at Informatics Institute of Technology (IIT), affiliated
              with the University of Westminster. I am a passionate UI/UX designer and web developer who loves creating
              intuitive and visually engaging digital experiences. With a strong focus on design and development, I
              craft modern web and mobile applications using the latest technologies. Constantly eager to learn and
              innovate, I thrive on turning ideas into functional and aesthetically pleasing solutions.
            </p>
            <p className="cta animate-fade-up delay-3">Feel free to take a look at my latest projects on Work page</p>
            <div className="buttons animate-fade-up delay-4">
              <a
                href="/Shivanka Maddumarachchi CV.pdf"
                className="btn btn-primary btn-hover-effect"
                download="Shivanka_Maddumarachchi_CV.pdf"
              >
                Download CV
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="btn-icon"
                >
                  <path d="M7 7l5 5 5-5" />
                  <path d="M7 13l5 5 5-5" />
                </svg>
              </a>

              <Link to="/work" className="btn btn-secondary btn-hover-effect">
                Work
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="btn-icon"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="hero-image animate-float">
            <div className="image-container">
              <img src={profileBlob || "/placeholder.svg"} alt="3D abstract shape" />
            </div>
          </div>
        </section>

        <section className="skills" ref={skillsRef}>
          <h2 className="section-title">TECHNOLOGIES I USE</h2>
          <div className="skill-container">
            <div className="skill-category">
              <h3>Programming Languages</h3>
              <div className="skill-icons">
                <div className="skill-icon">
                  <img src={java || "/placeholder.svg"} alt="Java" />
                  <span>Java</span>
                </div>
                <div className="skill-icon">
                  <img src={python || "/placeholder.svg"} alt="Python" />
                  <span>Python</span>
                </div>
                <div className="skill-icon">
                  <img src={javascript || "/placeholder.svg"} alt="JavaScript" />
                  <span>JavaScript</span>
                </div>
              </div>
            </div>

            <div className="skill-category">
              <h3>Web Development</h3>
              <div className="skill-icons">
                <div className="skill-icon">
                  <img src={html || "/placeholder.svg"} alt="HTML" />
                  <span>HTML</span>
                </div>
                <div className="skill-icon">
                  <img src={css || "/placeholder.svg"} alt="CSS" />
                  <span>CSS</span>
                </div>
                <div className="skill-icon">
                  <img src={react || "/placeholder.svg"} alt="React" />
                  <span>React</span>
                </div>
              </div>
            </div>

            <div className="skill-category">
              <h3>DevOps and Tools</h3>
              <div className="skill-icons">
                <div className="skill-icon">
                  <img src={git || "/placeholder.svg"} alt="Git" />
                  <span>Git</span>
                </div>
                <div className="skill-icon">
                  <img src={figma || "/placeholder.svg"} alt="Figma" />
                  <span>Figma</span>
                </div>
                <div className="skill-icon">
                  <img src={axure || "/placeholder.svg"} alt="Azure" />
                  <span>Axure</span>
                </div>
                <div className="skill-icon">
                  <img src={postman || "/placeholder.svg"} alt="Postman" />
                  <span>Postman</span>
                </div>
              </div>
            </div>

            <div className="skill-category">
              <h3>Backend Development</h3>
              <div className="skill-icons">
                <div className="skill-icon">
                  <img src={springboot || "/placeholder.svg"} alt="Spring Boot" />
                  <span>Spring Boot</span>
                </div>
              </div>
            </div>

            <div className="skill-category">
              <h3>Database</h3>
              <div className="skill-icons">
                <div className="skill-icon">
                  <img src={mysql || "/placeholder.svg"} alt="MySQL" />
                  <span>MySQL</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="recent-work">
          <h2 className="section-title">RECENT WORK</h2>

          <div className="project" ref={(el) => (projectRefs.current[0] = el)}>
            <div className="project-content">
              <h3>LegalX LK, an AI powered website for Lawyers</h3>
              <p>
                Worked as a UI/UX designer and frontend developer for LegalX LK, a web-based legal management system.
                Designed Figma prototypes and developed key frontend components using React, including authentication
                pages, settings, and an AI chatbot interface. Contributed to AI-powered document summarization, task
                scheduling, real-time gazette updates, and RBAC for secure user management. Also assisted in building an
                Acts web scraper for automating legal document retrieval, ensuring usability, accessibility, and
                efficiency in legal workflows.
              </p>
              <a href="https://legalxlk.com" className="btn btn-link">
                Go to the Website
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="arrow-icon"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            <div className="project-image">
              <img src={legalxlk || "/placeholder.svg"} alt="LegalX LK Project" className="project-img-hover" />
            </div>
          </div>

          <div className="project" ref={(el) => (projectRefs.current[2] = el)}>
            <div className="project-content">
              <h3>Eventura Weddings</h3>
              <p>
              Crafted a Figma prototype for Eventura, a wedding showcase platform designed to highlight beautifully curated celebrations. The design focuses on a smooth, visually elegant user experience with pages dedicated to past weddings, company background, and seamless contact options. Key features include a gallery-style weddings page, an inviting About Us section, and a user-friendly contact form—offering a refined digital presence that reflects the brand’s dedication to memorable moments.
              </p>
              <a
                href="https://www.figma.com/proto/W311v45B61NNWe4WKL2z37/Eventura?page-id=0%3A1&node-id=34-18&viewport=25%2C206%2C0.16&t=weTqeWZFXrdX5Qlx-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=34%3A18"
                className="btn btn-link"
              >
                Prototype
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="arrow-icon"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            <div className="project-image">
            <img
                src={eventura || "/placeholder.svg"}
                alt="Eventura"
                className="project-img-hover"
              /></div>
          </div>

          <div className="project" ref={(el) => (projectRefs.current[1] = el)}>
            <div className="project-content">
              <h3>Modern eCommerce Website for a Female Fashion Brand  </h3>
              <p>
                Designed a modern eCommerce website for a women’s fashion brand using Figma, focusing on clean aesthetics and user-centric navigation. Applied a mobile-first responsive layout with structured grids, enhancing product discovery and browsing. Incorporated soft neutral color schemes and elegant typography to reflect the brand’s feminine and minimal identity. UX features include intuitive filters, quick-add interactions, and a seamless checkout flow. The design ensures clarity, elegance, and ease of use across all devices, offering a refined shopping experience from homepage to checkout.
              </p>
              <a href="https://www.figma.com/proto/euiPJOjhXdQomwEijFjkdl/Vive%C3%A9?page-id=0%3A1&node-id=2003-2&viewport=280%2C229%2C0.08&t=oMFafte4EnE6IvP7-1&scaling=min-zoom&content-scaling=fixed" className="btn btn-link">
                Prototype
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="arrow-icon"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            <div className="project-image">
              <img
                src={vivee || "/placeholder.svg"}
                alt="E commerce website"
                className="project-img-hover"
              />
            </div>
          </div>

          <div className="more-work animate-pulse">
            <Link to="/work" className="btn btn-link">
              More work
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="arrow-icon"
              >
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </section>

        <section className="contact-section" ref={contactRef}>
          <div className="contact-image animate-float">
            <div className="image-container-contact">
              <img src={contactBlob || "/placeholder.svg"} alt="3D abstract shape" />
            </div>
          </div>
          <div className="contact-content">
            <h2 className="animate-on-scroll">Interested in my work?</h2>
            <p className="animate-on-scroll">
              I'm always open to talk with you about your projects and give solutions.
            </p>
            <Link to="/contact" className="contact-link animate-on-scroll">
              Contact me
            </Link>
          </div>
        </section>
      </main>

      <footer>
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/shivanka-maddumarachchi-414b0b262/"
            aria-label="LinkedIn"
            className="social-icon-hover"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          <a href="mailto:shivankavindunie@gmail.com" aria-label="Email" className="social-icon-hover">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </a>
          <a href="https://github.com/ShivankaVM" aria-label="GitHub" className="social-icon-hover">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
          </a>
        </div>
        <div className="copyright">
          <p>Copyright © Shivanka Maddumarachchi 2025</p>
        </div>
      </footer>
    </div>
  )
}

export default Home

