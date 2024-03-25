import { createBrowserRouter } from 'react-router-dom';
import App from './App';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/bar',
    element: <div>foo</div>,
  },
]);
