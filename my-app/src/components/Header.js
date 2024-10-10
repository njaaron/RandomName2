import React from 'react';

function Header({ data }) {
  return (
    <header>
      <div className="header-container">
        <div className="personal-info">
          <h1>{data.name}</h1>
          <p className="title">{data.title}</p>
        </div>
        <div className="contact-info">
          <p>Email: <a href={`mailto:${data.email}`}>{data.email}</a></p>
          <p>Web: <span>{data.web}</span></p>
          <p>Mobile: {data.mobile}</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
