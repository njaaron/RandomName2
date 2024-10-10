import React from 'react';

function Skills({ skills }) {
  return (
    <section className="skills">
      <h2 className="section-title">Key Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index}>{skill}</div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
