import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider as AlertProvider } from 'react-alert';
import './i18n.js';
// (Deleted an import as well as reportWebVitals();  Tutorial 2)

// import AlertTemplate from 'react-alert-template-basic';

import AlertTemplate from './customTemplate';

const options = {
  position: 'top center',
  timeout: 1500,
  offset:'30px',
  transition: 'scale'
}

ReactDOM.render(

  <React.StrictMode>

  <Suspense fallback="Loading...">

  <AlertProvider template={AlertTemplate} {...options}>
      <App />
    </AlertProvider>

  </Suspense>

    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
