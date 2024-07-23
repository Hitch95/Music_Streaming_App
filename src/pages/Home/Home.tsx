import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import { CssBaseline } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

import '../../global.css';
import Sidebar from '../../components/Sidebar';
import Library from '../../components/Library';
import Header from '../../components/Header';
import Main from '../../components/Main';

const Home = () => {
  return (
    <Grid
      container
      sx={{
        display: 'flex',
        flexDirection: 'row', // Arrange items horizontally
        minWidth: '482px',
        height: '100vh', // Ensure the container takes full height of the viewport
      }}
    >
      <Grid
        container
        direction="column"
        sx={{
          width: '294px',
          minWidth: '294px',
          margin: '0.5rem',
          height: '100%',
        }}
      >
        <Sidebar />
        <Library />
      </Grid>
      <Grid container direction="column" sx={{ flex: 1, minWidth: '482px' }}>
        <Grid sx={{ flex: '0 0 auto' }}>
          <Header />
        </Grid>
        <Grid sx={{ flex: 1, overflow: 'auto' }}>
          <Main />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
