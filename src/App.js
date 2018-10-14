import React, { Component } from 'react';

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import Main from './views/Main';

class App extends Component {

  constructor(props) {
    super(props);

    var themeType = 'false' !== localStorage.getItem('themeType');

    this.state = this.themeLoader(themeType);
  }

  themeLoader(themeType) {
    return {
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
      themeType
    };
  }

  setTheme(themeType) {
    this.setState(this.themeLoader(themeType));
    localStorage.setItem('themeType', themeType);
  }

  render() {
    return (
      <MuiThemeProvider theme={this.state.theme}>
        <div className="App">
          <Main themeType={this.state.themeType} changeTheme={(themeType) => this.setTheme(themeType)} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
