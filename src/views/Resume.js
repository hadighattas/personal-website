import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Resume.css';
import ExpansionSection from '../components/ExpansionSection';

import data from '../data';
import Showcase from '../components/Showcase';

class Resume extends Component {
  render() {
    const { themeType } = this.props;

    return (
      <div className="resume">
        <ExpansionSection
          themeType={themeType}
          title='Education'
          values={data.education}
        />
        <br />

        <ExpansionSection
          themeType={themeType}
          title='Work Experience'
          values={data.work}
        />

        <br />

        <ExpansionSection
          themeType={themeType}
          title='Community'
          values={data.community}
        />

        <br />

        <Showcase
          themeType={themeType}
          title='Skills'
          values={data.skills}
        />

        <br />

        <ExpansionSection
          themeType={themeType}
          title='Languages'
          values={data.languages}
        />

        <br />

        <Showcase
          themeType={themeType}
          title='Personal'
          values={data.personal}
        />

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

      </div >
    );
  }
}

Resume.propTypes = {
  themeType: PropTypes.bool.isRequired
};

export default Resume;
