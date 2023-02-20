import * as React from 'react';
import { Box, Divider } from '@mui/material';
import AAABreadcrumbs from './AAABreadcrumbs';
import AAAContents from './AAAContents';
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';

export default function AAAContainer() {
  return (      
    <PerfectScrollbar className='AAA-container-wrap'>
      <Box className='AAA-container'>
        <AAABreadcrumbs/>
        <Divider variant="middle" />
        <AAAContents />
      </Box>
    </PerfectScrollbar>
  );
}