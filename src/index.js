import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from "./App";
import Popup from "./Popup/Popup";
import PanoramaViewer from "./PanoramaViewer";

function renderReactApp() {
  const rootElement = document.getElementById('react-app');
  if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <Popup/>
        {/*<PanoramaViewer/>*/}
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
