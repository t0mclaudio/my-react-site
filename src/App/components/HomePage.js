import React from 'react';
import { Link } from 'react-router-dom';

import Banner from './Banner';
import Portfolio from './Portfolio';

export default () => (
  <div>
    <section id="navbar">
      <Link to="/about-me">About Me</Link>
    </section>
    <Banner />
    <Portfolio />
  </div>
);