import { useState } from 'react'
import './App.css'
import Portfolio from './components/Portfolio'
import About from './components/About'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Services from './components/Services'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/testimonials" element={<Testimonials />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
