import React from "react";
import { FaCloudDownload } from "react-icons/lib/fa";

import profilePic from "../assets/images/profilepic.jpg";

const About = () => (
  <section id="about">
    <div className="row">
      <div className="three columns">
        <img className="profile-pic" src={profilePic} alt="" />
      </div>
      <div className="nine columns main-col">
        <h2>About Me</h2>
        <p>
          I am a full-stack software developer specialized in web-based application development. Working knowledge and experience
          in modern front-end technologies and back-end frameworks.
          <br />
          These days, my interest includes Distributed Systems, Software Design and Architecture. My long-term career goal is to become a hands-on Software Architect.
          I am also keeping myself relatively busy with Master of Computer Science in Data Science program at the University of Illinois.
        </p>
        <div className="row">
          <div className="columns contact-details">
            <h2>Contact Details</h2>
            <p className="address">
              <span>Hieu Ngo</span>
              <br />
              <span>
                Edmonton, Alberta, Canada.
              </span>
              <br />
              <span>hcngo91@gmail.com</span>
            </p>
          </div>
          <div className="columns download">
            <p>
              <a href="#" className="button">
                <FaCloudDownload /> Download Resume
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
