import { useState, useEffect } from "react";
import "./Contact.css";
import { Link } from "react-router-dom";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setState] = useState({
    name: "",
    email: "",
    projectDetails: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your actual public key

    // Animation on load for header
    const headerElement = document.querySelector('header');
    if (headerElement) {
      headerElement.classList.add('animate-slide-down');
    }

    // Animate form container
    const formContainer = document.querySelector('.contact-form-container');
    if (formContainer) {
      setTimeout(() => {
        formContainer.classList.add('animate-fade-up');
      }, 300);
    }

    // Animate intro text
    const introElement = document.querySelector('.contact-intro');
    if (introElement) {
      introElement.classList.add('animate-fade-in');
    }

    // Animate footer
    const footerElement = document.querySelector('footer');
    if (footerElement) {
      setTimeout(() => {
        footerElement.classList.add('animate-fade-in');
      }, 600);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // EmailJS template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        to_email: 'shivankavindunie@gmail.com',
        message: formData.projectDetails,
        reply_to: formData.email,
      };

      const result = await emailjs.send(
        'YOUR_SERVICE_ID',    // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID',   // Replace with your EmailJS template ID
        templateParams
      );

      console.log('Email sent successfully:', result);
      setSubmitStatus('success');
      
      // Reset form after successful submission
      setState({
        name: "",
        email: "",
        projectDetails: "",
      });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);

    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
      
      // Clear error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-container">
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
              <Link to="/work" className="nav-link">Work</Link>
            </li>
            <li>
              <Link to="/contact" className="active nav-link">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="contact-content">
        <div className="contact-intro">
          <p>You can contact me through below form or send an email to:</p>
          <a href="mailto:shivankavindunie@gmail.com" className="email-link">
            shivankavindunie@gmail.com
          </a>
        </div>

        <div className="contact-form-container">
          {submitStatus === 'success' && (
            <div className="status-message success-message">
              ✅ Message sent successfully! I'll get back to you soon.
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="status-message error-message">
              ❌ Failed to send message. Please try again or email me directly.
            </div>
          )}

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
                disabled={isSubmitting}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
                disabled={isSubmitting}
              />
            </div>
            <textarea
              name="projectDetails"
              placeholder="Project Details..."
              value={formData.projectDetails}
              onChange={handleChange}
              required
              className="form-textarea"
              disabled={isSubmitting}
            ></textarea>
            <button 
              type="submit" 
              className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Submit'}
            </button>
          </form>
        </div>
      </main>

      <footer>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/shivanka-maddumarachchi-414b0b262/" aria-label="LinkedIn" className="social-icon-hover">
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
  );
};

export default Contact;