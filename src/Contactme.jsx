import React from 'react'
import Navbar from './Navbar'
import Style from "./contactme.module.css"

const Contactme = () => {

  return (
    <>
     <Navbar/>
     <section id={Style.section}>
      <h1 id={Style.h1}>CONTACT ME</h1>

      <p id={Style.p}>
        <b>Email:</b> vsushmaharshitha02@gmail.com</p>

      <p className={Style.p}>
        <b>LinkedIn: </b> 
        <a href="https://www.linkedin.com/in/v-sushma-harshitha-584079214/?originalSubdomain=in">
        https://www.linkedin.com/in/v-sushma-harshitha-584079214/?originalSubdomain=in</a></p>

      <p className={Style.p}>
        <b>GitHub:</b><a href="https://github.com/SushmaHarshitha">https://github.com/SushmaHarshitha</a> </p>

      <p className={Style.p1}>
        I'm excited to start my career in frontend development and look forward to contributing to innovative and impactful projects.
        Feel free to reach out to me for collaboration or any opportunities!</p>
     </section>
    </>
  )
}

export default Contactme
