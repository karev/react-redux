import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class AboutPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main-content">
        <h1>About</h1>
        <p>About page description</p>
      </div>
    );
  }
}

export default AboutPage;

