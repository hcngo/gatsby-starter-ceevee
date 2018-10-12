import React from "react";
import SocialLinks from "./SocialLinks";

const Banner = () => (
  <div className="row banner">
    <div className="banner-text">
      <h1 className="responsive-headline">I'm Jonathan Doe.</h1>
      <h3>
        I'm a <span>full-stack software developer</span>, specialized in
        <span>web-based application development</span> with working knowledge and experience in modern front-end technologies as well as back-end frameworks.
        Let's
        <a className="smoothscroll" href="#about">
          {" "}
          start scrolling
        </a>{" "}
        and learn more
        <a className="smoothscroll" href="#about">
          {" "}
          about me
        </a>.
      </h3>
      <hr />
      <SocialLinks />
    </div>
  </div>
);

export default Banner;
