import React from 'react'
import Style from './certificates.module.css'
import Navbar from './Navbar'

const Certificates = () => {
  return (
    <>
     <Navbar/>
     <section id={Style.sectionCertificate}>
        <ul id={Style.ul}>
            <li>Certification of NPTEL in Introduction to Internet Of Things in the year 2022</li>
            <li>Certification of Jspiders of Course-Java Full Stack in the year 2024</li>
        </ul>   
     </section>
      
    </>
  )
}

export default Certificates
