import React from 'react'
import Navbar from './Navbar'
import Style from "./education.module.css"

const Education = () => {
  return (
    <>
      <Navbar/>
      <section id={Style.section}>
        <section className={Style.demo1}>
          <h1 className={Style.h1}>GRADUATION</h1><br />
          <aside className={Style.aside}>
            <p><b>College:</b> RISE Krishna Sai Prakasam Group Of Institutions</p>
            <p><b>Stream:</b> CSE</p>
            <p><b>Year of Graduation:</b> 2019-2023</p>
            <p><b>CGPA:</b> 7.04</p>
          </aside>
        </section>
        <section id={Style.demo2}>
          <h1 className={Style.h1}>INTERMEDIATE</h1><br />
          <aside className={Style.aside1}>
            <p><b>College:</b> Narayana Junior College</p>
            <p><b>Stream:</b> MPC</p>
            <p><b>Year of Graduation:</b> 2017-2019</p>
            <p><b>CGPA:</b> 8.3</p>
          </aside>
        </section>
        <section id={Style.demo3}>
          <h1 className={Style.h1}>SSC</h1><br />
          <aside className={Style.aside2}>
            <p><b>College:</b> Narayana E-Techno School</p>
            <p><b>Year of Graduation:</b> 2017</p>
            <p><b>CGPA:</b> 8.3</p>
          </aside>
        </section>
      </section>
    </>
  )
}

export default Education
