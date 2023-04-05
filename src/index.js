// import React from 'react'
// import {StrictMode} from 'react'
// import App from './App'
// import './index.css'
// import { createRoot } from 'react-dom/client';
// import ReactDOM from 'react-dom'

// ReactDOM.render(<App/>, document.querySelector("#root"))

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "../src/pages/Home/App.jsx";
import AppSearch from "../src/pages/Search/AppSearch.jsx";
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <React.StrictMode>
      <App />
      <AppSearch />
    </React.StrictMode>
    {/* <script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></script>

  <script
    src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
    crossorigin></script>
  
  <script
    src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
    crossorigin></script>
  
  <script>var Alert = ReactBootstrap.Alert;</script> */}
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
