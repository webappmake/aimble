import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/material';
import AAAHeader from "../components/AAAHeader";
import AAAContainerFluid from "../components/AAAContainerFluid";

const theme = createTheme({
  status: {
    danger: '#D00202',
  },
  // color 공유된 것이 없어서 Figma 기준으로 설정함
  palette: {
    primary: { // = _var.scss/$primary
      main: '#5D5FEF',
      contrastText: '#ffffff',
    },
    secondary: { // = _var.scss/$secondary
      main: '#7879F1',
      contrastText: '#333333',
    },
    secondaryDark: { // = _var.scss/$secondary-dark
      main: '#4A45BD',
      contrastText: '#ffffff',
    },
    accepted: {
      main: '#4d4ddb',
      contrastText: '#ffffff',
    },
    gray: {
      main: '#f1f2f2',
    },
  },  
});

function AAASample() {
  return (
    <ThemeProvider theme={theme}>
      <Box className='AAA-common-layout'>
        <AAAHeader/>
        <AAAContainerFluid/>
      </Box>
    </ThemeProvider>
  );
}
export default AAASample;