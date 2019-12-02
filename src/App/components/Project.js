/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

export default (props) => (
  <div className="project card">
    <div className="card-img-container">
      <img src="" alt="" />
    </div>
    <div className="container">
      <h4><b>{props.proj.name}</b></h4>
      <p>{props.proj.short}</p>
      <p>{props.proj.technologies.join()}</p>
    </div>
  </div>
);
