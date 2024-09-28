import React from 'react'
// import Portifolio from './Portifolio'
import { useNavigate } from 'react-router-dom'
import Style from './home.module.css'
import Navbar from './Navbar'

const Home = () => {
  let navigate=useNavigate()
  let about=()=>{
    navigate("/about")
  }
  return (
    <>
     <Navbar/>
     <section id={Style.sectionHome}>
        <aside>
          <h1 id={Style.homeH1}>
            Hello,It's Me<br />Sushma Harshitha Vemula <br />And I'm a  FrontEnd Developer</h1>
          <p id={Style.homeP}>
            I am a Fresher with my learnt skills,I am able to <br />create and website design,
          Frontend design and more...</p>
          <img className={Style.img1} src="../public/images/img2.jpg" height="250px" width="250px"
          alt="image" />
        </aside>
        <button onClick={about} className={Style.btn}>More About me...</button>
     </section>

     <section id={Style.sectionHome1}>
     {/* <img id={Style.img1} src="../public/images/img2.jpg" height="200px" width="200px" alt="image" /> */}
      <h1 className={Style.homeH2}>About Me</h1>
      <h1 className={Style.homeH3}>Frontend Developer</h1>
      <p id={Style.p}>
      Hello I am Sushma Harshitha, a passionate and dedicated frontend developer with a <br />
       keen interest in creating dynamic, responsive, and visually appealing web applications. <br />
        I recently graduated with a degree in B.Tech from JNTUK, where I developed a <br />
         strong foundation in web development technologies and best practices.</p>
      <button onClick={about} id={Style.btn}> More About me...</button>
     </section>
     <section id={Style.sectionHome2}>
      <h1 id={Style.homeH3}>CONTACT ME</h1>
      <p className={Style.p}>
        <b>Email:</b> vsushmaharshitha02@gmail.com</p>
      <p className={Style.p}>
        <b>LinkedIn:</b>
        <a href="https://www.linkedin.com/in/v-sushma-harshitha-584079214/?originalSubdomain=in">
        https://www.linkedin.com/in/v-sushma-harshitha-584079214/?originalSubdomain=in</a></p>
      <p className={Style.p}>
        <b>GitHub:</b><a href="https://github.com/SushmaHarshitha">https://github.com/SushmaHarshitha</a></p>
      <p className={Style.p1}>
        I am excited to start my career in frontend development and look forward to contributing 
        to innovative and impactful projects.
        <br /> Feel free to reach out to me for collaboration or any opportunities!</p>
     </section>
    </>
  )
}

export default Home

// position:"absolute",top:"840px",left:"610px",
// position:"absolute",top:"900px",left:"610px",
// position:"absolute",top:"1020px",left:"653px",
// position:"absolute",top:"1020px",left:"653px",

// ,paddingLeft:"600px"

// style={{borderRadius:"50%",marginLeft:"130px",marginTop:"130px"}} 
          // src="../public/images/img2.jpg" height="350px" width="350px"

          // style={{height:"40px",width:"150px",border:"3px solid",borderRadius:"10px",
            // backgroundColor:"white",marginLeft:"300px",marginTop:"30px"}}
            // paddingLeft:"100px",