import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <div>
    <section id="navbar">
      <Link to="/about-me">About Me</Link>
    </section>
    <section id="banner">
      <h2>Tom Claudio</h2>
      <h3>Senior Front End Engineer</h3>
      <p>Tom is a frontend engineer with 10 years experience developing and deploying full stack web applications.</p>
    </section>
    <section id="portfolio">
    </section>
  </div>
);