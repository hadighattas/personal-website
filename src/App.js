import React, { Component } from 'react';

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import { instanceOf } from 'prop-types';

import { withCookies, Cookies } from 'react-cookie';

import Main from './views/Main';

import './App.css';

class App extends Component {

  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

  constructor(props) {
    super(props);

    var themeType = 'false' !== this.props.cookies.get('themeType');

    this.state = {
      theme: createMuiTheme({
        type: themeType ? 'light' : 'dark',
        palette: {
          primary: {
            main: themeType ? '#eeeeee' : '#111111',
            contrastText: themeType ? '#000000' : '#eeeeee'
          },
          secondary: {
            main: '#346CC6'
          },
        },
        typography: {
          fontFamily: 'Lato'
        }
      }),
      themeType: themeType
    };
  }

  setTheme(themeType) {
    this.setState({
      theme: createMuiTheme({
        type: themeType ? 'light' : 'dark',
        palette: {
          primary: {
            main: themeType ? '#eeeeee' : '#111111'
          },
          secondary: {
            main: '#346CC6'
          },
        },
        typography: {
          fontFamily: 'Lato'
        }
      }),
      themeType
    });

    this.props.cookies.set('themeType', themeType, { path: '/' });
  }

  render() {
    return (
      <MuiThemeProvider theme={this.state.theme}>
        <div className="App" style={{ height: '100%' }}>
          <Main themeType={this.state.themeType} changeTheme={(themeType) => this.setTheme(themeType)} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withCookies(App);
