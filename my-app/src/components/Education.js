import React from 'react';

function Education({ education }) {
  return (
    <section className="education">
      <h2 className="section-title">Education</h2>
      <div className="education-list">
        {education.map((degree, index) => (
          <div className="degree" key={index}>
            <div className="degree-content">
              <h3>{degree.institution}</h3>
              <p>{degree.degree}</p>
              <p>{degree.period}</p>
              <p>GPA: {degree.gpa}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
