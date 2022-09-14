
//React Imports
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

import Main from './components/Main';

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main/>} >
        
        </Route>
      </Routes>
    </Router>
  );
}