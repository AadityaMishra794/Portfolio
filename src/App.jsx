import { useState } from 'react'
import './App.css'
import Portfolio from './components/Portfolio'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Portfolio />} />
        
         
        </Routes>
      </Router>
    </div>
  )
}

export default App
