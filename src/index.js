

import React from 'react';
// This simply makes a feature exposed by the library a variable inside of this index.js file.
import ReactDOM from 'react-dom';

// That's not something which would work in regular JavaScript
// It does work, but only because this is transformed before it's delivered to the browser
// In the end, it tells this npm start process that we simply want to include this index CSS file
// into our overall application. That the CSS code in there should be considered and should be injected into this page
import './index.css';

// App in the end is a component
import App from './App';
import reportWebVitals from './reportWebVitals';

// App in the end is a component which being the end to render inside the place of that element with an id of root.
ReactDOM.render(
  // JSX: Stands for JavaScript XML because HTML in the end is XML
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
