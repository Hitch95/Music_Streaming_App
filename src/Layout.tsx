import React from 'react';
import Sidebar from './components/Sidebar';
import { Box } from '@mui/material';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Box
      sx={{
        backgroundColor: '#030303',
        colorScheme: 'dark',
      }}
    >
      <Sidebar>{/* Sidebar content here if needed */}</Sidebar>
      <main className="content">{children}</main>
    </Box>
  );
};

export default Layout;
