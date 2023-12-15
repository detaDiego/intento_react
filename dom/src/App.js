
import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routing from './routing/routing';
function App() {

  return (
   <BrowserRouter>
    <Routing/>
   </BrowserRouter>
  );
}

export default App;
