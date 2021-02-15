import React from 'react';
import ReactDOM from 'react-dom';

import './assets/css/index.css'
import './assets/css/section-1.css'
import './assets/css/section-2.css'
import './assets/css/section-3.css'
import './assets/css/section-4.css'
import './assets/css/section-5.css'

import 'purecss/build/base.css'
import 'purecss/build/pure.css'
import 'purecss/build/grids-responsive.css'
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
