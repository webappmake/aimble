import * as React from 'react';
import { Box, Typography } from '@mui/material';

function LoginError() {
  return (		
    <Box className='main error' component="main">
			<Typography variant="h3" className='tit'>
				Not a normal access.
			</Typography>
			<Typography variant="body1" className='desc'>
				Unable to verify the informarion required for login.
				Plaese access the login page through the normal path.
			</Typography>
		</Box>
  );
}
export default LoginError;

