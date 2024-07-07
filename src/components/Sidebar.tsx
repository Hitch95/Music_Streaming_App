import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { Box, Typography } from '@mui/material';

import BoxComponent from './BoxComponent';
import SidebarItem from './SidebarItem';

const Sidebar = () => {
  return (
    <Box
      sx={{
        width: '25%',
        height: '100%',
        padding: '0.5rem',
        gap: '0.5rem',
        flexDirection: 'column',
        color: 'white',
        display: 'hidden',
        '@media (min-width: 1024px)': {
          display: 'flex',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          height: '15%',
          backgroundColor: '#121212',
          borderRadius: '0.5rem',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            gap: '0.75rem',
            paddingLeft: '2rem',
          }}
        >
          <HomeOutlinedIcon
            sx={{
              width: '1.5rem',
            }}
          />
          <Typography
            sx={{
              fontWeight: 'bold',
            }}
          >
            Home
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
