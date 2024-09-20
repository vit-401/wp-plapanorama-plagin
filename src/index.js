import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import SpaceApp from "./SpaceApp";


function renderReactApp() {
  const rootElement = document.getElementById('react-app');
  if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        {/*<Popup {...dataUnit2} id={'unit-2'}/>*/}
        {/*<Popup {...dataUnit16} id={'unit-16'}/>*/}
        {/*<Popup {...dataUnit23} id={'unit-23'}/>*/}
        <SpaceApp/>
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
