/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';

const Filters = (props) => (
  <section id="filters">
    <p><b>Filter by technology</b></p>
    {
      props.items.map((item) => (
        <label key={item} htmlFor={item} className="tech">
          <input type="checkbox" name={item} value={item} />
          {item}
        </label>
      ))
    }
  </section>
);

const mapStateToProps = (props) => ({ items: props.technologies });
export default connect(mapStateToProps)(Filters);
