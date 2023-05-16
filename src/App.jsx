import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import HomePage from './pages/HomePage'
import Contact from './pages/Contact'
import LegalDisclosure from './pages/LegalDisclosure'
import DataPrivacyPolicy from './pages/DataPrivacyPolicy'
import Blog from './pages/Blog'
import BlogPostPage from './pages/Blog/BlogPostPage'

function App() {

  return (
    <div className="flex flex-col justify-between h-screen">
      <Navbar />
      <div className="bg-white">
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-statement" element={<DataPrivacyPolicy />} />
            <Route path="/legal-disclosure" element={<LegalDisclosure />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/posts/:blogPostSlug" element={<BlogPostPage />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  )
}

export default App