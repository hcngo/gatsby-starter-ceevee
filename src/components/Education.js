import React from "react";

const Education = () => (
  <div className="row education">
    <div className="three columns header-col">
      <h1>
        <span>Education</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns">
          <h3>University of Alberta</h3>
          <p className="info">
            Bachelor of Science in Computing Science with Business minor
            <span>&bull;</span>
            <em className="date">December 2014</em>
          </p>

          <p>
            Acquired fundamentals in Computing Science, Accounting and Finance.
          </p>
        </div>
      </div>

      <div className="row item">
        <div className="twelve columns">
          <h3>University of Illinois</h3>
          <p className="info">
            Master of Computer Science in Data Science
            <span>&bull;</span>
            <em className="date">In progress</em>
          </p>

          <p>
            Expanding my knowledge in Data Science.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Education;
