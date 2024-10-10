// PersonalProfile.js
import React from 'react';

function PersonalProfile({ profile }) {
  return (
    <section className="profile">
      <h2 className="section-title">Personal Profile</h2>
      <p>{profile}</p>
    </section>
  );
}

export default PersonalProfile;
