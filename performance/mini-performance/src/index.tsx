import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { endMeasure, getFCP, startMeasure } from "./performance";
import { getLCP } from "./performance/perf/getLCP";
import { getAppCache } from "./performance/perf/getAppCache";
import { getDNS } from "./performance/perf/getDNS";
import { getDomReady } from "./performance/perf/getDomReady";
import { getTCP } from "./performance/perf/getTCP";
import { getFetchTime } from "./performance/perf/getFetchTime";
import { getTTFB } from "./performance/perf/getTTFB";
import { getDCL } from "./performance/perf/getDCL";

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

window.addEventListener('load', () => {
  getFCP((metric) => console.log('getFCP', metric));
  getLCP(console.log);
  getAppCache((metric => console.log(`app cache`, metric)));
  getDNS((metric => console.log(`dns`, metric)))
  getDomReady((metric => console.log(`dns`, metric)))
  getTCP((metric => console.log(`dns`, metric)))
  getFetchTime((metric => console.log(`dns`, metric)))
  getTTFB((metric => console.log(`dns`, metric)))
  getDCL((metric => console.log(`dns`, metric)))
}, {once: true})


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
