import React from 'react';
import { connect } from 'react-redux';

import Project from './Project';


const Projects = (props) => (
  <section id="projects">
    {
      props.projects.map((proj, i) => (
        <Project key={i} />
      ))
    }
  </section>
);

const mapStateToProps = (props) => ({ projects: props.projects });

export default connect(mapStateToProps)(Projects);
