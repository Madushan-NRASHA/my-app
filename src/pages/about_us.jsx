import React from 'react';
import ParallaxCard from '../components/ParallaxCard';
import ReactImage from '../assets/React_images.png';
import Flutter from '../assets/flutter_image.jpeg';
import Laravel from '../assets/Laravel.jpeg';
import FrameWSkill from '../sidebars/SkillBar'

function About() {
  return (
    <div className="about-container">
      <h2 style={{ color: 'white' }}>About Page</h2>
      <div className="card-container">
        <ParallaxCard 
          title="React" 
          imageSrc={ReactImage}
        />
        <ParallaxCard 
          title="Flutter" 
          imageSrc={Flutter}
        />
        <ParallaxCard 
          title="Laravel" 
          imageSrc={Laravel}
        />
      </div>
      
      <FrameWSkill />

    </div>
  );
}

export default About;
