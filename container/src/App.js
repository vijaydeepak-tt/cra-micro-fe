import React from 'react';
import { createBrowserHistory } from 'history';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';
import MicroFrontend from './Components/MicroFrontend';
import ErrorBoundary from './Components/ErrorBoundary';

const defaultHistory = createBrowserHistory();

const HOSTS = {
  headerHost: 'http://localhost:3001',
  blogHost: 'http://localhost:3002',
  footerHost: 'http://localhost:3003',
};

function Header({ history }) {
  return (
    <ErrorBoundary>
      <MicroFrontend history={history} host={HOSTS.headerHost} name="Header" />
    </ErrorBoundary>
  );
}

function Footer({ history }) {
  return (
    <ErrorBoundary>
      <MicroFrontend history={history} host={HOSTS.footerHost} name="Footer" />
    </ErrorBoundary>
  );
}

function Blogs({ history }) {
  return (
    <ErrorBoundary>
      <MicroFrontend history={history} host={HOSTS.blogHost} name="Blogs" />
    </ErrorBoundary>
  );
}

function BlogDetail({ history }) {
  return (
    <ErrorBoundary>
      <MicroFrontend history={history} host={HOSTS.blogHost} name="Blogs" />
    </ErrorBoundary>
  );
}

function Home({ history }) {
  console.log(history);
  return (
    <div className="container">
      <Header history={history} />
      <Blogs history={history} />
      <Footer />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home history={defaultHistory} />,
  },
  {
    path: '/blogdetail/:blogid',
    element: <BlogDetail history={defaultHistory} />,
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
