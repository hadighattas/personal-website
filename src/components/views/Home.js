import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Typography style={{ fontSize: 25 }}> Home</Typography>
      </div>
    );
  }
}

export default Home;
