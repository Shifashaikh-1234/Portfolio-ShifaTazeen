import React from 'react';
import "./About.css"
import theme_pattern from "../../assets/theme_pattern.jpg"

const About = () => {
  return (
    <div id="about" className='about'>
        <div className="about-title">
            <h1>ABOUT ME</h1>
            
        </div>

        <div className="about-section">
            <div className="about-left">
            <img src={theme_pattern} alt=""/>
            </div>
        
      <div className="about-right">
        <div className="about-para">
            <p>Highly skilled MERN Stack developer and a Data Analyst experience in designing and developing robust web 
                applications and dashboards.Proficient in front-end and back-end technologies, including React.js, Node.js, MongoDB, and Express.js. 
                </p>
                 <p>Strong understanding of responsive design principles and cross-browser compatibility. 
                    
                 A collaborative team player, dedicated to ensuring seamless user experiences and designing scalable solutions.
                 </p>
        </div>
        <div className="about-skills">
            <div className="about-different-skills"><p>HTML & CSS</p><hr style={{width: "50%"}}/></div>
            <div className="about-different-skills"><p>JavaScript</p><hr style={{width: "70%"}}/></div>
            <div className="about-different-skills"><p>React JS</p><hr style={{width: "60%"}}/></div>
            <div className="about-different-skills"><p>Node JS</p><hr style={{width: "50%"}}/></div>
            <div className="about-different-skills"><p>Mongo DB</p><hr style={{width: "60%"}}/></div>
            <div className="about-different-skills"><p>Python</p><hr style={{width: "70%"}}/></div>
            <div className="about-different-skills"><p>Power BI</p><hr style={{width: "50%"}}/></div>
            <div className="about-different-skills"><p>SQL</p><hr style={{width: "50%"}}/></div>

        </div>

      </div>
      </div>
      <div className="about-achievements">
        <div className="achievements">
            <h1>1+</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div>
        
      </div>
    </div>
  );
}

export default About;

