import React from 'react';
import './index.css';
import App from './App';
import ReactDOM from 'react-dom';
import './styles/App.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <DataProvider>
    <App />
  </DataProvider>, 
);
