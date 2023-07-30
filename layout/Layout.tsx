import { Box } from '@mui/material';
import { ReactNode } from 'react';
import { Footer, Footerbar, Navbar } from '../components/globals';

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Navbar />
      <Box sx={{ flexGrow: 1 }}>
        {children ? children : 'This is a Layout container. Must have children'}
      </Box>
      <Footer>
        <Footerbar />
      </Footer>
    </Box>
  );
}

export default Layout;
