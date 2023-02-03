import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyles from './styles/global';

import { SignIn } from './Pages/SignIn';
import { SignUp } from './Pages/SignUp';
import { Home } from './Pages/Home';
import { Details } from './Pages/Details';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Details />
    </ThemeProvider>
  </React.StrictMode>,
)
