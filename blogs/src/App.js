import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Blog from './Components/Blog';
import BlogDetail from './Components/BlogDetail';
import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Blog />,
  },
  {
    path: '/blogdetail/:blogid',
    element: <BlogDetail />,
  },
]);

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
