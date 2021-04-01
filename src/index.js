import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./App.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
     <footer>
       <a href="https://github.com/victoriacoulton/weather-react">Open Source Code</a> by Victoria Coulton
    </footer>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
