import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  redirect,
} from 'react-router-dom';

import './App.css';
import MicroFrontend from './Components/MicroFrontend';
import ErrorBoundary from './Components/ErrorBoundary';

const HOSTS = {
  headerHost: 'http://localhost:3001',
  blogHost: 'http://localhost:3002',
  footerHost: 'http://localhost:3003',
};

function Header() {
  return (
    <ErrorBoundary>
      <MicroFrontend host={HOSTS.headerHost} name="Header" />
    </ErrorBoundary>
  );
}

function Footer() {
  return (
    <ErrorBoundary>
      <MicroFrontend host={HOSTS.footerHost} name="Footer" />
    </ErrorBoundary>
  );
}

function Blogs() {
  return (
    <ErrorBoundary>
      <MicroFrontend host={HOSTS.blogHost} name="Blogs" />
    </ErrorBoundary>
  );
}

function Home() {
  return (
    <div className="container">
      <Header />
      <Blogs />
      <Footer />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/blogs',
    element: (
      <>
        <Header />
        <Blogs />
        <Footer />
      </>
    ),
  },
  {
    path: '/blogdetail/*',
    loader: () => {
      return redirect('/blogs');
    },
  },
  {
    path: '*',
    loader: () => {
      return redirect('/');
    },
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
