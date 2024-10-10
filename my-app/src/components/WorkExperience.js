// WorkExperience.js
import React from 'react';

function WorkExperience({ experiences }) {
  return (
    <section className="work-experience">
      <h2 className="section-title">Work Experience</h2>
      <div className="job-list">
        {experiences.map((job, index) => (
          <div className="job" key={index}>
            <div className="job-content">
              <h3>{job.title} <span>({job.period})</span></h3>
              <p>{job.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WorkExperience;
