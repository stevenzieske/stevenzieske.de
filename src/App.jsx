import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import HomePage from './pages/HomePage'
import LegalDisclosure from './pages/LegalDisclosure'
import DataPrivacyPolicy from './pages/DataPrivacyPolicy'

function App() {
  return (
    <>
      <Navbar />
      <div className="px-10 lg:px-40">
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/privacy-statement" element={<DataPrivacyPolicy />} />
            <Route path="/legal-disclosure" element={<LegalDisclosure />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </>
  )
}

export default App