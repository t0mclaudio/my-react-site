/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';

import Project from './Project';

const Projects = (props) => (
  <section id="projects">
    {
      props.projects.map((proj) => (
        <Project key={proj.name} proj={proj} />
      ))
    }
  </section>
);

const mapStateToProps = (props) => ({ projects: props.projects });
export default connect(mapStateToProps)(Projects);
