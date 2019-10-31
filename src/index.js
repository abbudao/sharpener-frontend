import React from 'react'
import ReactDOM from 'react-dom'
import Drawer from 'Drawer';
import { Provider } from 'react-redux'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { SnackbarProvider } from 'notistack';

import App from 'App';
import Notifier from 'Notifier';

import configureStore from 'store';
const store = configureStore()

const mainBlue = "rgba(15, 154, 229, 1)";
const secondaryBlue = "rgba(55, 171, 234, 1)";

const theme = createMuiTheme({
  palette: {
    background: {
      default: '#e9eaeb',
    },
    primary: {
      main: mainBlue ,
      light: secondaryBlue,
    },
  },
  status: {
    danger: 'orange',
  },
});


ReactDOM.render(
  <Provider store={store}>
    <SnackbarProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <React.Fragment>
          <Drawer/>
          <Notifier />
          <App />
        </React.Fragment>
        </ThemeProvider>
      </SnackbarProvider>
  </Provider>,
  document.getElementById('root'),
);
