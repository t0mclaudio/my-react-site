/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';

const Filters = (props) => (
  <section id="filters">
    {
      props.items.map((item) => (
        <label key={item}  htmlFor={item}>
          <input type="checkbox" className="tech" name={item} value={item} />
          {item}
        </label>
      ))
    }
  </section>
);

const mapStateToProps = (props) => ({ items: props.technologies });
export default connect(mapStateToProps)(Filters);
