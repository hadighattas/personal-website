import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Home.css';

import { Paper, Button } from '@material-ui/core';
import Typography from '../components/CustomTypography';
import GitHubIconButton from '../components/GitHubIconButton';

class Home extends Component {
  render() {
    const { themeType } = this.props;

    return (
      <div className="home">

        <Typography themeType={themeType}>
          About me:
        </Typography>

        <br />
        <Paper style={{
          width: '80vw',
          maxWidth: '500pt',
          backgroundColor: themeType ? '#dddddd' : '#333333',
          padding: 20,
          textAlign: 'center'
        }}>
          <Typography themeType={themeType}>
            Hey, I am a fourth-year Computer and Communications Engineering Student at AUB, ranked the best university in the Arab region.
          </Typography>
          <br />
          <Typography themeType={themeType}>
            I’m passionate about software development, in particular web development, mobile development and operating systems.
          </Typography>
          <br />
          <Typography themeType={themeType}>
            Other interests are tennis, hiking and photography.
          </Typography>
          <br />
          <Typography themeType={themeType}>
            Head over the resume and projects sections to know more about what I have worked on.
          </Typography>
          <br />
          <Typography themeType={themeType}>
            Don't hesitate to contact me if you have any questions.
          </Typography>

          <br />
        </Paper>
        <br />
        <br />
        <Button variant="contained" color="secondary" href="https://github.com/hadighattas" target="_blank">
          <GitHubIconButton themeType={themeType} />
          <Typography themeType={themeType}>Check out my GitHub</Typography>
        </Button>
        <br />
        <br />
        <br />

      </div >
    );
  }
}

Home.propTypes = {
  themeType: PropTypes.bool.isRequired
};

export default Home;
