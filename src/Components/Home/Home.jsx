import React from 'react';
import './Home.css'
import profile_img from '../../assets/profile_img.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import pdf from "../pdf/Resume.pdf";


const Home = () => {
  return (
    <div id="home" className='hero'>
      <img  className="profile-img" src={profile_img} alt=""/>
      <h1><span>I'm Shifa Tazeen, </span> MERN Stack Developer <br/>
      based in India.</h1>
      <p>A passionate engineer from New Delhi, India with expertise in MERN stack development and Data analysis.
        I am eager to learn and explore the technological revolution to solve the real world problems.
      </p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume">

        
        <a 
       href={pdf}
       download="Resume.pdf">Resume
       </a>
      
       </div>
      </div>
    </div>
  );
}

export default Home;
