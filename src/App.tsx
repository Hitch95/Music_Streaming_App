import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CssBaseline } from '@mui/material';

import './global.css';
import Sidebar from './components/Sidebar';
import Library from './components/Library';
import Header from './components/Header';

const App = () => {
  return (
    <>
      <Sidebar />
      <Library />
      <Header />
    </>
  );
};

export default App;
