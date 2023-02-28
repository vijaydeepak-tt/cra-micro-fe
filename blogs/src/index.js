import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

window.renderBlogs = (containerId, history) => {
  const root = ReactDOM.createRoot(document.getElementById(containerId));
  root.render(<App history={history} />);
};

window.unmountBlogs = (containerId) => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};

if (!document.getElementById('Blogs-container')) {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
