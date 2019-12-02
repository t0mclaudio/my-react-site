import React from 'react';
import { Link } from 'react-router-dom';

import Banner from './Banner';
import Projects from './Projects';

export default () => (
  <div>
    <section id="navbar">
      <Link to="/about-me">About Me</Link>
    </section>
    <Banner />
    <Projects />
  </div>
);
