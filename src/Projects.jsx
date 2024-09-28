import React from 'react'
import Navbar from './Navbar'
import Style from "./projects.module.css"
import { useNavigate } from 'react-router-dom'

const Projects = () => {
  let navigate=useNavigate()
  let projectInfo=()=>{
    navigate("/projectInfo")
  }
  return (
    <>
     <Navbar/> 
     <section id={Style.section}>
      <div id={Style.div}>
        <img id={Style.img} src="../public/images/electronics-png.png" alt="" />
        <p id={Style.p}>It is an shopping website,where user can<br />
          buy the products by logging in into the website...</p><br />
        <button id={Style.btn} onClick={projectInfo}>Read more</button>
      </div>
     </section>
     
    </>
  )
}

export default Projects