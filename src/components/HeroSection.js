import React from 'react';
import '../App.css';
import './Button.css';
import './HeroSection.css';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Link to='/sign-up'>
        <button className="btn btn-primary btn-lg">
        
        GET STARTED
      </button>
      <button className="btn btn-secondary btn-lg">
        
      
        WATCH TRAILER <i className='far fa-play-circle' />
      </button>
        </Link>

        
      </div>
    </div>
  );
}

export default HeroSection;
