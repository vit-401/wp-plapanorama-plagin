import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Popup from "./Popup/Popup";
import {dataUnit2} from "./data/data_unit_2";
import {dataUnit16} from "./data/data_unit_16";
import {dataUnit23} from "./data/data_unit_23";
import PanoramaViewer from "./RefactoredPanoramaViewer";


function renderReactApp() {
  const rootElement = document.getElementById('react-app');
  if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <Popup {...dataUnit2} id={'unit-2'}/>
        <Popup {...dataUnit16} id={'unit-16'}/>
        <Popup {...dataUnit23} id={'unit-23'}/>
      </React.StrictMode>
    );
  }
}

// Ensure the DOM is fully loaded before running the React script
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderReactApp);
} else {
  renderReactApp();
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
