import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Projects.css';
import ExpansionSection from '../components/ExpansionSection';

import data from '../data';

class Projects extends Component {
  render() {
    const { themeType } = this.props;
    return (
      <div className="projects">
        <ExpansionSection
          themeType={themeType}
          title=''
          values={data.projects}
        />
      </div>

    );
  }
}

Projects.propTypes = {
  themeType: PropTypes.bool.isRequired,
};

export default Projects;