import React from 'react'
import Navbar from './Navbar'
import Style from "./portifolio.module.css"
import { useNavigate } from 'react-router-dom'

const Portifolio = () => {

  let navigate=useNavigate()
  let about=()=>{
    navigate("/about")
  }
  return (
    <>
     <Navbar/>
     <section style={{height:"632px",backgroundColor:"darkorange"}}>
        <aside>
          <h1 style={{fontSize:"45px",paddingTop:"130px",color:"black"}}>
            Hello,It's Me<br />Sushma Harshitha Vemula <br />And I'm a  FrontEnd Developer</h1>
          <p style={{fontSize:"22px",paddingTop:"50px",paddingLeft:"130px"}}>
            I am a Fresher with my learnt skills,I am able to <br />create and website design,
          Frontend design and more...</p>
          <img className={Style.img1} style={{position:"absolute",top:"215px",left:"930px",borderRadius:"50%"}} 
          src="../public/images/img2.jpg" height="350px" width="350px" alt="image" />
          
        </aside>
        <button onClick={about} className={Style.btn} style={{height:"40px",width:"150px",border:"3px solid",borderRadius:"10px",
          backgroundColor:"white",marginLeft:"300px",marginTop:"30px"}}>More About me...</button>
     </section> 
    </>
  )
}

export default Portifolio
