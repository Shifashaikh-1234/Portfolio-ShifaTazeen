import React, { useRef, useState } from 'react';
import { FaBars } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import "./Navbar.css"
import AnchorLink from 'react-anchor-link-smooth-scroll';


const Navbar = () => {

  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = ()=>{
    menuRef.current.style.right = "0";
  }
  const closeMenu = ()=>{
    menuRef.current.style.right = "-350px";
  }

  return (
    <div className="navbar">
      
      <h1 className='main-name'>Shifa Tazeen</h1>
      <FaBars size={28} className='nav-mobile-open' onClick={openMenu}/>
      <ul ref={menuRef} className='nav-menu'>
        <HiX size={28} className='nav-mob-close' onClick={closeMenu}/>
        <li><AnchorLink className='anchor-link' href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=>setMenu("services")}>Services</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#portfolio'><p onClick={()=>setMenu("portfolio")}>Portfolio</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink></li>


      </ul>
      
     <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>GET IN TOUCH</AnchorLink></div>
    
      

    </div>
    
    
  )
}

export default Navbar;


