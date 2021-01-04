import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import { ClientProvider } from './utils/auth/ClientProvider';
import { store } from './store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ClientProvider>
        <Router>
          <App />
        </Router>
      </ClientProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
