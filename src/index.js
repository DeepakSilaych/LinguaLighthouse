import React from 'react';
import './index.css';
import App from './App';
import { createRoot } from 'react-dom';

import './i18n';

const root = createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
