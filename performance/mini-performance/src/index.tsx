import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {endMeasure, observe, startMeasure} from "./performance";

startMeasure('react render');
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
  () => {
    endMeasure('react render');
  }
);

observe('largest-contentful-paint', (item) => {
  console.log('largest-contentful-paint', item);
});

observe('paint', (item) => {
  console.log('paint', item);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
