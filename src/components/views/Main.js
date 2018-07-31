import React, { Component } from 'react';

import { Typography, AppBar, Tabs, Tab } from '@material-ui/core';

import SwipeableViews from 'react-swipeable-views';

import './Main.css';
import Home from './Home';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    return (
      <div
        style={{
          width: '100%',
          display: 'block'
        }}
      >
        <AppBar position="static" style={{ boxShadow: 'none' }}>
          <img className="Img" alt="Profile" src="/images/ProfilePicture.jpg" />

          <Typography
            style={{ textAlign: 'center', fontSize: 40 }}
            variant="title"
          >
            Hadi Ghattas
          </Typography>
        </AppBar>

        <AppBar
          position="sticky"
          color="primary"
          style={{
            boxShadow: '0 10px 10px -10px'
          }}
        >
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="secondary"
            centered
          >
            <Tab style={styles.tab} label="Home" />
            <Tab style={styles.tab} label="Resume" />
            <Tab style={styles.tab} label="Projects" />
            <Tab style={styles.tab} label="Contact" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <Home />
          <Home />
          <Home />
          <Home />
        </SwipeableViews>
      </div>
    );
  }
}

const styles = {
  tab: {
    textTransform: 'capitalize'
  }
};
export default Main;
