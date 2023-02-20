import * as React from 'react';
import AAASidebar from '../components/AAASidebar';
import AAAContainer from '../components/AAAContainer';
import { Box } from '@mui/material';

export default function AAAContainerFluid() {
    return ( 
        <Box component="main" className='AAA-container-fluid'>
            <AAASidebar/>
            <AAAContainer/>
        </Box>
    );
  }
  