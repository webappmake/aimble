import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';
import Home from './pages/Home';
import PinLogin from './pages/PinLogin';
import QrLogin from './pages/QrLogin';
import LoginError from './pages/LoginError';

const theme = createTheme({
  palette: {
    primary: { // = _var.scss/$primary
      main: '#5D5FEF',
      contrastText: '#ffffff',
    },
    secondary: { // = _var.scss/$secondary
      main: '#7879F1',
      contrastText: '#ffffff', 
    },
    secondaryLight: { // = _var.scss/$secondary-light
      main: '#8486ff',
      contrastText: '#ffffff', 
    },
    secondaryDark: { // = _var.scss/$secondary-dark
      main: '#4A45BD',
      contrastText: '#ffffff',
    },
    gray: {
      main: '#E5E6E7',
    },
    error: {
      main: '#ea1917',
    }, 
    info: {
      main: '#0057FF', // = _var.scss/$color-blue
    }
  },  
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box className='emp-renewal'>
        <PerfectScrollbar>
          <Box className='wrapper'>
            <Routes>
              <Route path="/Home" element={<Home />} />
              <Route path="/PinLogin" element={<PinLogin />} />
              <Route path="/QrLogin" element={<QrLogin />} />
              <Route path="/LoginError" element={<LoginError />} />
              <Route path='/*' element={<Navigate replace to='/Home'/>} />
            </Routes>            
            <Typography className='copy' variant="caption" color="text.secondary">
              {'Copyright © ' + new Date().getFullYear() + ' LG Electronics. All rights reserved.'}
            </Typography>              
          </Box>
        </PerfectScrollbar>
      </Box>
    </ThemeProvider>
  );
}

export default App;