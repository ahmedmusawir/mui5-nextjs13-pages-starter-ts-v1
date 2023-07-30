import { Box, Container } from '@mui/material';
import { ReactNode } from 'react';
import { purple, red } from '@mui/material/colors';

interface Props {
  children: ReactNode;
}

function Footer({ children }: Props) {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'info.dark',
        color: 'white',
        width: '100%',
      }}
    >
      {children ? children : 'This is a Footer container. Must have children'}
    </Box>
  );
}

export default Footer;
