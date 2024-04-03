import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);

root.render(
  <StrictMode>
    {/*<RouterProvider router={router} />*/}
    <h1>Big text telling the website works</h1>
  </StrictMode>,
);
