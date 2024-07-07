import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './reset.css';
import './global.css';

const root = document.getElementById('root');
const rootContainer = createRoot(root!);

rootContainer.render(
  <StrictMode>
    <App />
  </StrictMode>
);
