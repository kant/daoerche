import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// @ts-ignore
import App from './App';
import reportWebVitals from './reportWebVitals';
import { endMeasure, perfReport, startMeasure, WhiteList } from "./performance";

const whiteList = {
  'measure': [
    /render/,
    'react render'
  ]
};

perfReport(console.log, whiteList);

startMeasure('Render', 'react render');
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
  () => {
    endMeasure('Render', 'react render');
  }
);

startMeasure('Render Timer', 'react render');
setTimeout(() => {
  endMeasure('Render Timer', 'react render');
}, 5000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
