import React from 'react';
import './Services.css'

const service_data=[
    {
        id: "01",
        name: "Web Design",
        description: "Web Design is the field of Designing Website interfaces.It deals with the looks part of the website rather than the coding part."
    },
    {
        id: "02",
        name: "Data Analytics",
        description: "Data analytics, also known as data analysis, is a crucial component of modern business operations. It involves examining datasets to uncover useful information."
    },
    {
        id: "03",
        name: "AI & ML",
        description: "AI & ML refers to the broader concept of creating machines that can simulate human intelligence and perform tasks that typically require human cognition."
    },

]

const Services = () => {
  return (
    <div id="services" className='services'>
        <div className="services-title">
            <h1>MY EXPERTISE</h1>

        </div>
      <div className="service-container">
      {service_data.map((service,index)=>{
       return(
        <div key={index} className="services-format">
        <h3>{service.id}</h3>
        <h2>{service.name}</h2>
        <p>{service.description}</p>
        
        </div>
       )
      })}
      </div>
    </div>
  );
}

export default Services;
