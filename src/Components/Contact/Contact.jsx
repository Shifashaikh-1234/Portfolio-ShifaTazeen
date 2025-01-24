import React from 'react';
import './Contact.css'
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { BsFillTelephoneFill } from 'react-icons/bs';

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "9910014d-a44c-49f5-ad7c-6df8c50c095a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div id="contact" className='contact'>
        <div className="contact-title">
            <h1>GET IN TOUCH</h1>
        </div>
      <div className="contact-section">
        <div className="contact-left">
            <h1>Let's talk</h1>
        <div className="contact-details">
            <div className="contact-detail-each">
             <CiFacebook size={35}/> <p>MirzaShifaTazeen</p>
            </div>
            <div className="contact-detail-each">
              <CiLinkedin size={35}/> <p>MirzaShifa</p> 
            </div>
            <div className="contact-detail-each">
                <FaGithubSquare size={35}/> <p>Shifashaikh-1234</p>
            </div>
            <div className="contact-detail-each">
                <SiGmail size={30}/> <p>shifatazeen.msc@gmail.com</p>
            </div>
            <div className="contact-detail-each">
                <BsFillTelephoneFill size={30}/> <p>+91 7972501504</p>
            </div>
        </div>
        </div>

      <form  onSubmit={onSubmit} className="contact-right">
        <label htmlFor="name">Your Name</label>
        <input id="name" type="text" placeholder='Enter your name' required name='name'/>
        <label htmlFor="email">Your Email</label>
        <input id="email" type="email" placeholder='Enter your email' name='email' required/>
        <label htmlFor="message">Write Your Message Here</label>
        <textarea id="message" name="message" rows="8" placeholder='Enter your message' required></textarea>
        <button className='contact-submit' type='submit'>Submit Now</button>
      </form>
     
      </div>
     
    </div>
  );
}

export default Contact;
