import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import React from 'react';

const Footerbar = () => {
  const today = new Date();
  const currentYear = today.getFullYear();
  return (
    <Box p={2}>
      <Typography textAlign={'center'}>
        &copy; Copyright {currentYear}
      </Typography>
    </Box>
  );
};

export default Footerbar;
