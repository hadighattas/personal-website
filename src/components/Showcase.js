import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Showcase.css';

import { Chip, Paper } from '@material-ui/core';
import Typography from './CustomTypography';

class Showcase extends Component {

  render() {
    const { themeType, title, values } = this.props;
    return (
      <div className="showcase" {...this.props}>
        <Typography variant="title" themeType={themeType}>{title}</Typography>
        <Paper style={{
          width: '100%',
          maxWidth: '500pt',
          backgroundColor: themeType ? '#dddddd' : '#333333',
          marginTop: '10pt'
        }}>
          <div style={{
            padding: 10,
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            {values.map((value, index) => (
              <Chip
                key={index}
                style={{
                  color: 'white',
                  backgroundColor: '#447cd6',
                  margin: 5
                }}
                label={value.label}
              />
            ))}
          </div>
        </Paper>
      </div>
    );
  }
}

Showcase.propTypes = {
  themeType: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  values: PropTypes.object.isRequired
};

export default Showcase;