import React from 'react'
import Navbar from './Navbar'
import Style from "./skills.module.css"

const Skills = () => {
  return (
    <>
      <Navbar/>
      <div className={Style.div}>
        <section className={Style.section}>
          <h1 id={Style.heading}>TECHNICAL SKILLS</h1>
          <h1>FRONTEND</h1><br />
          <ul className={Style.ul}>
            <li>HTML</li>
            <li>CSS</li>
            <li>JS</li>
            <li>REACT JS</li>
          </ul>
          <h1>BACKEND</h1><br />
          <ul className={Style.ul}>
            <li>CORE JAVA</li>
            <li>Spring Boot</li>
          </ul>
          <h1>DATABASE</h1> <br />
          <ul className={Style.ul}>
            <li>SQL</li>
          </ul>
        </section>
        <section className={Style.section}>
        <h1>TOOLS</h1>
          <ul className={Style.ul}>
            <li><b>Code: </b>Visual Studio</li>
            <li><b>Upload: </b>Github</li>
            <li><b>Deploy: </b>Netlify</li>
          </ul>
          <h1>SOFT SKILLS</h1>
          <ul className={Style.ul1}>
            <li>Communication Skills</li>
             <li>Teamwork</li>
             <li>Problem Solving</li>
             <li>Adaptability</li>
             <li>Quick Learner</li>
          </ul>
           
        </section>
      </div> 
    </>
  )
}

export default Skills
