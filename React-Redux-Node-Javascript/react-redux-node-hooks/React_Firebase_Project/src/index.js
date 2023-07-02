import React from 'react';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import { createRoot } from 'react-dom/client';
import store from "./store/index"

const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);  



