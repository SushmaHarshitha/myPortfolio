import React from "react";
import Style from './projectInfo.module.css'

const ProjectInfo = () => {
  return (
    <>
      <section className={Style.section1}>
      <h1 style={{paddingLeft:"560px",color:"red"}}>PROJECT DETAILS</h1>
      <p style={{paddingLeft:"70px",fontSize:"18px",paddingRight:"70px",paddingBottom:"20px",paddingTop:"15px"}}>
      <b style={{fontSize:"28px"}}>Project Title: E-Commerce Shopping Website</b> <br /><br />
      <b>Role:</b> Lead Developer <br /><br />
      <b>Duration: </b> March 2024 - June 2024 <br /><br />
      <b>Objective: </b> To create a web application that helps users to shop electronics by logging in to
      account in shopping website <br /><br />
      <b>Overview:</b> The E-Commerce Shopping Website is a web
      application designed to shop the products easily for users. The website allows users to shop based upon 
      their categories like product name,cost convinience and view wishlist and cart that visualize
      their selected products. <br /><br />
      <b>Technologies Used: </b> 
      <ul style={{listStyle:"none",marginLeft:"90px",paddingTop:"15px",fontSize:"20px"}}>
        <li><b>Frontend:</b> HTML, CSS, JavaScript, React JS</li>
        <li><b>Tools:</b> GitHub</li>
      </ul> <br />    
      <b> Key Responsibilities: </b>
      <ul style={{marginLeft:"90px",paddingTop:"15px",fontSize:"20px"}}>
        <li>Designed and implemented the frontend using React to
        create a responsive user web application.</li>
        <li>Created responsive web pages using HTML, CSS, and JavaScript.</li>
        <li>Utilized React for building dynamic and interactive user interfaces.</li>
        <li>Implemented state management using Redux.</li>
        <li>Implemented a shopping cart system with add, remove, and update functionalities.</li>
        <li>Designed a secure and user-friendly checkout process.</li>
      </ul> <br />
      <b>Results and Impact:</b> Successfully deployed the application, with positive feedback from
      users highlighting the intuitive design and ease of use. Reduced the time
      users spent on shopping their products by 60% on average. <br /><br />
      <b>Visuals:</b> GitHub Repository <br /><br />
      <b>Reflection:</b> This project enhanced my frontend development skills and taught me the importance of
      user-centered design. It also provided valuable experience in deploying
      and maintaining a web application.<br /><br />
      <b>Shopping Site: </b>
      <a href="https://master--ecommerce-harshitha.netlify.app/">https://master--ecommerce-harshitha.netlify.app/</a>
      </p>
      </section>
    </>
  );
};

export default ProjectInfo;
