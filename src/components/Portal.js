import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { createTheme } from '@mui/material/styles';
import Header from './Header';
import Container from './Container';
import Footer from './Footer';

const Portal = React.memo((props) => {
  const { type, theme } = props;
  const portalClassName =
    (type === 'admin' && 'wrapper admin-portal') ||
    (type === 'intellytics' && 'wrapper intellytics-dashboard') ||
    '';
  const muiTheme = createTheme(theme);



  return (
    <ThemeProvider theme={muiTheme}>
      <Box className={portalClassName}>
        <Header />
        <Container />
        <Footer />
      </Box>
    </ThemeProvider>
  );
});

Portal.displayName = 'Portal';

export default Portal;
