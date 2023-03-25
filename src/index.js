import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Layout from './components/Layout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Layout>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Layout>
);

reportWebVitals();
