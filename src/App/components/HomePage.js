import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <div>
    <section id="navbar">
      <Link to="/about-me">About Me</Link>
    </section>
    <section id="portfolio">
      <div className="card">
        <div className="card-img-container">
          <img src="" alt="" />
        </div>
          <div className="container">
            <h4><b>Fresh Studio Website</b></h4>
            <p>Fresh Studio</p>
            <p>Html, CSS, Joomla, Php</p>
          </div>
      </div>
      <div className="card">
        <div className="card-img-container">
          <img src="" alt="" />
        </div>
          <div className="container">
            <h4><b>Fresh Studio Website</b></h4>
            <p>Fresh Studio</p>
            <p>Html, CSS, Joomla, Php</p>
          </div>
      </div>
      <div className="card">
        <div className="card-img-container">
          <img src="" alt="" />
        </div>
          <div className="container">
            <h4><b>Fresh Studio Website</b></h4>
            <p>Fresh Studio</p>
            <p>Html, CSS, Joomla, Php</p>
          </div>
      </div>
    </section>
  </div>
);