import React from 'react';
import './App.css'; // Import your CSS file
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/home';
import Profile from './pages/contacts.';
import About from './pages/about_us';

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav className="navbar"> {/* Add a class name for styling */}
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;