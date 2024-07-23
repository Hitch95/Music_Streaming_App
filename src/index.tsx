import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import router from './routes/Route';
import './reset.css';
import './global.css';

const root = document.getElementById('root');
const rootContainer = createRoot(root!);

rootContainer.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
