// src/components/Contact.js
import React from 'react';
import '../App.css';
import Skill from '../components/FramworkSkill'
function Contact() {
  return (
    <div className="contact-container">
      <h2 style={{ color: 'white' }}>Contact Page</h2><br />
      
    <Skill targetProgress={65}/>
    </div>
  );
}

export default Contact;
