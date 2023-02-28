import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let root;
window.renderFooter = (containerId, history) => {
  root = ReactDOM.createRoot(document.getElementById(containerId));
  root.render(<App history={history} />);
};

window.unmountFooter = (containerId) => {
  if (document.getElementById(containerId) && root) {
    root.unmount();
  }
};

if (!document.getElementById('Footer-container')) {
  root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
