import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import IncrementDecrement from './Increment_Decrement/incrementDecrement';
import QuoteGenerator from './quoteGenerator/QuoteGenerator';
import ToDo from './ToDo/ToDo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <IncrementDecrement /> */}
    {/* <QuoteGenerator /> */}
    <ToDo />
  </React.StrictMode>
);
