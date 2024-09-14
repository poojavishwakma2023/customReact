// inside react-app we can do this 

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

// just like custom-react ,react works behind like that
// 1st-way-babble parse this App function into object like reactElement-check in customReact.js
const App=()=>{
  return<hi>hii,i'm react App</hi>
}

// 2nd - can 
const anotherElement=React.createElement(
  // it take -tag type,attribute,children(text)
  'a',
  {href:"https://facebook.com",target:"_blank"}//if no attribute - still tale empty {}
  ,
  "click to open meta(facebook)"
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    // <App />,
    // App()-bit its not recommaded
    anotherElement

  
);


reportWebVitals();
