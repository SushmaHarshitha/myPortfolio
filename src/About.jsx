import React from "react";
import Navbar from "./Navbar";
import Style from "./about.module.css"

const About = () => {
  return (
    <>
      <Navbar />
      <h1 id={Style.h1}>About Me</h1>
      <p id={Style.p}>
        Hello! I am <b>Vemula Sushma Harshitha</b>, a recent <b>Computer Science</b> graduate
        from <b>RISE Krishna Sai Prakasam Group Of Institutions</b> with a passion for software development and data
        science. I have hands-on experience with programming languages such as
        Java. I am also proficient in web development using
        HTML, CSS, JavaScript, and React JS and have a strong knowledge in 
        queries of Database in SQL.<br /> <br />

        During my time at institute after graduation, I worked on several
        projects using <b>webtechnology</b> like clouning webpages with responsiveness which makes 
        easier to the user to use the webpage and as well as shopping website using react JS and 
        i posted all my projects in the my github profile. <br />
        Here u can see my projects in my github profile - <u>https://github.com/SushmaHarshitha</u>
        <br /><br />

        I am eager to start my career as a software developer, where I can apply my skills
        and continue learning. My long-term goal is to become a lead developer
        and contribute to innovative projects that make a difference. In my free
        time, I enjoy drawing,creating new crafts and listening to music.<br /><br />
        I am always open to new opportunities and collaborations.
        Feel free to reach out to me via email at <u>vsushmaharshitha02@gmail.com</u>.
      </p>
    </>
  );
};

export default About;
