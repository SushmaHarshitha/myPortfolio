import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Style from "./navbar.module.css"
import Contactme from './Contactme'

const Navbar = () => {
    let navigate=useNavigate()
    let contact=()=>{
        navigate("/contact")
    }
  return (
    <>
     <nav id={Style.nav}>
     <NavLink to="/" id={Style.home}>
     <h1 id={Style.h1}>HARSHITHA</h1>
     </NavLink> 
     <ul id={Style.ul}>
        <NavLink className={Style.nav1} to="/skills">
            <li className={Style.li}>Skills</li>
        </NavLink>
        <NavLink className={Style.nav1} to="/certificates">
            <li className={Style.li}>Certificates</li>
        </NavLink>
        <NavLink className={Style.nav1} to="/projects">
            <li className={Style.li}>Projects</li>
        </NavLink>
        <NavLink className={Style.nav1} to="/education">
            <li className={Style.li}>Education</li>
        </NavLink>
        <NavLink className={Style.nav1} to="/about">
            <li className={Style.li}>About</li>
        </NavLink>
     </ul>
     <button onClick={contact} className={Style.btn}>CONTACT ME</button>
     </nav>
    </>
  )
}

export default Navbar
