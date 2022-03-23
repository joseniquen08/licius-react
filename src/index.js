import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import AuthProvider from './redux/providers/authProvider';
// import RootProvider from './redux/providers/rootProvider';
import './styles/index.css';

ReactDOM.render(
  <React.StrictMode>
  {/* <RootProvider> */}
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  {/* </RootProvider> */}
  </React.StrictMode>,
  document.getElementById('root')
);