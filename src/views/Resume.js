import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Resume.css';

import ExpansionSection from '../components/ExpansionSection';

import data from '../data';
import Showcase from '../components/Showcase';
import { Paper } from '@material-ui/core';
import Typography from '../components/CustomTypography';

class Resume extends Component {
  render() {
    const { themeType } = this.props;

    return (
      <div className="resume">
        <ExpansionSection
          themeType={themeType}
          title="Education"
          values={data.education}
        />

        <ExpansionSection
          themeType={themeType}
          title="Work Experience"
          values={data.work}
          style={{ animationDelay: '0.1s' }}
        />

        <ExpansionSection
          themeType={themeType}
          title="Community"
          values={data.community}
          style={{ animationDelay: '0.2s' }}
        />

        <Showcase
          themeType={themeType}
          title="Skills"
          values={data.skills}
          style={{ animationDelay: '0.3s' }}
        />

        <Typography variant='title' themeType={themeType}>Languages</Typography>

        <div className="languages"
          style={{ animationDelay: '0.4s' }}
        >
          {data.languages.map((value, index) => (
            <Paper
              key={index}
              style={{
                borderBottomLeftRadius: (index === 0) || (index !== data.languages.length - 1) ? '0pt' : '3pt',
                borderBottomRightRadius: (index === 0) || (index !== data.languages.length - 1) ? '0pt' : '3pt',
                borderTopLeftRadius: (index !== 0) || (index === data.languages.length - 1) ? '0pt' : '3pt',
                borderTopRightRadius: (index !== 0) || (index === data.languages.length - 1) ? '0pt' : '3pt',
                width: '100%',
                backgroundColor: themeType ? '#dddddd' : '#333333',
                paddingTop: 15,
                paddingBottom: 15
              }}>
              <div className="language">
                <Typography style={{ fontWeight: 'bold' }} themeType={themeType}>
                  {value.heading}
                </Typography>
                <Typography themeType={themeType}>
                  {value.content}
                </Typography>
              </div>

            </Paper>
          ))}

        </div>


        <Showcase
          themeType={themeType}
          title="Personal"
          values={data.personal}
          style={{ animationDelay: '0.5s' }}
        />

      </div >
    );
  }
}

Resume.propTypes = {
  themeType: PropTypes.bool.isRequired
};

export default Resume;
