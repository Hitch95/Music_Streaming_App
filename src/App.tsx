import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CssBaseline } from '@mui/material';

import Routing from './Routing';
import './global.css';

const router = createBrowserRouter([{ element: <Routing />, path: '*' }]);

const App = () => {
  return (
    <>
      <CssBaseline />
      <RouterProvider router={router}></RouterProvider>
    </>
  );
};

export default App;
