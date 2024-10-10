import React from 'react';
import './App.css';
import Header from './components/Header';
import PersonalProfile from './components/PersonalProfile';
import WorkExperience from './components/WorkExperience';
import Skills from './components/Skills';
import Education from './components/Education';

function App() {
  const resumeData = {
    name: "Zh Rimel",
    title: "Data Scientist",
    email: "abc@gmail.com",
    web: "abc.github.io/abc",
    mobile: "01234567890",
    personalProfile: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    workExperience: [
      {
        title: "Job Title at Company",
        period: "August 2022 – December 2023",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      {
        title: "Job Title 2 at Company 2",
        period: "August 2020 – December 2021",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      }
    ],
    skills: ["A Key skill", "A Key skill", "A Key skill", "A Key skill", "A Key skill", "A Key skill", "A Key skill", "A Key skill", "A Key skill"],
    education: [
      {
        institution: "New Jersey Institute of Technology",
        degree: "BS in Computer Science",
        period: "2018 - 2022",
        gpa: "3.9"
      },
      {
        institution: "New Jersey Institute of Technology",
        degree: "MS in Data Science",
        period: "2022 - 2023",
        gpa: "4.0"
      }
    ]
  };

  return (
    <div className="container">
      <Header data={resumeData} />
      <hr className="yellow-line" />
      <PersonalProfile profile={resumeData.personalProfile} />
      <hr />
      <WorkExperience experiences={resumeData.workExperience} />
      <hr />
      <Skills skills={resumeData.skills} />
      <hr />
      <Education education={resumeData.education} />
    </div>
  );
}

export default App;
