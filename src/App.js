import React, { Component } from 'react';

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import Main from './components/views/Main';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enableDark: false
    };
    this.theme = createMuiTheme({
      type: 'light',
      palette: {
        primary: { main: '#eeeeee' },
        secondary: { main: '#346CC6' }
      },
      typography: {
        fontFamily: 'Lato'
      }
    });
  }

  enableDarkChnaged() {
    this.setState({
      enableDark: true
    });
  }

  render() {
    return (
      <MuiThemeProvider theme={this.theme}>
        <div className="App">
          <Main changeTheme={() => this.changeTheme()} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
