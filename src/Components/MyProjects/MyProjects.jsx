import React from 'react';
import './MyProjects.css'
import project1_img from '../../assets/project1_img.jpg'
import project2_img from '../../assets/project2_img.jpg'
import project3_img from '../../assets/project3_img.jpg'
import project4_img from '../../assets/project4_img.jpg'
import project5_img from '../../assets/project5_img.jpg'
import project6_img from '../../assets/project6_img.jpg'

const myProjects_data=[
    {
        id: 1,
        name: "E-Commerce Website",
        image: project1_img
},
    {
        id: 2,
        name: "To-Do List",
        image: project2_img

    },
    {
        id: 3,
        name: "Dice Rolling Game",
        image: project3_img

    },
    {
        id: 4,
        name: "Dashboard",
        image: project5_img

    },
    {
        id: 5,
        name: "Music Player",
        image: project4_img

    },
    {
        id: 6,
        name: "ChatGPT Clone",
        image: project6_img

    }

]

const MyProjects = () => {
  return (
    <div id="portfolio" className='myprojects'>
        <div className="myprojects-tite">
            <h1>MY PROJECTS</h1>
        </div>
      <div className="myprojects-container">
      {myProjects_data.map((work, index)=>{
        return(
            <div className="projects">
            <img key={index} src={work.image} alt=""/>
            <div className="title">
                <h1>{work.name}</h1>
            </div>
            </div>
        )
      })}
      </div>
    </div>
  );
}

export default MyProjects;
