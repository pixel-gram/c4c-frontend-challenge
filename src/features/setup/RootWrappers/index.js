import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

import { store as baseStore } from '../../../redux';
import { theme } from '../../../theme';


export default function RootWrappers({store, children}) {
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Provider store={store || baseStore}>
            {
              children
            }
          </Provider>
        </BrowserRouter>
      </ThemeProvider>
    </MuiPickersUtilsProvider>
  );
}

