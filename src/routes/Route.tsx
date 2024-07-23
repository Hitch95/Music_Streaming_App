import { createBrowserRouter, RouteObject } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home/Home';
import LoginPage from '../pages/Login/Login';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
