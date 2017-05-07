import React, { Component } from 'react';
import PropTypes from 'prop-types';

class About extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section className="about">
        <h2 className="text-uppercase">About</h2>
        <div>{this.props.aboutData}</div>
      </section>
    );
  }
}

About.propTypes = {
  aboutData: PropTypes.string.isRequired
};

export default About;
