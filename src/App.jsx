"use client"

import { useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from "./components/Home"
import Work from "./components/Work"
import Contact from "./components/Contact"
import "./animations.css" // Import the new animations CSS

function App() {
  useEffect(() => {
    // Initialize animations when component mounts
    const animateOnScroll = () => {
      const elements = document.querySelectorAll(".animate-on-scroll")

      elements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top
        const windowHeight = window.innerHeight

        if (elementPosition < windowHeight - 100) {
          element.classList.add("animate-in-view")
        }
      })
    }

    // Run once on initial load
    animateOnScroll()

    // Add scroll event listener
    window.addEventListener("scroll", animateOnScroll)

    // Clean up
    return () => {
      window.removeEventListener("scroll", animateOnScroll)
    }
  }, [])

  return (
    <Router basename="/My-Portfolio">
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

