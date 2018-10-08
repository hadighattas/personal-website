import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Typography, AppBar, Tabs, Tab, Button } from '@material-ui/core';

import DarkIcon from '@material-ui/icons/Brightness2';
import LightIcon from '@material-ui/icons/Brightness7';

// import SwipeableViews from 'react-swipeable-views';

import './Main.css';
import Resume from './Resume';
import Projects from './Projects';
import Home from './Home';
import Contact from './Contact';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }

  handleChange = (event, value) => {
    this.setState({ value });
    if (window.pageYOffset > 0) {
      window.scrollTo(0, 0);
    }
  };

  // handleChangeIndex = index => {
  //   this.setState({ value: index });
  //   if (window.pageYOffset > 0) {
  //     window.scrollTo(0, 0);
  //   }
  // };

  changeTheme = () => {
    this.props.changeTheme(!this.props.themeType);
  }

  render() {
    const { themeType } = this.props;
    return (
      <div
        style={{
          height: 'inherit',
          display: 'block',
          backgroundColor: themeType ? 'white' : '#111111',
          minHeight: '100vh'
        }}
      >

        <AppBar position="static" style={{ boxShadow: 'none' }}>
          <img className="Img" alt="Profile" src="/images/ProfilePicture.jpg" />

          <Typography
            style={{ textAlign: 'center', fontSize: 40 }}
            variant="title"
            color="inherit"
          >
            Hadi Ghattas
          </Typography>
        </AppBar>

        <AppBar
          position="sticky"
          color="primary"
          style={{
            boxShadow: themeType ? '0 10px 10px -10px' : 'none'
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
        <br />
        {/* <SwipeableViews
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
          animateHeight
        > */}
        {this.state.value === 0 && <Home themeType={themeType} />}
        {this.state.value === 1 && <Resume themeType={themeType} />}
        {this.state.value === 2 && <Projects themeType={themeType} />}
        {this.state.value === 3 && <Contact themeType={themeType} />}

        {/* </SwipeableViews> */}

        <Button color="secondary" onClick={this.changeTheme} variant="fab" style={{ position: 'fixed', bottom: '1%', right: '1%' }}>
          {themeType ? <DarkIcon /> : <LightIcon />}
        </Button>
      </div>
    );
  }
}

Main.propTypes = {
  themeType: PropTypes.bool.isRequired,
  changeTheme: PropTypes.func.isRequired
};

const styles = {
  tab: {
    textTransform: 'capitalize'
  }
};
export default Main;
