// src/assets/aboutMe.jsx
import "./aboutMe.css";
import headshot from "./jordanHeadShot.JPG"; 
import { Link } from "react-router-dom";


function AboutMe() {
  return (
    <section className="aboutMeSection">
      {/* Left side: headshot */}
      <div className="headShot">
        <img src={headshot} alt="Headshot of Jordan Wall" />
      </div>

      {/* Right side: purpose, about, accomplishments */}
      <div className="aboutMe">
        <h2>Purpose</h2>

        <p>
          Hello there! My name is Jordan Wall, a senior Information Technology
          student at North Carolina A&amp;T State University from Greensboro, NC. I am passionate
          about coding and creating applications that provide creative and
          meaningful user experiences. I am excited to share my journey and
          projects with you through this portfolio website.
        </p>

        <p>
  Feel free to explore and learn more about me and my work. There is also a page where you can{" "}
  <Link to="/contact" className="contactLink">contact me</Link>{" "}
  if you have any questions or would like to connect. I look forward to hearing from you and hope
  you enjoy exploring my portfolio!
        </p>

        <p>Thank you for visiting my website.</p>

        <h3 className="aboutMeTitle">About Me</h3>

        <p className="here">Here are some of my accomplishments:</p>

        <div className="list">
          <ul>
            <li>
              I was the first student from North Carolina A&amp;T to receive the Vanguard Co-op.
            </li>
            <li>
             I was one of four NC A&amp;T students selected to attend AfroTech 2025 sponsored
            by Vanguard.
            </li>
            <li>I have been on the Chancellor&apos;s List 3 times for academic excellence.</li>
            <li>
              I received the Novartis HBCU Scholarship from Thurgood Marshall College
              Fund. 
            </li>
            <li>Previously Interned at Bank of America as a Software Engineering Intern.</li>
            <li>
              Member of Alpha Phi Alpha Fraternity, Inc. through the Beta Epsilon chapter
            </li>
            <li>Member of the National Society of Black Engineers (NSBE)</li>
          </ul>
        </div>  
        <h3 className="skills">Career Interests & Future Goals</h3>

<div className="careerGoals">
  <p>
    I am passionate about building scalable, user-focused software that drives real-world impact. My experiences in internships and leadership roles have strengthened my interest in software engineering, specifically front-end development that leads to strong and meaningful user experiences.
  </p>

  <p>
    As I continue developing my skills, my long-term goal is to work on engineering teams where I can contribute to impactful products, collaborate with diverse professionals, and continue growing as a problem-solver and leader in the tech industry, while building my own video game and giving back to my community.
  </p>

  <p>
    I am excited about opportunities that allow me to keep learning, create value for users, and inspire others pursuing careers in technology.
  </p>
</div>

        
      </div>
    </section>
  );
}

export default AboutMe;
