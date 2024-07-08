import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CssBaseline } from '@mui/material';

import './global.css';
import Sidebar from './components/Sidebar';
import Library from './components/Library';

const App = () => {
  return (
    <>
      <Sidebar />
      <Library />
    </>
  );
};

export default App;
