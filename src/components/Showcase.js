import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Chip, Paper } from '@material-ui/core';
import Typography from './CustomTypography';

class Showcase extends Component {

  render() {
    const { themeType, title, values } = this.props;
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
      }}>
        <Typography variant='title' themeType={themeType}>{title}</Typography>
        <br />
        <Paper style={{
          width: '95vw',
          maxWidth: '500pt',
          backgroundColor: themeType ? '#dddddd' : '#333333',
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
                style={{ fontWeight: 'bold', color: themeType ? 'black' : 'white', backgroundColor: '#447cd6', margin: 5 }}
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